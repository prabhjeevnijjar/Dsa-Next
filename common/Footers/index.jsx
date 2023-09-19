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
        <div className="text-white d-flex justify-content-center my-3 py-2">
          <div className=""></div> <span>&nbsp;&nbsp;</span> <div className="text-white">&copy;2023</div>{' '}
        </div>
      </div>
    </>
  );
};

export default Footer;
