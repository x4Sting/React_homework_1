import React from "react";
import PropTypes from "prop-types"; 

import Controls from "./Controls";
import Displaying from "./Displaying";
import Header from "./Header";

import "./index.css";

/** 
 * @typedef ClassCounterProps
 * @property {string} header
*/

/**
 * Representation of a counter through a class
 * @param {ClassCounterProps} props 
 * @returns 
 */

class ClassCounter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        console.log("componentDidMount(\"ClassCounter\")");
    }
  
    componentWillUnmount() {
        console.log("componentWillUnmount(\"ClassCounter\")");
    }

    render(){
        return (
            <>
                <Header header = {this.props.header}/>
                <div className = "counter">
                    <Displaying counter = {this.state.counter}/>
                    <Controls counter = {this}/>
                </div>
            </>
        );
    }
}

ClassCounter.propTypes = {
    header: PropTypes.string
}

ClassCounter.defaultProps = {
    header: "Header Text"
}

export default ClassCounter;