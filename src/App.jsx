//  import AddRoutineForm from "./components/AddRoutineForm";
//  import UserCard from "./components/UserCard";
//  import './App.css';
//  import React, { useState } from "react";



//  function App() {

//    const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "Latifa",
//       routines: [
//         { id: 101, name: "Boire de l’eau", done: false },
//         { id: 102, name: "Marcher 5000 pas", done: true }
//       ]
//     },
//     {
//       id: 2,
//       image:"habitudes/src/components/Images/02.png",
//       name: "Chaima",
//       routines: [
//         { id: 103, name: "Lire un livre", done: false }
//       ]
//     },
//     {
//       id: 3,

//       name: "Khadija",
//       routines: []
//     }
//   ]);
//    return (<>
//      <div className="App">
     
     
//       <h2 className="text-3xl font-bold text-center text-bliu my-6">
//    DailyHabits Tracker
//  </h2>

//        <AddRoutineForm></AddRoutineForm>
//    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10 bg-white min-h-screen w-100">
   
//      {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}

 
//    {/* <UserCard />
//    <UserCard /> */}



   
//  </div>



      
//      </div>
//    </>
//    );
//  }

//  export default App;













































// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// src/App.jsx
// src/App.jsx
// src/App.jsx
import React, { useState, useEffect } from "react";
import AddRoutineForm from "./components/AddRoutineForm";
import UserCard from "./components/UserCard";

function App() {
  const employees = [
    {
      id: 1,
      name: "Latifa",
      image: "/Images/avatar-1.jpg",
      routines: [
        { id: 1, name: "Boire de l’eau", done: false },
        { id: 2, name: "Marcher 5000 pas", done: true },
        { id: 3, name: "Lire 10 pages", done: false },
      ],
    },
    {
      id: 2,
      name: "Chaima",
      image: "/Images/avatar-5.jpg",
      routines: [{ id: 3, name: "Lire 10 pages", done: false }],
    },
    {
      id: 3,
      name: "Khadija",
      image: "/Images/user-2.jpg",
      routines: [],
    },
  ];

  // ✅ Charger depuis localStorage OU utiliser les données par défaut
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : employees;
  });

  // ✅ Sauvegarder dans localStorage dès que users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Ajouter une routine
  function addRoutine(userId, title) {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === Number(userId)
          ? {
              ...u,
              routines: [
                ...u.routines,
                { id: Date.now(), name: title, done: false },
              ],
            }
          : u
      )
    );
  }

  // Supprimer une routine
  function deleteRoutine(userId, routineId) {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? { ...u, routines: u.routines.filter((r) => r.id !== routineId) }
          : u
      )
    );
  }

  // Marquer comme fait / pas fait
  function toggleRoutine(userId, routineId) {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? {
              ...u,
              routines: u.routines.map((r) =>
                r.id === routineId ? { ...r, done: !r.done } : r
              ),
            }
          : u
      )
    );
  }

  return (
    <div className="App">
      <h2 className="text-3xl font-bold text-center text-bliu my-6">
        DailyHabits Tracker
      </h2>

      {/* Formulaire d’ajout */}
      <AddRoutineForm users={users} onAdd={addRoutine} />

      {/* Liste des utilisateurs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10 bg-white">
        {users.map((u) => (
          <UserCard
            key={u.id}
            user={u}
            onDelete={deleteRoutine}
            onToggle={toggleRoutine}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
