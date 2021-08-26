import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FLashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import RadioButton from "../components/RadioButton";
import { allFlashCards } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

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

  const handleRadioShowTitleClick = () => {
    const updatedCards = [...allCards].map((card) => {
      return { ...card, showFlashCardTitle: true };
    });

    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  };

  const handleRadioShowDescriptionClick = () => {
    const updatedCards = [...allCards].map((card) => {
      return { ...card, showFlashCardTitle: false };
    });

    setAllCards(updatedCards);
    setRadioButtonShowTitle(false);
  };

  return (
    <>
      <Header>react-flash-cards-v1</Header>

      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Shuffle</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            onRadioButtonClick={handleRadioShowTitleClick}
            radioButtonChecked={radioButtonShowTitle}
          >
            Show title
          </RadioButton>

          <div className="flex flex-row items-center justify-center space-x-4 m-4"></div>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            onRadioButtonClick={handleRadioShowDescriptionClick}
            radioButtonChecked={!radioButtonShowTitle}
          >
            Show Description
          </RadioButton>
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
