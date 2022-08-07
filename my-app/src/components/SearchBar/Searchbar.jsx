import React, { Component } from 'react'
import { toast } from 'react-toastify';
import css from './Searchbar.module.css'
import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types'; 

class Searchbar extends Component {
  state = {
    valueInput: '',
  
}

  handleChange = e => {
    // console.log(e.currentTarget.value);
        this.setState({
      valueInput: e.currentTarget.value.toLowerCase()})
  } 

  submitForm = e => {
    e.preventDefault();

    if (this.state.valueInput.trim() === '') {
      toast.error('Введите запрос', 
  {theme: "colored"}
);
      return;
    }
    this.props.onSubmit(this.state.valueInput);
    this.setState({valueInput: ''})
  }

  render() {

    return (

      <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={this.submitForm}>
          <button className={css.SearchForm_button}
            type='submit'><FaSearch /></button>
          <input className={css.SearchForm_input}
            value={this.state.valueInput}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
      autoFocus
      placeholder="Search news articles"/>
      </form>
    </header>
    )  
  }   
}
  
Searchbar.propTypes = {
  onSubmit: PropTypes.string,
}

export default Searchbar