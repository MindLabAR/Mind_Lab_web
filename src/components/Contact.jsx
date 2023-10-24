const Contact = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="max-w-[1366px] m-auto h-auto p-10  " id="contact">
        <h1 className="text-2xl  text-center text-[#33363B] p-4">
          If you want to join us
        </h1>
        <form className="max-w-[700px] m-auto">
          <input
            className="border rounded-md shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="border rounded-md shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="border rounded-md shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border rounded-md shadow-lg p-3 w-full"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="border rounded-md shadow-lg p-3 w-full mt-3   text-black bg-[#0099CC] ease-in duration-200  hover:bg-[#003366] hover:text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
