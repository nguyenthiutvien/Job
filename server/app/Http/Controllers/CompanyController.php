<?php

namespace App\Http\Controllers;

use App\Mail\RegisterEmail;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $company=Company::all();
        return response()->json(
            $company
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
            'company_name'=>"required|string",
            'logo'=>"nullable|string",
            'email'=>"required|string",
            'password'=>"required|string",
            'address'=>"required|string",
            'number_phone'=>"required|numeric"
        ]);

        $company=Company::create([
            'company_name'=>$request->company_name,
            'logo'=>"company.png",
            'email'=>$request->email,
            'password'=>$request->password,
            'address'=>$request->address,
            'number_phone'=>$request->number_phone
        ]);

        // Mail::to($request->email)->send(new RegisterEmail($request->company_name));
        return response()->json(
            $company
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
