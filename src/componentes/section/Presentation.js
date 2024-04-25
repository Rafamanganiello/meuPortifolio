import styles from './Presentation.module.css'
import Btn1 from '../elements/Btn1'
import Btn2 from '../elements/Btn2'

function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portifolio</strong></h4>
            <h1>Olá, eu sou Rafael Manganiello!</h1>
            <p> Sou um entusiasta da tecnologia desde os meus 16 anos.<br/>
                Após não me identificar na carreira de cozinheiro, percebi<br/> 
                que minha verdadeira vocação estava na área de tecnologia.<br/>
                Hoje, como programador, busco não apenas escrever linhas de código, <br/>
                mas sim solucionar problemas e entregar valor de forma eficiente e criativa.</p>

                <Btn1 text="Conecte-se comigo!"  link="https://github.com/Rafamanganiello"/>
                
        </div>
    )
}

export default Presentation