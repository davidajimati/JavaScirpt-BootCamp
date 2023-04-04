var str = "This is a sample string for practice"

// gets length
console.log(str.length)

// find the location of a string in a string
console.log(str.indexOf("sample"));

// find last index of a string in another string
console.log(str.lastIndexOf('a'))

// get a part of our string slice (start, end)
console.log(str.slice(1,))

// method to get a substring function - substr(startPos, length)
console.log(str.substring(-5))

// transforms strings to uppercase
console.log(str.toUpperCase());

// transforms strings to lowercase
console.log(str.toLowerCase());

// concatenates strings
console.log(str.concat(" Hello"));

//trim() - removes extra spaces in string
var spaceStr = "       Hey Men    "
console.log(spaceStr.trim());

//charAt() -> takes position as an arg and returns the character
// at that position
str = "this is a test string"
console.log(str.charAt(9));

// split() -> splits our string based on the arguments passed
str = "My God is Good gaani o"
console.log(str.split('o'))