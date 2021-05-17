import { Component } from 'react';
import store from '../store';
class transdata extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:'',
        }
    }
    goto_table=()=>{
        fetch("http://localhost:3001/alltable",{
            method:"post",
            headers : {
            "content-type" : "application/json",
            },
        }).then((res)=>res.json())
        .then((json)=>{
            this.setState({
                data : json.data,
            })
        }).then(()=>{
            store.dispatch({type:"Watching", data:this.state.data});
            this.props.history.push("/showTable2");
        })   
    }
    render(){
        this.goto_table()
        return(
            <div>Loading....</div>
        )
    }
}
export default transdata