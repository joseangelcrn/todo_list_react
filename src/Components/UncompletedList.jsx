import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask } from "../redux/taskSlice";

const UnCompletedList = () => {
  
  const tasks = useSelector((state) =>
    state.task.data.filter((item) => {
      return !item.done;
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect");
    console.log(tasks);
    return () => {};
  }, [tasks]);

  return (
    <List dense sx={{ width: "100%", bgcolor: "#cfcfcf", boxShadow: 4 }}>
      {tasks.map((item) => {
        return (
          <ListItem
            key={item.id}
            sx={item.done ? { bgcolor: "#a5a1a1", fontWeight: "bold" } : {}}
            onClick={() => {
              dispatch(toggleTask(item));
            }}
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
              <ListItemText id={item.id} primary={`${item.title}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default UnCompletedList;
