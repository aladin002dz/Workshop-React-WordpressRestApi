import React, { Component } from 'react'
import axios from "axios"
import BookItem from "./BookItem"
import clientConfig from './client-config';

export class Books extends Component {
    state = {
        books: [],
        isLoaded: false
    }

    componentDidMount() {
        const wordPressSiteUrl = clientConfig.siteUrl;
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/books/`)
        .then(res => this.setState({books: res.data, isLoaded:true}))
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state);
        const {books, isLoaded} = this.state;
        books.forEach(book => console.log(book.id +"-"+book.title.rendered));
        if(isLoaded){
            return (
                <ul className="list-group shadow-lg m-5 bg-white rounded">
                    {books.map(book => (
                        <BookItem key={book.id} book={book}/>

                    )) }
                </ul>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default Books
