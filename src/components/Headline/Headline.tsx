import classes from './Headline.module.css'

export const Headline = ({ children }: { children: string }) => {
  return (
    <h2 className={classes.Headline}>{children}</h2>
  )
}