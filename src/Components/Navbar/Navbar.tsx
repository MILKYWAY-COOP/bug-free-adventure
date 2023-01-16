import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Socials from '../Socials/Socials';
import { NavbarContainer } from './Navbar.styled';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = classNames({ open: !open });
  const toggleClose = classNames({ open: open });
  const toggleNav = classNames('nav', { show: open });

  const toggle = () => {
    setOpen(!open);
  };

  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const closeNav = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <NavbarContainer>
      <div className={toggleNav}>
        <div className='links' onClick={closeNav}>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/wallpapers'>Wallpapers</Link>
          <Link to='/bio'>Bio</Link>
        </div>

        <div className='logo'>
          <div className='img'></div>
        </div>

        <div className='toggle'>
          <button className={toggleOpen} onClick={toggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width=''
              height=''
              fill='var(--secondaryColor)'
              viewBox='0 0 448 512'
            >
              <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
            </svg>
          </button>
          <button className={toggleClose} onClick={toggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width=''
              height=''
              fill='var(--secondaryColor)'
              viewBox='0 0 320 512'
            >
              <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
            </svg>
          </button>
        </div>

        <div className='socials'>
          <Socials />
        </div>
      </div>
    </NavbarContainer>
  );
}
