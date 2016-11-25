/**
 * Created by ljw on 2016/2/4.
 */

var person = {};

person.say = function(name){
    console.log(name);
};

person.say("lilei");


String.prototype.trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

function  trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
console.log("  abc   ddd   ".trim());
console.log(trim("           zzzzzzzzz             "));

function delSpace(str){
    return str.replace(/\s*/g,"");
}

console.log(delSpace("  abc   ddd   "));


console.log("hello javascript".slice(2,7));