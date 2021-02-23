import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TabList from './components/TabList';
import Body from './components/Body'
import ScrollButton from './components/scroll';


function App() {
  
  const tabs = [
    {
      id: 0,
      title: "Text"
    },
    {
      id: 1,
      title: "Images"
    },
    {
      id: 2,
      title: "Videos"
    },
    {
      id: 3,
      title: "Table"
    },
    {
      id: 4,
      title: "Form"
    }
  ]

  const [curTab, setCurTab] = useState(0);
  return (
    <div className="App">
     
        <TabList setTab = {setCurTab} tabs = {tabs} curTab = {curTab}>  </TabList>
        <Body currentTab = {curTab}> </Body>
        <ScrollButton></ScrollButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </div>
  );
}

export default App;
