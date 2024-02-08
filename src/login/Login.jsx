import { FaEnvelope, FaEye } from 'react-icons/fa';
import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import Dashboard from '../dashboard/user_dashboard/Dashboard';
import Carousel from '../login/Carousel'
import axios from '../api/axios';
import Logo from '../components/Logo';
import './css/login.css'
import ForgotPassword from './ForgotPassword';
const LOGIN_URL = '/auth';


const Login = () =>{
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg]= useState('');
    const [success, setSuccess]= useState('false');

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []) 
    
    
    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
       try{
        const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),
        {
          headers:{'Content-Type': 'application/json'},
          withCredentials: true
        } 
        );
        console.log(JSON.stringify(response?.data ));
        console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth ({user, pwd, roles, accessToken});
        setUser('');
        setPwd('');
        setSuccess('false');
       }catch(err){
        if(!err?.response){
          setErrMsg('No Server Response');
        }else if (err.response?.status === 400){
          setErrMsg('Missing Username or Password');
        }else if(err.response?.status === 401){
          setErrMsg('Unauthorized');
        }else{
          setErrMsg('Login Failed')
        }
        errRef.current.focus();
       }
   
    }

  return (
    <>
    {success ? (
        <Dashboard/>
    ) : (
      
    <section className='login-page'>
      <Carousel/>
      <div className='form-section'>
        <Logo/>
        <span className='info'>
            <h3>Get Started Now</h3>
            <p>Enter your credentials to access your account</p>
        </span>
     
      <p ref={errRef} className={errMsg ? " " : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit}>
      <label htmlFor='user'>Email</label>
      <span>
      <input
            type='text'
            id="user"
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            placeholder='Your email'
        />
        <FaEnvelope/>
        </span>
      <label htmlFor='password'>Password</label>
      <span>
      <input
            type='password'
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            placeholder='Your password'
        />
        <FaEye/>
        </span>
        <ForgotPassword/>
        <button className='login-btn'>Login</button>
        </form>
        </div>
        </section>
    
    )}
   
    </>
 
  )
}

export default Login
