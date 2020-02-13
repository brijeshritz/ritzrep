//Let and Var comparision
function test()
{
    var num=100;
    console.log("value of num in test():"+num);
    {
        console.log("Inner block begins:")
        let num=200
        console.log("Value of num:"+num)
    }
}
test()

function test1()
{
    var num=10;
    var num=20;
    console.log(num);

    let num=10;
    console.log("Value of num is:"num);
}
test1()