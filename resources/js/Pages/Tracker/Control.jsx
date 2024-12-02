import React from "react";

const Control = () => {
  const startTracker = () => {
    fetch("/tracker/start")
      .then((res) => res.json())
      .then((data) => alert(data.message || "Erreur"))
      .catch(() => alert("Erreur lors du démarrage du tracker."));
  };

  const stopTracker = () => {
    fetch("/tracker/stop")
      .then((res) => res.json())
      .then((data) => alert(data.message || "Erreur"))
      .catch(() => alert("Erreur lors de l'arrêt du tracker."));
  };

  return (
    <div>
      <h1>Gestion du Suivi d'Activité</h1>
      <button className=" btn btn-primary" onClick={startTracker}>Démarrer le Tracker</button>
      <button onClick={stopTracker} style={{ marginLeft: "10px" }}>
        Arrêter le Tracker
      </button>
    </div>
  );
};

export default Control;
