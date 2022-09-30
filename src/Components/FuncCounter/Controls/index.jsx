import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef ControlledCounterProps
 * @property {number} value
 * @property {function} setFunc
*/

/**
 * Adding buttons
 * @param {ControlsProps} props 
 * @returns 
 */

const Controls = (props) => {
    return(
        <div className = "control">
            <button className = "control__button" onClick={() => props.setFunc(props.value + 1)}>Increment</button>
            <button className = "control__button" onClick={() => props.setFunc(props.value - 1)}>Decrement</button>
        </div>
    );
};

Controls.propTypes = {
    value: PropTypes.number,
    setFunc: PropTypes.func
}

Controls.defaultProps = {
    value: 0
}

export default Controls;