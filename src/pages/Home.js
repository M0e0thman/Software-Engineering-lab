import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "./Home.css"; // Import your custom styles if needed

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="creative-title">Welcome to the Exciting World of Quizzes!</h1>
                <nav className="nav-links">
                    <Link to="/Quiz">Quiz</Link>
                    <Link to="/Score">Score</Link>
                    <Link to="/RateOurQuiz">RateOurQuiz</Link>
                    <Link to="/SocialMedia">SocialMedia</Link>
                </nav>
                <Outlet />
            </div>
        );
    }
}

export default Home;
