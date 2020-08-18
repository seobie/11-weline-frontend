import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import SignUp from "./Pages/SignUp";
import Shop from "./Pages/Shop";
import ShopListCol from "./Pages/ShopListCol";
import ShopListRow from "./Pages/ShopListRow";
import ShowDetail from "./Pages/ShowDetail";
import WishList from "./Pages/WishList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/ShopListCol" component={ShopListCol} />
          <Route exact path="/ShopListRow" component={ShopListRow} />
          <Route exact path="/ShowDetail" component={ShowDetail} />
          <Route exact path="/WishList" component={WishList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
