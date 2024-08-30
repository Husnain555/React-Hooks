import {useMemo, useState} from "react";

export function UseMemo(props) {
  const [count,setCount] = useState(0)
  const [add,setAdd] = useState(0)
    const addition1 = ()=>{
      setCount(count+1)
    }


    const addition2 = ()=>{
        setAdd(add+1)
    }

    const even =     useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return count % 2 === 0

    }, [count]);


    return (
        <div>
            <button onClick={addition1}> Increment{count}</button>
            <span> {even  ? `Even` : `Odd`} </span>
            <br/>
            <br/>
            <button onClick={addition2}>Decrement{add}</button>
        </div>
    )
}