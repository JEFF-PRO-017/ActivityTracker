<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        // Excluez ici les routes ou chemins de l'application pour lesquelles
        // vous ne voulez pas appliquer la vérification CSRF.
        'api/*', // Exclut toutes les routes commençant par 'api/'
    ];
}
