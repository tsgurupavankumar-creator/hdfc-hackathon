import { useState } from "react"; 
import InputField from "./InputField";
import Disclaimer from "./Disclaimer";
export default function Home() { 
// Default values for the form 
const [inputs, setInputs] = useState({ 
currentAge: 30, 
retirementAge: 60, 
currentAnnualExpenses: 600000, 
inflationRate: 6, 
preRetirementReturn: 12, 
postRetirementReturn: 7, 
}); 
const [results, setResults] = useState<null | { 
retirementAnnualExpense: number; 
requiredCorpus: number; 
requiredMonthlySIP: number; 
}>(null); 
// Handle typing in boxes 
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
setInputs({ 
...inputs, 
[e.target.name]: parseFloat(e.target.value) || 0, 
}); 
  }; 
 
  // Handle calculate button (PERSON A will fill this later) 
  const handleCalculate = () => { 
    // PERSON A will add the real calculation here 
    // For now, just show dummy data 
    setResults({ 
      retirementAnnualExpense: 1200000, 
      requiredCorpus: 25000000, 
      requiredMonthlySIP: 15000 
    }); 
  }; 
 
  return ( 
    <main className="min-h-screen bg-white p-4 md:p-8"> 
      <div className="max-w-4xl mx-auto"> 
         
        {/* HEADER - Brand color #224c87 [citation:114a6333f72e4ced91f7920d05525c94] */} 
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#224c87' }}> 
          Retirement Planning Calculator 
        </h1> 
        <p className="text-base md:text-lg mb-8" style={{ color: '#919090' }}> 
          Plan your retirement with confidence 
        </p> 
 
        {/* TWO COLUMN LAYOUT - Stacks on mobile [citation:114a6333f72e4ced91f7920d05525c94] 
*/} 
        <div className="grid md:grid-cols-2 gap-6 md:gap-8"> 
           
          {/* LEFT COLUMN - Input Form */} 
          <section className="bg-gray-50 p-6 rounded-lg" aria-label="Input Form"> 
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#224c87' }}> 
              Your Details 
            </h2> 
             
            <div className="space-y-2"> 
              <InputField 
                label="Current Age" 
                name="currentAge" 
                value={inputs.currentAge} 
                onChange={handleChange} 
                min="18" 
                max="100" 
              /> 
               
              <InputField 
                label="Retirement Age" 
                name="retirementAge" 
                value={inputs.retirementAge} 
                onChange={handleChange} 
                min="40" 
                max="100" 
              /> 
               
              <InputField 
                label="Current Annual Expenses (₹)" 
                name="currentAnnualExpenses" 
                value={inputs.currentAnnualExpenses} 
                onChange={handleChange} 
                step="10000" 
              /> 
               
              <InputField 
                label="Expected Inflation (%)" 
                name="inflationRate" 
                value={inputs.inflationRate} 
                onChange={handleChange} 
                step="0.1" 
                min="0" 
                max="20" 
              /> 
               
              <InputField 
                label="Pre-Retirement Return (%)" 
                name="preRetirementReturn" 
                value={inputs.preRetirementReturn} 
                onChange={handleChange} 
                step="0.1" 
                min="0" 
                max="30" 
              /> 
               
              <InputField 
                label="Post-Retirement Return (%)" 
                name="postRetirementReturn" 
                value={inputs.postRetirementReturn} 
                onChange={handleChange} 
                step="0.1" 
                min="0" 
                max="30" 
              /> 
            </div> 
 
            {/* CALCULATE BUTTON - Brand color #da3832 
[citation:114a6333f72e4ced91f7920d05525c94] */} 
            <button 
              onClick={handleCalculate} 
              className=" 
                w-full mt-6 py-3 px-6 rounded-lg 
                text-white font-bold text-lg 
                transition-all duration-200 
                hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 
              " 
              style={{ backgroundColor: '#da3832' }} 
              aria-label="Calculate Retirement Corpus" 
            > 
              Calculate 
            </button> 
          </section> 
 
          {/* RIGHT COLUMN - Results */} 
          <section className="bg-gray-50 p-6 rounded-lg" aria-label="Results"> 
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#224c87' }}> 
              Your Retirement Goal 
            </h2> 
             
            {results ? ( 
              <div className="space-y-6"> 
                {/* Result Card 1 */} 
                <div className="bg-white p-4 rounded-lg border border-gray-200"> 
                  <p className="text-sm text-gray-600 mb-1">Annual Expense at Retirement</p> 
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#224c87' }}> 
                    ₹ {results.retirementAnnualExpense.toLocaleString()} 
                  </p> 
                </div> 
                 
                {/* Result Card 2 */} 
                <div className="bg-white p-4 rounded-lg border border-gray-200"> 
                  <p className="text-sm text-gray-600 mb-1">Required Retirement Corpus</p> 
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#224c87' }}> 
                    ₹ {results.requiredCorpus.toLocaleString()} 
                  </p> 
                </div> 
                 
                {/* Result Card 3 - Special red color */} 
                <div className="bg-white p-4 rounded-lg border border-gray-200"> 
                  <p className="text-sm text-gray-600 mb-1">Monthly SIP Needed</p> 
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#da3832' }}> 
                    ₹ {results.requiredMonthlySIP.toLocaleString()} 
                  </p> 
                </div> 
              </div> 
            ) : ( 
              // Show this when no results yet 
              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center"> 
                <p className="text-gray-500"> 
                  Enter your details and click Calculate to see your retirement plan 
                </p> 
              </div> 
            )} 
          </section> 
        </div> 
 
        {/* DISCLAIMER - DO NOT REMOVE */} 
        <Disclaimer /> 
</div> 
</main> 
); 
}