import React from "react";
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export const Searchbar=({onSubmit}) => {

 return (<SearchbarWrapper className="searchbar">
  <SearchForm className="form" onSubmit={onSubmit}>
     <SearchFormButton type="submit" className="button" >
      <SearchFormButtonLabel className="button-label"></SearchFormButtonLabel>
    </SearchFormButton>
    <SearchFormInput
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="filter" 
    />
  </SearchForm>
</SearchbarWrapper>)
    
}