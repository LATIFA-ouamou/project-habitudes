

// src/components/RoutineCard.jsx 
import React from "react";

function RoutineCard({ routine, userId, onDelete, onToggle }) {
  return (
    <div className="bg-white rounded-full shadow p-3 flex justify-between items-center mb-3">
      {/* Texte de la routine */}
      <span
        className={`text-base font-medium ${
          routine.done ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {routine.name}
      </span>

      {/* Boutons */}
      <div className="flex gap-4">
        <button
          onClick={() => onToggle(userId, routine.id)}
          className={`px-4 py-1.5 rounded-full font-medium text-white text-sm transition-colors ${
            routine.done
              ? "bg-orange hover:bg-orange"
              : "bg-font hover:bg-font"
          }`}
        >
          {routine.done ? "Annuler" : "Faite"}
        </button>

        <button
          onClick={() => onDelete(userId, routine.id)}
          className="bg-rouge hover:bg-rouge text-white px-4 py-1.5 rounded-full font-medium text-sm transition-colors"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default RoutineCard;
