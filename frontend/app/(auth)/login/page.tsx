'use client';

import React, { useState } from 'react';
import { Check, Eye, EyeOff, User, Phone, Lock } from 'lucide-react';
import Input from '@/components/ui/input';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const points = [
    'One click apply using naukaa profile.',
    'Get relevant job recommendations.',
    'Showcase profile to top companies and consultants.',
    'Know application status on applied jobs.',
  ];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, password, otp });
    alert('Login clicked! Check console');
  };

  const handleSendOtp = () => {
    if (username) {
      setOtpSent(true);
      alert('OTP sent to ' + username);
    }
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} login clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 ml-20 p-10 my-1 flex-col justify-center items-center text-white">
        <h2 className="text-4xl font-bold mb-4 text-center">New to Naukaa?</h2>

        <div className="max-w-md mb-4 space-y-3 text-lg leading-relaxed mx-auto">
          {points.map((text, index) => (
            <p key={index} className="grid grid-cols-[20px_1fr] gap-2 text-left">
              <Check className="w-5 h-5 text-green-600 mt-1" />
              {text}
            </p>
          ))}
        </div>

        <button className="px-10 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg">
          Register Now
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

          {/* LOGIN METHOD TOGGLE */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setLoginMethod('password')}
              className={`flex-1 py-2 rounded-md transition ${
                loginMethod === 'password'
                  ? 'bg-white shadow-sm font-semibold'
                  : 'text-gray-600'
              }`}
            >
              Password
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod('otp')}
              className={`flex-1 py-2 rounded-md transition ${
                loginMethod === 'otp'
                  ? 'bg-white shadow-sm font-semibold'
                  : 'text-gray-600'
              }`}
            >
              OTP
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* USERNAME / MOBILE */}
            <Input
              label={loginMethod === 'otp' ? 'Mobile Number' : 'Username / Mobile'}
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={
                loginMethod === 'otp'
                  ? 'Enter mobile number'
                  : 'Enter username or mobile'
              }
              icon={
                loginMethod === 'otp'
                  ? <Phone className="w-5 h-5" />
                  : <User className="w-5 h-5" />
              }
            />

            {/* PASSWORD */}
            {loginMethod === 'password' && (
              <div className="relative">
                <Input
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  icon={<Lock className="w-5 h-5" />}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[42px] text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            )}

            {/* OTP */}
            {loginMethod === 'otp' && (
              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <Input
                    label="OTP"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="h-[52px] px-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 whitespace-nowrap"
                >
                  {otpSent ? 'Resend' : 'Send OTP'}
                </button>
              </div>
            )}

            {/* FORGOT PASSWORD */}
            {loginMethod === 'password' && (
              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Login
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="font-medium">Sign in with Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('Apple')}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border bg-black text-white border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="font-medium">Sign in with Apple</span>
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600 lg:hidden">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
