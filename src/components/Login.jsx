import React from 'react'
import {useState, useEffect} from 'react'
import video from '/banana.mp4'
import {NavLink, redirect, Navigate, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUsername = (e) => {
        const username = e.target.value; 
        setUsername(username);
    }
    const handlePassword = (e) => {
        const password = e.target.value; 
        setPassword(password);
    }
    const handleLogin = async () => {
        const url = "http://localhost:6969/login";
        const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        };

        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log('username', data['user']['username'])
            console.log('auth token', data['authToken'])
            console.log('user', data['user'])
            Cookies.set('user',JSON.stringify(data['user']),{});
            Cookies.set('username', data['user']['username'], {});
            Cookies.set('authToken', data['authToken'], {});
            navigate("/")
        }) 
    }
    useEffect(() =>{
        const loggedIn = Cookies.get('username');
        console.log(loggedIn)
        if(typeof loggedIn !== 'undefined'){
            navigate('/')
        }
    },[])
    return (
        <div className='h-[100vh] w-[100vw] flex flex-row' >
            <div className="w-[60vw] h-[100vh]" style={{backgroundColor: '#f4c404'}}>
                <video 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='bg-white flex flex-col items-center justify-center'>
                <h1 className='text-black font-bold text-3xl'>Monkey Business</h1>
                <p className='text-black'>Make sure to bring a banana</p>

                <div className='flex flex-col justify-between align-center h-80 w-[40vw] rounded-lg p-10'>
                    <div className='flex flex-col gap-8'>
                        <div className='w-100'>
                            <input className='w-[100%] h-10 rounded-sm p-3 bg-white border text-black border-black placeholder-slate-300 shadow-lg' onChange ={handleUsername} name ="username" id="username" placeholder='username'></input>
                        </div>
                        <div className=''>
                            <input type='password' className='w-[100%] h-10 rounded-sm p-3 text-black bg-white border border-black placeholder-slate-300 shadow-lg' onChange ={handlePassword} name ="password" id="password" placeholder='password'></input>
                        </div>
                        <button 
                            className="flex justify-center items-center shadow-lg bg-yellow-300 border border-black text-black w-full h-10 rounded-sm p-3" 
                            onClick={handleLogin}
                            >
                            Log In
                        </button>
                        <p className='text-sm'>Not a monkey?<NavLink className='text-blue-600' to='/signup'>Sign up here</NavLink></p>
                    </div>
                </div>
                <div className='flex align-middle justify-center font-bold flex-col'>
                    <p>Test Username: monkey</p>
                    <p>Test Password: banana</p>
                </div>
                
            </div>
        </div>
    )
}

export default Login