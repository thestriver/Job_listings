import React from 'react';
import Header from './Header';
import Featured from './Featured';
import Job from './Job';
import data from './data.json'


function App() {
  return (
    <div className="App" >
        <Header />  
        <Job items={data}/>
        
    </div>
  );
}

export default App;
