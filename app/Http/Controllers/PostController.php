<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PostController extends Controller
{
    function list () {
    return Inertia::render('Posts', [
            'posts' => Post::with('user')->paginate(),
        ]);
    }
    
    function show (Post $post) {
        return Inertia::render('Post', [
            'post' => $post,
        ]);    
    }
}
