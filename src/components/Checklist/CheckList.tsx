import classes from './CheckList.module.css'
import { Headline } from '../Headline/Headline'

const Item = ({ item }: { item: string }) => {
  return (
    <div className={classes.Item}>
      <input type="checkbox" />
      <span>{item}</span>
    </div>
  )
}

export const CheckList = ({items, title = "Instructions"}: {items: string[], title?: string}) => {
  return (
    <div className={classes.CheckList}>
      <Headline>{title}</Headline>
      {items.map((item, index) => <Item key={index} item={item} />)}
    </div>
  )
}