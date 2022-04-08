import styles from "./TileListContainer.module.scss"

interface Props {
  children?: React.ReactNode;
}

const Header = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Body = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}
const Actions = ({children}: {children?: React.ReactNode}) => {return <div>{children}</div>}

const TileListContainer = ({children}: Props) => {
  return(
    <div> 
      {children}
    </div>
  )
}

TileListContainer.Header = Header
TileListContainer.Body = Body
TileListContainer.Actions = Actions

export default TileListContainer
