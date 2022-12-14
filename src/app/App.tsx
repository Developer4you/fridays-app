import React from 'react';
import './App.css';
import MainRoutes from '../routes/MainRoutes';
import Header from '../features/Header/Header';


function App() {
    return (
        <div className="App">
                <Header/>
                <MainRoutes/>
        </div>
    );
}

export default App;
