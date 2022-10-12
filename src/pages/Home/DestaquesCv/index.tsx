import ComponenteCorPositiva from "components/ComponenteCorPositiva";
import style from './DestaquesCv.module.scss';
import IlustraReact from 'assets/img/react_grafite.png';
import Nevoa from 'assets/img/nevoa.png';

export default function DestaquesCv(){

return(<ComponenteCorPositiva title={'Carreira'}>
        <div className={style.destaquesCv}>
        <img src={Nevoa} className={style.destaquesCv__bg} alt={'efeito de fundo'}/>
        <div className={style.destaquesCv__esquerda}>
            <h1>Ricardo Machado</h1><br/>
            <h2 id={'maquinaDeEscrever'}>| Front-End</h2>
            <img id={'girar'} src={IlustraReact} alt={'logo react grafitado'} />
        </div>
        <div className={style.destaquesCv__direita}>
            <h4 id={'aparece'}>Pós-graduação em análise e desenvolvimento de programas</h4>
            <h4 id={'aparece'}>16 anos de experiência em vendas e Marketing</h4>
            <h4 id={'aparece'}>Mais de 50 cursos realizados nas áreas de Front-End, UX e Back-End</h4>
            <h4 id={'aparece'}>Atualmente freelancer desenvolvendo aplicações Web buscando uma oportunidade</h4>
            <button id={'aparece'} className={style.ativo}><h4>Veja Mais</h4></button>
        </div>
        </div>
    </ComponenteCorPositiva>)
}