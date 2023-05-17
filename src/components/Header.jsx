import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>

        <div className="container">
          <img src={require('../bg.jpg')}  alt="Snow" style={{width:"100%"}} />
          <div className="centered">
            <h1>Stunning royalty-free images & royalty-free stock</h1>
            <p>Over 4 million+ high quality stock images, videos and music shared by our talented community.</p>
            <input  type="text" className="search" placeholder="Search for all images on Pixabay"/>
          </div>
        </div>
      </>
    )
  }
}

export default Header;