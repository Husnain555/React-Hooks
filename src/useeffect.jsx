import {useEffect, useState} from "react";

export function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
   useEffect(
       () => {
           console.log(`useEffect - updating the tiltle`)

           document.title = `you clicked ${ count }`
       },[count]
   )

    return (
        <div>
            count = {count}

            <input type={"text"} value={name} onChange={e =>setName(e.target.value) }/>

            <button onClick={()=>setCount(count + 1) }>click</button>
        </div>
    )

}