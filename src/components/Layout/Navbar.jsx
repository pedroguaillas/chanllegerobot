import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div
        id="menu"
        className="fixed z-3 w-[18rem] lg:relative lg:flex bg-gray-100 lg:bg-transparent"
      >
        <ul className="[&>li>a>h3]:text-gray-900 [&>li>a]:flex [&>li>a]:gap-4 [&>li>a]:py-3 [&>li>a]:pl-3 ">
          <li>
            <NavLink to="/" className="flex gap-4 ">
              <svg
                className=" fill-slate-700 dark:fill-white"
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"></path>
                </g>
              </svg>
              <h3 className=" text-xl hover:text-blue-300">Panel</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/participantes"
              className="transition duration-300 hover:translate-x-3 "
            >
              <svg
                className=" stroke-slate-700  fill-slate-700 "
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z"></path>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                </g>
              </svg>
              <h3 className="hover:text-blue-300">Participantes</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lista-ordenada"
              className="transition duration-300 hover:translate-x-3"
            >
              <svg
                className=" fill-slate-700 stroke-white"
                width="1.8rem"
                height="1.8rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="0.1"
                    d="M8.75 3.00005C7.02987 3.0012 6.14509 3.02648 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17L19 7C19 5.11438 19 4.17157 18.4142 3.58579C17.8549 3.02648 16.9701 3.0012 15.25 3.00005V6C15.25 7.24264 14.2426 8.25 13 8.25H11C9.75736 8.25 8.75 7.24264 8.75 6V3.00005Z"
                    fill="#323232"
                  ></path>
                  <path d="M15 3C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7L19 17C19 18.8856 19 19.8284 18.4142 20.4142C18.4142 20.4142 18.4142 20.4142 18.4142 20.4142C17.8284 21 16.8856 21 15 21V21L9 21V21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C5.58579 3.58579 5.58579 3.58579 5.58579 3.58579C6.17157 3 7.11438 3 9 3V3L15 3V3Z"></path>
                  <path d="M9 3V6C9 7.10457 9.89543 8 11 8H13C14.1046 8 15 7.10457 15 6V3"></path>
                  <path d="M9 15L10.5 16.5V16.5C10.7761 16.7761 11.2239 16.7761 11.5 16.5V16.5L15 13"></path>
                </g>
              </svg>
              <h3 className="hover:text-blue-300">Lista</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resultados"
              className="transition duration-300 hover:translate-x-3"
            >
              <svg
                className="fill-slate-700"
                // fill="#000000"
                version="1.1"
                id="Trophy_x5F_cup"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 256 256"
                // enable-background="new 0 0 256 256"
                // xml:space="preserve"
              >
                {/* <g id="SVGRepo_bgCarrier" stroke-width="0"></g> */}
                <g
                  id="SVGRepo_tracerCarrier"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M190.878,111.272c31.017-11.186,53.254-40.907,53.254-75.733l-0.19-8.509h-48.955V5H64.222v22.03H15.266l-0.19,8.509 c0,34.825,22.237,64.546,53.254,75.733c7.306,18.421,22.798,31.822,41.878,37.728v20c-0.859,15.668-14.112,29-30,29v18h-16v35H195 v-35h-16v-18c-15.888,0-29.141-13.332-30-29v-20C168.08,143.094,183.572,129.692,190.878,111.272z M195,44h30.563 c-0.06,0.427-0.103,1.017-0.171,1.441c-3.02,18.856-14.543,34.681-30.406,44.007C195.026,88.509,195,44,195,44z M33.816,45.441 c-0.068-0.424-0.111-1.014-0.171-1.441h30.563c0,0-0.026,44.509,0.013,45.448C48.359,80.122,36.837,64.297,33.816,45.441z M129.604,86.777l-20.255,13.52l6.599-23.442L96.831,61.77l24.334-0.967l8.44-22.844l8.44,22.844l24.334,0.967L143.26,76.856 l6.599,23.442L129.604,86.777z"></path>{' '}
                </g>
              </svg>
              <h3 className="hover:text-blue-300">Resultados</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
