const FlashCard = ({ title, description }) => {
  return (
    <div
      className="shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
      flex flex-row items-center justify-center 
      font-semibold "
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {title} - {description}
    </div>
  );
};

export default FlashCard;
