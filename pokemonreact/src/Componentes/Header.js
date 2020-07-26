import React from 'react';


const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper  blue darken-1" >
                    <a href="/" className="brand-logo center" align='center'>Loja Pokemon</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/agua">Água</a></li>
                        <li><a href="/fogo">Fogo</a></li>
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
            </nav>
    );
}
export default Header;
