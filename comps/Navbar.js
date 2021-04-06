import {useState} from 'react'

const Navbar = () => {
  const [contact, setContact] = useState(false)
  return (
    <div className="w-full bg-teal-700 text-gray-300">
      <div className="flex justify-between container">
        <div className="flex logo h-20 ">
          <div className="flex items-center justify-center">SAMDA</div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <div className="group cursor-pointer flex justify-center items-center space-x-5">
            <div className={`navbar-link`}>
              CONTACT
            </div>
          </div>
          <div className="group cursor-pointer flex justify-center items-center space-x-5">
            <div className="navbar-link">MENU</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;