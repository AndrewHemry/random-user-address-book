import React, { useState } from "react";

function StatusButton(props) {
    const [isClicked, setIsClicked] = useState("false");
    return(
        <li>
            <img src={props.result.picture.medium} alt={props.result.email} />
            <h3>{props.result.name.first}{" "}{props.result.name.last}</h3>
            <p>{props.result.email}</p>
            <button
                onClick={() => {
                    setIsClicked(!isClicked)
                }}
            >
                {isClicked ? "Show Details" : "Hide Details"}
            </button>
            {!isClicked && <p><span>{props.result.location.state}{", "}{props.result.location.city}{" - "}{props.result.location.country}</span></p>}
        </li>
    )
}

export default StatusButton;

