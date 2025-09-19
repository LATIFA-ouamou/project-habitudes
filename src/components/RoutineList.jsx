//  import React from 'react'
//  import RoutineCard from './RoutineCard'

//  function RoutineList({ routines }) {
//    return (<>
//      <div className="space-y-3">
//       {routines.map((routine) => (
//         <RoutineCard key={routine.id} routine={routine} />
//       ))}
//     </div>
//      </>
//    )
//  }

//  export default RoutineList




 
//  src/components/RoutineList.jsx
//  import React from "react";
//  import RoutineCard from "./RoutineCard";
//  function RoutineList({ routines }) {
//    return (
//      <div>
//        {routines.map((routine) => (
//          <RoutineCard key={routine.id} routine={routine} />
//        ))}
//      </div>
//    );
//  }

//  export default RoutineList;






// bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb

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
