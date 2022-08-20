import styles from './Navbar.module.css'

import { useState } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import {useRouter} from 'next/router'

const NavBar = ({userName})=>{

    const router = useRouter();

    const [showDropDown,setShowDropDown] = useState(false);

    const handleOnClickHome = (e)=>{

        e.preventDefault();
        router.push('/');

    }

    const handleOnClickMyList=(e)=>{
            
            e.preventDefault();
            router.push('/browse/my-list');
    }

    const handleShowDropDown=(e)=>{

        e.preventDefault();
        setShowDropDown(!showDropDown);

    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/">
                <a  className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image
                        src={'/static/netflix.svg'}
                        alt="Netflix Logo"
                        width="166.5px"
                        height="45px"
                        />
                    </div>
                </a>
                </Link>
            
            
            
            <ul className={styles.navItems}>
                <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
            </ul>

            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn} onClick={handleShowDropDown}>
                       <p className={styles.username}>{userName}</p> 
                       <Image
                        src={'/static/expand-more.svg'}
                        alt="Expand more dropdown Logo"
                        width="24px"
                        height="24px"
                        />
                    </button>

                
                   {showDropDown &&
                   ( 
                   <div className={styles.navDropdown}>
                        <div>
                        <Link href='/login'>
                         <a className={styles.linkName}>Sign Out</a>
                        </Link>
                        <div className={styles.lineWrapper}></div>
                    </div>
                    </div>
                    )
                    }
                </div>
            </nav>
            </div>
        </div>
    )
}


export default NavBar;