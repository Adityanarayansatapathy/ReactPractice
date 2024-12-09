import { useState } from "react";
import { tabData } from "./TabData"
import  {TabView} from "./TabView.css";



export function TabViwer() {
return (
    <div>
        <h1>Tab Viwer</h1>
        <TabSelector />
        {/* <TabContent /> */}
    </div>
 
   )  
}

function TabSelector() {
    let [selectTab ,setTabData] = useState(0)
    const handleTabClick = (index) => {
        setTabData(index);  
    };

    return (
        <div>
            <div className="tabView">
            {tabData.map((tab, index) => (
                <button key={index} onClick={() => handleTabClick(index)}>
                    {tab.title}
                </button>
                
            ))}
            </div>
             <h3>
                {tabData[selectTab].description}
             </h3>
        </div>
    );
}