import React from "react";
import PropTypes from "prop-types"; 

import Controls from "../../FuncCounter/Controls";
import Content from "./Content";
import DisplayingInput from "./DisplayingInput";

import "./index.css";

/** 
 * @typedef ControlledCounterProps
 * @property {number} value
 * @property {string} content
 * @property {function} handle
 * @property {function} setFunc
*/

/**
 * Creating a controlled counter
 * @param {ControlledCounterProps} props 
 * @returns 
 */

const ControlledCounter = (props) => {

    return (
        <div className = "controlled-counter">        
            <DisplayingInput value =  { props.value } handle = { props.handle } />
            <Controls value = { props.value } setFunc = { props.setFunc }/>
            <Content value = { props.content } />
        </div>
    )
};

ControlledCounter.propTypes = {
    value: PropTypes.number,
    content: PropTypes.string,
    handle: PropTypes.func,
    setFunc: PropTypes.func
}

DisplayingInput.defaultProps = {
    value: 0,
    content: "Description of the counter"
}

export default ControlledCounter;