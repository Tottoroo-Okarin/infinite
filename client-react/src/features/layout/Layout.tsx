import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import styles from "./Layout.module.scss"

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {

  return(
    <div className={styles["layout"]}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" component="span" sx={{ mr: 2 }}>
            Infinite
          </Typography>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={styles["content"]}>
        { children }     
      </div>
    </div>   
  )
}