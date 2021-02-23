import React from 'react';

function handleSubmit(){
    const form = document.getElementById('form');
    form.reset();
}

function TextTab() {


    return (

        <form id = "form">
            <h3> Sign up for our Harry Potter giveaway! </h3> 
                <label>Enter your name:</label>
                <input type="text" id="name" name="name"/>
                <br></br>
                <label >Enter your address:</label>
                <input type="text" id="address" name="address"/>
                <p>Which Harry Potter book is your favorite?</p>

                <div>
                <input type="radio" id="all"
                name="book" value="all"/>
                <label>All </label>
                <br></br>
              <input type="radio" id="book1"
               name="book" value="book1"/>
              <label>Harry Potter and the Sorcerer's Stone</label>
                <br></br>
              <input type="radio" id="book2"
               name="book" value="book2"/>
              <label>Harry Potter and the Chamber of Secrets</label>
                <br></br>
              <input type="radio" id="book3"
               name="book" value="book3"/>
              <label >Harry Potter and the Prisoner of Azkaban</label>
              <br></br>
              <input type="radio" id="book4"
               name="book" value="book4"/>
              <label >Harry Potter and the Goblet of Fire </label>
                <br></br>
              <input type="radio" id="book5"
               name="book" value="book5"/>
              <label >Harry Potter and the Order of the Phoenix</label>
                <br></br>
              <input type="radio" id="book6"
               name="book" value="book6"/>
              <label >Harry Potter and the Half Blood Prince</label>
                <br></br>
              <input type="radio" id="book7"
               name="book" value="book7"/>
              <label >Harry Potter and the Deathly Hallows</label>

            </div>

            <div>
              <button type="submit" onClick = {handleSubmit}>Submit</button>
            </div>

        </form>
    );
}

export default TextTab;