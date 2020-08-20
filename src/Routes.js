import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import Shop from "./Pages/Shop/Shop";
import ShopListCol from "./Pages/Shop/ShopListCol";
import ShopListRow from "./Pages/Shop/ShopListRow";
import ShopDetails from "./Pages/Shop/ShopDetails";
import WishList from "./Pages/WishList/WishList";
import Women from "./Pages/Women/Women";
import Shoes from "./Pages/Women/Shoes";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shoplistCol" component={ShopListCol} />
          <Route exact path="/shoplistRow" component={ShopListRow} />
          <Route exact path="/shopdetails" component={ShopDetails} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/shoes" component={Shoes} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
