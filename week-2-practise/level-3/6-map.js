// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
  return str.charAt(0).toUpperCase;
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var result = mentors.map(function(t) {
  return mentorsTidy.tidyUpString();
});

var mentorsTidyAndCapitalised;

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
