import { useReducer } from 'react'
import classes from './App.module.css'
import { Page } from './components/Page/Page'
import { initialRecipeState, Recipe, recipeDetails } from './components/Recipe/Recipe'

function App() {

  const [state, updateState] = useReducer((prev: recipeDetails, next: Partial<recipeDetails>) => {
    const newState = {...prev, ...next}

    if (newState.weight && Number(newState.weight) <= 0) return prev
    if (Number(newState.innoculation) < 0 || Number(newState.innoculation) > 100) return prev
    if (Number(newState.hydration) < 0 || Number(newState.hydration) > 100) return prev
    if (Number(newState.waterReserve) < 0 || Number(newState.waterReserve) > 100) return prev
    if (Number(newState.levinHydration) < 0 || Number(newState.levinHydration) > 100) return prev
    if (Number(newState.salt) < 0 || Number(newState.salt) > 100) return prev
    if (Number(newState.roomTemp) < 0 || Number(newState.roomTemp) > 100) return prev
    if (Number(newState.desiredTemp) < 0 || Number(newState.desiredTemp) > 100) return prev
    
    return newState

  }, initialRecipeState);

  return (
    <div className={classes.App}>
      <Page>
        <Recipe updateState={updateState} state={state}/>
        <Recipe state={state} className={classes.printOnly} />
        <Recipe state={state} className={classes.printOnly} />
        <Recipe state={state} className={classes.printOnly} />
      </Page>
    </div>
  )
}

export default App
