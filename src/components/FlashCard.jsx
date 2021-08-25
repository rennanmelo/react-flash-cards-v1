const FlashCard = ({ id, title, description, showFlashCardTitle }) => {
  return (
    <div
      className="shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
      flex flex-row items-center justify-center 
      font-semibold "
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
};

export default FlashCard;
