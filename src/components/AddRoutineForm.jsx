// import React from 'react'
// import {Plus} from "lucide-react"
// import UserList from "./UserList";
// function AddRoutineForm() {
//   return (<>

//      <form >
//   <div className="flex items-center justify-center gap-2 mb-8 max-w-100xl mx-auto bg-light shadow-xl p-3 rounded-lg focus-within:ring-2 focus-within:ring-purple-500">

//     <input
//       type="text"
//       placeholder="Nouvelle routine..."
//       className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 w-6xl"
//     />

//     <UserList />

//     <button
//       type="submit"
//       className="bg-purple-500 hover:bg-purple-700 text-white rounded-md p-3 px-5 ml-3 flex items-center gap-1 max-w-30xl"
//     >
//       Ajouter
//       <Plus size={18} />
//     </button>

//   </div>
// </form>
//     </>
    
//   )
// }

// export default AddRoutineForm






































//  src/components/AddRoutineForm.jsx   HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
// import React, { useEffect, useState } from "react";

// export default function AddRoutineForm({ users = [], onAdd }) {
//   const [title, setTitle] = useState("");
//   const [selectedUser, setSelectedUser] = useState("");

//   useEffect(() => {
//     if (users.length && !selectedUser) {
//       setSelectedUser(users[0].id);
//     }
//   }, [users, selectedUser]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!title.trim()) return alert("Entrez une routine !");
//     if (!selectedUser) return alert("Choisissez un utilisateur !");
//     onAdd(selectedUser, title.trim());
//     setTitle("");
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center justify-center gap-2 mb-8 max-w-xl mx-auto"
//     >
//       <select
//         value={selectedUser}
//         onChange={(e) => setSelectedUser(e.target.value)}
//         className="p-2 border rounded"
//       >
//         {users.map((u) => (
//           <option key={u.id} value={u.id}>
//             {u.name}
//           </option>
//         ))}
//       </select>

//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Nouvelle routine..."
//         className="flex-1 p-2 border rounded"
//       />

//       <button
//         type="submit"
//         className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//       >
//         Ajouter
//       </button>
//     </form>
//   );
// }




import React, { useEffect, useState } from "react";

export default function AddRoutineForm({ users = [], onAdd }) {
  const [title, setTitle] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    if (users.length && !selectedUser) {
      setSelectedUser(users[0].id);
    }
  }, [users, selectedUser]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Entrez une routine !");
    if (!selectedUser) return alert("Choisissez un utilisateur !");
    onAdd(selectedUser, title.trim());
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light p-7 border border-blue-100 flex items-center gap-3  mx-auto shadow-sm  max-w-[1500px]"
    >

      


      {/* Champ texte arrondi */}
      <div className="flex-1 flex items-center bg-white rounded-full px-5 py-3 border border-white shadow-sm">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nouvelle routine"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Sélecteur utilisateur stylé comme pastille */}
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="bg-white rounded-full px-3 py-2 text-sm font-medium text-gray-700 border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      {/* Bouton Ajouter */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full shadow"
      >
        Ajouter
      </button>
    </form>
  );
}












