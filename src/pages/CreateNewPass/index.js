import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from '@/components/footer';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false);
  const [time, setTime] = useState(60); 
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (time === 0) {
      setIsActive(false);
      return;
    }
    if (isActive) {
      const intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [time, isActive]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleCheckboxChange = () => {
    setRememberMe((prevState) => !prevState);
  };

  const minLengthCheck = password.length >= 8;
  const lowercaseCheck = /[a-z]/.test(password);
  const uppercaseCheck = /[A-Z]/.test(password);
  const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const numberCheck = /[0-9]/.test(password);


  const leftChecks = [
    { label: "Minimum of 8 characters", isValid: minLengthCheck },
    { label: "1 lowercase character", isValid: lowercaseCheck },
    { label: "1 uppercase character", isValid: uppercaseCheck }
  ];


  const rightChecks = [
    { label: "1 special character", isValid: specialCharCheck },
    { label: "1 number character", isValid: numberCheck }
  ];

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
            src="/assets/images/NewPassImg.png"
            alt="Login Image"
            width={50}
            height={50}
            layout="intrinsic"
            className='image'
          />
          <h1 className='title'>Create a new password</h1>
          <p className='subtitle'>New password must be different from current password</p>

          <form onSubmit={handleLogin} className='form'>
            <div className='inputGroup'>
              <label htmlFor="password" className='label'>New Password</label>
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
            </div>

            <div className='inputGroup'>
              <label htmlFor="confirmPassword" className='label'>Confirm New Password</label>
              <div className='passwordContainer'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="**********"
                  className='input'
                  required
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className='eyeIcon'
                >
                  {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </span>
              </div>
            </div>

            <div className='ImgTextContainer'>
              <div className='ImgText left'>
                {leftChecks.map((check, index) => (
                  <div key={index} className='ImgTextItem'>
                    <Image
                      src={check.isValid ? '/assets/images/CheckBoxImg.png' : '/assets/images/unfilledCheckBoxImg.png'}
                      height={20}
                      width={20}
                      layout="intrinsic"
                    />
                    <p className='checkLabel'>{check.label}</p>
                  </div>
                ))}
              </div> 
              <div className='ImgText right'>
                {rightChecks.map((check, index) => (
                  <div key={index} className='ImgTextItem'>
                    <Image
                      src={check.isValid ? '/assets/images/CheckBoxImg.png' : '/assets/images/UnfilledCheckBoxImg.png'}
                      height={20}
                      width={20}
                      layout="intrinsic"
                    />
                    <p className='checkLabel'>{check.label}</p>
                  </div>
                ))}
              </div> 
            </div>

            <button type="submit" className='button'>Reset Password</button>
            <div>
              <p className='lowerText'>Didn't receive a code? <span className='coloreText'>Resend code in {time}s</span></p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;

