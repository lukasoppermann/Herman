import classes from './Page.module.css'

type Page = {
  children?: React.ReactNode,
  size?: "A4"
}

export const Page = ({ children, size = "A4" }: Page) => {
  return (
    <div data-size={size} className={classes.Page}>
      {children}
    </div>
  )
}