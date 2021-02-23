import React from 'react';
import '../Scroll.css'

function ScrollButton(){

    const scrollButton = document.getElementById("scrollButton");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
    }

    function toTop() {

        window.scrollTo({top: 0, behavior: 'smooth'});
    
    }
 
    return (
        <button onClick={toTop} className= 'scrollButton' id = "scrollButton"> Scroll to top</button>
    );

}

export default ScrollButton;