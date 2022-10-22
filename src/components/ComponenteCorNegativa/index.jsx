import style from './ComponenteCorNegativa.module.scss'


export default function ComponenteCorNegativa ({ title, children }) {

    return(
        <div className={style.componenteCorNegativa}>
            {children}
        </div>
    )
}