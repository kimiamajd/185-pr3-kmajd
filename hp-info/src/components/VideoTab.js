import React, {useState, useEffect, useCallback} from 'react';
import '../VideoTab.css'

function VideoTab() {
    const [currentOv, setCurrentOv] = useState(null);

    function handleOutsideClick(event){
        //console.log(currentOv);
        if (currentOv){
            var isClickInsideElement = currentOv.contains(event.target);
            if (!isClickInsideElement) {
        //        console.log("click is outside element");
                const vidId = currentOv.getAttribute("vidid");
                const vidElem = document.getElementById(vidId);
                console.log("vid elem: ", vidElem);
                if (vidElem !== null){
                    vidElem.style.pointerEvents = "none";
                    vidElem.contentWindow.postMessage(JSON.stringify({ event: 'command', 
                    func: 'pauseVideo' }), '*');
                    currentOv.style.opacity = 0;
                    setCurrentOv(null);
                }
                
        //        console.log("after setting null", currentOv);
            }
        }    
    }

    useEffect(() => {
        console.log("use effect called");
        console.log(currentOv);
        if (currentOv){
            document.addEventListener('click', (ev) => handleOutsideClick(ev));
            console.log("listener added");
        }
        else {
            document.removeEventListener('click', (ev)=> handleOutsideClick(ev));
            console.log('listener removed');
        }
    }, [currentOv]);

    function showOverlay(event){
        console.log("in show overlay");
        if (currentOv){
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var overlayID = event.target.getAttribute('over');
        var overlayElem = document.getElementById(overlayID);
        var vidID = event.target.getAttribute('vidid');
        var vidElem = document.getElementById(vidID);
        vidElem.style.pointerEvents = "all";
        overlayElem.style.opacity = 1;
        setCurrentOv(overlayElem);
        return false;
    }    


   //document.addEventListener('click', (ev) => handleClick(ev));

    
        


    return (
        <div>
        <h1>Harry Potter Videos</h1>

        <div className = "v-overlay" id = "ov1" vidid = "vid1">
            <iframe id = "vid1" src="https://www.youtube.com/embed/VyHV0BRtdxo" ></iframe>
        </div>
        <div className = "v-overlay" id = 'ov2' vidid = "vid2">
            <iframe id = "vid2" src="https://www.youtube.com/embed/lAxgztbYDbs" ></iframe>
        </div>
        <div className = "v-overlay" id = 'ov3' vidid = "vid3">
            <iframe id = "vid3" src= "https://www.youtube.com/embed/1bq0qff4iF8"></iframe>
        </div>
        <div className = "v-overlay" id = 'ov4' vidid = "vid4">
            <iframe id = "vid4" src="https://www.youtube.com/embed/3EGojp4Hh6I"></iframe>
        </div>
        <div className = "v-overlay" id = 'ov5' vidid = "vid5">
            <iframe id = "vid5" src="https://www.youtube.com/embed/y6ZW7KXaXYk"></iframe>
        </div>
        <div className = "v-overlay" id = 'ov6' vidid = "vid6">
            <iframe id = "vid6" src="https://www.youtube.com/embed/sg81Lts5kYY"></iframe>
        </div>
        <div className = "v-overlay" id = 'ov7' vidid = "vid7">
            <iframe id = "vid7" src="https://www.youtube.com/embed/MxqsmsA8y5k"></iframe>
        </div>
        <div className = "v-overlay" id = 'ov8' vidid = "vid8">
            <iframe id = "vid8" src="https://www.youtube.com/embed/5NYt1qirBWg"></iframe>
        </div>

        <div className = "row">
                <div className = 'col'>
                    <div className = "vid">
                        <iframe src="https://www.youtube.com/embed/VyHV0BRtdxo"></iframe>
                        <div className = "transparent" over = "ov1" vidid = "vid1" onClick = {e => showOverlay(e)}></div>
                    </div>
                    <div className = "vid">
                        <iframe src="https://www.youtube.com/embed/lAxgztbYDbs" over = "ov2" onclick = "return showOverlay(event);"></iframe>
                        <div className = "transparent" over = "ov2" vidid = "vid2" onClick = {e => showOverlay(e)}></div>
                    </div>
                </div>
                <div className = "col">
                    <div className = "vid">   
                        <iframe src="https://www.youtube.com/embed/1bq0qff4iF8"></iframe>
                        <div className = "transparent" over = "ov3" vidid = "vid3" onClick = {e => showOverlay(e)}></div>
                    </div>
                    <div className = "vid">
                        <iframe src="https://www.youtube.com/embed/3EGojp4Hh6I" over = "ov4" onclick = "return showOverlay(event);"></iframe>
                        <div className = "transparent" over = "ov4" vidid = "vid4" onClick = {e => showOverlay(e)}></div>
                    </div>
                </div>
                <div className = "col"> 
                    <div className = "vid">
                        <iframe src="https://www.youtube.com/embed/y6ZW7KXaXYk" over = "ov5" onclick = "return showOverlay(event);"></iframe>
                        <div className = "transparent" over = "ov5" vidid = "vid5" onClick = {e => showOverlay(e)}></div>
                    </div>
                    <div className = "vid">
                        <iframe src="https://www.youtube.com/embed/sg81Lts5kYY" over = "ov6" onclick = "return showOverlay(event);"></iframe>
                        <div className = "transparent" over = "ov6" vidid = "vid6" onClick = {e => showOverlay(e)}></div>
                    </div>
                </div>
                <div className = "col"> 
                    <div className = "vid"> 
                        <iframe src="https://www.youtube.com/embed/MxqsmsA8y5k" over = "ov7" onclick = "return showOverlay(event);"></iframe>
                        <div className = "transparent" over = "ov7" vidid = "vid7" onClick = {e => showOverlay(e)}></div>
                    </div>
                    <div className = "vid">
                        <iframe src="https://www.youtube.com/embed/5NYt1qirBWg" over = "ov8" onclick = "return showOverlay(event);"></iframe>
                        <div className = "transparent" over = "ov8" vidid = "vid8" onClick = {e => showOverlay(e)}></div>

                    </div>
                </div>
         </div>
    </div>
    )
}

export default VideoTab;