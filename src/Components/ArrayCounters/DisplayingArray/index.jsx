import React from "react";
import PropTypes from "prop-types"; 

import FuncCounter from "../../FuncCounter";

/** 
 * @typedef DisplayingArrayProps
 * @property {array} array
*/

/**
 * Displaying an array of counters
 * @param {DisplayingArrayProps} props 
 * @returns 
 */

const DisplayingArray = (props) => {

    return (
        props.array.map((item) => (
            <div key={item.id}>
                <FuncCounter />
            </div>
    )))
};

DisplayingArray.propTypes = {
    array: PropTypes.array
}

export default DisplayingArray;