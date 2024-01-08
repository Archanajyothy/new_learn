let schedule = {};
const isEmpty = (schedule) => {
    for(key in schedule){
        return false
    }
    return true
}
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));  // false