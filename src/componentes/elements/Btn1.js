import styles from './Btn1.module.css'

function Btn1({text, link}){
    return(
       <div>
            <a target ="_blanc" href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
       </div> 
    )

}
export default Btn1