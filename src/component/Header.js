import React from 'react';
import logoibe from '../assets/logoIbe.png';
import SIOCA from '../assets/SIOCA.png';

export default function Header() {
  return (
    <div className="w-full py-5 items-center justify-between flex flex-row px-12">
      <div className="justify-start">
        <img className=" w-16 h-14" src={SIOCA} alt="sioca"></img>
      </div>
      <div className=" justify-end">
        <img className=" w-16 h-12" src={logoibe} alt="ibe"></img>
      </div>
    </div>
  );
}
