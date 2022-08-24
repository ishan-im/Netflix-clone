import styles from './Navbar.module.css'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import {useRouter} from 'next/router'

import { magic } from '../../library/magic-client'

const NavBar = ()=>{

    const [userName, setUserName]=useState('');

    useEffect(() => {
        // Assumes a user is already logged in

        (async ()=>{

            try {

                const { email } = await magic.user.getMetadata();

                if(email){
                    setUserName(email);
                }
                

            } catch(error) {
                // Handle errors if required!
    
                console.error('Error retrieving email', error);
            }
        }) ();
       

        return () => {
            console.log("This will be logged on unmount");
          }
    }, [])

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


    const handleSignOut = async (e)=>{

        e.preventDefault();

        try {
            await magic.user.logout();
            console.log(await magic.user.isLoggedIn()); // => `false`
             router.push('/login');
          } catch(error) {
            // Handle errors if required!
            console.error('Error logging out user', error);
            router.push('/login');
          }
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
                        <Link href='/login'  >
                         <a  className={styles.linkName} onClick={handleSignOut}>Sign Out</a>
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