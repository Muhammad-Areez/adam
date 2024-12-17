import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@/components/footer';
import styles from '../../../public/assets/scss/checkEmail.scss';
import { useRouter } from 'next/router';

function Login() {
  const Router = useRouter()
  const [rememberMe, setRememberMe] = useState(false);
  const handleBackToLogin = () => {
    Router.push('/')
  }
  const handleNextStep =() => {
    Router.push('/CreateNewPass')
  }
  return (
    <>
      <Head>
        <title>Check Email</title>
        <meta name="description" content="Reset your password" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="formContainer">
          <Image
            src="/assets/images/PasswordIcon.png"
            alt="Login Image"
            width={40}
            height={40}
            layout="intrinsic"
            className="image"
          />
          <h1 className="title">Check your Email</h1>
          <p className="subtitle">
          We have sent the password reset link to your email.<br/><span className='sub-email'>[customeremail@mail.com]</span>
          </p>
          <button type="button" className="button" onClick={handleNextStep}>Reset Password</button>

          <div className='BelowMain'>
                <Image 
                src="/assets/images/BackIcon.png"
                alt="Back Icon"
                width={20}
                height={20}
                layout="intrinsic"
                />
                <p className='belowtext' onClick={handleBackToLogin}>Back To Login</p>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
