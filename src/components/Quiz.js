import React, { useEffect } from "react";
import Questions from "./Questions";

import { useSelector } from "react-redux"

export default function Quiz() {

    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state)
    })

    /**prev button event handler */
    function onPrev() {
        console.log("on prev clicked")
    }

    /**next button event handler */
    function onNext() {
        console.log("on next clicked")
    }

    return(
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>

            {/* display questions */}
            <Questions></Questions>

            <div className="grid">
                <button className="btn prev" onClick={onPrev}>Prev</button>
                <button className="btn next" onClick={onNext}>Next</button>
            </div>

        </div>
    )
}