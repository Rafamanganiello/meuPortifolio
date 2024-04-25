import styles from './Btn2.module.css'

function Btn2({text,link}){
    return(
        <div>
            <a target ="_blanc" href={link}>
                <button className={styles.btn}>{text}</button>
            </a> 
        </div>    
    )

}
export default Btn2