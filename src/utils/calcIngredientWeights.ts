export type RecipeParameters = {
  totalWeight: number,
  totalHydration: number,
  innoculation: number,
  starterHydration: number,
  salt: number
}

export const calcIngredientWeights = ({ totalWeight, totalHydration, innoculation, starterHydration, salt }: RecipeParameters) => {
  const MAX_ITERATIONS = 100;
  const TOLERANCE = 0.0001;

  let flourWeight = totalWeight / (1 + totalHydration + innoculation + salt);
  let waterWeight = flourWeight * totalHydration;
  let starterWeight = flourWeight * innoculation;
  let saltWeight = flourWeight * salt;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const starterFlourWeight = starterWeight / (1 + starterHydration);
    const starterWaterWeight = starterWeight - starterFlourWeight;

    const totalFlourWeight = flourWeight + starterFlourWeight;
    const totalWaterWeight = waterWeight + starterWaterWeight;

    const currentTotalWeight = totalFlourWeight + totalWaterWeight + saltWeight;
    const currentHydration = totalWaterWeight / totalFlourWeight;

    if (Math.abs(currentTotalWeight - totalWeight) < TOLERANCE && Math.abs(currentHydration - totalHydration) < TOLERANCE) {
      return {
        flourWeight: Math.round(flourWeight),
        waterWeight: Math.round(waterWeight),
        starterWeight: Math.round(starterWeight),
        starterFlourWeight: Math.round(starterFlourWeight),
        starterWaterWeight: Math.round(starterWaterWeight),
        saltWeight: Math.round(saltWeight),
        totalWeight: Math.round(currentTotalWeight),
        desiredHydration: totalHydration,
        finalHydration: currentHydration
      };
    }

    // Adjust weights
    const weightAdjustment = (totalWeight - currentTotalWeight) / 4;
    const hydrationAdjustment = (totalHydration - currentHydration) * totalFlourWeight / 2;

    flourWeight += weightAdjustment - hydrationAdjustment;
    waterWeight += weightAdjustment + hydrationAdjustment;
    starterWeight += weightAdjustment;
    saltWeight += weightAdjustment;
  }

  console.error("Failed to converge on a solution within the maximum number of iterations.");
  return {
    flourWeight: 0,
    waterWeight: 0,
    starterWeight: 0,
    starterFlourWeight: 0,
    starterWaterWeight: 0,
    saltWeight: 0,
    totalWeight: 0,
    desiredHydration: 0,
    finalHydration: 0
  }
};