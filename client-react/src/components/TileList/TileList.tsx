import styles from "./TileList.module.scss"

interface Props {
  children?: React.ReactNode;
}

const Header = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Body = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Actions = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}

const TileList = ({children}: Props) => {
  return(
    <div>
      {children}
    </div>
  )
}

TileList.Header = Header
TileList.Body = Body
TileList.Actions = Actions

export default TileList