import {UserContext,BrotherContext} from './../index'
import {useContext} from "react";
export function UseContextC() {

    const User = useContext(UserContext);
    const brother = useContext(BrotherContext);


    return (
        <div>
            {User}
        </div>
    )
}