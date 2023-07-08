const Erros = () => {
  return (
    <div className=" container xl:p-4 text-center flex flex-col items-center content-center mt-20">
      <div className=" items-center">
        <svg
          className=" fill-slate-700"
          // fill="#000000"
          width="4rem"
          height="4rem"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <g id="SVGRepo_bgCarrier" stroke-width="0"></g> */}
          <g
            id="SVGRepo_tracerCarrier"
            //   stroke-linecap="round"
            //   stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5,22H19a1,1,0,0,0,1-1V6.414a1,1,0,0,0-.293-.707L16.293,2.293A1,1,0,0,0,15.586,2H5A1,1,0,0,0,4,3V21A1,1,0,0,0,5,22ZM11,6a1,1,0,0,1,2,0v6a1,1,0,0,1-2,0Zm0,10a1,1,0,0,1,2,0v1a1,1,0,0,1-2,0Z"></path>
          </g>
        </svg>
      </div>
      <h2 className=" font-bold text-xl text-blue-900 mt-10">¡ Algo salio mal ! </h2>
      <p className=" text-lg">Vuelva a intentar de nuevo</p>
    </div>
  );
};
export default Erros;
