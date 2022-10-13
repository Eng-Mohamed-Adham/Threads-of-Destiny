import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './TaypingTitle.css'



const TaypingTitle = () => {
  return (
    <div className='tayping-body'>
      
      <ReactTypingEffect
      className='typing-text'
      // eraseSpeed
      cursor=''

        text={["Welcome To ", "Reza Store"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <div>
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
            </div>
          );
        }}        
      />

      <div className='stock'>
        <img className='stock-img' src='typestock.png' alt='' />
      </div>
    </div>
  );
};
export default TaypingTitle