import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Link} from 'react-router-dom'
import clientConfig from './client-config';

export class BookItem extends Component {

    state = {
        imgUrl: '',
        author:'',
        isLoaded:false
    }

    static propTypes = {
        book: PropTypes.object.isRequired
    };

    componentDidMount(){
        const {author} = this.props.book;
        const wordPressSiteUrl = clientConfig.siteUrl;

        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/users/${author}`)
        .then(res => this.setState({
            author: res.data.name,
            isLoaded: true
        }));
    }

    render() {
        const {id, title, excerpt} = this.props.book;
        const {author, isLoaded} = this.state;
        if(isLoaded){
            return (
                <li className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-4">
                            <h2>{title.rendered}</h2>
                            <small className="px-2">
                                Review by <strong>{author}</strong>
                            </small> 
                        </div>
                        <div className="col-sm-12 col-md-4" dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                        <div className="col-sm-12 col-md-4">
                            <Link to={`/book/${id}`}>Read Review &gt;</Link>
                        </div>
                    </div>
                </li>
            )
        }
        return null;

    }
}

export default BookItem
