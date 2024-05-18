import styles from './Presentation.module.css'
import Btn1 from '../elements/Btn1'
import Btn2 from '../elements/Btn2'
import {useEffect, useState} from 'react'

function Presentation(){

    const[text,setText]=useState(''); //Aqui é o conteudo que será exibido ou apagado da tela
    const rotate = ['Rafael Manganiello','Desenvolvedor Front-End']; //array com os textos
    const [loop, setLoop]=useState(0); //qual o texto do array que será exibido (o ou 1)
    const [toDelete,setToDelete]= useState(false);//boolean que definirá se o texto será deletado ou não
    const period = 100; //velocidade em que o texto é escrito/apagado
    const [delta,setDelta]=useState(100) //variação da velicodade do period (nesse caso se mantem igual)


    useEffect(()=>{
        let ticker = setInterval (()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    },[text])

    const toType = () =>{

        let i = loop % rotate.length;
        let fullText = rotate[i]
        let updatedText = toDelete ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!toDelete && updatedText === fullText){
        setToDelete(true);
        setDelta(period);
        }else if (toDelete && updatedText === ''){
        setToDelete(false);
        setDelta(period);
        setLoop(loop+1);
        }
    }

    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portifolio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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