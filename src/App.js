import "./App.css";
import React, { Component } from "react";
import CalendarDropdown from "./components/CalendarDropdown";
import List from "./components/List";

class App extends Component {
  state = {
    goals: [
      { goal: "take one more sustainable action", month: "Mar" },
      { goal: "meditate for 10 minutes a day", month: "Apr" }
    ],
    displayedMonth: "Jan"
  };
  render() {
    console.log(this.state.displayedMonth);

    return (
      <main className="listContainer">
        <h1>Monthly Goals</h1>
        <CalendarDropdown handleDropdown={this.handleDropdown} />
        <List
          displayedMonth={this.state.displayedMonth}
          goals={this.state.goals}
        />
      </main>
    );
  }

  handleDropdown = month => {
    this.setState({ displayedMonth: month });
  };
}

export default App;
