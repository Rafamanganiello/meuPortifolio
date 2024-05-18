import styles from './Projects.module.css'
import Card from './Card'
import landingDNC from "../../images/landingDNC.png"
import Dncweather from "../../images/Dncweather.png"
import portvite from "../../images/portvite.png"
import tabuada from "../../images/tabuada.png"

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
            site="https://dncweather-1.netlify.app"/>
            <Card img={portvite} title="Porfólio Vite+React.js"
            descr= "Portfólio com a utilização do vite + React.js com aplicação de hooks e outros fundamentos do front-end"
            btntxt="Acessar repositório"
            repo="https://github.com/Rafamanganiello/portfolioVite"
            site="https://portvite.netlify.app"/>
            <Card img={tabuada} title="Tabuada"
            descr= "Tabuada aplicando logica de programação e estruturas de repetição"
            btntxt="Acessar repositório"
            repo="https://github.com/Rafamanganiello/Tabuada"
            site="https://easytabuada.netlify.app"/>
            
            
        </div>
     )
}
export default Projects