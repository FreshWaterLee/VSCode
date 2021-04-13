import React from "react";

class Child extends React.Component{
    render(){
        return( 
        <div>
            <h1 style={{color : this.props.titleColor}}>Child Component</h1>
        </div>);
    }
}

export default Child;