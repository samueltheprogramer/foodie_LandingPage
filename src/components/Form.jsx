const Form = () => {
  return (
    <div className="bg-[#ffc7c7]  py-10">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-3  "
      >
        <div className="sm:flex-row sm:gap-2 flex flex-col">
          <h1 className=" text-orange-600 font-extrabold text-3xl">Join the</h1>
          <h1 className=" text-orange-600 font-extrabold text-3xl">Waitlist</h1>
        </div>
        <div className="lg:flex-row sm:my-3  w-full flex flex-col justify-center items-center gap-2">
          <div className=" sm:flex-row flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="text-sm w-60 px-3 py-3 rounded-xl"
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
              className="text-sm w-60 px-3 py-3 rounded-xl"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="City"
            className="text-sm w-60 px-3 py-3 rounded-xl"
          />
        </div>
        <button className="lg:my-2 sm:hover:border-b-orange-500 bg-white font-bold my-5 text-black rounded-3xl px-4 py-1 border-b-8  border-b-orange-600 ">
          Join the Waitlist
        </button>
      </form>
    </div>
  );
};

export default Form;
