import style from './ComponenteCorPositiva.module.scss'


export default function ComponenteCorPositiva ({ title, children }) {

    return(
        <div className={style.componenteCorPositiva}>
        {children}
        </div>
    )
}