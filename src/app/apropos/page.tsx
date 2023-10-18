import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Product from '../../components/Product'
import {featuredProducts, pastries, drinks} from '../../data'
import portrait from "../../../public/pastrychefportrait.jpg"
import dessert from "../../../public/cinnamonrolls.jpg"

export default function MenuPage() {
  return (<>
    <section className={styles.APContainer}>
        <div className={styles.APIntro}>
        <h1 className={styles.APTitle}>A PROPOS DE NOUS</h1>
        <p>Lorem ipsum dolor sit amet. 33 eius alias est enim error est voluptatem dolorum est magni voluptatem non dicta repellendus et commodi iure. Ut modi sunt ab aliquid exercitationem in ipsum adipisci. A internos ipsum At consequatur assumenda et esse ullam eum sunt quis?</p>
        <br></br>
        <p>Ex odit sunt rem repellendus dolor ut animi vitae ut quis error ab doloribus laborum. Ut saepe maiores ut inventore unde in asperiores voluptatem nam saepe commodi qui placeat blanditiis id voluptatem aspernatur qui ratione veniam. Aut facere sunt sed exercitationem molestiae ut quia nobis ad dolor reprehenderit qui sint consectetur.</p>
        <br></br>
        <p>Sed perferendis facilis non molestias labore hic cumque dolor. Est iusto alias quo deleniti iure qui enim molestiae et internos quos 33 nemo laudantium.</p>
        </div>
    </section>
    <section className={styles.descSection}>
        <div className={styles.PortraitChefContainer}>
            <Image src={portrait} alt="notre maitre patissier" className={styles.protraitChef}/>
        </div>
        <div className={styles.chefDescContainer}>
            <h2 className={styles.APSubTitle}>Notre Maître Patissier</h2>
            <p>Lorem ipsum dolor sit amet. 33 eius alias est enim error est voluptatem dolorum est magni voluptatem non dicta repellendus et commodi iure. Ut modi sunt ab aliquid exercitationem in ipsum adipisci. A internos ipsum At consequatur assumenda et esse ullam eum sunt quis?</p>
        </div>
        <div className={styles.DessertPicContainer}>
            <Image src={dessert} alt="cinnamonrolls" className={styles.dessertPic}/>
        </div>
        <div className={styles.chefDescContainer}>
            <h2 className={styles.APSubTitle}>Une passion</h2>
            <p>Lorem ipsum dolor sit amet. 33 eius alias est enim error est voluptatem dolorum est magni voluptatem non dicta repellendus et commodi iure. Ut modi sunt ab aliquid exercitationem in ipsum adipisci. A internos ipsum At consequatur assumenda et esse ullam eum sunt quis?</p>
        </div>
    </section>
    
    </>
  )
}