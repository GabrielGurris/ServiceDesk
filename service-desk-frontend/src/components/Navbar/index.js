import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
        <>
                <nav class="navbar navbar-expand-md sticky-top bg-danger pt-2 pb-2">
                    <a class="navbar-brand col-sm-4 col-md-2 mr-0 text-dark font-weight-bold" href="#">Service-desk</a>
                    
                    <ul class="navbar-nav col-md-auto mr-auto">
                        <li class="nav-item">
                            <a class="nav-link pr-5 text-warning" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="#">Sobre</a>
                        </li>
                    </ul>
                </nav>
        </>
        );
    };
};

export default Navbar;