import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import styles from './Footer.module.css'
import Bt2 from '../elements/Btn2'

function Footer(email,copy){
    return(
        <div className={styles.footer}>
            <Bt2
            text="Repositório completo" link="https://github.com/Rafamanganiello?tab=repositories"/>
            <ul>
                <li><a target='_blanc' href='https://www.instagram.com/rafamanganiello/'><FaInstagram size={30}/></a></li>
                <li><a target='_blanc' href='https://github.com/Rafamanganiello'><FaGithub size={30}/></a></li>
                <li><a target='_blanc' href='https://www.linkedin.com/in/rafael-manganiello-594600295/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>rafa_manganiello@hotmail.com</p>
            <p>Rafael Manganiello © 2024</p>
        </div>
    )
}
export default Footer