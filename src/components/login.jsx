import React from "react";
import { useNavigate } from 'react-router-dom';

import "../styles/dashboard.css";
const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <nav class="border bg-white shadow-lg ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="flex items-center">
            <img
              src="https://www.letusmaintain.com/img/logo.png"
              class=" mr-2  sizeimg"
              alt=""
            />
          </div>
        </div>
      </nav>
      <p class=" font-medium text-3xl text-center mb-8 mt-5">Login</p>
      <div class="bg-white rounded-lg shadow-custom  p-6 max-w-sm mx-auto items-center justify-center ">
        <h2 class="text-xl font-bold mb-4">Channel Partner Login</h2>
        <form>
          <div class="mb-4">
            <label
              class="block font-medium text-2xl text-center mb-8"
              for="referralId"
            >
              Referral ID*
            </label>
            <div class="flex justify-center mb-4">
              <div class="flex ">
                <input
                  class="sr-only"
                  type="text"
                  id="referralId"
                  name="referralId"
                  maxlength="1"
                  inputmode="numeric"
                />
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin1"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 1"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin2"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 2"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin3"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 3"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin4"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 4"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin5"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 5"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin6"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center mb-4">
            <input
              class="form-checkbox h-4 w-4 text-blue-600"
              id="rememberMe"
              type="checkbox"
            />
            <label class="ml-2 text-gray-700" for="rememberMe">
              Remember Me
            </label>
          </div>
         <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignUpClick}
          >
            Login
          </button>
        </form>
        <div class="text-sm mt-4">
          <p>For Sign up as a Channel Partner click this link:</p>
          <a href="#!" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
