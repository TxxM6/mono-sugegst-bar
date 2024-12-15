import Toggle from "./Toggle";

const ToggleArea = ({
  isToggled,
  handleToggle,
}: {
  isToggled: boolean;
  handleToggle: () => void;
}) => {
  return (
    <div className="flex p-2 gap-6">
      <div>Reverse</div>
      <Toggle isToggled={isToggled} handleToggle={handleToggle} />
    </div>
  );
};

export default ToggleArea;
