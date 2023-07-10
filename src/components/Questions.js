import React, { useEffect, useState } from "react";
import data from "../database/data";

export default function Questions() {

    useEffect(()=>{
        console.log(data)
    })

    const question = data[0]

    const [checked, setChecked] = useState(false)

    function onSelect() {
        //setChecked(!checked)
        console.log("radio button onchange")
    }

    return(
        <div className="questions">
            <h2 className="text-light">{question.question}</h2>

            <ul key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={onSelect()}
                            >
                            </input>

                            <label className="text-primary" htmlFor={`q${i}-option`}>{q}</label>
                            <div className="check"></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}