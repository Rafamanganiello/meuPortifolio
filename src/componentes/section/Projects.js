import styles from './Projects.module.css'
import Card from './Card'
import landingDNC from "../../images/landingDNC.png"
import Dncweather from "../../images/Dncweather.png"

function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Card img={landingDNC} title={"Landing page DNC"} 
            descr="Projeto front-end de uma landing page aplicando HTML, diferentes estilizações de CSS e funcionalidades JavaScript."
            btntxt="Acessar repositório" 
            repo="https://github.com/Rafamanganiello/Projeto-landing-page"
            site="https://landing-test-dnc-155cbe.netlify.app"/>
            <Card img={Dncweather} title="DncWeather"
            descr= "Projeto com consumo de APIs para consulta de cep e metereologia. Front-end desenvolvido com HTML e CSS puro. Consumo de api com JavaScript"
            btntxt="Acessar repositório"
            repo="https://github.com/Rafamanganiello/DncWeather"
            site="https://dncweatherapi.netlify.app"/>
            
            
        </div>
     )
}
export default Projects