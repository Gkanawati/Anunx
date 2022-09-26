import { Typography } from '@mui/material';
import Link from "next/link"

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" rel="noopener noreferrer" href="https://github.com/Gkanawati" target="_blank">
        Kanawati Solutions
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright