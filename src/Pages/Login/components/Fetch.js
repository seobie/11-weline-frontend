import React, { Component } from "react";

export default class Fetch extends Component {
  render() {
    return (
    <div className="Fetch">
      fetch("http://10.58.6.1:8000/user/signup", {
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            title: this.state.title,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
            nationality: this.state.nationality,
            is_email_agreed: "True",
            is_policy_agreed: "True",
          }),
        })
          .then((res) => res.json())
          .then((res) => console.log(res))
    </div>;
    )  
}
}
