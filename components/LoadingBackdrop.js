import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop({ openClose }) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={openClose}>
        <Grid container direction="column">
          <Grid item>
            <CircularProgress color="inherit" />
          </Grid>
          <Grid item>
            <Typography variant={"body2"}>Carregando...</Typography>
          </Grid>
        </Grid>
      </Backdrop>
    </div>
  );
}
