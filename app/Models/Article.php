<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Article extends Model
{
    use HasFactory;
       protected $fillable = [
        'designation','marque','reference','qtestock','prix',
        'imageart','scategorieID'
        ];
        public function scategorie()
        {
        return $this->belongsTo(Scategorie::class,"scategorieID");
        }
}
