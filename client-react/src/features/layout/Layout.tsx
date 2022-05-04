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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Infinite
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={styles["content"]}>
        <Box>
          { children }
        </Box>
      </div>
    </div>   
  )
}