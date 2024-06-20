import React from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded-xl shadow-md" style={{ width: '552px', height: '642px', top: '191px', left: '128px' }}>
            <h1 className="text-7xl font-bold mb-8 text-gray-800">LOGIN</h1>
            <form className="w-7/10">
              <div className="mb-4">
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex justify-around mb-6">
                <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200">
                  <FaGoogle className="mr-2" size={20} />
                  Google
                </button>
                <button className="flex items-center bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition duration-200">
                  <FaFacebook className="mr-2" size={20} />
                  Facebook
                </button>
              </div>
              <div className="text-center">
                <p> <a href="#" className="text-gray-500 hover:underline">Not yet registered,click here to sign up</a></p>
              </div>
            </form>
          </div>
          <div style={{ width: '800px', height: '631px', left: '811px' }}>
            <img src="/Frame 2.png" alt="Frame" className="max-h-full" /> 
          </div>
        </div>
        
      );
    }
    
  

        export default Login