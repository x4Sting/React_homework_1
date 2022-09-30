import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef DisplayingProps
 * @property {number} value
*/

/**
 * Counter display
 * @param {DisplayingProps} props 
 * @returns 
 */

const Displaying = (props) => {

    return(
        <div className = "func-display">
            {props.value}
        </div>
    );
};

Displaying.propTypes = {
    value: PropTypes.number
}

Displaying.defaultProps = {
    value: 0
}

export default Displaying;