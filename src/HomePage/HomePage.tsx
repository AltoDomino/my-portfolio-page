import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/")}>HOME</button>
        <button onClick={() => navigate("/About")}>ABOUT</button>
        <button onClick={() => navigate("/EXPERIENCE")}>EXPERIENCE</button>
        <button onClick={() => navigate("/CONTACT")}>CONTACT</button>
      </div>
      <div className={styles.oneLine}>
        <div className={styles.me}>
            <p className={styles.text}>
              "Hello World!" <br /> I'm
              <br /> Dominik Duraj
            </p>
            <img className={styles.animatedMe} src="/animatedMe.png" />
            </div>
        <div className={styles.down}>
           <p className={styles.jfsd}>
              JUNIOR
              <br />
              FULL STACK
              <br />
              DEVELOPER
            </p>
          <img 
          className={styles.code} 
          src="/code.png" />
        </div>
      </div>
    </div>
  );
};
