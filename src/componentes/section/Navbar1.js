import styles from './Navbar1.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar1(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>

            </ul>
            <ul>
                <li><a target='_blanc' href='https://www.instagram.com/rafamanganiello/'><FaInstagram size={30}/></a></li>
                <li><a target='_blanc' href='https://github.com/Rafamanganiello'><FaGithub size={30}/></a></li>
                <li><a target='_blanc' href='https://www.linkedin.com/in/rafael-manganiello-594600295/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar1