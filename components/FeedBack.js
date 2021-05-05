import React from "react";

import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
// import { Container } from './styles';

function FeedBack({ obj, close }) {
  return (
    <Snackbar
      open={obj.open}
      autoHideDuration={2000}
      onClose={() => close({ ...obj, open: false })}
    >
      <Alert severity={obj.type}>{obj.msg}</Alert>
    </Snackbar>
  );
}

export default FeedBack;
