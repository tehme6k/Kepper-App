import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function newNote(x){
    return (
        <Note 
            key={x.id}
            name={x.title}
            info={x.content}
        />
    );
}

function App(){
    return (
        <div>
            <Header />
            {notes.map(newNote)}
            <Footer />
        </div>
    );
}

export default App;