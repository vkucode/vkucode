'use client'
import styles from '../accueil.module.scss'
import Image from 'next/image'

export default function AccContactForm(){
    return(
        <>
            <section className={styles.contactFormSection}>
                <div className={styles.contentFormSection}>
                    <div className={styles.planetDiv}>
                        <Image src="/img/accueil/planete.png" width={600} height={600} />
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
                        <form method='post' action='#'>
                            <div>
                                <label htmlFor="name">Nom</label>
                                <input type="text" name='name' id='name' placeholder='John Musk' />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="mail" name="email" id="email" placeholder='john.musk@example.com' />    
                            </div>
                            <div>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="tel" name="phone" id="phone" placeholder='01 23 45 67 89' />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type='submit'>
                                Validé
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}