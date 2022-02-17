<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Alias;
use App\Models\Image;
use App\Models\Status;

class Person extends Model
{
    use HasFactory;

    protected $hidden = [
        'born',
        'died',
        'features',
        'created_at',
        'updated_at'
    ];

    public function status()
    {
        // there is a status_id column on this table
        return $this->belongsTo(Status::class);
    }

    public function image()
    {
        // there is a image_id column on this table
        return $this->belongsTo(Image::class);
    }

    public function aliases()
    {
        // there is a person_id column on aliases table
        return $this->hasMany(Alias::class);
    }
}
