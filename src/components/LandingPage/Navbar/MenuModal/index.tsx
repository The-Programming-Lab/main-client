import React from 'react'
import styles from './menuModal.module.scss';
import { Link } from 'react-scroll';

interface MenuModalProps {
  show: boolean;
  onClose: () => void;
}


const MenuModal = ({show,onClose}:MenuModalProps) => {
  return (

    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
       
          <Link to="heroSection" smooth={true} duration={500} className={styles.navLink} onClick={()=>{onClose()}}>
            Home
          </Link>


          <img src="/menu.svg" alt="menu" className={styles.hambergerMenu} onClick={()=>{onClose()}}/>
        </div>

        <Link to="testSection" smooth={true} duration={500} className={styles.navLink} onClick={()=>{onClose()}}>
          Features
        </Link>

        <Link to="testSection" smooth={true} duration={500} className={styles.navLink} onClick={()=>{onClose()}}>
          Projects
        </Link>

        <Link to="testSection" smooth={true} duration={500} className={styles.navLink} onClick={()=>{onClose()}}>
          About
        </Link>
        
      </div>
    </div>
  )
}

export default MenuModal