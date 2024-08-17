import React from 'react';
import { Link } from 'react-router-dom';
import yumyum from "../assests/yumyum.svg";
import chingu from '../assests/chingu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#013243] to-[#B0E0E6] p-8 text-white font-sans">
      <div className="container mx-auto flex flex-col items-center">
       
        <div className="w-full flex justify-center mb-8 space-x-12">
          <Link to="/" className="flex-shrink-0">
            <img src={yumyum} alt='yumyum' className="w-20 h-20" />
          </Link>
          <a href='https://www.chingu.io/' target='_blank' rel='noopener noreferrer' className="flex-shrink-0">
            <img src={chingu} alt='chingu' className="w-20 h-20" />
          </a>
        </div>

        <div className="w-full md:w-3/4  ">
          <h3 className="text-center font-bold uppercase mb-6">Team Members</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 border-b mb-2 pb-4">
            <div className="text-center">
              <h4>Petre Circeag</h4>
              <div className="flex justify-center mt-2 space-x-3">
                <a href='https://github.com/Petre4488' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='https://www.linkedin.com/in/petre-circeag/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4>Bianca Mitrea</h4>
              <div className="flex justify-center mt-2 space-x-3">
                <a href='https://github.com/Bianca371' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='https://www.linkedin.com/in/bianca-mitrea-3793132b1/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4>Hasan Abbas</h4>
              <div className="flex justify-center mt-2 space-x-3">
                <a href='https://github.com/HassanAbbas10' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='https://www.linkedin.com/in/hassan-abbas-b34545263/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4>Parykhan Jameel</h4>
              <div className="flex justify-center mt-2 space-x-3">
                <a href='https://github.com/parykhan-jameel' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='https://linkedin.com/in/parykhan-jameel' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4>Fanomezantsoa Tokiniaina</h4>
              <div className="flex justify-center mt-2 space-x-3">
                <a href='https://github.com/Toukoms' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='https://www.linkedin.com/in/fanomezantsoa-tokiniaina-rahajanirina-6a2420237/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4>Zarrar Hussain</h4>
              <div className="flex justify-center mt-2 space-x-3">
                <a href='https://github.com/Zarrarabid' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='https://www.linkedin.com/in/zarrar-abid-a1667121a/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4>Sarah</h4>
              <div className="flex justify-center items-center mt-2 space-x-3">
                <a href='nn' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-white hover:text-black' />
                </a>
                <a href='nn' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-black' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright text */}
        <p className="mt-8 font-thin text-slate-300 text-center">&copy; {new Date().getFullYear()} YumYum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
