import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const root = ReactDOM.createRoot(document.getElementById('root'));

const BasicApp = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

root.render(<BasicApp />);