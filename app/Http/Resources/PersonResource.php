<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'name' => $this->name,
            'occupation' => $this->occupation,
            'status_text' => $this->status_text,
            'image_path' => $this->image->path,
            'born' => $this->born
        ];
    }
}
