import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile(){

    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/WillDavid.png" alt="William David"></img>
            <div>
                <strong>
                    William David
                </strong>
                <p>
                   <img src="icons/level.svg" alt="icone level"/> 
                   Level {level}
                </p>
            </div>
        </div>
    )
}