function Tittle() {
  return (
    <div className="w-full w-screen-lg mx-auto flex flex-col justify-center items-center" id="home">
      <img
        className="w-full h-[600px] object-cover"
        src="/public/title.webp"
        alt="Home"
      />
      <h1 className='text-2xl sm:text-3xl bg-white w-screen text-[#cba978]  p-5 font-bold absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"'>G&M Design: Reformamos tu casa.</h1>
    </div>
  );
}

export default Tittle;