import { useEffect, useState } from "react"

const Hook = () => {
    let [count, setCount ] = useState(0);

    useEffect(()=> {
        setCount(count++);
    },[count]);

    return <div>
        <button onClick={setCount(count++)}>Count Value:{count}</button>
        
    </div>
}

export default Hook;