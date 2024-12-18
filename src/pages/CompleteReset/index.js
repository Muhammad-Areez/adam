import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const Router = useRouter() 

  const handleLogin = () => {
    Router.push('/')
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
            src="/assets/images/CompleteResetPass.png"
            alt="Login Image"
            width={40}
            height={40}
            layout="intrinsic"
            className="image"
          />
          <h1 className="title">Reset password complete</h1>
          <p className="subtitle">
          Your all set to log in! We sent a confirmation email to<br/>[customeremail@mail.com]
          </p>
          <button type="submit" className="button" onClick={handleLogin}>Log In</button>

          <div>
                <p className='lowerText'>Didn't get a confirmation? <span className='coloreText'>Contact our support</span></p>
            </div>
            
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
