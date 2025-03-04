import './Todo.css'
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import { addTask, deleteTask, fetchTask } from '../store';

export const Todo = () => {

   const [task, setTask] = useState("");

    const tasks = useSelector((state) => state.task);
    console.log("react state: ", tasks); 

    const dispatch = useDispatch();

  
    const handleFormSubmit = (e) => {
         e.preventDefault();
         if(task.trim()) {
            dispatch(addTask(task));
            setTask("");
         }
         
    }

   const handleTaskDelete = (id) => {
      console.log("Index:", id);
      return dispatch(deleteTask(id));
   }

   const handleFetchTasks = () => {
      console.log("Hello");
      dispatch(fetchTask())
   }


   return (
      <>
         <h2>Getting Things Done...</h2>
            <form onSubmit={handleFormSubmit}>
               <input type='text'  value={task} onChange={(e) => setTask(e.target.value) }/>
               <button>Add Task</button>
            </form>
            <button className='fetch-tasks' onClick={handleFetchTasks}>Fetch Tasks</button>   
            <ol>
              {
                tasks.map((curTask, index) => {
                  return (
                     <li key={index}>
                        <p>{index}: {curTask}</p> 
                        <button className='icon-style'  
                           onClick={() => handleTaskDelete(index)}>
                              <MdDeleteForever/>
                        </button>
                        
                     </li>
                  )
                })
              }
            </ol>
        
      </>
   );
}