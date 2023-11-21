export default function ContactLinks() {
  return (
    <>
      <Link className="rounded-full w-12 h-12 border border-primary border-opacity-50 hover:border-primary hover:bg-primary flex justify-center items-center hover:text-white text-primary text-opacity-70 transition duration-300 ease-in-out ">
        {linkedinAtom()}
      </Link>
    </>
  );
}
