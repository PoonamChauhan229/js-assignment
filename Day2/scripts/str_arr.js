console.log("Home");

//String Length
var txt="hi buddy how are you"
console.log(txt.length);

//String Uppercase
var txt="hi buddy how are you";
console.log(txt.toUpperCase());

//String Lowercase
var txt="HI BUDDY HOW ARE YOU";
console.log(txt.toLowerCase());

//Accessing the Index-1st Occurences
var txt="HI BUDDY HOW ARE YOU";
console.log(txt.indexOf("D"));
console.log(txt.indexOf("H"));

//Accessing the Index-Last Occurences
var txt="HI BUDDY HOW ARE YOU";
console.log(txt.lastIndexOf("D"));
console.log(txt.lastIndexOf("H"));

//Characters -specified index (position)
var txt="HI BUDDY HOW ARE YOU";
console.log(txt.charAt("11"));

// Ends with- O/P- True or False
var txt="HI HI BUDDY HOW ARE YOU";
console.log(txt.endsWith("HI"));
console.log(txt.endsWith("YOU"));

//Split
console.log(txt.split("B"));
console.log(txt.split(""));

//Search in a string-Position returns
console.log(txt.search("YOU"));
console.log(txt.search("D"));

//Slice
console.log(txt.slice(5,13));

//Substring-Similar to slice
console.log(txt.substring(1,5));

//substr-Similar to slice
console.log(txt.substr(1,5));

//replace-1st occurence
console.log(txt.replace("HI","letsupgrade"));
console.log(txt);

/////////////////Arrays

