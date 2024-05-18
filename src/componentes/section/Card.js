import Styles from "./Card.module.css"
import { useState } from 'react'
import Btn2 from "../elements/Btn2"

function Card({ img, title, descr, repo, btntxt, site }) {

    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div className={`${Styles.card} ${isHovered ? Styles.hovered : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a target="_blank" href={site}>
                <img src={img} alt="Card"></img>
            </a>
            <section className={Styles.additionalInfo}>
                <h3>{title}</h3>
                <p><strong>Descrição: </strong>{descr}</p>
                <Btn2 text={btntxt} link={repo} />
            </section>
        </div>
    )
}

export default Card



