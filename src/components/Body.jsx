import iphone13Layout from "../assets/iphone13-Layout.png";
import FoodieLogo from "../assets/FoodieLogo.png";

const Body = () => {
  return (
    <div className="relative w-full h-auto bg-[url('assets/Map-UI.png.webp')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-red-600 opacity-90 [clip-path:polygon(40%_22%,100%_0%,100%_100%,0%_100%,0%_23%)] lg:[clip-path:polygon(32%_30%,100%_0%,100%_100%,0%_100%,0%_23%)]"></div>
      <div className="lg:flex-row lg:justify-center lg:gap-14 relative z-10 p-8 text-white flex flex-col items-center ">
        <div className="relative">
          <img
            className=" lg:w-[18rem] lg:h-[31rem] sm:w-[17rem] sm:h-[30rem] h-96 w-60 mt-14 z-20 "
            src={iphone13Layout}
            alt="iphoneLayout"
          />
          <iframe
            className="absolute top-0 bottom-0 lg:w-[18rem] lg:h-[31rem] sm:w-[17rem] sm:h-[30rem] h-96 w-60 mt-14 -z-10 rounded-[2.5rem]"
            width="315"
            height="560"
            src="https://www.youtube.com/embed/IZigtQqwNv4?si=CWVKf_n6jB4nMil3?&autoplay=1&mute=1&rel=0&loop=1&controls=0&playlist=IZigtQqwNv4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="sm:py-5 flex flex-col items-center justify-center">
          <div className="lg:w-[26rem] flex flex-col justify-center items-center">
            <div className="sm:w-full sm:flex sm:justify-start ">
              <img
                className=" sm:block w-20 hidden"
                src={FoodieLogo}
                alt="LogoImg"
              />
            </div>
            <h1 className="sm:text-start w-full font-extrabold text-white text-[40px] text-center ">
              Welcome to Foodie
            </h1>
            <p className="sm:font-semibold text-center">
              At foodie, we redefine convenience with our seamless food delivery
              service. Whether you're craving the flavors of home or exploring
              new culinary delights, foodie brings it all to your doorstep. From
              hearty breakfasts to gourmet dinners and everything in between,
              our curated menu caters to every palate and preference.
            </p>
            <button className="sm:hover:border-b-blue-400 bg-white font-bold my-5 text-black rounded-3xl px-4 py-1 border-b-8  border-b-blue-500 ">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
