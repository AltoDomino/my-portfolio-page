
import { useNavigate } from "react-router-dom"
import styles from "./About.module.scss";


export const AboutPage = () => {

   const navigate  = useNavigate()

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.buttons}>
            <button onClick={()=>navigate("/")}>HOME</button>
            <button onClick={()=> navigate("/About")}>ABOUT</button>
            <button onClick={()=> navigate("/EXPERIENCE")}>EXPERIENCE</button>
            <button onClick={()=> navigate("/CONTACT")}>CONTACT</button>
            </div>
            <div className={styles.describe}>
                <p 
                >I am a junior fullstack developer.<br/>
                 I have been working with frontend <br/>
                 (React, Typescript, HTML, and CSS Modules)<br/> 
                 and backend (Express, MongoDB, Node.js)<br/>
                technologies. Currently,I've recently joined a project<br/>
                aimed at creating a website for a building depot.<br/>
                This allows me to develop my teamwork skills <br/>
                and practically apply the skills I have acquired so far. </p>
            </div>
            <div className={styles.together}>  
                 <p className={styles.hover}>
                THAT'S ME!
                </p> 
            <div className={styles.photoContainer}>
             <img  className={styles.photo}
                src="6939.png"
            ></img>
            <img className={styles.photoHover}
                src="ja22.png"
            ></img>    
            </div>
        
            </div>
        </div> 
    )
}