import React from 'react'
import Styles from './Login.module.css'

export default function loginPage() {
    return (
        <div className={`container-fluid ${Styles.main}`} >
            <div className="container h-100 d-flex justify-content-center align-items-center">
                
                    <div className={`${Styles.loginCard}`}>
                        <div className="container">
                            <div className={`row ${Styles.details}`}>
                                <div className={Styles.loginHeading}>Admin Login</div>
                                <p style={{fontSize:"15px",color:"#4F4F4F"}}>Please enter your details to continue</p>
                                <input type="text" placeholder="SomeOne@example.com" className={`${Styles.inputField}`}/>
                                <input type="password" placeholder="EnterPassword" className={`${Styles.inputField}`} />
                                <button type="button" className={`btn btn-primary ${Styles.loginButton}`}>Sign in</button>
                                
                            </div>
                        </div>
                    </div>
                

            </div>
            
        </div>
    )
}
