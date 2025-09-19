//  import UserCard from "./UserCard";




//  function UserList() {
//    return (
//      <div>
//       <select name="user">
//        <option>Latifa</option>
//         <option>chaima</option>
//           <option>khadija</option>
//       </select>
//      </div>
//    );
//  }

//  export default UserList;
































































//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ

import React, { useState } from "react";
import AddRoutineForm from "./components/AddRoutineForm";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  // ✅ Exemple de données dynamiques
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Latifa",
      routines: [
        { id: 1, name: "Boire de l’eau", done: false },
        { id: 2, name: "Marcher 5000 pas", done: true },
      ],
    },
    {
      id: 2,
      name: "Chaima",
      routines: [{ id: 3, name: "Lire 10 pages", done: false }],
    },
  ]);

  return (
    <div className="App">
      <h2 className="text-3xl font-bold text-center text-blue-600 my-6">
        DailyHabits Tracker
      </h2>

      {/* Formulaire d’ajout */}
      <AddRoutineForm />

      {/* Liste des utilisateurs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10 bg-white min-h-screen w-100">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
