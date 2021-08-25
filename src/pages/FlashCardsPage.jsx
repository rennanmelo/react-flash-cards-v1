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
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </FLashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
