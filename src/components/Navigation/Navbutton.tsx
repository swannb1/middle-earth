type ButtonProps = {
  name: string;
  handleClick?: () => void;
};

const Navbutton: React.FC<ButtonProps> = ({ name, handleClick }) => {
  return (
    <div>
      <button className="text-white cursor-pointer font-quicksand hover:underline" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default Navbutton;
