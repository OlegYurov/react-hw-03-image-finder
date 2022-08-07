import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
import Searchbar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import PropTypes from 'prop-types'; 


class App extends Component {
    state = { 
     articles: null,
     images: '',

    }

    handlFormSubmit = articles => {
     this.setState({articles});
                
    }
   
    render() { 
        
        return ( 
           
            <div className={css.App}>
                <Searchbar onSubmit={this.handlFormSubmit} />
                                                
                <ImageGallery articles={this.state.articles}/>
                
                <ToastContainer autoClose={2000} />
                      
            </div>
         );
    }
}

App.propTypes = {
  articles: PropTypes.string.isRequired,
}
 
export default App;