import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  data: [
      { id: uuidv4(), title: "Task 1", done: false },
      { id: uuidv4(), title: "Task 2", done: false },
      { id: uuidv4(), title: "Task 3", done: false },
      { id: uuidv4(), title: "Task 4", done: false },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let newTask = action.payload;
      newTask.id = uuidv4();
      state.data.push(newTask);
    },
    removeTask: (state, action) => {
      let id = action.payload;
      let filteredTasks = state.data.filter((task) => task.id !== id);
      state.data = filteredTasks;
    },
    toggleTask: (state, action) => {
      console.log("toggle task");
      let {id} = action.payload;
      console.log(id);

      state.data.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }

      });
    },
    updateTask: (state, action) => {
      let { id, data } = action.payload;
      state.data.map((task) => {
        if (task.id === id) {
          task = data;
        }

      });
    },

    getCompletedTasks :(state)=>{
      return 'hola'
    }
  },
});

export const { addTask, removeTask, toggleTask, getCompletedTasks } = taskSlice.actions;

export default taskSlice.reducer;
