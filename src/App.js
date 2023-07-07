import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

const  App = () => {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    return (
      <div>
        <div>
           <Navbar />
        </div>

        <LoadingBar
        color='#f11946'
        progress={progress}  
        />
         <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="1" pageSize= {20} country={'in'} category="general" />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize= {20} country={'in'} category="business" />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize= {20} country={'in'} category="entertainment" />}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize= {20} country={'in'} category="general" />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize= {20} country={'in'} category="health" />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize= {20} country={'in'} category="science" />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize= {20} country={'in'} category="sports" />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize= {20} country={'in'} category="technology" />}></Route>
        </Routes>
      </div>
    )
}

export default App
