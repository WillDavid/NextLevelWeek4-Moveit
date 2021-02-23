import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
        <ExperienceBar></ExperienceBar>

        <section>
          <div>
            <Profile></Profile>
            <CompletedChallenges></CompletedChallenges>
            <Countdown></Countdown>
          </div>
          <div>
            

          </div>
        </section>
    </div>
  )
}
