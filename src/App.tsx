import React from 'react';
import './App.css';



function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>header</header>
            <nav className='sidebar'>
                <div>
                   <a>profile</a>
                </div>
                <div>
                    <a>setting</a>
                </div>
                <div>
                    <a>music</a>
                </div>
                <div>
                    <a>profile</a>
                </div>
                <div>
                    <a>profile</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://www.slidebackground.com/uploads/rainbow/color-themes-rainbow-desktop-background-.jpg"/>
                </div>
                <div>
                    about
                </div>
                <div>
                    about
                </div>
                <div>
                    about
                </div>
            </div>

        </div>
    );
}

export default App;
