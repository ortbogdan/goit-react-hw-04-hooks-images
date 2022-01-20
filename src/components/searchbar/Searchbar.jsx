import React, { Component } from "react";
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import {BiSearchAlt2} from "react-icons/bi"
export class Searchbar extends Component  {
  state = {
    searchImg: ''
  }
  handleChange = (event) => {
    const searchedImg = event.currentTarget.value;
    const normalizeSearchedImg = searchedImg.trim().toLowerCase();
    this.setState({ searchImg: normalizeSearchedImg });
  }
  handleSabmit = (event) => {
    event.preventDefault();
    if (this.state.searchImg.trim() === '') {
      return alert('Enter the name of the pictures!');
    }
    this.props.onSubmitForm(this.state.searchImg);
    this.setState({searchImg: ''})
  }
  render() {
    return (<SearchbarWrapper className="searchbar">
      <SearchForm className="form" onSubmit={this.handleSabmit}>
        <SearchFormButton type="submit" className="button" aria-label="Search button" >
          <BiSearchAlt2 fill={ '#3f51b5' } size={36}/>
          {/* <SearchFormButtonLabel className="button-label"/> */}
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
    </SearchbarWrapper>)
  }
}