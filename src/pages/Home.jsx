import Header from '../components/Layout/Header';
import Navbar from '../components/Layout/NavBar';
import SeccionDesarrollo from '../components/Layout/SeccionDesarrollo';
import menu from '../assets/images/menu.svg';

const Home = () => {
  const openMenu = () => {
    let menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      menu.classList.add('left-0');
    }
  };

  return (
    <>
      <div className="container mx-auto xl:px-4">
        <Header />
        {/* <section className="grid grid-cols-1  sm:grid-flow-col sm:grid-cols-min content-stretch "> */}
        <section className="grid grid-cols-1 sm:grid-cols-[18rem_auto]">
          <div className=" lg:hidden absolute z-40 top-0 p-4">
            <img src={menu} alt="Icon svg del menu " onClick={openMenu} />
          </div>
          <Navbar />
          <SeccionDesarrollo />
        </section>
      </div>
    </>
  );
};
export default Home;
