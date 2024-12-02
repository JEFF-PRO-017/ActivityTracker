<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScriptController extends Controller
{
    public function startTracker()
    {
        $scriptPath = storage_path('app/scripts/activity_tracker.py');

        // Vérifiez si le script existe
        if (!file_exists($scriptPath)) {
            return response()->json(['error' => 'Le script Python est introuvable.'], 404);
        }

        // Exécuter le script Python en arrière-plan
        $command = "python3 $scriptPath > /dev/null 2>&1 &"; // Pour Linux/MacOS
        // Pour Windows, utilisez "start /B python $scriptPath"

        $output = null;
        $returnVar = null;

        exec($command, $output, $returnVar);

        if ($returnVar !== 0) {
            return response()->json(['error' => 'Erreur lors de l\'exécution du script Python.'], 500);
        }

        return response()->json(['message' => 'Suivi d\'activité démarré avec succès.']);
    }

    public function stopTracker()
    {
        // Identifier et tuer le processus Python si nécessaire
        $command = "pkill -f activity_tracker.py"; // Pour Linux/MacOS
        // Pour Windows, utilisez "taskkill /IM python.exe /F" si applicable

        exec($command, $output, $returnVar);

        if ($returnVar !== 0) {
            return response()->json(['error' => 'Impossible d\'arrêter le suivi d\'activité.'], 500);
        }

        return response()->json(['message' => 'Suivi d\'activité arrêté avec succès.']);
    }
}
