import React, {useState} from 'react';
import img1 from './images/hp1.jpg'
import img5 from './images/hp5.jpg'
import img8 from './images/hp8.jpg'
import img20 from './images/hp20.jpeg'
import img6 from './images/hp6.jpg'
import img7 from './images/hp7.jpg'
import img4 from './images/hp4.jpg'
import img21 from './images/hp21.jpg'
import img22 from './images/hp22.jpg'
import img23 from './images/hp23.webp'
import img24 from './images/hp24.jpg'
import img25 from './images/hp25.jpg'
import img26 from './images/hp26.jpg'
import img27 from './images/hp27.png'
import img28 from './images/hp28.jpeg'
import img29 from './images/hp29.jpg'
import '../ImageTab.css';



function ImageTab() {

    const [currentOv, setCurrentOv] = useState(null);

    function showOverlay(event){
        if (currentOv){
            return;
        }
        event.stopPropagation();
        var overlayID = event.target.getAttribute('over');
        var overlayElem = document.getElementById(overlayID);
        overlayElem.style.opacity = 1;
        console.log("overlay element: ", overlayElem);
        setCurrentOv(overlayElem);
        return;
    }

    document.addEventListener('click', function(event) {
        console.log(currentOv);
        if (currentOv){
            var isClickInsideElement = currentOv.contains(event.target);
            if (!isClickInsideElement) {
                console.log("click is outside element");
                currentOv.style.opacity = 0;
                setCurrentOv(null);
            }
        }
    });

    return (
        <div className = 'ImageTab'>
            <h1>Harry Potter Images</h1>


            <div className = "overlay" id = 'ov1'>
            <img src = {img1}/>
            </div>

            <div className = "overlay" id = 'ov5'>
            <img src = {img5}/>
            </div>
       
            <div className = "overlay" id = 'ov8'>
                <img src = {img8}/>
            </div>
            <div className = "overlay" id = 'ov20'>
                <img src = {img20}/>
            </div>
            <div className = "overlay" id = 'ov6'>
                <img src = {img6}/>
            </div>
            <div className = "overlay" id = 'ov7'>
                <img src = {img7}/>
            </div>
            <div className = "overlay" id = 'ov4'>
                <img src = {img4}/>
            </div>
            <div className = "overlay" id = 'ov21'>
                <img src = {img21}/>
            </div>
            <div className = "overlay" id = 'ov22'>
                <img src = {img22}/>
            </div>
            <div className = "overlay" id = 'ov23'>
                <img src = {img23}/>
            </div>
            <div className = "overlay" id = 'ov24'>
                <img src = {img24}/>
            </div>
            <div className = "overlay" id = 'ov25'>
                <img src = {img25}/>
            </div>
            <div className = "overlay" id = 'ov26'>
                <img src = {img26}/>
            </div>
            <div className = "overlay" id = 'ov27'>
                <img src = {img27}/>
            </div>
            <div className = "overlay" id = 'ov28'>
                <img src = {img28}/>
            </div>
            <div className = "overlay" id = 'ov29'>
                <img src = {img29}/>
            </div>




            <div className = "row">
                <div className = "col">
                    <img src = {img1} over = "ov1" onClick = {e => showOverlay(e)}/>
                    <img src = {img5} over = "ov5" onClick = {e => showOverlay(e)}/>
                    <img src = {img8} over = "ov8" onClick = {e => showOverlay(e)}/> 
                    <img src = {img20} over = "ov20" onClick = {e => showOverlay(e)}/>
                </div> 
                <div className = "col">
                    <img src = {img6} over = "ov6" onClick = {e => showOverlay(e)}/>
                    <img src = {img7}  over = "ov7" onClick = {e => showOverlay(e)}/>
                    <img src = {img4}  over = "ov4" onClick = {e => showOverlay(e)}/>
                    <img src = {img21} over = "ov21" onClick = {e => showOverlay(e)}/>
                </div>
                <div className = "col">
                    <img src = {img22}  over = "ov22" onClick = {e => showOverlay(e)}/>
                    <img src = {img23} over = "ov23" onClick = {e => showOverlay(e)}/>
                    <img src = {img24} over = "ov24" onClick = {e => showOverlay(e)}/>
                    <img src = {img25} over = "ov25" onClick = {e => showOverlay(e)}/>
                </div> 
                <div className = "col">
                    <img src = {img26}  over = "ov26" onClick = {e => showOverlay(e)}/>
                    <img src = {img27} over = "ov27" onClick = {e => showOverlay(e)}/>
                    <img src = {img28}  over = "ov28" onClick = {e => showOverlay(e)}/>
                    <img src = {img29} over = "ov29" onClick = {e => showOverlay(e)}/>
                </div>
            </div>
       </div>
        )
}

export default ImageTab;