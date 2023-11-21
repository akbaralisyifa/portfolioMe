import JudulAtom from './Atom/JudulAtom';
import AboutEducation from './Organism/AboutEducation';
import AboutExperience from './Organism/AboutExperience';
import AboutMeOrganism from './Organism/AboutMeOrganism';
import AboutResume from './Organism/AboutResume';
import Footer from './templates/Footer';

export default function AboutComponent() {
  return (
    <>
      <div className="sm:w-3/5 mt-32 mx-auto">
        <JudulAtom title={'About Me'} />
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
