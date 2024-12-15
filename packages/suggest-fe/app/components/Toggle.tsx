const Toggle = ({
  isToggled,
  handleToggle,
}: {
  isToggled: boolean;
  handleToggle: () => void;
}) => {
  return (
    <button
      onClick={handleToggle}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
        isToggled ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isToggled ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default Toggle;
