const Button = ({ children: label = "Button label", onButtonClick }) => {
  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <button
      className="bg-gray-200 p-2 m-1 rounded-md"
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
