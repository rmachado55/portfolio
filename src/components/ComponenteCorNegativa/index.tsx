import style from './ComponenteCorNegativa.module.scss'

type Props = {
    title: string,
    children: JSX.Element,
  };

export default function ComponenteCorNegativa ({ title, children }: Props) {

    return(
        <div className={style.componenteCorNegativa}>
            {children}
        </div>
    )
}