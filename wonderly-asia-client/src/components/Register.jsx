import React, { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaGithubAlt } from "react-icons/fa";
import { Link } from 'react-router';
import AuthContext from '../provider/AuthContext';
  import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { updateName, register, logout} = useContext(AuthContext);
   
    
    const handleCreateUser= e =>{
        e.preventDefault();
        const form = e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const checked =form.check.checked;
        console.log(name, email, password, checked);

        if(!checked){
            toast.error('Please accept terms and policy')
            return ;
        }
        else if(password.length < 6){
            toast.error("Password length must be at least 6 characters")
            return ;
        }
        else if(!/[A-Z]/.test(password)){
            toast.info("Password must have an uppercase character")
            return ;
        }
        else if(!/(?=.*[a-z])/.test(password)){
            toast.info("Password must have an lowercase character")
            return ;
        }
        else{
            // login logic for firebase and mongodb
         register(email, password)
        .then(data=>{
            console.log(data.user);
            
            updateName(name)
            
            .then(data=>{
                console.log('profile updated',data);
                const userInfo={name, email, password};
                
                fetch('http://localhost:5000/users',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                   if(data.insertedId){
                     toast.isActive('Successfully Registered');
                    
                   }
                   logout()
                   .then(()=>{
                    console.log('user loggedout')
                   })
                   .catch(error=>{
                    toast.error(error.message)
                   })
                   
                })
                e.target.reset();
                
            })
            .catch(error=>console.log('error while updating name', error.message))
        })
        
        
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message);
        
        })
    }
        
    }
    return (
        <div className='bg-gray-200 flex justify-center items-center min-h-screen'>
                   <div className="hero  max-w-5xl mx-auto">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                          
                            <div className=" bg-base-500 w-full  shrink-0 shadow-2xl flex flex-row ">
                                <div className='image-full'>
                                    <img src="https://i.ibb.co.com/fdNXWTb4/loginpage.png" alt="" className='w-[450px] h-full rounded-sm' />
                                   
                                </div>
                                
                                <div className=" p-10  bg-white rounded-sm w-1/2">
                                    <h2 className='text-center mb-5 text-3xl'>Create An Account</h2>
                                    
                                    <div className='flex justify-center items-center text-xl w-full mt-10'>
                                        <form onSubmit={handleCreateUser} className="w-full">
                                         <div className='flex justify-center items-center mb-15'>
                                            <div className='border border-gray-400 w-1/5 '></div>
                                            <p className='text-[12px]'>Or create with</p>
                                            <div className='border border-gray-400 w-1/5'></div>
        
                                         </div>
                                        <input type="text" placeholder="Enter name" name='name' className="input input-ghost border-0 w-full" />
                                        <div className='border border-gray-400 w-full mb-5'></div>
                                        <input type="email" placeholder="Enter email" name='email' className="input input-ghost border-0 w-full" />
                                        <div className='border border-gray-400 w-full mb-5'></div>
                                        <input type="password" placeholder="Enter Password" name='password' className="input input-ghost w-full" />
                                        <div className='border border-gray-400 w-full mb-5'></div>
                                        <div className='flex gap-2 text-[12px]'><input type="checkbox" name='check' /><p>I agree to the Terms and Privacy Policy.</p></div>
                                        <button type='submit' className=" bg-blue-500 font-bold rounded-lg text-white text-xl mb-2 mt-4 py-3 w-full">Create Account</button>
                                         <div className=' text-[12px]'><p>Already have an account? <Link to='/login' className=' text-blue-400'>Login</Link></p></div>
                                        <ToastContainer/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
    );
};

export default Register;