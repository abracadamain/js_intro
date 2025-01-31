/* 
 test opérations, cst, let, log
 "use strict"; nv convention let obligatoire en strict
 un seul type de number (pas int, float)
 un seul type de string (pas char, string)
*/
const PI = 314e-2;
let arrondiPi = PI.toFixed();
console.log(2*arrondiPi);
console.log(arrondiPi++, ++arrondiPi) // a++ retourne l'ancienne val de a, ++a la nouvelle val de a
console.log(2*arrondiPi);
console.log(typeof Number(`4`), typeof +'4') ;//idem
console.log("1"==1,"1"===1); // === strictement égal vérifie si même type aussi

// data types
console.log(typeof 10n) //bigint va au dela de ±(2**53 - 1) mais moins précis
console.log(`pi : ${PI}`) //backticks : extended functionality quotes
console.log(null) //special value which represents “nothing”, “empty” or “value unknown”.
let variable
console.log(variable) //undefined : value is not assigned
// autres types: symbol, object

//strings
let sautDeLigne = `les sauts de lignes
sont inclus
mais seulement avec backtick, sinon utiliser\n!`
console.log(sautDeLigne)
console.log('I\'m') // backslash pour préciser qu'on veut le caractère, sinon esquive avec les autres types de quote
console.log(String(18).length)
console.log("test".charCodeAt(0)) //code du caractère à l'index 0
console.log("text".charAt(0), "test"[0]) //caractère à l'index donné
console.log("text".at(-1)) //idem mais index négatif ok
console.log("test".slice(-2,-1))
console.log("test".substring(-2,-1)) //idem mais si négatif : considère 0
console.log("test".toUpperCase(), "hdhib".toLowerCase())
console.log("  remove espaces du début  ".trimStart(),"  fin  ".trimEnd(),"  début et fin  ".trim())
console.log("5".padStart(4,"0"),"a".repeat(3))
console.log("no no yes".replace("no", "yes"), "no no yes".replaceAll("no", "yes"))
console.log("text,test".split(","))
