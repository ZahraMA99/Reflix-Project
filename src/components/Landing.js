import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Mona" },
        { name: "Jasmyne" },
        { name: "Aura" },
        { name: "Tina" },
      ]
    }
  }

  getUserDisplay(user) {
    return (
        <Link className="user" key={user.name} to="catalog"> {user.name} </Link>
    )
    }

    render() {
        return (
            <div className="landing-container">
                <p> WHO'S WATCHING </p>
                <div className="users">
                    {this.state.users.map(user => { return this.getUserDisplay(user) })}
                </div>
            </div>)
    }

}

