import Styles from "./Card.module.css"

import Btn2 from "../elements/Btn2"

function Card({img,title,descr,repo,btntxt,site}){
    return(
        <div className={Styles.card}>
            <a target="_blanc" href={site}>
                <img src={img}></img>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Descrição: </strong>{descr}</p>
                <Btn2 text={btntxt} link={repo}/>
            </section>
        </div>
    )
}
export default Card