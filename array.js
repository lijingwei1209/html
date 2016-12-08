/**
 * Created by ljw on 2016/12/8.
 */
var array1 = new Array('A','B','C');
var array2 = ['a','b','c','d','e','b','f'];



console.log(array1.concat(array2));
console.log(array2.indexOf('b'));
console.log(array2.lastIndexOf('b'));

console.log(array1.push('D','E','F'));
console.log(array2.pop());

console.log(array2.shift());
console.log(array1.unshift('AA','BB'));

console.log(array1.sort());
console.log(array2.reverse());

console.log(array1.slice(2));
console.log(array1);
console.log(array1.splice(1,1,'hello'));
console.log(array1);


