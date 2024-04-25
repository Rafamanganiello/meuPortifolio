import styles from './Skills.module.css'
import javascript from '../../images/skills/js.svg'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import react from '../../images/skills/react.svg'

function Skills(){
    return(
        <div id="Skills" className ={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
            </div>
        </div>
    )
}
export default Skills