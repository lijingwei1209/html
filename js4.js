


function test(a, b){
    console.log(a+b);
}
function test(a, b, c){
    console.log(a+b+c);
}


test(2,3,4);
test(2,3,4,5);


function testThis(){
    return this;
}

console.log(testThis());


var arr=[
    {name: 'zhq'},
    {age: 24},
    {sex: '女'}
]

console.log(arr[0].name+arr[1].age+arr[2].sex);