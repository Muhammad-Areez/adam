import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();  

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

  const handleForgotPasswordClick = () => {
    router.push('/signin');  
  };

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
            src="/assets/images/LoginImg.png"
            alt="Login Image"
            width={150}
            height={90}
            layout="intrinsic"
            className='image'
          />
          <h1 className='title'>Login To Your Account</h1>
          <p className='subtitle'>Enter your credentials to access your account</p>

          <form onSubmit={handleLogin} className='form'>
            <div className='inputGroup'>
              <label htmlFor="email" className='label'>Email</label>
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

            <div className='inputGroup'>
              <label htmlFor="password" className='label'>Password</label>
              <div className='passwordContainer'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="**********"
                  className='input'
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className='eyeIcon'
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </span>
              </div>
              <p className='forgotPassword' onClick={handleForgotPasswordClick}>
                Forgot Password?
              </p>
            </div>

            <div className='checkboxContainer'>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className='checkbox'
              />
              <label htmlFor="rememberMe" className='checkboxLabel'>
                Remember Device for 30 days
              </label>
            </div>
            <button type="submit" className='button'>Log In</button>
          </form>
        </div>
        <div className='BelowTextContainer'>
          <p className='lowerText'>No Account yet? <a className='createText'>Create an account</a></p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
