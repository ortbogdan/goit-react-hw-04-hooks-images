import React, { Component } from "react";
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import {BiSearchAlt2} from "react-icons/bi"
export class Searchbar extends Component  {
  state = {
    searchImg: ''
  }
  handleChange = (event) => {
    const searchedImg = event.currentTarget.value;
    const normalizeSearcedImg = searchedImg.trim().toLowerCase()
    this.setState({searchImg: normalizeSearcedImg })
  }
  handleSabmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state.searchImg);
    this.setState({searchImg: ''})
  }
  render() {
    return (<SearchbarWrapper className="searchbar">
      <SearchForm className="form" onSubmit={this.handleSabmit}>
        <SearchFormButton type="submit" className="button" >
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