import { Box } from "@mui/material"
import Header from "../components/Header"
import { LightTheme } from "../themes/Light"

const Default = ({ children }) => {
  return (
    <Box bgcolor={LightTheme.palette.background.paper}>
      <Header />
      {children}
    </Box>
  )
}

export default Default