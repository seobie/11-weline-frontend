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
import logintab from "./Pages/Login/components/LoginTab";
import signuptab from "./Pages/Login/components/SignUpTab";
import forgotpw from "./Pages/Login/components/ForgotPw";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/loginTab" component={logintab} />
          <Route exact path="/signuptab" component={signuptab} />
          <Route exact path="/forgotpw" component={forgotpw} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
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
