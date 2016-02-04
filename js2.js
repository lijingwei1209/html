/**
 * Created by ljw on 2016/2/4.
 */

function myFunction(a, b) {
   return console.log(a * b);
}
myFunction.call(Object, 10, 2);      // 返回 20

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return console.log(this.firstName + this.lastName);
    }
};
myObject.fullName();

function  add(num1,num2){
    console.log(num1+num2);
}
function  sub(num1,num2){
    console.log(num1-num2);
}

sub.call(add,5,2);

