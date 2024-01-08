/*
Caesar Cipher
Write a function that takes a string and a shift value and 
returns a new string where each character is shifted by the 
specified amount in the alphabet. For example, with a shift 
of 3, 'A' would become 'D', 'B' would become 'E', and so on. 
charCodeAt
fromCharCode
*/
let str = "Hello! world"
let char = 0
const regex = /^[a-zA-Z]+$/
for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])=== true) {
        char = str[i].charCodeAt(0) + 3;
        //console.log(char);
        console.log(String.fromCharCode(char));
    }else{
        console.log(str[i]);
    }
}