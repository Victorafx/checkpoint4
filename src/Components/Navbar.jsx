import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar_block">
      <Link
        activeClass="active"
        to="profil"
        spy={true}
        smooth={true}
        offset={-81}
        duration={500}
      >
        Profil
      </Link>
      <Link
        activeClass="active"
        to="competences"
        spy={true}
        smooth={true}
        offset={-110}
        duration={500}
      >
        Compétences
      </Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-81}
        duration={500}
      >
        Portfolio
      </Link>
      <Link
        activeClass="active"
        to="C.V"
        spy={true}
        smooth={true}
        offset={-81}
        duration={500}
      >
        C.V
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-81}
        duration={500}
      >
        Contact
      </Link>
    </div>
  )
}

export default Navbar;
