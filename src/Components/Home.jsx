import img from '../assets/img/fotomy.png';
import Footer from './templates/Footer';

const HomePage = () => {
  return (
    <>
      <div className="md:w-3/4 mx-auto md:mt-32 mt-44 w-full ">
        <div className="flex flex-wrap items-center px-10">
          <div className="md:w-1/2 text-center md:pl-52 w-full ">
            <h1 className="md:text-4xl font-bold text-2xl">Muhammad Akbar Ali Syifa</h1>
            <p className="md:text-xl font-light pt-3">
              <span className="text-primary font-normal">Full Stack</span> Developer | <span className="text-primary font-normal">Javascript - Golang</span>
            </p>
            <p className="font-semibold text-md">Hi everyone 👋🏼 welcome to my portofolio website</p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={img} alt="foto akbaralisyifa" className="md:w-4/5  block mx-auto md:mx-0" />
          </div>
        </div>
      </div>
      <Footer style={'mt-44 md:mb-0'} />
    </>
  );
};

export default HomePage;
