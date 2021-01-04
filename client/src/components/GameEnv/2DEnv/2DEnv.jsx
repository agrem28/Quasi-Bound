import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import Card from './card';
import './2denv.css';

const socket = io.connect('', {
  transports: ['websocket'],
});
const TwoDEnv = ({
  slots, setSlots, deck, user, setTurn, setDeck, turn, enemySlots,
}) => {
  const [resource, setResource] = useState([
    true, false, false, false, false, false, false, false, false, false, false, false]);
  const [count, setCount] = useState(0);
  const [cardInHand, setCardInHand] = useState([deck[0], deck[1], deck[2], deck[3], deck[4]]);
  const [cardIndex, setCardIndex] = useState(0);
  const [clicked, setClick] = useState(false);
  const [resourceCount, setResourceCount] = useState(resource.join('').split('true').length - 1);
  const [taken, setTaken] = useState(0);
  const handleResource = (num, check) => {
    if (check && user) {
      socket.emit('end', user.id_enemy);
      setTurn(false);
      setCount(num);
      deck.map(() => {
        if (cardInHand.length < 5) {
          cardInHand.push(deck.shift());
        }
        return false;
      });
    }
    resource.map((val, i) => {
      if (i <= num) {
        resource[i] = true;
      } else {
        resource[i] = false;
      }
      return false;
    });
    setResource([...resource]);
    setResourceCount(resource.join('').split('true').length - 1);
  };

  useEffect(() => {
    deck.splice(0, 5);
    setDeck([...deck]);
  }, []);

  return (
    <div>
      {(turn) ? (
        <div className="main">
          <div className="deck">{`DECK:  ${deck.length}CARDS`}</div>
          <div className="discard">discard</div>
          <div className="Resourceholder">
            {resource.map((val, i) => <div key={`${String(i)}`} style={{ backgroundColor: val ? 'blue' : null }} className="ResourcePoints">{}</div>)}
          </div>
          <div className="placements">
            {slots.map((val, i) => (
              <div
                aria-hidden="true"
                onClick={() => {
                  if (clicked && !val && user) {
                    const arr = slots;
                    arr[i] = clicked;
                    socket.emit('placed', user.id_enemy, [...arr], enemySlots);
                    setSlots([...arr]);
                    setClick(false);
                    cardInHand.splice(cardIndex, 1);
                    setCardInHand(cardInHand);
                    setResourceCount(resourceCount - taken);
                    handleResource(resourceCount - taken - 1);
                  } else {
                    setClick(false);
                  }
                }}
                className={val ? 'placed' : 'slots'}
                key={`${String(i)}`}
              >
                {}
              </div>
            ))}
          </div>
          <div className="cards">
            {cardInHand.map((val, i) => <Card i={i} setCardIndex={setCardIndex} setTaken={setTaken} resourceCount={resourceCount} setClick={setClick} info={val} key={`${String(i)}`} />)}
          </div>
          <button type="submit">Surrender</button>
          <button type="submit" onClick={() => handleResource(count + 1, true)}>End Turn</button>
        </div>
      ) : <h1>ENEMY TURN</h1>}
    </div>
  );
};

TwoDEnv.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setSlots: PropTypes.func.isRequired,
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.element.isRequired,
  setTurn: PropTypes.element.isRequired,
  setDeck: PropTypes.element.isRequired,
  turn: PropTypes.element.isRequired,
  enemySlots: PropTypes.element.isRequired,
};

export default TwoDEnv;
