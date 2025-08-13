import homeImage from '../../assets/images/home-img.png';
import zeroProcessingFee from '../../assets/images/zero-processing.png';
import personalLoan from '../../assets/images/personal-loan.png';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <div>
                    <img src= {homeImage} alt="home-img" className='home-img' />
                </div>
                <div className="home-message">
                    <h1 className="msg-1">Welcome to FreedomBanking!</h1>
                    <h1>Please Log In or Create Account to get started.</h1>
                    <h2 className="msg-2">Ready to manage your finances? </h2>
                </div>
            </div>
            <div className="home-header2">
                <h2 className="msg-3">Personal Banking</h2>
                <button className="home-btn">Login</button>
                <button className="home-btn">Register</button>
            </div>
            <div className="offers">
                <img src= {zeroProcessingFee} alt="zero-processing-fee" className='offer-img' />
                <img src= {personalLoan} alt="personalLoan" className='offer-img' />
            </div>
        </div>
    )
}

export default Home;