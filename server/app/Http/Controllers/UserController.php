<?php

namespace App\Http\Controllers;

use App\Mail\ForgotPassword;
use App\Mail\RegisterEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return response()->json(
            $users
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => "required|string",
            "avatar" => "nullable|string",
            'email' => "required|string",
            'password' => "required|string",
            "number_phone" => "required|numeric",
            "address" => "required|string"
        ]);
        $user = User::create(
            [
                'username' => $request->username,
                "avatar" => "user.png",
                'email' => $request->email,
                'password' => $request->password,
                "number_phone" => $request->number_phone,
                "address" => $request->address
            ]
        );
        Mail::to($request->email)->send(new RegisterEmail($request->username));
        return response()->json(
            $user
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($email)
    {
        $user = User::where("email", $email)->first();
        return response()->json(
            $user
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $email)
    {
        $user = User::where("email", $email)->first();
        if ($request->hasFile("avatar")) {
            $file = $request->avatar;
            $fileName = $file->getClientOriginalName();
            $newFileName = Str::slug(pathinfo($fileName, PATHINFO_FILENAME));
            $file->move(public_path("image"), $newFileName);
            $request->merge(["avatar" => $newFileName]);
            $user->update($request->all());
        }
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->number_phone = $request->number_phone;
        $user->address = $request->address;
        $user->save();

        return response()->json(
            $user
        );
    }

    public function recoverPass(Request $request, $email){

        $request->validate([
            "password"=>"required|string|min:8"
        ]);
           $user= User::where("email", $email)->first();
            if (!$user) {
                return response()->json(
                    "Tài khoản không tồn tại"
                );
            }
            $user->password=bcrypt($request->password);
            $user->save();
            return response()->json(
                ["Thành công"]
            );
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }



    public function confirmEmail(Request $request){
        $confirmemail=$request->email;
        $user=User::where("email",$confirmemail)->first();
        if ($user) {
            $verificationCode=  Str::random(6);
            Mail::to($confirmemail)->send(new ForgotPassword($verificationCode));
        }
        return response()->json(
            $verificationCode
        );
    }
}