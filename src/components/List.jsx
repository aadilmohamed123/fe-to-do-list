import React from "react";

const List = props => {
  return (
    <ul>
      {props.goals
        .filter(goal => props.displayedMonth === goal.month)
        .map(filteredGoal => {
          return <li key={filteredGoal.goal}>{filteredGoal.goal}</li>;
        })}
    </ul>
  );
};

export default List;
