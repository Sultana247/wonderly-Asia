import React, { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaGithubAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../provider/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const {login, signinwithPopup}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // github sign in
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignin =()=>{
        signinwithPopup(githubProvider)
        .then(data=>{
            console.log(data);
            toast.success('Successfully logged in with GitHub!');
            navigate(location?.state ? location?.state?.from : '/');
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    // google sign in
    const googleProvider = new GoogleAuthProvider()
    const handleGooglesignin=()=>{
        signinwithPopup(googleProvider)
        .then(data=>{
            console.log(data)
            toast.success('Successfully Logged in with Google')
            navigate(location?.state ? location?.state?.from : '/');
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email=form.email.value;
        const password=form.password.value;
       
        login(email, password)
        .then(data=>{
            console.log("user logged in successfully",data.user);
            navigate(location?.state ? location?.state?.from : '/');
            e.target.reset();
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className='bg-gray-200 flex justify-center items-center min-h-screen'>
           <div className="hero  max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  
                    <div className=" bg-base-500 w-full  shrink-0 shadow-2xl flex flex-row ">
                        <div className='image-full'>
                            <img src="https://i.ibb.co.com/fdNXWTb4/loginpage.png" alt="" className='w-[450px] h-[550px] rounded-sm' />
                           
                        </div>
                        
                        <div className=" p-10  bg-white rounded-sm w-1/2">
                            <h2 className='text-center mb-5 text-3xl'>Login With Social Profile</h2>
                            <div className='flex gap-4 justify-center text-lg mb-5'>
                                
                               <button onClick={handleGooglesignin}>
                                    <div className='text-white bg-red-600 rounded-full p-2'>
                                    <FaGoogle />
                                    </div>
                                </button>
                                <button onClick={handleGithubSignin}>
                                    <div className='text-white bg-black rounded-full p-2'>
                                    <FaGithubAlt />
                                    </div>
                                </button>
                            </div>
                            <div className='flex justify-center items-center text-xl w-full mt-10'>
                                <form onSubmit={handleLogin} className="w-full">
                                 <div className='flex justify-center items-center mb-15'>
                                    <div className='border border-gray-400 w-1/5 '></div>
                                    <p className='text-[12px]'>Or use your email account</p>
                                    <div className='border border-gray-400 w-1/5'></div>

                                 </div>

                                <input name='email' type="email" placeholder="Enter email" className="input input-ghost border-0 w-full" />
                                <div className='border border-gray-400 w-full mb-5'></div>
                                <input name='password' type="password" placeholder="Enter Password" className="input input-ghost w-full" />
                                <div className='border border-gray-400 w-full mb-5'></div>
                                <div className='flex gap-2 text-[12px]'><input type="checkbox" /><p>Remember Me</p></div>
                                <button className=" bg-blue-500 rounded-lg font-bold text-white text-xl mt-4 py-3 w-full">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;