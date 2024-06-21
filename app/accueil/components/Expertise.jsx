'use client'
import Image from "next/image"
import styles from './components.module.scss';
import Spline from '@splinetool/react-spline/next';


export default function Expertise(){

    const Card = ({title, text, srcIcon}) => {
        return(
            <div className={styles.cardExpertise}>
                {/* <Image src={srcIcon} width={300} height={300} /> */}
            
                    {/* <Spline
                        className="icond3d"
                        scene={srcIcon} 
                    /> */}
                
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        )
    }

    const BandLeft = ({text1, text2, text3, text4}) =>{
        return(
            <div className={styles.bandDivLeft}>
                <span>{text1}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text2}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text3}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text4}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text1}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text2}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text3}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text4}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text1}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text2}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text3}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text4}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
            </div>
        )
    }
    const BandRight = ({text1, text2, text3, text4}) =>{
        return(
            <div className={styles.bandDivRight}>
                <span>{text1}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text2}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text3}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text4}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text1}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text2}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text3}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text4}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text1}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text2}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text3}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
                <span>{text4}</span>
                <Image src="/img/star.png" width={50} height={50} alt="star" />
            </div>
        )
    }

    const TextBand = () =>{
        return(
            <section className="absolute bottom-[50px] w-full overflow-x-hidden">
                <div className={styles.bandSection}>
                    <BandLeft text1="développement" text2="ui&nbsp;/&nbsp;ux&nbsp;design" text3="animation" text4="innovation" />
                </div>
                <div className={styles.bandSection}>
                    <BandRight text1="développement" text2="ui&nbsp;/&nbsp;ux&nbsp;design" text3="animation" text4="innovation" />
                </div>
            </section>
        )
    }
    return(
        <>
            <div className='h-screen relative flex flex-col justify-center items-center'>
                <h1>expertise</h1>
                <div className={styles.cardsSection}>
                    <Card srcIcon="https://prod.spline.design/RSmHR6I4O4jqaTTe/scene.splinecode" title="code" text="Lorem ipsum dolor sit amet consectetur. Adipiscing hac quam montes nunc gravida habitantddd sszf reghre tincidunt." />
                    <Card srcIcon="https://prod.spline.design/UnPejneo2Wd0095r/scene.splinecode" title="code" text="Lorem ipsum dolor sit amet consectetur. Adipiscing hac quam montes nunc gravida habitantddd sszf reghre tincidunt." />
                    <Card srcIcon="https://prod.spline.design/VL8JqopsTVyiXuiL/scene.splinecode" title="code" text="Lorem ipsum dolor sit amet consectetur. Adipiscing hac quam montes nunc gravida habitantddd sszf reghre tincidunt." />
                </div>
                <TextBand />
            </div>
        </>
    )
}