// app/utils/testMath.ts
// PERSON A'S TEST FILE - Delete this later!

import { calculateRetirement } from './financialCalculations';

const testInput = {
  currentAge: 30,
  retirementAge: 60,
  currentAnnualExpenses: 600000,
  inflationRate: 6,
  preRetirementReturn: 12,
  postRetirementReturn: 7
};

const result = calculateRetirement(testInput);
console.log('TEST RESULTS:');
console.log('Annual Expense at Retirement:', result.retirementAnnualExpense);
console.log('Required Corpus:', result.requiredCorpus);
console.log('Monthly SIP Needed:', result.requiredMonthlySIP);


