import * as React from 'react';

import logowhite from '../../public/logo-white.png'

export default function Header() {
  return (
  <header className='header'>
    <div className='logo-box'>
      <img className='logo' src={logowhite} alt='hwatever'></img>
    </div>
    <div className='text-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary-main'>Lorraine's</span>
        <span className='heading-primary-sub'>yoga pa' gringos</span>
      </h1>

      <a href='#' className='btn btn-white'>
        sami maldita
      </a>
    </div>
    
  </header>
  );
}
