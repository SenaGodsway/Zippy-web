import './css/login.css'
import Logo from '../components/Logo'
import Inputs from './Inputs'

export default function Form() {
  return (
    <div className='form-section'>
        <Logo/>
        <span className='info'>
            <h3>Get Started Now</h3>
            <p>Enter your credentials to access your account</p>
        </span>
        <Inputs/>
        
    </div>
  )
}
