
import { useNavigate } from "react-router-dom"
import styles from "./Contact.module.scss";

export const ContactPage = () => {
   const navigate  = useNavigate()
    return (
        <div className={styles.contactContainer}>
            <div className={styles.buttons}>
            <button onClick={()=>navigate("/")}>HOME</button>
            <button onClick={()=> navigate("/About")}>ABOUT</button>
            <button onClick={()=> navigate("/EXPERIENCE")}>EXPERIENCE</button>
            <button onClick={()=> navigate("/CONTACT")}>CONTACT</button>
            </div>
            <p className={styles.stay}>Let's stay in touch!</p>
            <div className={styles.contact}>
            <button className={styles.icons}>
            <a href="https://www.linkedin.com/in/dominik-duraj-6b9812147/" rel="noopener noreferrer" target="_blank">
                <img className={styles.linkedin} src="/LinkedIn.png" alt="LinkedIn Profile" />
            </a>
            </button>
            <button className={styles.icons}>
            <a href="https://github.com/AltoDomino?tab=repositories" rel="noopener noreferrer" target="_blank">
                <img className={styles.git} src="/git.png" alt="Git Profile" />
            </a>
            </button>
            <button className={styles.icons}>
            <a href="mailto:d.dduraj@gmail.com" rel="noopener noreferrer" target="_blank">
                <img className={styles.mail} src="/person.png" alt="Mail Profile" />
            </a>
            </button>
            </div>
        </div> 
    )
}