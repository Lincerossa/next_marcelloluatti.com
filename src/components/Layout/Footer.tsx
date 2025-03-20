import Link from 'next/link';

import Logo from './Logo';
import Wrapper from '../Wrapper';
const Footer = () => {
  return (
    <footer className="bg-[rgb(43,46,74)]">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo width={80} height={80} fill="white" />
          </Link>
          <div className="flex gap-4 font-lg">
            <Link
              className="text-md text-white hover:text-rose-600"
              target="_blank"
              href="https://github.com/Lincerossa">
              Github
            </Link>
            <Link
              className="text-md text-white hover:text-rose-600"
              target="_blank"
              href="https://www.linkedin.com/in/marcello-luatti/">
              Linkedin
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
