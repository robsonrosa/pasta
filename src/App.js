import React from 'react';
import './app.css'






  function cv (p) {
  return <div className="cv">
        <h3 className='p1'>{p.player1}</h3>
        <h3 className='p2'>{p.player2}</h3>
        <p className='n1'>{p.nome1}</p>
        <p className='n2'>{p.nome2}</p>
        <p >{p.imagem}</p>
    </div>
  }
function cv2 (virtual){
return<div className="cv2">
  {virtual.map(l => cv(l))}
</div>}



function cocha() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='select'>Player Select</h1>
        


      { cv2 ([
        { 
          player1: '1p' ,
          nome1: 'Ryu',
          imagem : <img direita src='https://www.fightersgeneration.com/np5/char/ssf2hd/ryu-hdstance.gif' alt='Ryu' id='direita'/>
        },

      { 
          player2:'2p',
          nome2:'Ken',
          imagem: <img esquerda src='https://www.fightersgeneration.com/np5/char/ssf2hd/ken-hdstance.gif' alt='Ken' id='esquerda'/>
      },
      {
        
          
      }

        

      ])}
      </header>
    </div>
  );
}

export default cocha;