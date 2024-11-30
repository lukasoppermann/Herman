import { Headline } from '../Headline/Headline'
import classes from './Notes.module.css'

export const Notes = ({title = "Notes"}: {title?: string}) => {
  return (
    <div className={classes.Notes}>
      <Headline>{title}</Headline>
      <div className={classes.Lines}></div>
    </div>
  )
}