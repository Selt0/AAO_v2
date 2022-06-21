// Echo(*)

// Write a function echo that takes in a string and console.logs that string "echo-ized".


function echo(string) {
    console.log(`${string.toUpperCase()} ... ${string[0].toUpperCase() + string.slice(1).toLowerCase()} ... ${string.toLowerCase()}`)
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"