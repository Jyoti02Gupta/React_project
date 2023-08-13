import React from 'react';

const Navbar = () => {
    return(
        <div>
            <div>Navbar</div>
            <button>Click</button>
            <div class="header">
            <a href="#default" class="logo">Logo</a>
            <div class="header-right">
              <a class="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
        </div>
        </div>
    )
}
export default Navbar