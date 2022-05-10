import React, { useState } from 'react';

const BollywoodChild = (props) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        console.log(count);
        setCount(count+1);
        console.log(count);
    }

    return (
        <>

            <div> Movie Name</div>
            <div>{props.temp}</div>


            <div>{count}</div>
            <button onClick={increase}>Increase</button>

        </>
    )
}

export default BollywoodChild;