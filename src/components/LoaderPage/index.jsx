import React, { useEffect, useState } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: ({ state }) => ({
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    width: "100%",
    height: "2px",
    display: state.display,
  }),
});

export default function LoaderPage() {
  const [display, setDisplay] = useState("none");
  const [progress, setProgress] = useState(0);
  const classes = useStyles({ state: { display } });

  Router.events.on("routeChangeStart", () => {
    setDisplay("block");
    startLoader();
  });
  Router.events.on("routeChangeComplete", () => {
    setDisplay("none");
    stopLoader();
  });
  Router.events.on("routeChangeError", () => {
    setDisplay("none");
    stopLoader();
  });

  useEffect(() => {}, []);

  let timer = "";
  const startLoader = () => {
    timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
  };

  const stopLoader = () => {
    setProgress(0);
    return clearInterval(timer);
  };

  return (
    <LinearProgress
      className={classes.root}
      variant="determinate"
      value={progress}
    />
  );
}
