<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Import du trait HasFactory

class Scategorie extends Model
{
use HasFactory;
protected $fillable = [
'nomscategorie','imagescategorie','categorieID'
];
public function categorie()
{
return $this->belongsTo(Categorie::class,"categorieID");
}
public function articles()
{
return $this->hasMany(Article::class,"scategorieID");
}
}
