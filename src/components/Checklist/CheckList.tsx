import classes from './CheckList.module.css'
import { v4 as uuidv4 } from 'uuid';
import { Headline } from '../Headline/Headline'
import {DndContext} from '@dnd-kit/core';
import {arrayMove, SortableContext, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
  
} from '@dnd-kit/modifiers';
import {CSS, Transform} from '@dnd-kit/utilities';
import useLocalStorage from '../../hooks/useLocalStorage';
import Input from '../Input/Input';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';

type CheckListItemProps = {
  value: string;
  id: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  render: (text: string) => string;
}

const ChecklistItem = ({ value, id, disabled = false, onChange, onDelete, render }: CheckListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({
    id,
    disabled
  });

  const itemTransform = {
    ...transform,
    ...(isDragging ? {scaleX: 1,
    scaleY: 1, x:0} : {scaleX: 1, scaleY: 1})
  } as Transform;
  
  const style = {
    transform: CSS.Transform.toString(itemTransform),
    transition
  };
  
  return (
    <div data-id={id} className={`${classes.ChecklistItem} ${isDragging ? "isDragging" : ""} ${disabled ? "isDisabled" : ""}`} style={style} ref={setNodeRef}>
      <button {...attributes} {...listeners} className={classes.dragHandle}><Icon name='drag' /></button>
      <input type="checkbox" />
      {isEditing ? (
      <Input value={value} type="hidden" size="small" readOnly={disabled} onChange={onChange} onBlur={() => setIsEditing(false)}/>
      ) : (   <span onClick={() => !disabled && setIsEditing(true)}>
      {render(value)}
      </span>)}
      {!disabled && <button className={classes.ChecklistItem__deleteButton} onClick={onDelete}><Icon name="close" /></button>}
    </div>
  )
}

type CheckListProps = {
  items: string[];
  uniqueKey: string;
  title?: string;
  editable?: boolean;
  render?: (text: string) => string;
}

export const CheckList = ({items: initialItems, uniqueKey, title = "Instructions", editable = false, render = (text) => text}: CheckListProps) => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useLocalStorage<{id: string, value: string}[]>(uniqueKey, initialItems.map((item) => ({
    id: uuidv4(),
    value: `${item}`
  })));

  const handleDragEnd = (event) => {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      console.log(items.indexOf(active.id));
      
      const newArray = arrayMove(items, items.findIndex(item => item.id === active.id), items.findIndex(item => item.id === over.id));
      setItems(newArray);
    }
  }

  const handleItemChange = (e) => {
    const id = e.target.closest("[data-id]").dataset.id

    const newItems = items.map((item) => {
      if (item.id === id) {
        item.value = e.target.value;
      }
      return item
    })

    setItems(newItems);
  }

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: uuidv4(), value: newItem.trim() }]);
      setNewItem('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={classes.CheckList}>
      <Headline>{title}</Headline>
      <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => <ChecklistItem key={item.id} id={item.id} value={item.value} disabled={!editable} onChange={handleItemChange}               
          onDelete={() => handleDeleteItem(item.id)}
          render={render}/>)}
        </SortableContext>
      </DndContext>
      {editable && (
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add new item"
          />
        </div>
      )}
    </div>
  )
}