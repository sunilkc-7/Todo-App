import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import "./Todo.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        To-Do-App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    color: "green",
  },
}));

export default function SignUp() {
  const [state, setState] = useState("");
  const [tasks, settasks] = useState([]);
  const classes = useStyles();

  let counter = 1;
  while (counter <= tasks.length) {
    console.log(counter);
    counter = counter + 1;
  }

  const EventHandler = (e) => {
    const { id } = tasks;
    e.preventDefault();

    settasks([
      ...tasks,
      { id: new Date().getSeconds().toString(), state, number: counter },
    ]);
    setState("");
    console.log(tasks);
    console.log(id);
  };

  const deleteHandler = (id) => {
    const newdata = tasks.filter((dat) => dat.id !== id);
    settasks(newdata);
  };

  return (
    <div className="Image">
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <AddAlertIcon /> To Do App <AddAlertIcon />
          </Typography>
          <form className={classes.form} onSubmit={EventHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  variant="outlined"
                  required
                  fullWidth
                  id="task"
                  label="Enter your Task"
                  name="task"
                  autoComplete="off"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth>
              <AddCircleOutlineOutlinedIcon
                color="primary"
                type="submit"
                fontSize="large"
              />
            </Button>
          </form>
        </div>

        {tasks.map((data) => {
          return (
            <div key={data.id}>
              <Box
                sx={{
                  boxSizing: "border-box",
                  boxShadow:
                    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }}
              >
                <Typography
                  component="h1"
                  variant="h6"
                  className={classes.paper}
                >
                  {/* <h1>{data.number}</h1> */}
                  {data.state}
                  <Button onClick={() => deleteHandler(data.id)}>
                    <DeleteOutlineIcon fontSize="large" />
                  </Button>
                </Typography>
              </Box>
            </div>
          );
        })}
        <Copyright />
      </Container>
    </div>
  );
}
