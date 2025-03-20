import Link from 'next/link';

import Logo from './Logo';
import Wrapper from '../Wrapper';
const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo width={80} height={80} />
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
