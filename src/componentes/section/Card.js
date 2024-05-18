import Styles from "./Card.module.css"
import {useState} from 'react'
import Btn2 from "../elements/Btn2"

function Card({img,title,descr,repo,btntxt,site}){

    const [info,setInfo] = useState(false)

    function infOn(){
        setInfo(true)
    }
    function infOff(){
        setInfo(false)
    }

 
    return(
        <div className={Styles.card}>
            <a onMouseEnter={infOn} onMouseLeave={infOff} target="_blanc" href={site}>
                <img src={img}></img>
            </a>
            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Descrição: </strong>{descr}</p>
                    <Btn2 text={btntxt} link={repo}/>
                </section>
            )}
        </div>
    )
}
export default Card