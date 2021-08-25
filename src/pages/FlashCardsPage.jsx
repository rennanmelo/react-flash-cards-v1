import FlashCard from "../components/FlashCard";
import FLashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";

const FlashCardsPage = () => {
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
