import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { v4 as uuidv4 } from "uuid";
import { useSelector,dispatch, useDispatch } from "react-redux";
import { toggleTask } from "../redux/taskSlice";


const TodoList = () => {    
 
  const tasks = useSelector((state)=>(state.task.data));
  const dispatch = useDispatch();

  const handleToggle = (changedItem) => () => {
    // console.log("handletoggle", changedItem);
    // const clonedList = [...items];

    // clonedList.map((item) => {
    //   if (item.id === changedItem.id) {
    //     item.done = !item.done;
    //   }
    //   return item;
    // });

    // setItems(clonedList);

  };


  useEffect(() => {
    console.log('ready');
    console.log(tasks[0]);
  }, []);

  return (
    <List
      dense
      sx={{ width: "100%", bgcolor: "#cfcfcf",boxShadow:4 }}
    >
      {
      tasks.map((item) => {
        return (
          <ListItem
            key={item.id}
            sx={ item.done ? {bgcolor:'#a5a1a1',fontWeight:'bold'} : {}}
            onClick={()=>{dispatch(toggleTask(item))}}
            secondaryAction={
              <Checkbox
                edge="end"
                checked={item.done}
                inputProps={{ "aria-labelledby": item.id }}
                color="primary"
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                id={item.id}
                primary={`${item.title}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
