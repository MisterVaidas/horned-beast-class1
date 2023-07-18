import React from 'react';
import HornedBeast from '../components/HornedBeast';
import Minotaur from '../images/Minotaur.jpg';
import Babhomet from '../images/Babhomet.jpg';


const Main = () => {
    return (
      <main>
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
      </main>
    );
  };
  

export default Main;