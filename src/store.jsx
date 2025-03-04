
const ADD_TASK = "task/add";
const DELETE_TASK = "task/add";

const initialState = {
   task: []
}

const taskReducer = (state = initialState , action) => {
   switch (action.type) {
      case ADD_TASK:
         return {
            ...state,
            task: [...state.task, action.payload], 
         } 
      case DELETE_TASK:
         const updatedTask = state.task.filter((curTask, index) => {
            return index !== action.payload
         });   

         return {
            ...state,
            task: updatedTask, 
         }   
   
      default:
         return state;
   }
}