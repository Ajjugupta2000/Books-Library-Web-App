import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About MyLibrary</h2>
            <p className='fs-17'>A library is a place where books and sources of information are stored. They make it easier for people to get access to them for various purposes. Libraries are very helpful and economical too. They include books, magazines, newspapers, DVDs, manuscripts and more. In other words, they are an all-encompassing source of information.</p>
            <p className='fs-17'>A public library is open to everyone for fulfilling the need for information. They are run by the government, schools, colleges, and universities. The members of the society or community can visit these libraries to enhance their knowledge and complete their research.</p>

            <p className='fs-17'>In short, libraries are a great place to gain knowledge. They serve each person differently. They are a great source of learning and promoting the progress of knowledge. One can enjoy their free time in libraries by reading and researching. As the world has become digitized, it is now easier to browse through a library and get what you are looking for. Libraries also provide employment opportunities to people with fair pay and incredible working conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
