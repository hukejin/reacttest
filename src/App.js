import logo from './logo.svg';
import './App.css';
import Layout from './componets/layout'
import Version from './componets/Version';
import {useState} from 'react'

function App() {
  const [showsit, setShowsit] = useState(true);
  let subsit = showsit?<Layout></Layout>:<Version></Version>
  return (
    <div className="App">
      <button onClick={()=>{setShowsit(!showsit)}}>点击切换题目</button><br/>
      {subsit}
    </div>
  );
}

export default App;
