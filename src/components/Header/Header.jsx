import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>The library of your books</h2><br />
                <p className='header-text fs-18 fw-3'>Whether you prefer classics or contemporary bestsellers, MyLibrary has something for everyone. Our easy-to-use search function makes it effortless for you to find the book you are looking for. And with our secure and safe platform, you can enjoy a seamless reading experience.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header