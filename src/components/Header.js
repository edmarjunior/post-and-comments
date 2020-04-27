import React, { Component} from 'react';
import facebookImg from '../assets/facebook-logo.png';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div>
                    <a href="/" class="pr20">
                        <img width='150px' src={facebookImg} /> 
                    </a>
                    
                </div>
                <div>
                    <a href="/" class="pr20">Meu perfil</a>
                    <a href="/" class="pr20">
                        <span class="material-icons">account_circle</span>
                    </a>
                </div>
            </div>
        )
    }

}

export default Header;