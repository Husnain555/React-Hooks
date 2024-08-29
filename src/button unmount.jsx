import {useState} from "react";
import {MountingDismounting} from "./Mounting-Dismounting";

export function ButtonUnmount(props) {
  const [display, setDisplay] =  useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>display</button>
            { display && <MountingDismounting/>}
        </div>
    )
}

