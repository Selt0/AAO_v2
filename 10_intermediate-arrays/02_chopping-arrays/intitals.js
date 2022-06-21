// Initials

// Write a function initials(name) that accepts a full name as an arg. The function should return the initials for that name.

// your code here
function initials(str){
    return str.split(' ').map(word => word[0].toUpperCase()).join('')
}






console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'