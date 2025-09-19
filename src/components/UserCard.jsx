

// src/components/UserCard.jsx
import React from "react";
import RoutineList from "./RoutineList";


function UserCard({ user, onDelete, onToggle }) {
  const completed = user.routines.filter(task => task.done === true).length
  const progress = Math.round((completed / user.routines.length) * 100)
  return (

    <div className="bg-light rounded-xl gap-2 shadow-md p-3 ml-7 text-center max-w-[500px]">
     
      <img src={user.image} alt="image" className="w-24 h-24 rounded-full border-4 border-white mx-auto mb-4 object-cover" />
      <h5 className="text-lg font-semibold text-gray-800 mb-4">
        {user.name}
      </h5>
 <progress value={progress} max="100" className="w-full h-3 mt-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-pro my-8"></progress>
      <RoutineList
        routines={user.routines}
        userId={user.id}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  );
}

export default UserCard;
