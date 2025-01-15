import { useEffect, useState } from 'react';
import classes from './Recipe.module.css'
import Input from '../Input/Input';
import { calcIngredientWeights } from '../../utils/calcIngredientWeights';
import { Notes } from '../Notes/Notes';
import { CheckList } from '../Checklist/CheckList';

export type recipeDetails = {
  weight: string;
  hydration: string;
  waterReserve: string;
  innoculation: string;
  salt: string;
  levinHydration: string;
  roomTemp: string;
  desiredTemp: string;
}
type RecipeProps = {
  className?: string;
  updateState?: (state: Partial<recipeDetails>) => void;
  state: recipeDetails
}

export const initialRecipeState: recipeDetails = {
  weight: '750', 
  hydration: '65', 
  waterReserve: '10', 
  innoculation: '20', 
  salt: '2', 
  levinHydration: '100', 
  roomTemp: '25', 
  desiredTemp: '25'
}

export const Recipe: React.FC<RecipeProps> = ({updateState, state = initialRecipeState, className}) => {
  const {weight, hydration, waterReserve, innoculation, salt, levinHydration, roomTemp, desiredTemp} = state

  const [ingredients, setIngredients] = useState<{water: number, flour: number, levin: number, salt: number}>({
    water: 0,
    flour: 0,
    levin: 0,
    salt: 0,
  });

  useEffect(() => {
    // don't calculate if any of the values are missing
    if (!weight || !hydration || !innoculation || !salt || !levinHydration || !desiredTemp || !roomTemp) return
    // don't calculate if any of the values are negative
    if (Number(weight) < 0 || Number(hydration) < 0 || Number(hydration) > 100 || Number(innoculation) < 0 || Number(innoculation) > 100 || Number(salt) < 0 || Number(salt) > 100 || Number(levinHydration) < 0 || Number(levinHydration) > 100 || Number(desiredTemp) < 0 || Number(desiredTemp) > 40 || Number(roomTemp) < 0 || Number(roomTemp) > 40) return

    const calculatedIngredients =  calcIngredientWeights({
      totalWeight: Number(weight),
      totalHydration: Number(hydration) / 100,
      innoculation: Number(innoculation) / 100,
      starterHydration: Number(levinHydration) / 100,
      salt: Number(salt) / 100,
    })
    setIngredients({
      water: calculatedIngredients.waterWeight,
      flour: calculatedIngredients.flourWeight,
      levin: calculatedIngredients.starterWeight,
      salt: calculatedIngredients.saltWeight,
    });
  }, [weight, hydration, innoculation, levinHydration, salt, roomTemp, desiredTemp])

  const renderStep = (text: string) => {
    const regex = /{(\d+)% of (\w+)}/;
    const match = text.match(regex);
    console.log(match);
    
    if (match) {
      const percentage = parseFloat(match[1]);
      const ingredient = match[2].toLowerCase();
      if (ingredients[ingredient] !== undefined) {
        const calculatedValue = (percentage / 100) * ingredients[ingredient];
        return text.replace(regex, `${calculatedValue.toFixed(0)}g`);
      }
    }
    return text;
  };

  return (
    <div className={`${classes.Recipe} ${className}`}>
      <header>
        <h1>Bake</h1> <div className={classes.BreadId}><span>#</span></div> <div className={classes.HeaderHydration}>Hydration: {hydration}%</div>
      </header>
      {updateState && (
      <div className={classes.Recipe__parameters}>
        <Input label="Total weight:" value={weight} onChange={(e) => updateState({weight: e.target.value})} placeholder="in g" suffix='g' />
        <Input label="Hydration:" value={hydration} onChange={(e) => updateState({hydration: e.target.value})} placeholder="in %" suffix='%' />
        <Input label="Water reserve:" value={waterReserve} onChange={(e) => updateState({waterReserve: e.target.value})} placeholder="in %" suffix='%' />
        <Input label="Innoculation:" value={innoculation} onChange={(e) => updateState({innoculation: e.target.value})} placeholder="in %" suffix='%' />
        <Input label="Salt:" value={salt} onChange={(e) => updateState({salt: e.target.value})} placeholder="in %" suffix='%' />
        <Input label="Levin hydration:" value={levinHydration} onChange={(e) => updateState({levinHydration: e.target.value})} placeholder="in %" suffix='%' />
        {/* <Input label="Room temp:" value={roomTemp} onChange={(e) => updateState({roomTemp: e.target.value})} placeholder="in °C" unit='°C' />
        <Input label="Desired temp:" value={desiredTemp} onChange={(e) => updateState({desiredTemp: e.target.value})} placeholder="in °C" unit='°C' /> */}
      </div>)}

      <div className={classes.Recipe__process_notes}>
        <div className={classes.Recipe__process_notes__item}>Room temp:</div>
        <div className={classes.Recipe__process_notes__item}>Box temp:</div>
        <div className={classes.Recipe__process_notes__item}>Start time:</div>
        <div className={classes.Recipe__process_notes__item}>End time:</div>
        <div className={classes.Recipe__process_notes__item}>Start volume:</div>
        <div className={classes.Recipe__process_notes__item}>End volume:</div>
      </div>  
      <div className={classes.Recipe__columns}>
        <div className={classes.Recipe__instructions}>

          <CheckList title="Ingredients" uniqueKey='Ingredients' render={renderStep} items={[
          `Flour: {100% of flour}`,
          `Water: {90% of water} + {10% of water}`,
          `Levin: ${ingredients.levin}g`,
          `Salt: ${ingredients.salt}g`
          ]} />
        
          <CheckList title="Instructions" uniqueKey='Instructions' render={renderStep} items={[
              `Set Box to ${Number(desiredTemp) + 0.5}°C`,
              `Mix ${ingredients.water - Math.round(ingredients.water*0.1)}g water & ${ingredients.flour}g flour`,
              "Wait 30 min",
              // `Mix ${Math.round(ingredients.water*0.1)}g water & salt`,
              // `Add ${ingredients.levin}g levin & salt water`,
              // "Slap and fold 8-10 times",
              "Wait 30 min",
              // "6 stretch & folds",
              // "Wait 30 min",
              // "Coil fold",
              // "Bulk 3-4 hours",
              // "Wait for 30% increase"
            ]} 
            editable={true}
            />
        </div>

        <Notes></Notes>
      
      </div>
    </div>
  );
};