import background from "../../assets/images/login-bg.png";
import './Login.css'

function Login () {
    return (
        <div className="login-box">
            <div className="left">
                <div className="login-title">
                    <h1 className="bg-title">Aim to make people's</h1>
                    <h1 className="bg-title">lives better</h1>
                </div>
                <div className="background">
                    <img src={background} className="bg-img" alt="bg-img" />
                </div>
            </div>
            <div className="right">
                <div className="login-container">
                <div className="login-text">
                    <h1 className="login-txt">Login</h1>
                </div>
                <form action="" className="form-container">
                    <div>
                        <label htmlFor="email" className="login-label">
                            Email Address
                        </label>
                        <div className="input-group">
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            className="input-field"
                            placeholder="you@example.com"
                            autoComplete="email"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="login-label">
                            Password
                        </label>
                        <div className="input-group">
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            className="input-field"
                            placeholder="..........."
                            autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <div className="signin-button">
                        <button type="submit" className="submit-btn"> Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login