import FoodieLogo from "../assets/FoodieLogo.png";

const Header = () => {
  return (
    <header>
      <div className="absolute z-10 bg-white  flex justify-between w-full p-2 border-b-2">
        <img className="w-20" src={FoodieLogo} alt="LogoImg" />
        <button className="sm:block  bg-red-500 hidden text-white rounded-3xl px-3 text-sm lg:hover:bg-red-300">
          Join the Waitlist
        </button>
      </div>
    </header>
  );
};

export default Header;
