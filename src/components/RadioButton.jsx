const RadioButton = ({
  children: label,
  id,
  onRadioButtonClick,
  radioButtonChecked,
}) => {
  const handleRadioButtonChange = () => {
    onRadioButtonClick();
  };

  return (
    <div className="flex flex-row items-center space-x-2">
      <input
        id={id}
        type="radio"
        onChange={handleRadioButtonChange}
        checked={radioButtonChecked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
