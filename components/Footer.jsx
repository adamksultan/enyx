import { AlignLeft } from '@phosphor-icons/react';
import React from 'react';

const Footer = () => {
return (
<div>
<footer className="footer bg-blue-800 justify-left text-base-content p-10">
  <div>
    <img 
      src="enyxwhitelogo.png"
      alt="Enyx Logo"
      className="-ml-6 w-1/5"
    ></img>
    <h6>106 West 32nd Street</h6>
    <h6>New York, NY, 10001</h6>
    <h6>(917) 819-1296</h6>
    <h6>admin@enyxtherapeutics.com</h6>
  </div>
  <nav>
    <h6 className="footer-title">About</h6>
    <a className="link link-hover">About Enyx</a>
    <a className="link link-hover">Our Values</a>
    <a className="link link-hover">Team</a>
  </nav>
  <nav>
    <h6 className="footer-title">Pipeline</h6>
    <a className="link link-hover">Enyx Pipeline</a>
    <a className="link link-hover">Publications</a>
    <a className="link link-hover">Clinical Trials</a>
  </nav>
  <nav>
    <h6 className="footer-title">Programs</h6>
    <h6 className="footer-title">Collaborators</h6>
    <h6 className="footer-title">Contact Us</h6>
  </nav>    
</footer>
<footer className="footer bg-blue-900 text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
    <p>
      &#169; Enyx Therapeutics, LLC. All Rights reserved.
      <br />
    </p>
  </aside>
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <p className="justify-end text-base-content">
    Terms of Use
  </p>
  <p className="justify-end text-base-content">
    Privacy Policy
  </p>
  </div>
</footer>
</div>
 )
}

export default Footer;