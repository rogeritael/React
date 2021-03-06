import React, {Component} from 'react';
import './filme.css'

class Filme extends Component{
    constructor(props){
        super(props)
        this.state = {
            filme: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filme: json})
        });

    }

    render(){
        return(
            <div className="filme-info">
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} alt="capa filme"/>
                {this.state.filme.length !== 0 &&
                    <h3>Sinopse</h3>
                }
                <p>{this.state.filme.sinopse}</p>
            </div>
        );
    }
}

export default Filme;