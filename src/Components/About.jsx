import AboutEducation from './Organism/AboutEducation';
import AboutExperience from './Organism/AboutExperience';
import AboutMeOrganism from './Organism/AboutMeOrganism';
import AboutResume from './Organism/AboutResume';
import Footer from './templates/Footer';

export default function About() {
  return (
    <>
      <div className="sm:w-3/5 mt-32 mx-auto">
        <h1 className="text-3xl font-semibold font-poppins text-center text-primary drop-shadow-md">About Me</h1>
        <AboutMeOrganism />

        <div className="flex flex-wrap sm:justify-center sm:mx-5 mx-14">
          <AboutEducation />
          <AboutExperience />
        </div>

        <AboutResume />
      </div>
      <Footer style={'mt-10 sm:mb-0'} />
    </>
  );
}
