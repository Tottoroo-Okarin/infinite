import styles from "./Tile.module.scss"

interface Props {
  children?: React.ReactNode;
}

const Header = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Body = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Actions = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}

const Tile = ({children}: Props) => {
  return(
    <div className={styles["tile"]}>
      {children}
    </div>
  )
}

Tile.Header = Header;
Tile.Body = Body;
Tile.Actions = Actions;


export default Tile;
