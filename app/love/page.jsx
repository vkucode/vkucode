'use client'
import { useEffect } from 'react';
import styles from './love.module.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlitchedWriter, { wait } from 'glitched-writer';
import 'animate.css'

export default function Love() {

    useEffect(() => {
        const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
        
        const initWriter = async () => {
            await wait(1200);
            await Writer.write("Я знаю, это кажется странным");
            
            await wait(1500);
            await Writer.write("но я хотел сказать тебе");
            
            await wait(2000);
            await Writer.write("что думаю о тебе все время мой ангелочек");

            await wait(2500);
            await Writer.write("Я очень благодарен Господу, что ты у меня есть");

            await wait(3000);
            await Writer.write("и хочу сказать, что я очень сильно тебя люблю");
            
            setTimeout(() => {
                document.querySelector('#heart').classList.remove("hidden");
            }, 1200);
            

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
            <section className={styles.contactWrap}>
                <div className={`${styles.text} animate__animated animate__fadeIn`} id="glitch_this">привет малышка</div>
                <div id='heart' className=' hidden text-7xl animate__animated animate__bounceIn'>❤️</div>
                {/* <div id="logs"></div> */}
                {/* <input id="input" type="text" disabled /> */}
            </section>
        </>
    )
}