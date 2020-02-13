import * as React from "react"
export function Page()
{
    function hello()
    {
        alert("Hello")
    }
    return <button onClick={hello}>Click ME</button>
}