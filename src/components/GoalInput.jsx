import React, { Component } from "react";

class GoalInput extends Component {
  state = {
    newGoal: { goal: "", month: "" }
  };

  render() {
    return (
      <form className="goalInput" name="goalInput" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.newGoal.goal}
        ></input>
        <button>Add Goal</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addGoal(this.state.newGoal);
    this.setState({ newGoal: { goal: "", month: "" } });
  };

  handleChange = event => {
    this.setState({
      newGoal: { goal: event.target.value, month: this.props.displayedMonth }
    });
  };
}

export default GoalInput;
