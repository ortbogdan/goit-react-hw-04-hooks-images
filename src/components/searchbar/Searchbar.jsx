import React, { Component } from "react";
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import { BiSearchAlt2 } from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';
export class Searchbar extends Component  {
  state = {
    searchImg: ''
  }
  handleChange = (event) => {
    const searchedImg = event.currentTarget.value.trim();
    this.setState({ searchImg: searchedImg.toLowerCase() });
  }
  handleSabmit = (event) => {
    event.preventDefault();
    if (this.state.searchImg.trim() === '') {
      return toast('Enter a name of the pictures!');
    }
    this.props.onSubmitForm(this.state.searchImg);
  }
  render() {
    return (<SearchbarWrapper className="searchbar">
      <SearchForm className="form" onSubmit={this.handleSabmit}>
        <SearchFormButton type="submit" className="button" aria-label="Search button" >
          <BiSearchAlt2 fill={ '#3f51b5' } size={36}/>
        </SearchFormButton>
        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </SearchForm>
      <ToastContainer limit={1} autoClose={3000}/>
    </SearchbarWrapper>)
  }
}
Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
}