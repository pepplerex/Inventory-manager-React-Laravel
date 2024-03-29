<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //

    public function login(Request $req)
    {
        $user = User::where('email', $req->email)->first();

        if (!$user && Hash::check($req->password, $user->password)) {
            return response()->json(['message' => "Incorrect username or password"], 401);
        }

        $token = $user->createToken('token-name')->plainTextToken;
        return response()->json(['token' => $token]);
    }
}
