import React, { useEffect, useState } from "react";

export function MountingDismounting() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouse = (e) => {
        console.log(`mouse event`)
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log(`mouse move`)
        window.addEventListener("mousemove", logMouse);
        return () => {
            console.log(`unmount`)
            window.removeEventListener("mousemove", logMouse)
        }


    }, []);

    return (
        <div>
            Mouse X: {x} Y: {y}
        </div>
    )}