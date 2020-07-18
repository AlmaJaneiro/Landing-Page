import React, { Component } from 'react';
import "./css/estilos.css";

class Footer extends Component {

    getYear = () => {
        const fecha = new Date();
        return fecha.getFullYear()
    }
    myaGE = () =>{
        const fecha = new Date()
        return fecha.getFullYear() - 1993;
    }
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h3 className="blanco">Alma Fernanda</h3>
                            <p className="blanco">Software Engineer {this.myaGE()}</p>
                        </div>
                        <div className="col-3">
                            <h3 className="blanco">Sígueme</h3>
                            <ul className="misRedes">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-wordpress"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-youtube"></i></li>
                            </ul>
                            
                        </div>
                        <div className="col-3">
                            <h3 className="blanco">Sitemap</h3>
                            <ul>
                                <li className="mail">Home</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h3 className="blanco">Contacto</h3>
                            <a className="mail peso_900" href="mailto:almasuarez93@hotmail.com">almasuarez93@hotmail.com</a>
                        </div>
                        <hr />
                        <div className="col-12 derecho espacio-year">
                            <span className="blanco">Alma {this.getYear()} &copy;</span>
                        </div>
                    </div>
                </div>
                
            </footer>
        );
    }
}

export default Footer;