import React from 'react';

const Navbar = () => {
  return (
  <div className="navbar relative bg-white py-1 items-start">
  <div className="px-4 py-3 flex-1">
    <a className="btn btn-ghost">
      <img src="enyxlogo.png" alt="Enyx Therapeutics" style={{width: "150px", height: "auto", }}></img>
    </a>
  </div>
  <div className="flex-none">
    <ul className="text-l menu menu-horizontal w-full h-full flex items-center px-6 py-4 text-black">
      <li>
        <details>
          <summary>About</summary>
          <ul className="bg-white z-10 w-fullrounded-t-none py-4">
            <li><a>About Enyx</a></li>
            <li><a>Our Values</a></li>
            <li><a>Team</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Pipeline</summary>
         <ul className="bg-white z-10 rounded-t-none py-4">
          <li><a>Enyx Pipeline</a></li>
          <li><a>Publications</a></li>
          <li><a>Clinical Trials</a></li>
          </ul>  
        </details>
      </li>
      <li><a>Programs</a></li>
      <li><a>Collaborators</a></li>
      <li>
        <a>
          <div className="w-full h-full flex items-center border border-transparent px-6 py-4 rounded-md shadow-sm-text-base font-medium text-white bg-gray-800 hover:bg-gray-900">
            Contact Us
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar;