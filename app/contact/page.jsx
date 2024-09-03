'use client'
import { useEffect } from 'react';
import styles from './contact.module.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlitchedWriter, { wait } from 'glitched-writer';

export default function Contact() {

    useEffect(() => {
        const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
        
        const initWriter = async () => {
            await wait(1000);
            await Writer.write("my old friend.");
            
            await wait(1200);
            await Writer.write("This is only the beginning.");
            
            await wait(1500);
            await Writer.write("Я просто хочу сказать тебе, что я очень тебя люблю");
            
            // document.querySelector('#input').removeAttribute("disabled");
        };

        initWriter();

        function logString(string) {
            const logs = document.getElementById('logs');
            if (logs) {
                 logs.innerHTML = `<p>${string}</p>`;
            }
        }
        
    }, []); // empty dependency array to run effect only once

    return (
        <>
            <Navbar />
            <section className={styles.contactWrap}>
                <div className={styles.text} id="glitch_this">Bonjour</div>
                {/* <div id="logs"></div> */}
                {/* <input id="input" type="text" disabled /> */}
            </section>
            <Footer />
        </>
    )
}