import React from "react";
import Child from"../pages/Children/Children";

class Parent extends React.Component{
    constructor(){
        super();
        this.state = {
            color : "red",
        };
    }

    render(){
        return (
            <div>
                <h1> Parent Component</h1>
                <Child titleColor={this.state.color} />
            </div>
        );
    }
}

export default Parent;