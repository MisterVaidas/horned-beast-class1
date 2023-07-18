import React from 'react';
import HornedBeast from '../components/HornedBeast';
import Minotaur from '../images/Minotaur.jpg';
import Babhomet from '../images/Babhomet.jpg';
import Unicorn from '../images/Unicorn.png';
import Cernunnos from '../images/Cernunnos.jpg';
import '../css/styles.css';



const Main = () => {
    return (
      <main className='grid-container'>
        <HornedBeast
          title="Minotaur"
          imageURL={Minotaur}
          description="The Minotaur is a popular subject in art and literature. It has been depicted in paintings, sculptures, and works of fiction for centuries. The Minotaur is a symbol of strength, power, and danger. It is also a reminder of the dangers of hubris and the importance of self-control."
        />
        <HornedBeast
          title="Baphomet"
          imageURL={Babhomet}
          description="Baphomet is a goat-headed figure that is often associated with Satanism. The name Baphomet first appeared in trial transcripts for the Inquisition of the Knights Templar starting in 1307. It first came into popular English usage in the 19th century during debate and speculation on the reasons for the suppression of the Templar order."
        />
        <HornedBeast 
          title='Unicorn'
          imageURL={Unicorn}
          description='A unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead. The unicorn is often depicted as a white horse with a single horn in the middle of its forehead. It is said to be a gentle and pure creature, and it is often associated with magic and healing.'
        />
        <HornedBeast 
          title='Cernunnos'
          imageURL={Cernunnos}
          description='Cernunnos is a horned god of the Celts, often associated with nature, fertility, and the wild. He is depicted as a bearded man with antlers, sitting cross-legged and holding a torc and a bag of coins. He is also sometimes seen with a ram-horned serpent or a stag.'
        />
      </main>
    );
  };
  

export default Main;