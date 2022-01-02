import React from "react"
import '../styles/sidebar.css';

function Sidebar(props){
    return (
        <div>
            <div className={props.className}>
                <h2>Sidebar Component</h2>     
            </div>
        </div>
    )
}
export default Sidebar