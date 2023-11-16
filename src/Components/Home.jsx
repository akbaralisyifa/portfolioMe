import img from '../assets/img/fotomy.png';
import Footer from './templates/Footer';

const HomePage = () => {
  return (
    <>
      <div className="sm:w-3/4 mx-auto sm:mt-32 mt-44 w-full ">
        <div className="flex flex-wrap items-center px-10">
          <div className="sm:w-1/2 text-center sm:pl-52 w-full ">
            <h1 className="sm:text-4xl font-bold text-2xl">Muhammad Akbar Ali Syifa</h1>
            <p className="sm:text-xl font-light pt-3">
              <span className="text-primary font-normal">Front-end</span> Web Developer | Student of <span className="text-primary font-normal">Digital Business</span>
            </p>
            <p className="font-semibold text-sm">Hi everyone 👋🏼 welcome to my portofolio website</p>
          </div>
          <div className="sm:w-1/2 w-full">
            <img src={img} alt="foto akbaralisyifa" className="sm:w-4/5  block mx-auto sm:mx-0" />
          </div>
        </div>
      </div>
      <Footer style={'mt-44 sm:mb-0'} />
    </>
  );
};

export default HomePage;
