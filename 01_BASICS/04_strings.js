// //at() - Returns the character at the given index. Supports negative indexing.
// let a = "aryan"
// console.log(a.at(2));
// console.log(a.at(-2));

// // charAt(index) - Returns the character at the specified index (does not support negative index).
// console.log(a.charAt(2));
// console.log(a.charAt(-2)); //doesnt support

// // charCodeAt(index) - Returns the Unicode (UTF-16) code of the character at a given index.
// console.log("a".charCodeAt());
// console.log("A".charCodeAt());

// // codePointAt(index) - Like charCodeAt(), but better for Unicode characters beyond 16-bit (like emojis).
// console.log("🥰".codePointAt());

// // concat(str1, str2, ...) - Joins strings together (same as +, but less used).
// let str1 = "Hello"
// console.log(str1.concat(" World"));

// // endsWith(searchString) - Checks if string ends with a specific substring.
// console.log(str1.endsWith("o")); // true
// console.log(str1.endsWith("f")); // false

// // includes(searchString) - Checks if the string contains a substring.
// console.log("How are you".includes("you")) // true
// console.log("How are you".includes("how")) // false

// // indexOf(searchString) - Returns the first index of the substring or -1 if not found.
// "hello".indexOf("l");  // 2

// // lastIndexOf() - Finds the last occurrence of a substring. Returns -1 if not found.
// console.log("banana".lastIndexOf("a")); // 5

// // localeCompare() - Compares two strings based on locale (used for sorting).
// console.log("a".localeCompare("b")); // -1 (a < b)

// // padStart(length, padString) / padEnd(length, padString) - Pads the start / end of the string to given length.
// console.log("5".padStart(3, "0")); // "005"
// console.log("5".padEnd(3, "0")); // "500"

// // repeat(count) - Repeats the string count times.
// console.log("ha".repeat(3)); // "hahaha"

// // replace(search, replace) - Replaces first match of substring or regex.
// console.log("apple".replace("p", "b")); // "abple"

// // replaceAll(search, replace) - Replaces all matches.
// console.log("apple pie apple".replaceAll("apple", "banana")); // "banana pie banana"

// // search(regex) - Searches for match and returns index or -1.
// console.log("abc123".search(/\d/)); // 3

// // slice(start, end) - Extracts part of string from start to end (not included).
// console.log("abcdef".slice(1, 4)); // "bcd"

// // split(separator) - Splits string into array by separator.
// console.log("one,two".split(",")); // ["one", "two"]

// // startsWith(substring) - Checks if string starts with a specific value.
// console.log("hello".startsWith("he")); // true

// // substring(start, end) - Similar to slice, but doesn’t accept negative values.
// console.log("abcdef".substring(1, 4)); // "bcd"

// // toUpperCase() / toLowerCase() -  Converts all letters to uppercase / lowercase.
// console.log("HELLO".toLowerCase());
// console.log("hello".toUpperCase());

// // trim() / trimStart() / trimEnd() - Removes spaces from both ends / start only / end only.
// console.log("    hi     ".trim());
// console.log("   hi".trimStart());
// console.log("hi    ".trimEnd());

// // toString() - Returns the string itself. Works mainly when converting non-strings to strings.
// console.log(true.toString()); // "true"

// // valueOf() - returns the primitive string value of a String object.
// let str = new String("hello");   // String object
// console.log(str);                // [String: 'hello']
// console.log(str.valueOf());      // "hello" (primitive value)




