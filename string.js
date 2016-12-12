/**
 * Created by ljw on 2016/12/9.
 */

var str1 = new String("hello world");
var str2 = "hello world";
console.log(str1 === str2)

console.log(typeof(str1));
console.log(typeof(str2));

console.log(str2.length);

console.log(str1.indexOf("g"));
console.log(str1.lastIndexOf("l"));

console.log(str1.charAt(1));
console.log(str2.replace("world", "china"));

console.log(str2.substring(5,2));
console.log(str2.slice(5,-2));

console.log(str1.split(" "));
console.log(str1.search("t"));

console.log(str1.match(/ll/g));
console.log(str1.constructor);
console.log(str1.prototype);


