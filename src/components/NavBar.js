import "./NavBar.css";
import menu_icon from "../static/Menu-Icon.png";
import { Link } from "react-router-dom";

function NavBar(props) {

    function toggleMenu(){
        props.exit();
    }

    return (
        <div className = "navigation">
            <div className = "nav-bar" style = {{backgroundColor: props.background_color, backgroundImage: props.gradient}}>
                <Link className = "name-title" to = "/"><p style = {{color: props.headerColor}}>Brandon</p></Link>
                <button className = "menu-button" style = {{filter: "invert(" + props.menuButtonFilter.toString() + ")"}} onClick = {() => toggleMenu()}><img className = "menu-icon" src = {menu_icon} alt = "hello" width = "25px"></img></button>
            </div>

        </div>
    );
}

export default NavBar;