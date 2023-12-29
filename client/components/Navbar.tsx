import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
      <nav className={styles.app__navbar}>
        <div className={styles.app__navbar_logo}>
          
          <img src="/assets/grapesco.svg"  alt="logo" /><h2>GrapeSwap</h2> 
        </div>
        <ul className={styles.app__navbar_links}>
          {['Market', 'Exchange', 'Community', 'Wallets','Jobs'].map((item)=>(
            <li className={styles.app__flex} key={`link-${item}`}>
              <a className={styles.p_text} href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li className='inline-flex justify-center text-sm font-semibold py-2.5 px-4text-gray -my-2.5 ml-8'>Login</li>
          <li className='inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8'>Sign Up</li>
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
                  {['Market', 'Exchange', 'Community', 'Wallets','Jobs'].map((item)=>(
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                  <li className='text-3xl font-bold underline'>Login</li>
                </ul>
              </motion.div>
            )}
        </div>
      </nav>
    );
  };

export default Navbar;