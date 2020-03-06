const displayDaysLeft = displayedMonth => {
  const date = new Date();
  const monthRefObj = {
    0: 31,
    1: date.getFullYear() % 4 === 0 ? 29 : 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const monthIndex = months.indexOf(displayedMonth);

  const currentDay = date.getDate();
  const currentMonth = date.getMonth();

  const daysinCurrentMonth = monthRefObj[currentMonth];
  return monthIndex === currentMonth ? daysinCurrentMonth - currentDay : 0;
};

export default displayDaysLeft;
