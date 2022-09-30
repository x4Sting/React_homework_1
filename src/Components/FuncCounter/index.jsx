import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 

import Controls from "./Controls";
import Displaying from "./Displaying";
import Header from "./Header";

import "./index.css";

/** 
 * @typedef FuncCounterProps
 * @property {string} header
*/

/**
 * Representation of a counter through a function
 * @param {FuncCounterProps} props 
 * @returns 
 */

const FuncCounter = (props) => {

    const [counter, setState] = useState(0);

        useEffect(() => {
            console.log("useEffect(\"FuncCounter\")")
        }, [counter]);

    return(
        <>
            <Header header = { props.header }/>
            <div className = "counter">
                <Displaying value = { counter }/>
                <Controls value = { counter } setFunc = { setState }/>
            </div>
        </>
    );
};

FuncCounter.propTypes = {
    header: PropTypes.string
}

export default FuncCounter;