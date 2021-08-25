import FlashCard from "../components/FlashCard";
import FLashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCards } from "../data/allFlashCards";

const FlashCardsPage = () => {
  console.log(allFlashCards);

  return (
    <>
      <Header>react-flash-cards-v1</Header>

      <Main>
        <FLashCards>
          {allFlashCards.map(
            ({ id, title, description, showFlashCardTitle }) => {
              return (
                <FlashCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  showFlashCardTitle={showFlashCardTitle}
                />
              );
            }
          )}
        </FLashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
