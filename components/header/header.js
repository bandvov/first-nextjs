import { useStyles } from "./header.style";
export function Header() {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <span className={classes.title}>cars</span>
    </nav>
  );
}
