import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@/components/footer';
import styles from '../../../public/assets/scss/PasswordRecovery.scss';
import OtpInput from 'react-otp-input';
import { useRouter } from 'next/router';


function Login() {
  const [otp, setOtp] = useState(''); 
  const [rememberMe, setRememberMe] = useState(false);
  const [time, setTime] = useState(60); 
  const [isActive, setIsActive] = useState(true);
  const router =useRouter()

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value) && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput && nextInput.focus();
    }

    if (value === '' && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput && prevInput.focus();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('CheckEmail')
  };

  const handleCheckboxChange = () => {
    setRememberMe((prevState) => !prevState);
  };

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

  return (
    <>
      <Head>
        <title>Reset Password</title>
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
          <h1 className="title">Password Recovery Code</h1>
          <p className="subtitle">
            We sent a 6-digit password recovery code to your email.<br />
            Enter the code to proceed
          </p>

          <form onSubmit={handleLogin} className="form">
            <div className="inputGroup">
              <div className="otpInputGroup">
                <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderInput={(props) => <input {...props} />}
      inputStyle="inputMain"
      containerStyle='inputContainer'
      placeholder='000000'
      inputType="tel"
    />
              </div>
            </div>

            <button type="submit" className="button">Reset Password</button>

            <div>
              <p className='timer'>Didn't receive a code? <span className="coloreText">Resend code in {time}s</span></p>
            </div>
            
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
