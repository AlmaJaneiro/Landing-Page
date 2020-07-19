import React, { Component } from 'react';
import "./css/estilos.css";
import Social from "./Social.js"

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
                                <Social clase="facebook" link ="https://www.facebook.com/AlmaSuarezH/" />
                                <Social clase="instagram" link ="https://www.instagram.com/almasuarezh/" />
                                <Social clase="twitter" link ="https://twitter.com/AlmaJaneiro" />
                                <Social clase="wordpress" link ="https://almasuarez.com/" />
                                <Social clase="linkedin" link ="https://www.linkedin.com/in/alma-fernanda-suarez-777a32b3/" />
                                <Social clase="youtube" link ="https://www.youtube.com/channel/UCaPBeG1InIWyjyRNDTfk3gw" />
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