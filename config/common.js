const deckCount = `${Math.floor(Math.random() * 9)}`;
//Generate a gender at random
var genderOptions = ['male', 'female'];
var gender = genderOptions[Math.floor(Math.random() * genderOptions.length)];
//Generate an option of activity at random
var activityOptions = ['active', 'inactive'];
var activity =
  activityOptions[Math.floor(Math.random() * activityOptions.length)];

export { deckCount, gender, activity };
