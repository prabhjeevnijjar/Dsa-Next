import { useRouter } from 'next/router';
import { QUOTES } from '../../utils/constants';
import useMediaQuery from '../../hoc/useMediaQuery';
import { useEffect, useState } from 'react';

const Footer = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const isMobile = useMediaQuery('(min-width: 924px)');

  useEffect(() => {
    setCount(Math.floor(Math.random() * QUOTES.length));
  }, []);

  return (
    <>
      {router.asPath === '/enter' && isMobile ? (
        <div className="footer-overlay">
          <div className="footer-overlay-quotes">
            <div>{QUOTES[count].text}</div>
            <div>- {QUOTES[count].author}</div>
          </div>
        </div>
      ) : null}
      <div className={`footer bg-dark  ${router.asPath === '/enter' ? 'position-fixed' : ' '}`}>
        <div className="text-white d-flex fixed-bottom justify-content-center my-3">
          <div className="">Created by Prabhjeev</div> <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> <div className="text-white">Copyright @2023</div>{' '}
        </div>
      </div>
    </>
  );
};

export default Footer;
