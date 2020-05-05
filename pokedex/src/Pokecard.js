import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 
`https://pokeres.bastionbot.org/images/pokemon/`

//detail/'
class Pokecard extends Component {
    render() {
        let imgSrc =  `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
               <div className='Pokecard-img'><img src={imgSrc} /></div> 
            <div className='Pokecard-data'>Type: {this.props.type}</div>
            <div className='Pokecard-data'>Exp: {this.props.exp}</div>
            </div>
        )
    }
}
export default Pokecard;