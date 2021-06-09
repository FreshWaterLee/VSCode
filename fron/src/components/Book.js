import React, { Component } from 'react'

export class Book extends Component {
    state = {
        books:[],
        isLoaded:false
    }

    componentDidMount(){
        axios.get('/wp-json/wp/v2/books').then().catch();
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Book
