// main is variable name or function name(Dual role)
var main=function()
{
    for(var x=0;x<5;x++)
    {
        console.log(x);
    }
    console.log("x can be accessed outside the block scope x value is:"+x)
    console.log('x is hoisted to the functionn scope')
    main=15
    console.log(main)
}
main();