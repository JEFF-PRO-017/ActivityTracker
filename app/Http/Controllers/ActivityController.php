<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityController extends Controller
{
    //
    public function store(Request $request)
{
    dd($request);
    $activity = Activity::create([
        'application_name' => $request->application_name,
        'start_time' => $request->start_time,
    ]);
    return response()->json($activity, 201);
}

public function update(Request $request, $id)
{
    dd($request);
    $activity = Activity::findOrFail($id);
    $activity->update(['end_time' => $request->end_time]);
    return response()->json($activity);
}

public function index()
{
    return Inertia::render('Activities/Index', [
        'activities' => Activity::all(),
    ]);
}

}
