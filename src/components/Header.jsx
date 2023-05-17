import React from 'react';
import './header.css';
class Header extends React.Component {
  inputValue = () => {
    const inpSearch = document.querySelector('.search');
    this.props.setData(inpSearch.value);
  };

  render() {
    return (
      <>
        <div className="container">
          <img
            className="image-header"
            src={require('../bg.jpg')}
            alt="Snow"
            style={{ width: '100%' }}
          />
          <div className="centered">
            <h1>Stunning royalty-free images & royalty-free stock</h1>
            <p>
              Over 3 million+ high quality stock images shared by our talented
              community.
            </p>
            <label className="label">
              <i onClick={this.inputValue} className="ri-search-line"></i>
              <input
                type="text"
                className="search"
                placeholder="Search for all images on Pixabay"
              />
              {/* <ul className="dropdown-list">
                <li>
                  <a href="#">Renato Oliveira</a>
                </li>
                <li>
                  <a href="#">Fernando Lins</a>
                </li>
                <li>
                  <a href="#">José Menezes</a>
                </li>
              </ul>
              <button className="btn-dropdown-list">Photo Type</button> */}
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
