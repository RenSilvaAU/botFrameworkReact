import React from 'react'
import Iframe from 'react-iframe'
import MyWebChat from './components/MyWebChat'
import './App.css'


function App() {
  return (
    <div>
        <Iframe url="https://dev.botframework.com/"
              position="absolute"
              width="99%"
              id="myId"
              allowFullScreen="true"
              height="95%"
        />
        <div className="AppFrame">
          <div className="ChatWindow">
            <MyWebChat ></MyWebChat>
          </div>
        </div>
    </div>
  );
}

export default App
