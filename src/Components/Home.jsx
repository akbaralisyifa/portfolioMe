import img from '../assets/fotomy.png';

const HomePage = () => {
  return (
    <div className="w-3/4 mx-auto mt-20 ">
      <div className="flex items-center px-10">
        <div className="w-1/2 text-center pl-52">
          <h1 className="text-4xl font-bold ">Muhammad Akbar Ali Syifa</h1>
          <p className="text-xl font-light">
            <span className="text-primary font-normal">Front-end</span> Developer | Student of <span className="text-primary font-normal">Digital Business</span>
          </p>
          <p className="font-semibold text-sm">Hi everyone 👋🏼 welcome to my portofolio website</p>
        </div>
        <div className="w-1/2 ">
          <img src={img} alt="foto akbaralisyifa" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
