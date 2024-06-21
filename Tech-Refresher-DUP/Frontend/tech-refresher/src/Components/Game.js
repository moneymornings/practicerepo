import React, { useEffect, useState } from 'react';
import Card from './Card';
import Navbarcomponent from './Navbarcomponent';
import flash from '../Images/flash.png';

function Game() {
    const [, setCards] = useState([]);
    const [flipper, setFlipper] = useState(false);
    const [card1, setCard1] = useState();
    const [card1a, setCard1a] = useState();
    const [card2, setCard2] = useState();
    const [card2a, setCard2a] = useState();
    const [card3, setCard3] = useState();
    const [card3a, setCard3a] = useState();
    const [card4, setCard4] = useState();
    const [card4a, setCard4a] = useState();
    const [card5, setCard5] = useState();
    const [card5a, setCard5a] = useState();
    const [card6, setCard6] = useState();
    const [card6a, setCard6a] = useState();
    const [card7, setCard7] = useState();
    const [card7a, setCard7a] = useState();
    const [card8, setCard8] = useState();
    const [card8a, setCard8a] = useState();
    const [card9, setCard9] = useState();
    const [card9a, setCard9a] = useState();
    const [card10, setCard10] = useState();
    const [card10a, setCard10a] = useState();

    useEffect(() => {
        fetch('https://tech-refresher-backend.vercel.app/tech')
            .then(result => result.json())
            .then(data => {                setCards(data);
                setCard1(data[0].question);
                setCard1a(data[0].answer);
                setCard2(data[1].question);
                setCard2a(data[1].answer);
                setCard3(data[2].question);
                setCard3a(data[2].answer);
                setCard4(data[3].question);
                setCard4a(data[3].answer);
                setCard5(data[4].question);
                setCard5a(data[4].answer);
                setCard6(data[5].question);
                setCard6a(data[5].answer);
                setCard7(data[6].question);
                setCard7a(data[6].answer);
                setCard8(data[7].question);
                setCard8a(data[7].answer);
                setCard9(data[8].question);
                setCard9a(data[8].answer);
                setCard10(data[9].question);
                setCard10a(data[9].answer);
            });
    }, []);

    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);

    const handleChoice = (card) => {
        if (selected1 === null) {
            setSelected1(card);
        } else if (selected1 !== null) {
            setSelected2(card);
        }
    };

    useEffect(() => {
        if (selected1 && selected2 !== null) {
            if (selected1 === selected2) {
                console.log("matching pair");
                setSelected1(null);
                setSelected2(null);
            } else {
                console.log("not matching");
                setFlipper(true);
                setSelected1(null);
                setSelected2(null);
            }
        }
    }, [selected1, selected2]);

    const refresh = () => {
        window.location.reload();
    };

    return (
        <>
            <Navbarcomponent />
            <div className='buttonContainer'>
                <button onClick={refresh} className='buttonRefresh'>Refresh</button>
            </div>

            <div className='cardsWrap'>
                <div className="flash">
                    <img src={flash} alt="" />
                </div>

                <Card input={card1} id={card1a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card2} id={card2a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card3} id={card3a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card4} id={card4a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card5} id={card5a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card6} id={card6a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card7} id={card7a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card8} id={card8a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card9} id={card9a} handleChoice={handleChoice} flipper={flipper} />
                <Card input={card10} id={card10a} handleChoice={handleChoice} flipper={flipper} />
            </div>
        </>
    );
}

export default Game;
