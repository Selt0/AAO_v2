// Whisper

// Write a function whisper that takes in a string and returns a "whispered" version of that string.

// HINT: try using the .toLowerCase() method on a string to see what it does! You may also want to look up .toLowerCase() in the MDN documentation.

function whisper(str) {
  return `...${str.toLowerCase()}...`
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."