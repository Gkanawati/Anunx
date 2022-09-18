import { forwardRef } from "react";
import {
  Button,
  Snackbar,
  Stack,
  Alert as MuiAlert,
} from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ open, text, severity, onClose = null }) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    if (onClose)
      onClose()
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity} sx={{ width: '100%' }} onClose={handleClose}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
