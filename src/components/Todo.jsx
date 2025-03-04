import './Todo.css'
import { useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const tasks = useSelector((state) => state.task);
    console.log("react state: ", tasks); 

    function handleTaskDelete(index) {
         console.log("Index:", index);
    }

   return (
      <>
         <h2>Getting Things Done...</h2>
            <form>
               <input type='text'  />
               <button>Add Task</button>
            </form>

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