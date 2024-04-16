import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import TocIcon from "@mui/icons-material/Toc";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const defaultRoute = '/list';
  const [menu, setMenu] = useState(0);


  const detectActiveMenu = () => {
    switch (location.pathname) {
      case "/list":
        setMenu(0);
        break;

      case "/list/uncompleted":
        setMenu(1);
        break;
      case "/list/completed":
        setMenu(2);
        break;
      default:
        setMenu(0);
        break;
    }
  };

  const checkRoute = () =>{
    if (location.pathname == '/') {
      console.log('redirecting to default route...');
      navigate(defaultRoute);
    }
  }

  useEffect(() => {
    checkRoute();
    detectActiveMenu();
  }, []);
  return (
    <BottomNavigation
      showLabels
      value={menu}
      onChange={(event, newValue) => {
        setMenu(newValue);
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/list"
        label="Lista de ToDos"
        icon={<TocIcon />}
      />
      <BottomNavigationAction
        label="Tareas sin terminar"
        icon={<PlaylistRemoveIcon />}
        component={Link}
        to="/list/uncompleted"
      />
      <BottomNavigationAction
        label="Tareas Terminadas"
        icon={<ChecklistRtlIcon />}
        component={Link}
        to="/list/completed"
      />
    </BottomNavigation>
  );
};

export default Menu;
