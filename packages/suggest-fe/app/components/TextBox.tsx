type Props = React.ComponentProps<"input">;

const TextBox: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      type="text"
      className={`h-5 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 `}
    />
  );
};

export default TextBox;
