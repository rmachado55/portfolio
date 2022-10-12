import style from './ComponenteCorPositiva.module.scss'

type Props = {
    title: string,
    children: JSX.Element,
  };

export default function ComponenteCorPositiva ({ title, children }: Props) {

    return(
        <div className={style.componenteCorPositiva}>
        {children}
        </div>
    )
}