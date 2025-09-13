import React from 'react';
import Background from './../../assets/images/background.png';
import Google from './../../assets/images/google.png';
import User from './../../assets/images/user.png';
import Lock from './../../assets/images/lock.png';
import Logo from './../../assets/images/logo.png';
import './index.scss';
import { NavLink } from 'react-router-dom';


const SignIn = (): React.JSX.Element => {

    return (
        <>
            <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',  background: 'contain no-repeat', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div style={{width: '433px', height: '534px', display: 'flex', flexDirection: 'column', backgroundColor: '#F0F2F5', borderRadius: '32px', boxSizing: 'border-box', padding: '40px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                        <div style={{width: '119px', height: '48px', marginRight: '30px'}}>
                            <img src={Logo} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '1px', height: '48px', marginRight: '30px', backgroundColor: '#CBCFD5'}} />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{margin: '0', fontSize: '18px', fontWeight: '300', color: '#0C0C0C'}}>Sign in to</p>
                            <p style={{margin: '0', fontSize: '18px', fontWeight: '700', color: '#0C0C0C'}}>Your Account</p>
                        </div>
                    </div>

                    <div style={{width: '100%', height: '48px', fontSize:'14', fontWeight: '600', color: '#FBFCFC',  backgroundColor: '#0C0C0C', borderRadius:'16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={Google} style={{width: '22px', height: '22px', marginRight: '10px'}} /> Sign in with Google
                    </div>

                    <p style={{margin: '0', fontSize: '14px', fontWeight: '500', color: '#0C0C0C', marginBottom: '10px'}}>Username / eMail</p>
                    <div style={{width: '100%', height: '48px', fontSize:'14', fontWeight: '400', color: '#CBCFD5',  backgroundColor: '#FBFCFC', border: '1px solid #CBCFD5', borderRadius:'16px', marginBottom: '10px', display: 'flex', alignItems: 'center', padding: '0 10px', boxSizing: 'border-box'}}>
                        <img src={User} style={{width: '22px', height: '22px', marginRight: '10px'}} /> user@readydrive.app
                    </div>

                    <p style={{margin: '0', marginBottom: '10px', fontSize: '14px', fontWeight: '500', color: '#0C0C0C'}}>Password</p>
                    <div style={{width: '100%', height: '48px', fontSize:'14', fontWeight: '400', color: '#CBCFD5',  backgroundColor: '#FBFCFC', alignItems: 'center', border: '1px solid #CBCFD5', borderRadius:'16px', marginBottom: '20px', display: 'flex', padding: '0 10px', boxSizing: 'border-box'}}>
                        <img src={Lock} style={{width: '22px', height: '22px', marginRight: '10px'}} /> ................
                    </div>

                    <NavLink to={'/rentandbooking'}
                        style={{width: '100%', height: '48px', fontSize:'14', fontWeight: '400', color: '#0C0C0C',  backgroundColor: '#CCFF00', alignItems: 'center', justifyContent: 'center',  borderRadius:'16px', marginBottom: '30px', display: 'flex', padding: '0 10px', boxSizing: 'border-box'}}>
                        Sign In
                    </NavLink>

                    <p style={{margin: '0', marginBottom: '10px', fontSize: '14px', fontWeight: '500', color: '#797C80'}}>Forgot password</p>
                </div> 
            </div>
        </>
        
    );
};

export default SignIn;