'use client'
import { useState } from 'react';
import styles from '../accueil.module.scss'
import Image from 'next/image'

export default function AccContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Stare pentru butonul de submit

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Butonul este dezactivat imediat ce formularul este trimis

        try {
            const response = await fetch('/api/sendMailAcc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setStatus('Message envoyé avec succès!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Erreur lors de l\'envoi du message.');
            }
        } catch (error) {
            setStatus('Erreur lors de la connexion au serveur.');
        }

        setIsSubmitting(false); // Optional: Poți menține butonul dezactivat sau îl poți reactiva
    };

    return (
        <>
            <section className={styles.contactFormSection}>
                <div className={styles.contentFormSection}>
                    <div className={styles.planetDiv}>
                        <Image src="/img/accueil/planete.png" width={600} height={600} alt="Planet" />
                    </div>
                    <div className={styles.formSection}>
                        <div className={styles.headerForm}>
                            <h1>Ton&nbsp;projet nous&nbsp;<span>intéresse&nbsp;!</span></h1>
                            <a href="/devis">devis</a>
                            <div className={styles.separator}>
                                <div>&nbsp;</div>
                                <h2>ou</h2>
                                <div>&nbsp;</div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Musk"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john.musk@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Téléphone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="01 23 45 67 89"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Envoi en cours...' : 'Validé'}
                            </button>
                        </form>
                        {status && <p className='text-white mt-4 font-semibold '>{status}</p>}
                    </div>
                </div>
            </section>
        </>
    );
}
