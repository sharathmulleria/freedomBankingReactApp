import '../Register/Register.css';

const Register = ()=> {
    return (
        <div className="register-container">
            <div className="image-panel" style={{ backgroundImage: `url("/images/happy-family.png")` }}>
                <div className="text-overlay">
                    <h2 className='overlay-text'>Register</h2>
                    <h2 className='overlay-text'>Now</h2>
                </div>
            </div>

            <div className="right">
                <div className="registration-heading">
                    <h2 className='reg-heading'>Bank Account Registration Form</h2>
                </div>
                <form action="" method="post">
                    <div className="account-information">
                        <div className="acc-information-title">
                            <h2 className='acc-title'>Account Information</h2>
                        </div>
                        <div className="acc-type">
                            <label htmlFor="accountType" className='accType-label'>Account Type</label>
                            <select name="" id="accountType" className='accType-select'>
                                <option value="">--Select Account Type--</option>
                                <option value="savings">Saving Account</option>
                                <option value="current">Current Account</option>
                            </select>
                        </div>
                        <div className="personalInformation">
                            <h3 className='personalInformation-heading'>Personal Information</h3>
                            <h3 className='personalInformation-msg'>The information given in this section is considered as the information of the primary account owner information.</h3>
                        </div>
                        <div className="prefixRow">
                            <div className="threeRow">
                                <div className="rowInput">
                                    <label htmlFor="email" className='row-labels'>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder='john.doe@email.com'
                                        className='inputField' /> 
                                </div>
                                <div className="rowInput">
                                    <label htmlFor="password" className='row-labels>'>Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password"
                                        placeholder='••••••••'
                                        className='inputField' /> 
                                </div>
                                <div className="rowInput">
                                    <label htmlFor="confirmPassword" className='row-labels>'>Confirm password</label>
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        id="confirmPassword"
                                        placeholder='••••••••'
                                        className='inputField' /> 
                                </div>
                            </div>
                            <div className="threeRow">
                                <div className="rowInput">
                                    <label htmlFor="firstName" className='row-labels>'>First Name</label>
                                    <input 
                                        type="text" 
                                        name='firstName' 
                                        id='firstName'
                                        placeholder='John' 
                                        className='inputField'/>
                                </div>
                                <div className="rowInput">
                                    <label htmlFor="lastName" className='row-labels>'>Last Name</label>
                                    <input 
                                        type="text" 
                                        name='lastName' 
                                        id='lastName'
                                        placeholder='Doe'
                                        className='inputField' />
                                </div>
                                <div className="rowInput">
                                    <label htmlFor="phoneNumber" className='row-labels>'>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phoneNumber" 
                                        id="phoneNumber"
                                        placeholder='9876543210'
                                        className='inputField' />
                                </div>
                            </div>
                            <div className="twoRow">
                                <div className="dob">
                                    <div className="dobInputContainer">
                                        <input 
                                           type="date"
                                        name='dob'
                                        id='dob' />
                                    </div>
                                    <label htmlFor="dob">Date of Birth</label>
                                </div>
                                <div className="gender">
                                    <div className="dobInputContainer">
                                        <select name="gender" id="gender">
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                        <option value="OTHER">OTHER</option>
                                    </select>
                                    </div>
                                    <label htmlFor="gender">Gender</label>
                                </div>
                            </div>
                            <div className="residentialAddress">
                                <h3 className="residentialAddress">Residental Address</h3>
                                <div className="addressInputContainer">
                                    <input 
                                    type="text"
                                    name='streetName'
                                    id='streetName'
                                    className='addressInputField' />
                                </div>
                                <label htmlFor="postal">Street Address</label>
                            </div>
                            <div className="residentialAddress">
                                <div className="addressInputContainer">
                                    <input 
                                    type="text"
                                    name='streetAddress'
                                    id='streetAddress'
                                    className='addressInputField' />
                                </div>
                                <label htmlFor="postal">Street Address Line 2</label>
                            </div>
                            <div className="residentialAddress">
                                <div className="addressInputContainer">
                                    <input 
                                    type="text"
                                    name='city'
                                    id='city'
                                    className='inputField' />
                                </div>
                                <label htmlFor="postal">City</label>
                            </div>
                            <div className="div twoRow">
                                <div className="residentialAddress">
                                <div className="rowInput">
                                    <input 
                                    type="text"
                                    name='province'
                                    id='province'
                                    className='inputField' />
                                </div>
                                <label htmlFor="postal">Province</label>
                            </div>
                            <div className="postal">
                                <div className="rowInput">
                                    <input 
                                type="text"
                                name='postal'
                                id='postal'
                                className='inputField' />
                                </div>
                                <label htmlFor="postal">Postal / Zip code</label>
                            </div>
                        </div>
                    </div>
                            <button className='registerButton'>Register</button>
                </div>
            </form> 
        </div>
    </div>
    )
}

export default Register;