<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Import du trait HasFactory


class Categorie extends Model
{ 
    use HasFactory;
    protected $fillable = [
    'nomcategorie','imagecategorie'
    ];
    public function scategories()
{
return $this->hasMany(Scategorie::class ,"categorieID");
}
    
}
