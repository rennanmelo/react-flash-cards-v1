const FlashCard = ({
  id,
  title,
  description,
  showFlashCardTitle,
  onToggleFlashCard,
}) => {
  const handleFlashCardClick = () => {
    onToggleFlashCard(id);
  };

  return (
    <div
      className="shadow-lg p-4 m-2 w-80 h-80 cursor-pointer
      flex flex-row items-center justify-center 
      font-semibold "
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleFlashCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
};

export default FlashCard;
