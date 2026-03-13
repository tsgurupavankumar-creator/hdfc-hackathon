import React from 'react'; 
interface InputFieldProps { 
label: string; 
name: string; 
value: number; 
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
type?: string; 
min?: string; 
max?: string; 
step?: string; 
} 
export default function InputField({ 
label, 
name, 
value, 
onChange, 
type = "number", 
min, 
max, 
step 
}: InputFieldProps) { 
return ( 
<div className="flex flex-col mb-4"> 
      {/* Label connected to input - for accessibility! [citation:114a6333f72e4ced91f7920d05525c94] 
*/} 
      <label  
        htmlFor={name}  
        className="text-sm font-medium text-gray-700 mb-1" 
      > 
        {label} 
      </label> 
       
      <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange} 
        min={min} 
        max={max} 
        step={step} 
        className=" 
          w-full px-4 py-2  
          border border-gray-300 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-all duration-200 
        " 
        aria-label={label} 
      /> 
    </div> 
  ); 
}