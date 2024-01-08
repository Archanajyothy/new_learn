let str = "Hello, World!"
for(let i=str.length; i>=0; i--){
    process.stdout.write(str.charAt(i))
    //console.log(str[i]);
    // or 
    //console.log(str.charAt(i)); this method is also right
}
console.log("\n");