import React, { Component } from 'react';


class Header extends Component {
    constructor(){
        super()
        this.state = ({
            scrolled: false
        })
    }
    componentDidMount(){
        window.addEventListener ("scroll", () =>{
            const isTop = window.scrollY < 50;
            if(isTop !== true){
              this.setState({
                scrolled: true
              })
            }
            else{
              this.setState({
                scrolled: false
              })
            }
        })
    }
    componentWillUnmount(){
      window.removeEventListener("scroll")
    }
    render() {
        return (
            <header id="myHeader" className={this.state.scrolled ? "scrolled" : "none"}>
                <nav className="navbar-div">
                <div className="enlinea espacio_logo">
                    <h3 className="logo">Alma</h3>
                </div>
                <div className="enlinea derecho espacio_menu ">
                    <ul className="miMenu">
                        <li>Home</li>
                        <li>Contacto</li>
                    </ul>

                </div>
                </nav>
            </header>
        );
    }
}

export default Header;