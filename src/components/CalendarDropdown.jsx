import React from "react";

const CalendarDropdown = props => {
  return (
    <form action="">
      <label>
        Select the month to view:
        <select
          onChange={event => {
            const month = event.target.value;
            props.handleDropdown(month);
          }}
          name="calendar"
        >
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>{" "}
      </label>
    </form>
  );
};

export default CalendarDropdown;
