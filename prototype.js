/**
 * Created by ljw on 2016/12/10.
 */

Array.prototype.max = function(){
    var max = this[0];
    this.forEach(function(element, index, array){
        if(element > max){
            max = element;
        }
    })
    return max;
}

var arr1 = [3,6,9,1,5,0,11];

console.log(arr1.max());