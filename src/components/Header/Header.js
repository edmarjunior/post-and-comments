import React, { Component} from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { DivHeader } from './styles';
import facebookImg from '../../assets/facebook-logo.png';

class Header extends Component {
    render() {
        return (
            <DivHeader>
                <div>
                    <span>
                        <img width='150px' src={facebookImg} /> 
                    </span>
                </div>
                <div>
                    <span>Meu perfil</span>
                    <span>
                        <MdAccountCircle></MdAccountCircle>
                    </span>
                </div>
            </DivHeader>
        )
    }
}

export default Header;
