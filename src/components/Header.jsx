import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>

        <div className="container">
          <img className="image-header" src={require('../bg.jpg')}  alt="Snow" style={{width:"100%"}} />
          <div className="centered">
            <h1>Stunning royalty-free images & royalty-free stock</h1>
            <p>Over 3 million+ high quality stock images shared by our talented community.</p>
            <label>
            <i class="ri-search-line"></i>
            <input   type="text" className="search" placeholder="Search for all images on Pixabay" />
            </label>
          </div>
        </div>
      </>
    )
  }
}

export default Header;