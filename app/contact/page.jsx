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

    const typeWriter = (text, elementId, speed) => {
        let i = 0;
        const element = document.getElementById(elementId);
    
        if (element) {
            clearInterval(element._interval); // Oprirea unui interval anterior dacă există
            element.innerHTML = ''; // Resetăm conținutul elementului pentru a preveni duplicarea
    
            // Creăm un nou interval
            element._interval = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(element._interval); // Oprim intervalul după ce textul este complet scris
                }
            }, speed);
        }
    };

    useEffect(() => {

        const initWriter = async () => {
            if (currentStep === 1) {
                typeWriter("Bonjour, je m'appelle Alex, et je suis votre assistant virtuel.", 'questionText1', 25);
                setTimeout(() => {
                    typeWriter("Passons directement aux questions, En quoi pourrais-je vous aider?", 'questionText1', 25);
                }, 3500)
                
                setTimeout(() => {
                    document.querySelector('#options1').classList.remove("hidden");
                    document.querySelector('#options1').classList.add("flex")
                    document.querySelector('#options1').classList.add("animate__fadeIn")
                    
                }, 5500);
            }
            // Setup glitched animations for further steps
            if (currentStep === 2) {
                // Inițiem animația de scriere pentru slide-ul 2
                typeWriter("Vous souhaitez travailler avec notre équipe? Quel genre de projet voulez-vous réaliser?", 'questionText2', 25);
                setTimeout(() => {
                    document.querySelector('#options2').classList.remove("hidden");
                    document.querySelector('#options2').classList.add("flex")
                    document.querySelector('#options2').classList.add("animate__fadeIn")
                    
                }, 4000);
            } else if (currentStep === 3) {
                // Inițiem animația de scriere pentru slide-ul 3
                typeWriter("Quelle est votre fourchette de budget pour ce projet?", 'questionText3', 25);
                setTimeout(() => {
                    document.querySelector('#options3').classList.remove("hidden");
                    document.querySelector('#options3').classList.add("flex")
                    document.querySelector('#options3').classList.add("animate__fadeIn")
                    
                }, 2500);
            } else if (currentStep === 4) {
                // Inițiem animația de scriere pentru slide-ul 4
                typeWriter("On n'est pas encore dans les livres d'histoire, alors comment avez-vous entendu parler de nous?", 'questionText4', 25);
                setTimeout(() => {
                    document.querySelector('#options4').classList.remove("hidden");
                    document.querySelector('#options4').classList.add("flex")
                    document.querySelector('#options4').classList.add("animate__fadeIn")
                    
                }, 4000);
            } else if (currentStep === 5) {
                typeWriter("Parfait, maintenant pouvez-vous s'il vous plait nous donner les details qui nous manquent", 'questionText5', 25);
                setTimeout(() => {
                    document.querySelector('#options5').classList.remove("hidden");
                    document.querySelector('#options5').classList.add("flex")
                    document.querySelector('#options5').classList.add("animate__fadeIn")
                    
                }, 4000);
            }
            else if (currentStep === 6) {
                await Writer.write("Votre message a ete envoie avec succes, merci pour le temps acorde!");
                setTimeout(() => {
                    document.querySelector('#options6').classList.remove("hidden");
                    document.querySelector('#options6').classList.add("flex")
                    document.querySelector('#options6').classList.add("animate__fadeIn")
                    
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
    
        const formData = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            company: e.target.company.value,
            message: e.target.message.value,
            projectType: projectType,
            budgetRange: budgetRange,
            source: source,
        };
    
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            // Tratează succesul, poți trece la următorul slide
            setCurrentStep(6);
            setTimeout(() => {
                if (isClient) router.push('/accueil'); // Redirecționare la pagina principală
            }, 7000);
        } else {
            // Tratează eroarea
            console.error('Eroare la trimiterea emailului.');
        }
    };

    return (
        <>
            <Navbar />
            <section className={styles.contactWrap}>
                <Image src="/img/contact/degrade.png" className={styles.imgBg} width={1000} height={1000} alt='vkucode'/>
                <div className={styles.contactContent}>
                    {currentStep === 1 && (
                        <div>
                            <div className={`${styles.text} typing-cursor`} id="questionText1"></div>
                            <div className={`${styles.fadeInOptionsStep2} animate__animated hidden`} id='options1'>
                                <button onClick={() => handleOptionClick('Commencer un projet')}>Commencer un projet</button>
                                <button onClick={() => handleOptionClick('Laisser un mot')}>Laisser un mot</button>
                                <button onClick={() => handleOptionClick('A propos de nous')}>A propos de nous</button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <div className={`${styles.text} typing-cursor`} id="questionText2"></div>
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
                            <div className={`${styles.text} typing-cursor`} id="questionText3"></div>
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
                            <div className={`${styles.text} typing-cursor`} id="questionText4"></div>
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
                            <div className={`${styles.text} typing-cursor`} id="questionText5"></div>
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
                        <div >
                            <div className={styles.text} id="glitch_step6"></div>
                            <div className={`${styles.fadeInText} animate__animated hidden`} id='options6'>
                                <p>
                                    Retour sur la page d'accueil dans 3 secondes
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
