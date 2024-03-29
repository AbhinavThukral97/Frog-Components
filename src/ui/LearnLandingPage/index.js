import * as React from "react";
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { Header } from "./Header";
import { blueGrey, indigo, red } from "@material-ui/core/colors";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  },
  container: {
    padding: theme.spacing(10, 0),
    color: blueGrey[700],
    width: "40%",
    minWidth: "300px"
  },
  subtitle: {
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "14px",
    padding: theme.spacing(1, 0),
    color: blueGrey[300]
  },
  title: {
    marginBottom: theme.spacing(5)
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    margin: theme.spacing(2),
    marginLeft: "0"
  },
  button: {
    background: indigo[500],
    color: "#FFF",
    fontSize: "12px",
    boxShadow: "0 0 0 transparent",
    padding: theme.spacing(2),

    "&:hover": {
      background: indigo[700]
    },
    "&:active": {
      boxShadow: "0 0 0 transparent"
    }
  },
  errorMessage: {
    width: `calc(100% - ${2 * theme.spacing(1)})`,
    background: red[50],
    padding: theme.spacing(1, 0),
    color: red[600],
    fontSize: "14px",
    borderRadius: "4px"
  }
}));

type LearnLandingProps = {
  errorMessage?: string,
  onSlugEnter: (slug: string) => void
};

export const LearnLandingPage = (props: LearnLandingProps) => {
  const classes = useStyle();

  const [values, setValues] = React.useState({
    slug: ""
  });

  const handleChange = slug => event => {
    setValues({ ...values, [slug]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.container} maxWidth="sm">
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.subtitle}
        >
          Frog / Learn
        </Typography>
        <Typography variant="h4" align="center" className={classes.title}>
          Join a session
        </Typography>
        {props.errorMessage ? (
          <Typography className={classes.errorMessage} align="center">
            {props.errorMessage}
          </Typography>
        ) : (
          ""
        )}
        <div className={classes.inputContainer}>
          <TextField
            label="Class Session Code"
            value={values.slug}
            className={classes.input}
            onChange={handleChange("slug")}
            margin="normal"
            variant="outlined"
            fullWidth="true"
          />
          <Button
            className={classes.button}
            onClick={() => {
              props.onSlugEnter(values.slug);
            }}
          >
            Join
          </Button>
        </div>
      </Container>
    </div>
  );
};
