import React from "react";
import PropTypes from "prop-types"; 

import Header from "../FuncCounter/Header";
import DisplayingArray from "./DisplayingArray";

import "./index.css";

/** 
 * @typedef ArrayCountersProps
 * @property {string} header
*/

/**
 * Creating an array of counters
 * @param {ArrayCountersProps} props 
 * @returns 
 */

const COUNTERS = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
];

const ArrayCounters = (props) => {

    return (
        <div className = "array-counters">
            <Header header = { props.header } />
            <DisplayingArray array = {COUNTERS} />
        </div>
    );
};

ArrayCounters.propTypes = {
    header: PropTypes.string
}

ArrayCounters.defaultProps = {
    header: "Header Text"
}

export default ArrayCounters;
