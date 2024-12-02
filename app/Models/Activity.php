<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    /**
     * @typescript
     */
    public int $id;

    /**
     * @typescript
     */
    public string $application_name;

    /**
     * @typescript
     */
    public string $start_time;

    /**
     * @typescript
     */
    public ?string $end_time;
}
