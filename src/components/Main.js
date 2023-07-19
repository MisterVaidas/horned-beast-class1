import React, { useState } from 'react';
import HornedBeast from '../components/HornedBeast';
import Minotaur from '../images/Minotaur.jpg';
import Babhomet from '../images/Babhomet.jpg';
import Unicorn from '../images/Unicorn.png';
import Cernunnos from '../images/Cernunnos.jpg';
import Ibex from '../images/Ibex.jpg';
import Markhor from '../images/Markhor.jpg';
import Bison from '../images/Bison.jpg';
import Blackbuck from '../images/Blackbuck.jpg';
import Eland from '../images/Eland.jpg';
import GreaterKudu from '../images/GreaterKudu.jpg';
import Impala from '../images/Impala.jpg';
import Oryx from '../images/Oryx.jpg';
import '../css/styles.css';

const Main = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((favorite) => favorite !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  return (
    <main className='grid-container'>
      <div className='row'>
        <div className='col-md-6'>
          <HornedBeast
            title='Minotaur'
            imageURL={Minotaur}
            description='The Minotaur is a popular subject in art and literature. It has been depicted in paintings, sculptures, and works of fiction for centuries. The Minotaur is a symbol of strength, power, and danger.'
            isFavorite={favorites.includes('Minotaur')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        <div className='col-md-6'>
          <HornedBeast
            title='Baphomet'
            imageURL={Babhomet}
            description='Baphomet is a goat-headed figure that is often associated with Satanism. The name Baphomet first appeared in trial transcripts for the Inquisition of the Knights Templar starting in 1307.'
            isFavorite={favorites.includes('Babhomet')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <HornedBeast
            title='Unicorn'
            imageURL={Unicorn}
            description='A unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead. '
            isFavorite={favorites.includes('Unicorn')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        <div className='col-md-6'>
          <HornedBeast
            title='Cernunnos'
            imageURL={Cernunnos}
            description='Cernunnos is a horned god of the Celts, often associated with nature, fertility, and the wild. He is depicted as a bearded man with antlers, sitting cross-legged and holding a torc and a bag of coins. He is also sometimes seen with a ram-horned serpent or a stag.'
            isFavorite={favorites.includes('Cernunnos')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <HornedBeast
            title='Ibex'
            imageURL={Ibex}
            description='Ibex are mountain goats with long, curved horns. They are found in Europe, Asia, and Africa. Ibexes are sure-footed climbers and can scale steep cliffs with ease. They are also very agile and can jump long distances.'
            isFavorite={favorites.includes('Ibex')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        <div className='col-md-6'>
          <HornedBeast
            title='Markhor'
            imageURL={Markhor}
            description='Markhor (Capra falconeri) is a large wild goat species native to Central Asia. It is the national animal of Pakistan. Markhors are known for their long, spiraled horns, which can grow up to 6 feet long in males. The horns are used for defense and for fighting over mates.'
            isFavorite={favorites.includes('Markhor')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
      </div>
        <div className='row'>
          <div className='col-md-6'>
            <HornedBeast
              title='Bison'
              imageURL={Bison}
              description='Bison are the largest land mammals in North America and Europe. They are herbivores and their diet consists of grasses, herbs, and leaves. '
              isFavorite={favorites.includes('Bison')}
              onFavoriteToggle={handleFavoriteToggle}
              />
          </div>
          <div className='col-md-6'>
          <HornedBeast
            title='Blackbuck'
            imageURL={Blackbuck}
            description='The blackbuck (Antilope cervicapra) is a medium-sized antelope native to India and Pakistan. It is the national animal of India. Blackbuck are known for their long, straight horns and their distinctive black and white markings. '
            isFavorite={favorites.includes('Blackbuck')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <HornedBeast
              title='Eland'
              imageURL={Eland}
              description='Eland are a fascinating animal and are a testament to the power of adaptation. They are able to live in some of the most challenging environments on Earth and have survived for thousands of years.'
              isFavorite={favorites.includes('Eland')}
              onFavoriteToggle={handleFavoriteToggle}
              />
          </div>
          <div className='col-md-6'>
          <HornedBeast
            title='Greater Kudu'
            imageURL={GreaterKudu}
            description='The greater kudu (Tragelaphus strepsiceros) is a large antelope found in eastern and southern Africa. It is the second-largest antelope in Africa, after the eland. '
            isFavorite={favorites.includes('GreaterKudu')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <HornedBeast
              title='Impala'
              imageURL={Impala}
              description='The impala (Aepyceros melampus) is a medium-sized antelope found in eastern and southern Africa. It is the most common antelope in Africa.'
              isFavorite={favorites.includes('Impala')}
              onFavoriteToggle={handleFavoriteToggle}
              />
          </div>
          <div className='col-md-6'>
          <HornedBeast
            title='Oryx'
            imageURL={Oryx}
            description='The oryx (Oryx gazella) is a large antelope found in Africa and the Middle East. It is known for its long, straight horns, which can grow up to 1.2 meters long in males. Oryxes have a reddish-brown coat with white markings.'
            isFavorite={favorites.includes('Oryx')}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        </div>
    </main>
  );
};

export default Main;
