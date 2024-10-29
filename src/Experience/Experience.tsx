
import { useNavigate } from "react-router-dom"
import styles from "./Experience.module.scss";


export const ExperiencePage = () => {
   const navigate  = useNavigate()
    return (
        <div className={styles.experienceContainer} >
            <div className={styles.buttons}>
            <button onClick={()=>navigate("/")}>HOME</button>
            <button onClick={()=> navigate("/About")}>ABOUT</button>
            <button onClick={()=> navigate("/EXPERIENCE")}>EXPERIENCE</button>
            <button onClick={()=> navigate("/CONTACT")}>CONTACT</button>
            </div>
            <div className={styles.exp}>
            <div className={styles.karHud}>
              <p className={styles.name}>KAR HUD Software Development</p>  
              <p className={styles.time}>2024.07 - present</p>  

            <p className={styles.description}>· My responsibilites include:<br/>
            · creating scalable and responsive web application,<br/>
            · debugging code with browser/text editor debugger,<br/>
            · doing code review,<br/>
            · consulting creation of components with client,<br/>
            · using version control system - git,<br/>
            ·  work planning and time management using Jira,<br/>
            Currently, I am mainly focused on creating a web application <br/>
            for a building depot. The project requires creating a databas<br/>
            e with the current product list, which will be updated every <br/>
            time something is added or removed from the origin file. <br/>
            For this job, I have chosen technologies like MongoDB,<br/>
                Express.js, React and Vite
                </p>
                  <img 
            className={styles.calvin}
            src="/calvin.png"
            ></img>
            </div>
          
            <div className={styles.course}>
            <p className={styles.name}>Practical Programming Course</p>  
              <p className={styles.time}>2022.12 - 2024.07</p>  
            <p className={styles.description}>Course Includes:<br/>
            · learning programming mechanics from the beginning<br/>
            · working with the debugger and github<br/>
            · practical exercises after each topic discussed<br/>
            · consulting creation of components with client,<br/>
            · using version control system - git,<br/>
            ·  work planning and time management using Jira,<br/>
                Technologies I work with after the course:
                </p>
                <p  className={styles.tech}>
                JAVASCRIPT<br/>
                TYPESCRIPT<br/>
                REACT<br/>
                NPM<br/>
                SASS<br/>
                GIT<br/>
                HTML<br/>
                NODE.JS<br/>
                NEST<br/>
                VITE.JS<br/>
                VITUSAL STUDIO CODE<br/>
                POSTMAN <br/>
                </p>

                <p className={styles.name}>PROJECTS I DID DURING THE COURSE</p>

                <p className={styles.Project}> SEARCH BAR </p>
                    <p className={styles.description}> searching for specific information through input<br/> 
                    based on data downloaded from the website</p>
                <p className={styles.tech}>
                    Technologies:<br/>
                    NPM <br/>
                    REACT <br/>
                    TYPESCPRIPT <br/>
                    NODE.JS<br/>
                </p>

                <p className={styles.Project}> REGISTRATION FORM </p>
                <p className={styles.description}>Saving user data on the server side and <br/>
                creating a registration form on the user side</p>
                <p className={styles.tech}>
                    Technologies:<br/>
                    NPM <br/>
                    REACT <br/>
                    TYPESCPRIPT <br/>
                    NODE.JS<br/>
                </p>
            </div>
            <div>
            </div>
            </div>
            <img
            ></img>
        </div> 
    )
}