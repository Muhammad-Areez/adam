import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@/components/footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from '../../../public/assets/scss/Reset.scss';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleCheckboxChange = () => {
    setRememberMe((prevState) => !prevState);
  };

  const handleBackToLogin = () => {
    router.push('/')
  }

  const handleResetPass = (e) => {
    e.preventDefault()
    router.push('/Passwordrecovery')
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <div className='formContainer'>
          <Image
            src="/assets/images/ResetImg.png"
            alt="Login Image"
            width={40}
            height={40}
            layout="intrinsic"
            className='image'
          />
          <h1 className='title'>Reset Your Password</h1>
          <p className='subtitle'>Enter your email address associateed with your account and will send you an email instruction to reset</p>


          <form onSubmit={handleResetPass} className='form'>
            <div className='inputGroup'>
              <label htmlFor="email" className='label'>Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="John.dowry@example.com"
                className='input'
                required
              />
            </div>
            <button type="submit" className='button'>Reset Password</button>
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
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
