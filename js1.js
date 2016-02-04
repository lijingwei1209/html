/**
 * Created by ljw on 2016/2/4.
 */

console.log(typeof(1));
console.log(typeof(1+""));
console.log(typeof(String(1)));
console.log(typeof("hello"));
console.log(typeof(true));
console.log(typeof([2,4,6]));
console.log(typeof({"name":"xiaoming"}));
console.log(typeof(null));
console.log(typeof(undefined));

console.log("================================");

console.log((1).constructor);
console.log("abc".constructor);
console.log([2,4,6].constructor);
console.log({"name":"xiaoming"}.constructor);
console.log(true.constructor);
console.log(new Date().constructor);

console.log("================================");

console.log(Number("123"));
console.log(Number(true));
console.log(Number(new Date()));
var x = "5";
var y = +x;
console.log(typeof (y));


