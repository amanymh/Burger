import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../_Aux/_Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const layout = props => {
  const [SideDrawerIsVisilbe, setSideDrawerIsVisilbe] = useState(false);
  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisilbe(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisilbe(!SideDrawerIsVisilbe);
  };

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={SideDrawerIsVisilbe}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(layout);
