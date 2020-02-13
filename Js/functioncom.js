//Local and global scope

var num=10
function test(){
    let num=100
    console.log("Value of num in test():"+num)
}
console.log("Value of num outside test():"+num)
test()
