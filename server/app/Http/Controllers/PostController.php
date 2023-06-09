<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Lấy danh sách bài viết và trả về view hiển thị danh sách
        $posts = Post::all();
        return view('posts.index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Hiển thị view để tạo bài viết mới
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         // Lưu bài viết mới vào cơ sở dữ liệu
        $post = new Post();
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        // Chuyển hướng về trang hiển thị danh sách bài viết
        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Lấy thông tin của bài viết theo ID và trả về view hiển thị chi tiết bài viết
        $post = Post::find($id);
        return view('posts.show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Lấy thông tin của bài viết theo ID và hiển thị view để chỉnh sửa bài viết
        $post = Post::find($id);
        return view('posts.edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Lấy thông tin của bài viết theo ID và cập nhật thông tin từ request vào cơ sở dữ liệu
        $post = Post::find($id);
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        // Chuyển hướng về trang hiển thị chi tiết bài viết
        return redirect()->route('posts.show', ['id' => $id]);
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Xóa bài viết theo ID từ cơ sở dữ liệu
        $post = Post::find($id);
        $post->delete();

        // Chuyển hướng về trang hiển thị danh sách bài viết
        return redirect()->route('posts.index');
    }
}
