const Contact = () => {
  return (
    <div className="">
      <div className="max-w-[1366px] m-auto h-auto p-10  " id="contact">
        <h1 className="text-2xl  text-center text-[#33363B] p-4 font-semibold">
          Яг одоо холбогдоорой.
        </h1>
        <form className="max-w-[700px] m-auto">
          <input
            className="border rounded-md border-[#f4f4f4]  shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Имайл"
          />
          <input
            className="border rounded-md border-[#f4f4f4]  shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Нэр"
          />
          <input
            className="border rounded-md border-[#f4f4f4] shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Сэдэв"
          />
          <textarea
            className="border rounded-md border-[#f4f4f4] shadow-lg p-3 w-full"
            cols="30"
            rows="10"
            placeholder="Захиа"
          ></textarea>
          <button className="border rounded-md shadow-lg p-3 w-full mt-3 text-[#33363B] font-semibold  bg-[#0099CC] ease-in duration-200  hover:bg-[#003366] hover:text-white">
            Илгээх
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
