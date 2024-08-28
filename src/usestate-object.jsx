import {useState} from "react";

export function UseStateObject() {
    const [name, setName ] = useState({firstName : '', lastName : '', age: ''})

    return(
        <div>
            <form>
                <input type="text" value={name.firstName}
                       onChange={e => setName({...name, firstName: e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
                <input type={"text"} value={name.age} onChange={e => setName({...name, age: e.target.value})}/>

                <h1>first name = {name.firstName}</h1>
                <h1>Last name = {name.lastName}</h1>
                <h1>Age= {name.age}</h1>
                <h2> {JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}