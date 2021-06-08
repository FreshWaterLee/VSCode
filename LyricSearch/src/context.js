import React, { Component } from 'react'
import axios from 'axios'

const Context =React.createContext();

export class Provider extends Component {
    state = {
        track_list : [
         {track: { track_name: 'abc' } },
         {track: { track_name: '123' } },
        ],
        heading:'Top 10 Tracks'
    };
    // https://cors-anywhere.herokuapp.com/ 
    // <- 웹 API 사용시 앞에 작성하면 연결할 수 있다
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ko&f_has_lyrics=1&apikey=8bcedbc17a71a0a3b0f55efaa4a6211e`)
        .then(res => {
        console.log(res.data);
        this.setState({track_list: res.data.message.body.track_list});
        })
        .catch(err => console.log(err));
    }
    render() {
    return (
        <Context.Provider value ={this.state}>
            {this.props.children}
        </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;