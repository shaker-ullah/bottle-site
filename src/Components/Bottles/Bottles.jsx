import './Bottles.css'
import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottle] = useState([])
    const [visited, setVisited] = useState(false)
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottle(data))
    }, [])

    const handleClick = () => {
        console.log('click')
    }


    return (
        <div>
            <h1>Hello World!</h1>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleClick={handleClick}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;