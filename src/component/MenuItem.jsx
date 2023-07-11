import React from "react";

const MenuItem = (props) => {
    console.log('props ', props);
    
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.menu}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default MenuItem