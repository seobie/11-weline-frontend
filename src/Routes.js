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
import Women from "./Pages/Women/Women";
import Shoes from "./Pages/Women/Shoes";
import Boots from "./Pages/Women/Boots";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/runways" component={Runways} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shoplist/:category" component={ShopListCol} />
          <Route exact path="/shoplistRow/:id" component={ShopListRow} />
          <Route exact path="/shopdetails" component={ShopDetails} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/women/shoes" component={Shoes} />
          <Route exact path="/women/shoes/boots" component={Boots} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
