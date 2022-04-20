import styles from "./SideNav.module.scss"

interface Props {
  children?: React.ReactNode;
}

const Activator = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Item = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Footer = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}

const SideNav = ({children}: Props) => {
  return(
    <div className={styles['side-nav']}>
      {children}
    </div>
  )
}

SideNav.Item = Activator;
SideNav.Item = Item;
SideNav.Footer = Footer;


export default SideNav;