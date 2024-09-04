'use client';
import { useEffect, useState } from 'react';
import styles from './contact.module.scss';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlitchedWriter, { wait } from 'glitched-writer';
import 'animate.css'
import { useRouter } from 'next/navigation';

export default function Contact() {
    const [currentStep, setCurrentStep] = useState(1);
    const [projectType, setProjectType] = useState('');
    const [budgetRange, setBudgetRange] = useState('');
    const [source, setSource] = useState('');
    const [isClient, setIsClient] = useState(false); // Asta pentru a verifica partea clientului
    const router = useRouter(); // Mutăm useRouter în interiorul funcției

    useEffect(() => {
        setIsClient(true); // Asta se va executa doar pe client, asigurând router-ul
    }, []);

    useEffect(() => {
        const Writer = new GlitchedWriter(`#glitch_step${currentStep}`, { letterize: true }, logString);

        const initWriter = async () => {
            if (currentStep === 1) {
                await wait(1000);
                await Writer.write("Bonjour, je m'appelle Alex, et je suis votre assistant virtuel.");
                await wait(2000);
                await Writer.write("Passons directement aux questions, En quoi pourrais-je vous aider?");
                setTimeout(() => {
                    document.querySelector('#options1').classList.remove("hidden");
                    document.querySelector('#options1').classList.add("flex")
                    document.querySelector('#options1').classList.add("animate__fadeIn")
                    
                }, 2000);
            }
            // Setup glitched animations for further steps
            if (currentStep === 2) {
                await Writer.write("Vous souhaitez travailler avec notre equipe? Quel genre de projet voulez vous realiser?");
                setTimeout(() => {
                    document.querySelector('#options2').classList.remove("hidden");
                    document.querySelector('#options2').classList.add("flex")
                    document.querySelector('#options2').classList.add("animate__fadeIn")
                    
                }, 1500);
            } else if (currentStep === 3) {
                await Writer.write("Quelle est votre fourchette de budget pour ce projet?");
                setTimeout(() => {
                    document.querySelector('#options3').classList.remove("hidden");
                    document.querySelector('#options3').classList.add("flex")
                    document.querySelector('#options3').classList.add("animate__fadeIn")
                    
                }, 1500);
            } else if (currentStep === 4) {
                await Writer.write("On est pas encore dans le livres d'histoire, alors comment avez-vous entendu parler de nous?");
                setTimeout(() => {
                    document.querySelector('#options4').classList.remove("hidden");
                    document.querySelector('#options4').classList.add("flex")
                    document.querySelector('#options4').classList.add("animate__fadeIn")
                    
                }, 1500);
            } else if (currentStep === 5) {
                await Writer.write("Parfait, maintenant pouvez-vous s'il vous plait nous donner les details qui nous manquent");
                setTimeout(() => {
                    document.querySelector('#options5').classList.remove("hidden");
                    document.querySelector('#options5').classList.add("flex")
                    document.querySelector('#options5').classList.add("animate__fadeIn")
                    
                }, 1500);
            }
        };

        initWriter();

        function logString(string) {
            const logs = document.getElementById('logs');
            if (logs) {
                logs.innerHTML = `<p>${string}</p>`;
            }
        }
    }, [currentStep]); // Dependency on currentStep to trigger writer on each step change

    const handleOptionClick = (option) => {
        if (currentStep === 1) {
            if (option === 'Commencer un projet') {
                setCurrentStep(2);
            } else if (option === 'Laisser un mot') {
                if (isClient) router.push('/accueil#contact'); // Verificăm dacă suntem pe client
            } else if (option === 'A propos de nous') {
                if (isClient) router.push('/accueil'); // Verificăm dacă suntem pe client
            }
        } else if (currentStep === 2) {
            setProjectType(option);
            setCurrentStep(3);
        } else if (currentStep === 3) {
            setBudgetRange(option);
            setCurrentStep(4);
        } else if (currentStep === 4) {
            setSource(option);
            setCurrentStep(5);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('projectType', projectType);
        formData.append('budgetRange', budgetRange);
        formData.append('source', source);

        const response = await fetch('http://194.164.72.37/mail.php', {
            method: 'POST',
            body: formData,
        });

        // if (response.ok) {
        //     setCurrentStep(6);
        //     setTimeout(() => {
        //         if (isClient) router.push('/accueil'); // Verificăm dacă suntem pe client
        //     }, 3000);
        // }
    };

    return (
        <>
            <Navbar />
            <section className={styles.contactWrap}>
                <Image src="/img/contact/degrade.png" className={styles.imgBg} width={1000} height={1000} alt='vkucode'/>
                <div className={styles.contactContent}>
                    {currentStep === 1 && (
                        <div>
                            <div className={styles.text} id="glitch_step1"></div>
                            <div className={`${styles.fadeInOptions} animate__animated hidden`} id='options1'>
                                <button onClick={() => handleOptionClick('Commencer un projet')}>Commencer un projet</button>
                                <button onClick={() => handleOptionClick('Laisser un mot')}>Laisser un mot</button>
                                <button onClick={() => handleOptionClick('A propos de nous')}>A propos de nous</button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <div className={styles.text} id="glitch_step2"></div>
                            <div className={`${styles.fadeInOptionsStep2} animate__animated hidden`} id='options2'>
                                <button onClick={() => handleOptionClick('Complete website')}>Complete website</button>
                                <button onClick={() => handleOptionClick('UX & WebDesign')}>UX & WebDesign</button>
                                <button onClick={() => handleOptionClick('CyberSecurite')}>CyberSecurite</button>
                                <button onClick={() => handleOptionClick('Referencement SEO')}>Referencement SEO</button>
                                <button onClick={() => handleOptionClick('Application')}>Application</button>
                                <button onClick={() => handleOptionClick('Logiciel')}>Logiciel</button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <div className={styles.text} id="glitch_step3"></div>
                            <div className={`${styles.fadeInOptionsStep2} animate__animated hidden`} id='options3'>
                                <button onClick={() => handleOptionClick('2k - 5k')}>2k - 5k</button>
                                <button onClick={() => handleOptionClick('5k - 10k')}>5k - 10k</button>
                                <button onClick={() => handleOptionClick('10k - 20k')}>10k - 20k</button>
                                <button onClick={() => handleOptionClick('25k+')}>25k+</button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div>
                            <div className={styles.text} id="glitch_step4"></div>
                            <div className={`${styles.fadeInOptionsStep2} animate__animated hidden`} id='options4'>
                                <button onClick={() => handleOptionClick('Un article')}>Un article</button>
                                <button onClick={() => handleOptionClick('Un ami')}>Un ami</button>
                                <button onClick={() => handleOptionClick('Un projet realise par nous')}>Un projet realise par nous</button>
                                <button onClick={() => handleOptionClick('Autre moyen')}>Autre moyen</button>
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div>
                            <div className={styles.text} id="glitch_step5"></div>
                            <form onSubmit={handleFormSubmit} className={`${styles.fadeInForm} animate__animated hidden`} id='options5'>
                                <div>
                                    <input name="name" placeholder="Nom Prenom" required />
                                    <input name="phone" placeholder="Telephone" required />
                                </div>
                                <div>
                                    <input name="email" placeholder="Email" required />
                                    <input name="company" placeholder="Company Name" />
                                </div>
                                <textarea name="message" placeholder="Votre message" required></textarea>
                                <button type="submit">Envoyer</button>
                            </form>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div>
                            <div className={styles.text} id="glitch_step6">
                                Votre message a ete envoie avec succes, merci pour le temps acorde!
                            </div>
                            <div className={styles.fadeInText}>Retour sur la page d'accueil dans 3 secondes</div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
