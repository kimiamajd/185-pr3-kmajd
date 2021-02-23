import React, {useState} from 'react';
import '../TabList.css'

function handleTabClick(e, setTab, prevTab){
    if (parseInt(e.target.value) !== prevTab){
        document.getElementById(prevTab).classList.toggle("active");
        setTab(parseInt(e.target.value));
        document.getElementById(e.target.value).classList.toggle("active");
    }   
}

function TabList(props) {
    const setTab = props.setTab;
    const tabs = props.tabs;
    const curTab = props.curTab;
    function isActive(id){
        if (id === curTab){
            return "active";
        }
        else{
            return "";
        }
    }
    return (
        <div className = "TabList">
        {tabs.map((tab) => {
            return (
                <button id = {tab.id} className = {isActive(tab.id)} value = {tab.id} onClick = {e => handleTabClick(e, setTab, curTab)}>
                    {tab.title}
                </button>
            )
        })}
        </div>
    );
  }
  
  export default TabList;
  