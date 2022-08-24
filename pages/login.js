import Head from "next/head";
import { Fragment,useState,useEffect } from "react";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import styles from '../styles/login.module.css';

import { magic } from "../library/magic-client";

const Login = () =>{

    const router = useRouter();

    const [email,setEmail] = useState()

    const handleOnChangeEmail = (e) =>{
        setIsLoading(false);
        setUserMsg('');
       
        const email = e.target.value;
        setEmail(email);
    }

    const [userMsg,setUserMsg] = useState('');

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const handleComplete = ()=>{
            setIsLoading(false);
        }

        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        }
    }, 
    [router]);


    const handleLoginWithEmail = async (e) =>{

        

        console.log('button clicked!')
        e.preventDefault();
        
        if(email){

            if(email === 'ishanmondal985@gmail.com'){
                console.log('Login Successful');
                // router.push('/');
                try {

                setIsLoading(true);
                   
                const didToken =  await magic.auth.loginWithMagicLink({ email});

                console.log(didToken);

                if(didToken){
                    
                    router.push('/');
                    
                }
                  
                } catch (error){
                    // Handle errors if required!
                    setIsLoading(false)
                    console.error('Something went wrong!', error);
                  }
            }else{
                setIsLoading(false)
                setUserMsg('Something went wrong, login failed:(');
            }
            //route to dashboard
        }else{
            //show user message
            setIsLoading(false)
            setUserMsg('Please enter valid email address');
        }
    }

    return (
        <Fragment>
        <div className={styles.container}> 
        <Head>
            <title>Netflix - SignIn</title>
        </Head>
        <header className={styles.header}>
        <div className={styles.headerWrapper}>
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
            </div>
            
        </header>

        <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
       </main>
        </div>
        </Fragment>
    )
}


export default Login;