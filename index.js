// Function to determine how many hours of sleep we got each night of the week

const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 6;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return "Please enter a day of the week!";
      break;
  }
};

// Function to get the total hours that we actually slept
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// Function to get the ideal sleep hours that we prefer
const getIdealSleepHours = (hoursPerDay) => {
  return hoursPerDay * 7;
};

// Function to calculate sleep debt
const calculateSleepDebt = (hoursPerDay) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(hoursPerDay);

  if (actualSleepHours === idealSleepHours) {
    console.log("You have got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You have got " +
        (actualSleepHours - idealSleepHours) +
        " more hours of sleep than needed."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest, because you got " +
        (idealSleepHours - actualSleepHours) +
        " hours less than you should have this week."
    );
  } else {
    console.log("Error! Something went wrong, check your code");
  }
};

// Test
console.log(getActualSleepHours());
console.log(getIdealSleepHours(8));
calculateSleepDebt(8);
