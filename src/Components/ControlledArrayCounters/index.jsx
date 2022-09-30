import React, {useState } from "react";
import PropTypes from "prop-types"; 

import Header from "../FuncCounter/Header";
import DisplayingArray from "../ArrayCounters/DisplayingArray";
import ControlledCounter from "./ControlledCounter";

import "./index.css";

/** 
 * @typedef ControlledArrayCountersProps
 * @property {string} header
*/

/**
 * Creating a controlled number of counters
 * @param {ControlledArrayCountersProps} props 
 * @returns 
 */

const ControlledArrayCounters = (props) => {

    const [numCounters, SetNumCounters] = useState(0);
    const [limitCounters, SetLimitCounters] = useState(0);
    const [counters, SetCounters] = useState([]);

    const handleNumCountersChange = (event) => {
        numCountersChange(parseInt(event.target.value));
    };

    const numCountersChange = (numCounters) => {

        if (numCounters < 0 || numCounters > limitCounters) {
            return;
        }

        let array = [];

        if (counters.length > numCounters)
        {
            SetCounters(counters.slice(0, numCounters - counters.length));
        }
        else
        {
            array = counters;

            for (let index = array.length; index < numCounters; index++) {
                array[index] = {id: index + 1}
            }

            SetCounters(array);

        }

        SetNumCounters(numCounters);
    }

    const handleLimitCountersChange = (event) => {
        limitCountersChange(parseInt(event.target.value));
    };

    const limitCountersChange = (value) => {

        if (value < 0 )
            return;

        SetLimitCounters(value);

        if (numCounters > value)
            numCountersChange(value);
    }


    return (
        <div className = "controlled-counters">
            <Header header = { props.header } />
            <ControlledCounter value = { numCounters } content = "Number of counters"  handle = { handleNumCountersChange } setFunc = { numCountersChange } /> 
            <ControlledCounter value = { limitCounters } content = "Limitation of counters"  handle = { handleLimitCountersChange } setFunc = { limitCountersChange } />          
            <DisplayingArray array = { counters } />
        </div>
    );


};

ControlledArrayCounters.propTypes = {
    header: PropTypes.string
}

ControlledArrayCounters.defaultProps = {
    header: "Header text"
}

export default ControlledArrayCounters;
