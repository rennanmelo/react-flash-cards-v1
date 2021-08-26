import { useState, useEffect } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FLashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCards } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);

  const handleToggleFlashCard = (cardId) => {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showFlashCardTitle =
      !updatedCards[cardIndex].showFlashCardTitle;

    setAllCards(updatedCards);
  };

  const handleButtonClick = () => {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards);
  };

  return (
    <>
      <Header>react-flash-cards-v1</Header>

      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Shuffle</Button>
        </div>

        <FLashCards>
          {allCards.map(({ id, title, description, showFlashCardTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showFlashCardTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FLashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
