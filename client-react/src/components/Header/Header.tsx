import styles from "./Header.module.scss"

interface Props {
  children?: React.ReactNode;
}

const Logo = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Route = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Misc = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}

const Header = ({children}: Props) => {
  return(
    <div className={styles['header']}>
      {children}
    </div>
  )
}

Header.Logo = Logo;
Header.Route = Route;
Header.Misc = Misc;


export default Header;