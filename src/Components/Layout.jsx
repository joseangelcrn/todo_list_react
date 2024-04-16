import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Menu from "./Menu";

const Layout = () => {

  return (
    <Grid container spacing={2} columns={12}>
      <Grid item xs={12}>
        <Menu/>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
