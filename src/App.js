import React from "react";
import ArrayCounters from "./Components/ArrayCounters";
import ClassCounter from "./Components/ClassCounter";
import ControlledArrayCounters from "./Components/ControlledArrayCounters";
import FuncCounter from "./Components/FuncCounter";

class App extends React.Component {
  render(){
    return ( 
      <div className = "root-block">
        <ClassCounter header = "Class counter"/>
        <FuncCounter header = "Func counter"/>
        <ArrayCounters header = "Array counters"/>
        <ControlledArrayCounters header = "Controlled array of counters"/>

      </div>
    );
  };
}

export default App;
