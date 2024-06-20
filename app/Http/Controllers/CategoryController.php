<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories=Category::all();
        return response()->json(['status'=>200,"categories"=>$categories]);
    }

    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            "date"=>'required',
            "description"=>"required"
        ]);

        Category::create([
            "name"=>request("name"),
            "date"=>Carbon::parse(request("date"))->format("Y-m-d"),
            "description"=>request("description")
        ]);

        return response()->json(['status'=>200,"message"=>"Category Added Successfully"]);
    }
}
