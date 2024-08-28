import './form.css'
import { useState} from "react";
export const Form=()=> {
const count = 0
   const [up, setUp] = useState(count)

    const rim = ()=>{
    setUp(up+1)
    }
    const rum = ()=>{
if (up > 0){
    setUp(up-1)
}
    }
    const rem = ()=>{
    setUp(count)
    }

const reem = ()=>{
    for (let i=0;i<5;i++){
        setUp(prevUp => prevUp+1)

    }
}





    return (

        <div className="form">

            <h1 className={'h1'}>React Count Method</h1>
            count:{up}
<button className={'button'} onClick={rim}>increase</button>
<button className={'button'} onClick={rum}>Decrease</button>
<button className={'button'} onClick={rem}>Reset</button>
<button className={'button'} onClick={reem}>Up 5</button>




        </div>
    )
}

