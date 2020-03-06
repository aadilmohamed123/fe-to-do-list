import "./App.css";
import React, { Component } from "react";
import CalendarDropdown from "./components/CalendarDropdown";
import List from "./components/List";
import GoalInput from "./components/GoalInput";

class App extends Component {
  state = {
    goals: [
      { goal: "take a sustainable action", month: "Jan" },
      { goal: "meditate for 10 minutes a day", month: "Apr" }
    ],
    displayedMonth: "Jan"
  };

  render() {
    return (
      <main className="listContainer">
        <h1>Monthly Goals</h1>
        <CalendarDropdown handleDropdown={this.handleDropdown} />
        <List
          displayedMonth={this.state.displayedMonth}
          goals={this.state.goals}
          deleteGoal={this.deleteGoal}
        />
        <GoalInput
          displayedMonth={this.state.displayedMonth}
          addGoal={this.addGoal}
        />
      </main>
    );
  }

  handleDropdown = month => {
    this.setState({ displayedMonth: month });
  };

  addGoal = input => {
    this.setState(
      currentState => {
        return {
          goals: [...currentState.goals, input]
        };
      },
      () => {
        localStorage.setItem("state", JSON.stringify(this.state.goals));
      }
    );
  };

  deleteGoal = goal => {
    
    this.setState(currentState => {
      const filteredState = currentState.goals.filter(
        filteredGoal => filteredGoal.goal !== goal
      );
      console.log(filteredState);

      return { goals: filteredState };
    });
  };

  componentDidMount = () => {
    const oldState = localStorage.state;
    if (oldState !== undefined) {
      this.setState({ goals: JSON.parse(oldState) });
    }
  };
}

export default App;
