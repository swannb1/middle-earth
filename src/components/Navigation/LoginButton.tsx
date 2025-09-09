type ButtonProps = {
  handleClick?: () => void;
};
const LoginButton: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <div>
      <button
        className="!rounded-3xl !font-elven relative px-6 py-1
      bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600
      text-orange-900 shadow-[0_0_10px_rgba(255,215,0,0.8),0_0_20px_rgba(255,165,0,0.6)]
      hover:!font-quicksand hover:shadow-[0_0_20px_rgba(255,215,0,1),0_0_40px_rgba(255,140,0,0.9)]
      transition-all duration-300"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
