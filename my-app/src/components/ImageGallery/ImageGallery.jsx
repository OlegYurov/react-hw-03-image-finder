import React, { Component } from 'react'
// import { Oval } from 'react-loader-spinner'
import Loader from '../Loader'
import Button from '../Button'
import ImageGalleryIt from '../ImageGalleryIt/ImageGalleryIt';
import PropTypes from 'prop-types'; 


class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        error: null,
       status: 'idle'
  };

  loadMore = () => {
      console.log(this.state.page);
    this.fetchArticles();   
        };
  

  
  componentDidUpdate(prevProps, prevState) {
      const prevName = prevProps.articles;
      const nextName = this.props.articles;  
  
    if (prevName !== nextName) {
       this.setState({images: [], page: 1,status: 'pending'})
      // console.log('Изменилcz запрос');     
      this.fetchArticles();         
    }
  };
  
  fetchArticles = () => {
    console.log(this.state.page);
    const options = {
        headers: {
            Authorization: 'b18ae68107ef4b759ec335d1e1ae11bf',
        },
    };
    const url =
      `https://newsapi.org/v2/everything?q=${this.props.articles}&language=en&pageSize=10&page=${this.state.page}`;
    
 
    fetch(url, options)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет ответа на запрос с именем ${this.nextName}`)
          )
        })
      .then(({ articles }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...articles],
          status: 'resolved',
          page: prevState.page + 1,
      
        }))
      })
      .catch(error => this.setState({ error, status: 'error' }));
  }
  
  // Сушествуе баг, при изменении запроса ставится предыдушее значение 
  // page, далее очет начинается с 2.
  render() {
    
    const {images, error, status} = this.state;
    if (status === 'pending') {
      return   <Loader/> 
    }
    
    if (status === 'rejected') {
      return <h1>{error.message }</h1>
    }

    if (status === 'resolved') {
      return <>
        <ImageGalleryIt images={images} />
         
        {this.state.images.length !== 0 && <Button loadMore={this.loadMore} />}
          </>
    }        
  }
}

ImageGallery.propTypes = {
  articles: PropTypes.string.isRequired,
}

export default ImageGallery;