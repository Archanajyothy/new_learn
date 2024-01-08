let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
const sum = (salaries) => {
    let sum = 0;
    for(let key in salaries){
            sum = sum + salaries[key]
            console.log(salaries[key]);
        }
        return sum
    }
    
let sumOfSalary = sum(salaries)
console.log(sumOfSalary);