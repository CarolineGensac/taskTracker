import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
      <div className="text"> {text}</div>
      <div className="icons">
        {/* appel la méthode update */}
        <FaRegEdit className='icon' onClick={updateMode} /> 
        {/* appel la méthode delete */}
        <MdDelete className='icon' onClick={deleteToDo} />
      </div>

    </div>
  )
}

export default ToDo