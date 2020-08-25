import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Shop from "./Pages/Shop/Shop";
import ShopListCol from "./Pages/Shop/ShopListCol";
import ShopListRow from "./Pages/Shop/ShopListRow";
import ShopDetails from "./Pages/Shop/ShopDetails";
import WishList from "./Pages/WishList/WishList";
import Runways from "./Pages/Runways/Runways";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/runways" component={Runways} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shoplistCol" component={ShopListCol} />
          <Route exact path="/shoplistRow" component={ShopListRow} />
          <Route exact path="/shopdetails" component={ShopDetails} />
          <Route exact path="/wishlist" component={WishList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
