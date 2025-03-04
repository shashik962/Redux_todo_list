import './Todo.css'

export const Todo = () => {
   return (
      <>
         <h2>Getting Things Done...</h2>
            <form>
               <input type='text'  />
               <button>Add Task</button>
            </form>

            <ol>
               <li>
                  <p>1. To Do Item 1</p> 
                  <button className='delete'>X</button>
               </li>
               <li>
                  <p>1. To Do Item 1</p> 
                  <button className='delete'>X</button>
               </li>
            </ol>
        
      </>
   );
}