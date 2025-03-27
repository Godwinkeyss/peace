import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import { IoCaretUp } from 'react-icons/io5';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutCaret, setAboutCaret] = useState(false);
  const [susCaret, setSusCaret] = useState(false);
  return (
    <>
      <div className="flex lg:items-center lg:justify-center bg-white flex-col overflow-x-hidden py-3 ">
        <div className="header-top flex flex-col items-center justify-center ">
          <Link to="/">
            <img
              src="images/WCB-Logo-web-2-300x107.png"
              alt="logo"
              className="sm:mx-0 md:shrink-0 mt-2 h-20"
            />
          </Link>
          <div className="flex animate-marquee">
            <h3 className="text-gray-700 bg-gray-200 p-2 rounded">
             Bridging Culture Building Confidence
            </h3>
          </div>
          <div className="inline-block animate-marque">
            <h3 className="text-gray-700 bg-gray-100 p-2 rounded">
              Unite. Empower. Inspire. – Where Women Shine Together! ✨
            </h3>
          </div>
          <div className="flex  text-4xl items-center ml-7 mt-6 gap-20 lg:hidden ">
            <IoMenuOutline
              className={!isOpen ? 'opacity-35' : 'opacity-0'}
              onClick={() => setIsOpen(!isOpen)}
            />

            {!isOpen ? (
              <IoCartOutline className="text-2xl" />
            ) : (
              <IoMdClose
                className="opacity-35"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
        <div className="header-middle mt-2 flex justify-self-start w-full ">
          {/* <ul className={`flex items-center gap-10 ${isOpen? 'block': 'hidden'}`}> */}
          {isOpen && (
            <ul
              className={
                'lg:flex lg:gap-4 px-16 py-6 flex flex-col gap-4 text-gray-800 w-full'
              }>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <div className="flex justify-between w-52 items-center">
                  <p>ABOUT</p>
                  {aboutCaret ? (
                    <FaCaretDown
                      className="text-[10px]"
                      onClick={() => setAboutCaret(!aboutCaret)}
                    />
                  ) : (
                    <IoCaretUp
                      className="text-[10px]"
                      onClick={() => setAboutCaret(!aboutCaret)}
                    />
                  )}
                </div>

                {aboutCaret && (
                  <ul className="dropdown ml-2.5 mt-2 w-52">
                    <li className="flex flex-col gap-2">
                      <img src="images/about-nav1.jpg" />
                      <Link to="/about" className="underline mb-3">
                        Our Mission
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/about-nav2.jpg" />
                      <Link to="/about" className="underline mb-3">
                        Our Value
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/about-nav3.jpg" />
                      <Link to="/about" className="underline mb-3">
                        Our Team
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/about-nav4.jpg" />
                      <Link to="/about" className="underline mb-3">
                        Our Work
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/about-nav5.jpg" />
                      <Link to="/about" className="underline mb-3">
                        Our Gallery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>BOUTIQUE</li>
              <li>
                <div className="flex justify-between w-52 items-center">
                  <p>SUSTAINABILITY</p>
                  {susCaret ? (
                    <FaCaretDown
                      className="text-[10px]"
                      onClick={() => setSusCaret(!susCaret)}
                    />
                  ) : (
                    <IoCaretUp
                      className="text-[10px]"
                      onClick={() => setSusCaret(!susCaret)}
                    />
                  )}
                </div>

                {susCaret && (
                  <ul className="dropdown ml-2.5 mt-2 w-52">
                    <li className="flex flex-col gap-2">
                      <img src="images/sus1.jpg" />
                      <Link to="/about" className="underline mb-3">
                        PLANET
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/sus2.jpg" />
                      <Link to="/about" className="underline mb-3">
                        PEOPLE
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/sus3.png" />
                      <Link to="/about" className="underline mb-3">
                        PRODUCT
                      </Link>
                    </li>
                    <li className="flex flex-col gap-2">
                      <img src="images/sus4.jpg" />
                      <Link to="/about" className="underline mb-3">
                        ARTICLES
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>ACTIVITIES & WORKSHOP</li>
              <li>EVENTS</li>
              <li>CONNECT</li>
              <li>DONATE</li>
              <li>
                <IoCartOutline />
              </li>
              {/* <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/contact'>Contact</Link></li> */}
            </ul>
          )}
        </div>

        <div className="header-bottom"></div>
      </div>
      {/* large screen */}
      <div className="lg:flex hidden lg:items-center lg:justify-center mb-10">
        <div className="lg:flex hidden lg:items-start lg:justify-start mt-2 bg-white  w-max">
          <ul className="flex lg:gap-6 px-16 py-4 gap-4 text-gray-800 text-sm font-medium relative w-max">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li className="relative group">
              <div className="flex gap-1 items-center cursor-pointer">
                <p>ABOUT</p>
                {aboutCaret ? (
                  <FaCaretDown
                    className="text-xs"
                    onClick={() => setAboutCaret(!aboutCaret)}
                  />
                ) : (
                  <IoCaretUp
                    className="text-xs"
                    onClick={() => setAboutCaret(!aboutCaret)}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              <ul className="absolute hidden group-hover:flex bg-white shadow-lg p-6 rounded-lg gap-6  left-0 right-0 top-full w-max z-50">
                {[
                  { src: 'images/about-nav1.jpg', label: 'Our Mission' },
                  { src: 'images/about-nav2.jpg', label: 'Our Value' },
                  { src: 'images/about-nav3.jpg', label: 'Our Team' },
                  { src: 'images/about-nav4.jpg', label: 'Our Work' },
                  { src: 'images/about-nav5.jpg', label: 'Our Gallery' },
                ].map((item, index) => (
                  <li key={index} className="flex flex-col gap-2 items-center">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-52 h-52 object-cover  mb-2"
                    />
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-blue-500 transition duration-300 underline mb-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/boutique">BOUTIQUE</Link>
            </li>
            <li className="relative group">
              <div className="flex gap-1 items-center cursor-pointer">
                <p>SUSTAINABILITY</p>
                {susCaret ? (
                  <FaCaretDown
                    className="text-xs"
                    onClick={() => setSusCaret(!susCaret)}
                  />
                ) : (
                  <IoCaretUp
                    className="text-xs"
                    onClick={() => setSusCaret(!susCaret)}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              <ul className="absolute hidden group-hover:flex bg-white shadow-lg p-6 rounded-lg gap-6  left-0 right-0 top-full w-max z-50">
                {[
                  { src: 'images/sus1.jpg', label: 'Our Mission' },
                  { src: 'images/sus2.jpg', label: 'Our Value' },
                  { src: 'images/sus3.png', label: 'Our Team' },
                  { src: 'images/sus4.jpg', label: 'Our Work' },
                ].map((item, index) => (
                  <li key={index} className="flex flex-col gap-2 items-center">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-52 h-52 object-cover  mb-2"
                    />
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-blue-500 transition duration-300 underline mb-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/activities">ACTIVITIES & WORKSHOP</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/connect">CONNECT</Link>
            </li>
            <li>
              <Link to="/donate">DONATE</Link>
            </li>
            <li>
              <IoCartOutline className="text-xl cursor-pointer hover:text-blue-500 transition duration-300" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
