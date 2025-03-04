import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

//Define Action Types: stateDomain & the Event
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
   task: [],
   isLoading: false
}

//Step 5: Create action creators
export const addTask = (data) => {
   return { type: ADD_TASK, payload: data};
}

export const deleteTask = (id) => {
   return { type: DELETE_TASK, payload: id};
}

//Step 1: Create a simple reducer function
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

//Step 2: Create the Redux store using the reducer
export const store = createStore(taskReducer, composeWithDevTools());
console.log(store);

//Step 3: Log the initial state
console.log("Initial state: ", store.getState());

//Step 4: Dispatch an action to add a task
// store.dispatch(addTask("Buy Thapa Technical code"));
// console.log("Updated state: ", store.getState());

// // store.dispatch({ type: ADD_TASK, payload: "Buy Mango"});
// store.dispatch(addTask("Buy Mango"));
// store.dispatch(addTask("Buy Banana"));
// store.dispatch(addTask("Buy Iphone"));
// store.dispatch(addTask("Buy Samsung"));
// console.log("Updated state: ", store.getState());

// store.dispatch(deleteTask(1));
// console.log("Delete state: ", store.getState());

