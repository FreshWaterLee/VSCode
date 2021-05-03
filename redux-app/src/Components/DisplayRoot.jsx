import React,{Component} from 'react';
import DisplayNumber from '../container/DisplayNum';
export default class DisplayRoot extends Component{
    render(){
      return(
        <div>
          <h1>Display Number Root</h1>
          <DisplayNumber unit = "kg"/>
        </div>
      )
    }
  }
  