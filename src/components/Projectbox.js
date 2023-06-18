import "./Projectbox.css";
import 'reactjs-popup/dist/index.css';

function Projectbox(props){

    return (
        <div className = "project-box">
            <button className = "project-text">
                <h1 className = "project-name">{props.name}</h1>
                <p className = "project-startend">{props.startend}</p>
                <p className = "project-role">{props.role}</p>
                <p className = "project-desc">{props.desc}</p>
                </button>

            <button className = "prop-image1"><img className = "prop-image" src = {props.image} alt = "hello"></img></button>
        </div>
    );
};

export default Projectbox;