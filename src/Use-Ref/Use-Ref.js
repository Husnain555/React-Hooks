import {useEffect, useRef} from "react";

export function UseRef() {
    const reference = useRef(null);


    useEffect(() => {
        reference.current.focus();

    }, [])

    return (
        <div>
            <input type={"text"} ref ={reference}/>
        </div>
    )
}