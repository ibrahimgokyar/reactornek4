import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {

    const element = (
        <div>
            <h1>Merhaba Dünya</h1>
            <h2>Şu anki zamanı {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    root.render(element);
}
setInterval(tick,1000);

const RenderComponent = () => {
    return(
        <div id="root"></div>
    )
}

export default function RenderOrnek() {
    return(
        <div>
            <RenderComponent />
        </div>
    )
}