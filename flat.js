let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat();
console.log(flatArray);
// Result: flatArray = [1, 2, 3, 4, [5, 6]]

let deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
let flatDeepArray = deeplyNestedArray.flat(Infinity);
console.log(flatDeepArray);
// Result: flatDeepArray = [1, 2, 3, 4, 5]

let irregularNestedArray = [1, [2, , 3, [4, , , , 5]]];
let flatIrregularArray = irregularNestedArray.flat();
console.log(flatIrregularArray);
// Result: flatIrregularArray = [1, 2, 3, [4, , , , 5]]
