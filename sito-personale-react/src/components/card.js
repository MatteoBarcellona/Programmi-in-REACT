import React, {Component} from 'react';

class Card extends Component {
    render() {
    return(
        <div className="col">
        <div className="card" style={{ 
            width: '24rem',
            height: '29rem',
            textAlign: 'center',
            margin: '10px',
            backgroundColor: this.props.card.color // Correzione qui
        }}>
            <img src={this.props.card.c} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.card.nome}</h5>
                <p className="card-text">{this.props.card.p}</p>
                <a href={this.props.card.link} className={this.props.card.bb}>Clicca per visitare</a>
            </div>
        </div>
    </div>
    );
}
}

export default Card;