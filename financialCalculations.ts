// app/utils/financialCalculations.ts
// PERSON A'S CODE - DO NOT TOUCH!

// This is the retirement calculator - based on PDF formulas [citation:114a6333f72e4ced91f7920d05525c94]

interface RetirementInputs {
  currentAge: number;
  retirementAge: number;
  currentAnnualExpenses: number;
  inflationRate: number;
  preRetirementReturn: number;
  postRetirementReturn: number;
}

interface RetirementOutputs {
  retirementAnnualExpense: number;
  requiredCorpus: number;
  requiredMonthlySIP: number;
}

export function calculateRetirement(inputs: RetirementInputs): RetirementOutputs {
  // Get all numbers
  const {
    currentAge,
    retirementAge,
    currentAnnualExpenses,
    inflationRate,
    preRetirementReturn,
    postRetirementReturn,
  } = inputs;

  // Years until retirement
  const yearsToRetirement = retirementAge - currentAge;
  
  // Handle weird cases
  if (yearsToRetirement <= 0) {
    return {
      retirementAnnualExpense: currentAnnualExpenses,
      requiredCorpus: 0,
      requiredMonthlySIP: 0,
    };
  }

  // Convert % to decimals
  const rInflation = inflationRate / 100;
  const rPre = preRetirementReturn / 100;
  const rPost = postRetirementReturn / 100;

  // STEP 1: Calculate future expenses with inflation
  // Formula: Future Value = Present Value × (1 + inflation)^years
  const retirementAnnualExpense = currentAnnualExpenses * Math.pow(1 + rInflation, yearsToRetirement);

  // STEP 2: Calculate money needed at retirement
  const retirementYears = 30; // Assume live 30 years after retirement
  const monthlyRatePost = rPost / 12;
  const monthsPost = retirementYears * 12;
  
  const monthlyExpense = retirementAnnualExpense / 12;
  
  // Formula: Present Value of an annuity
  let requiredCorpus = 0;
  if (monthlyRatePost > 0) {
      requiredCorpus = monthlyExpense * (1 - Math.pow(1 + monthlyRatePost, -monthsPost)) / monthlyRatePost;
  } else {
      requiredCorpus = monthlyExpense * monthsPost;
  }

  // STEP 3: Calculate monthly SIP needed
  const monthsToRetirement = yearsToRetirement * 12;
  const monthlyRatePre = rPre / 12;

  // Formula: Solve for SIP in Future Value of SIP formula
  let requiredMonthlySIP = 0;
  if (monthlyRatePre > 0 && monthsToRetirement > 0) {
      const factor = (Math.pow(1 + monthlyRatePre, monthsToRetirement) - 1) / monthlyRatePre;
      const beginningFactor = factor * (1 + monthlyRatePre);
      requiredMonthlySIP = requiredCorpus / beginningFactor;
  } else if (monthsToRetirement > 0) {
      requiredMonthlySIP = requiredCorpus / monthsToRetirement;
  }

  // Round to 2 decimal places
  return {
    retirementAnnualExpense: Math.round(retirementAnnualExpense * 100) / 100,
    requiredCorpus: Math.round(requiredCorpus * 100) / 100,
    requiredMonthlySIP: Math.round(requiredMonthlySIP * 100) / 100,
  };
}
