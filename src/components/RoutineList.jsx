
// src/components/RoutineList.jsx

import React from "react";
import RoutineCard from "./RoutineCard";

function RoutineList({ routines, userId, onDelete, onToggle }) {
  return (
    <div className="space-y-9">
      {routines.length === 0 ? (
        <p className="text-black-500">Aucune routine ajoutée.</p>
      ) : (
        routines.map((r) => (
          <RoutineCard
            key={r.id}
            routine={r}
            userId={userId}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}

export default RoutineList;
