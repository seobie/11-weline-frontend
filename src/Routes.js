import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Shop from "./Pages/Shop/Shop";
import ShopListCol from "./Pages/Shop/ShopListCol";
import ShopListRow from "./Pages/Shop/ShopListRow";
import ShopDetails from "./Pages/Shop/ShopDetails";
import WishList from "./Pages/WishList/WishList";
<<<<<<< HEAD
import Title from "./Pages/Title/Title";
import MainCategory from "./Pages/Title/MainCategory";
import Category from "./Pages/Title/Category";
=======
import Runways from "./Pages/Runways/Runways";
import Women from "./Pages/Women/Women";
import Shoes from "./Pages/Women/Shoes";
import Boots from "./Pages/Women/Boots";
>>>>>>> master

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
          <Route exact path="/shoplistRow" component={ShopListRow} />
          <Route
            exact
            path="/:title/:mainCategory/:category/:id"
            component={ShopDetails}
          />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/:title" component={Title} />
          <Route exact path="/:title/:mainCategory" component={MainCategory} />
          <Route
            exact
            path="/:title/:mainCategory/:category"
            component={Category}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
