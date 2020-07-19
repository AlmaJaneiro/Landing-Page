import React, { Component } from 'react';

class SeccionHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frase: "My hobbie is to help people with the tech enviroment"
        };
    }
    componentDidMount(){
        setInterval(() => {
            const item = this.RandomPhrase()
            this.setState({
                frase : item
            })
        }, 2000)

    }
    

    RandomPhrase = () =>{

        const frases = ["I am a Web Developer", "Most of my time i do Front End", "I love eating Chicken", "I am working with React", "I have my blog in Gatsby", "My love for Wordpress is unmeasurable"]

        const  item = frases[Math.floor(Math.random() * frases.length)];

       return item
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="espacio_intro">
                                <h1 className="morado peso_400 no_spc">Alma Fernanda 👩🏽‍💻 </h1>
                                <h2 className="morado ">
                                    { this.state.frase } 
                                </h2>
                            </div>
                        </div>
                        <div className="col-6">
                            <img alt="Alma desarrolladora" className="bounce-1" src="https://almasuarez.com/static/mobile-screen-38f4a72e4c30294deb893a96c86e4566.png" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SeccionHome;