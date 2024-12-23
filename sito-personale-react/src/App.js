import React, {Component} from 'react';
import Navbar from './components/navbar';
import Card from './components/card';



import img from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';

class App extends Component {
  state = {
    cards:[
    { id:0, nome:"HTML",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su HTML. Analizzeremo come vengono sviluppati vari siti web utilizzando questo linguaggio. Gli esempi includeranno tecniche pratiche e approcci per creare pagine funzionali.",c:img,color:'rgb(255, 119, 0)',link:'https://github.com/MatteoBarcellona/Programmi-in-HTML',bb:'btn btn-danger'},
    { id:1, nome:"CSS",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su CSS. Analizzeremo come vengono applicati gli stili per migliorare l'aspetto dei siti web. Gli esempi includeranno tecniche di layout, colori e gestione dei font.",c:img2 ,color:'rgb(92, 149, 255)',link:'https://github.com/MatteoBarcellona/Programmi-in-CSS',bb:'btn btn-primary'},
    { id:2, nome:"JAVASCRIPT",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su HTML, CSS e JavaScript. Analizzeremo come strutturare, stilizzare e aggiungere interattività ai siti web.",c:img3 ,color:'rgb(255, 230, 0)',link:'https://github.com/MatteoBarcellona/Programmi-in-JAVASCRIPT',bb:'btn btn-warning'},
    { id:3, nome:"C++",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su HTML, CSS e JavaScript. Analizzeremo come strutturare, stilizzare e aggiungere interattività ai siti web. Infine, esploreremo esempi.",c:img4,color:'rgb(111, 159, 248)',link:'https://github.com/MatteoBarcellona/Programmi-in-C-',bb:'btn btn-primary' },
    { id:4, nome:"JAVA",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su Java. Analizzeremo come utilizzare questo linguaggio per sviluppare applicazioni e gestire oggetti. Infine, esploreremo concetti come le classi.",c:img5,color:'rgb(255, 119, 0)',link:'https://github.com/MatteoBarcellona/Programmi-in-JAVA',bb:'btn btn-danger' },
    { id:5, nome:"PHP",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su PHP. Analizzeremo come utilizzare PHP per creare siti web dinamici e gestire database. Infine, esploreremo esempi pratici per la gestione di form.",c:img6,color:'rgb(196, 196, 196)',link:'https://github.com/MatteoBarcellona/Programmi-in-PHP',bb:'btn btn-secondary'},
    { id:6, nome:"PYTHON",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su Python. Analizzeremo come utilizzare Python per risolvere problemi, sviluppare applicazioni e analizzare dati. Infine, esploreremo esempi pratici su variabili.",c:img7,color:'rgb(188, 187, 187)',link:'https://github.com/MatteoBarcellona/Programmi-in-PYTHON',bb:'btn btn-secondary' },
    { id:7, nome:"REACT",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su React. Analizzeremo come creare interfacce utente dinamiche utilizzando componenti e stato. Infine, esploreremo esempi pratici su JSX, gestione.",c:img8,color:'rgb(0, 242, 255)',link:'https://github.com/MatteoBarcellona/Programmi-in-REACT',bb:'btn btn-info' },
    { id:8, nome:"ANGULAR",p:"Qui vedremo gli esercizi svolti durante il periodo scolastico su Angular. Analizzeremo come costruire applicazioni web complesse utilizzando componenti, servizi e moduli. Infine, esploreremo esempi pratici su data binding.",c:img9,color:'rgb(255, 0, 0)',link:'https://github.com/MatteoBarcellona/Programmi-in-ANGULAR',bb:'btn btn-danger' }
  ]
}

  render(){
  return (
    <>
      <Navbar />
      <div className="container">
      <h1 style={{ textAlign: 'center',color:'white' }}>Matteo Barcellona</h1>
      <div className="row">
        {this.state.cards.map(card => (
          <Card key={card.id} card={card}/>
        ))}
      </div>
      </div>
    </>
  );
}
}

export default App;