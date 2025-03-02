console.log("=== Assignment 1 ===");

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// approach 1
// // RemoveName
// let RemoveName=(nameToRemove, names)=>{
//     for(let i=0; i<names.length; i++){
//         if (names[i]===nameToRemove){
//             // splice
//             names.splice(i,1)
//             break

//         }
//       }
//  }

// approach 2
// RemoveName
let RemoveName = (nameToRemove, names) => {
  let filter_names = names.filter((name) => name !== nameToRemove);
  return filter_names;
};
console.log(RemoveName(nameToRemove, names));

console.log("=== Assignment 2 ===");

// TravelTime
let TravelTime = (travelInfo) => {
  const timeInHours = travelInfo.destinationDistance / travelInfo.speed;
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
};
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const travelTime = TravelTime(travelInformation);
console.log(travelTime);

console.log("=== Assignment 3 ===");
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

let logOutSeriesText = (seriesDurations) => {
  const age = 80;
  const year = 365;
  const hours = 24;
  const minutes = 60;

  let totalLifeSpanInMinutes = age * year * hours * minutes;
  let totalPercentage = 0;

  seriesDurations.forEach((series) => {
    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const percentage = (seriesMinutes / totalLifeSpanInMinutes) * 100;
    totalPercentage += percentage;
    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  });

  console.log(`\nIn total that is ${totalPercentage.toFixed(3)}% of my life`);
};

logOutSeriesText(seriesDurations);

// for experiment
// seriesDurations.forEach((e) => {
//     let fomate_sting=e.days+" "+e.hours +" "+e.minutes
//     console.log(fomate_sting)
// })

console.log("=== Assignment 4 ===");

const notes = [];

// saveNote
let saveNote = (content, id) => {
  let note = {
    content,
    id,
  };
  notes.push(note);
};
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// getNote
const getNote = (id) => {
  if (typeof id == "number") {
    const note = notes.find((note) => note.id === id);
    if (note) {
      console.log(note.content);
    } else {
      console.log("note does not exist according to the given id");
    }
  } else {
    console.log("string does not valid for this function");
  }
};
const firstNote = getNote(1);
const secondNote = getNote(2);

// logOutNotesFormatted
let logOutNotesFormatted = (notes) => {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
};
logOutNotesFormatted(notes);

console.log("=== Assignment 5 ===");

let activities = [];

// addActivity
let addActivity = (date, activity, duration) => {
  let activity_obj = {
    date,
    activity,
    duration,
  };
  activities.push(activity_obj);
};

let today = new Date();
let data = today.toLocaleDateString("en-US");

addActivity(data, "Youtube", 30);
addActivity(data, "Instagram", 24);
addActivity(data, "Facebook", 24);

// showStatus
let showStatus = (activities) => {
  let maxLimitduration = 60;
  let duration_sum = 0;
  if (!activities.length) {
    console.log("Add some activities before calling showStatus");
  } else {
    for (let i = 0; i < activities.length; i++) {
      duration_sum += activities[i].duration;
    }
    console.log(
      `You have added ${activities.length} activities. They amount to ${duration_sum} min. of usage`
    );
  }
  if (maxLimitduration < duration_sum) {
    console.log(
      `You have reached your limit, no more smartphoning for you! (max limit is ${maxLimitduration})`
    );
  }
};

showStatus(activities);
