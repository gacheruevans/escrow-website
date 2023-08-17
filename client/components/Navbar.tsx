import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import styles from '../styles/Navbar.module.scss';

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
    );
};
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
      <div className={styles.app__navbar}>
        <div className={styles.app__navbar_logo}>
          <img src="/assets/grapesco.svg"  alt="logo" /><h2>GrapeSwap</h2> 
        </div>
        <ul className={styles.app__navbar_links}>
          {['Market', 'Exchange', 'Community', 'Wallets','Jobs'].map((item, index)=>(
            <li key={index} className={styles.app__flex} >
                 <NavbarItem key={index} title={item} classProps={styles.p_text} />
            </li>
          ))}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[2546bd]">Login</li>
        </ul>
  
        <div className={styles.app__navbar_menu}>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
  
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['Market', 'Exchange', 'Community', 'Wallets','Jobs'].map((item, index)=>(
                    <li key={index}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        <NavbarItem key={index} title={item} classProps={styles.p_text} />
                      </a>
                    </li>
                  ))}
                  <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[2546bd]">Login</li>
                </ul>
              </motion.div>
            )}
        </div>
      </div>
    );
  };

export default Navbar;