import React from 'react';
import TextTab from './TextTab'
import ImageTab from './ImageTab'
import VideoTab from './VideoTab'
import TableTab from './TableTab'
import FormTab from './FormTab'

function Body(props){
    const curTab = props.currentTab;
    console.log(curTab);
    
        if (curTab === 0){
            return <TextTab></TextTab>
        }
        if (curTab === 1){
            return <ImageTab></ImageTab>
        }
        if (curTab === 2){
            return <VideoTab></VideoTab>
        }
        if (curTab === 3){
            return <TableTab></TableTab>
        }
        if (curTab === 4){
            return <FormTab></FormTab>
        
        }
    
}

export default Body;