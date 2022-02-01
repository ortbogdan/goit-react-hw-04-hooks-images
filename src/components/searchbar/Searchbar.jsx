
import { useState } from "react";
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import { BiSearchAlt2 } from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmitForm }) => {
const [searchImg, setSearchImg] = useState('')

 const handleChange = (event) => {
   const searchedImg = event.currentTarget.value.trim();
   setSearchImg(searchedImg.toLowerCase());
  }
 const handleSabmit = event => {
    event.preventDefault();
    if (searchImg.trim() === '') {
      return toast('Enter a name of the pictures!');
    }
    onSubmitForm(searchImg);
  }
  return <SearchbarWrapper className="searchbar">
       <SearchForm className="form" onSubmit={handleSabmit}>
         <SearchFormButton type="submit" className="button" aria-label="Search button" >
           <BiSearchAlt2 fill={ '#3f51b5' } size={36}/>
         </SearchFormButton>
         <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
      <ToastContainer limit={1} autoClose={3000}/>
    </SearchbarWrapper>
  }
Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
}