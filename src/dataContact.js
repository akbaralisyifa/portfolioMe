import linkedinAtom from './Components/Atom/linkedinAtom';
import githubAtom from './Components/Atom/githubAtom';
import instagramAtom from './Components/Atom/instagramAtom';
import emailAtom from './Components/Atom/emailAtom';

export const dataContacts = [
  {
    label: 'GitHub',
    img: githubAtom(),
    link: 'https://github.com/akbaralisyifa',
  },
  {
    label: 'LinkedIn',
    img: linkedinAtom(),
    link: 'https://www.linkedin.com/in/akbaralisyifa/',
  },
  {
    label: 'Instagram',
    img: instagramAtom(),
    link: 'https://www.instagram.com/akbaralisyifa/',
  },
  {
    label: 'Email',
    img: emailAtom(),
    link: 'https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWrRsqPwGhwhHSWdHnJnFPVRqlmMrFPBwTxmTzFCGDzdqmBxSLsvJkwvNpWKbwvfQmLvHlKqL',
  },
];
