// Snake to Camel

// Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. snake_case is where each word is separated with underscores (_). PascalCase is a string where the first char of each word is capital, all other chars lowercase.


// Your code here
function snakeToCamel(str){
    let strArr = str.split('_')
    return strArr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('')
}


console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'