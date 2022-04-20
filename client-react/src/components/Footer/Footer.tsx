import styles from "./Footer.module.scss"

interface Props {
  children?: React.ReactNode;
}

const Logo = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Misc = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}

const Footer = ({children}: Props) => {
  return(
    <div className={styles['footer']}>
      {children}
    </div>
  )
}

Footer.Item = Logo;
Footer.Item = Misc;

export default Footer;