const romanNumbersDico = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);

const romanAssignationDico = new Map([
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"]
]);


function RomanToDigital(romanNumber)
{
  const charArr = [...romanNumber];
  let maxCharValue = 0;
  let resultValue = 0;

  for(let i=charArr.length-1; i>=0; --i)
  {
    let currentCharVal = romanNumbersDico.get(charArr[i]);
    if (currentCharVal == null)
      throw Error("Bad roman character encountered");

    if (maxCharValue <= currentCharVal)
    {
      resultValue += currentCharVal;
      maxCharValue = currentCharVal;
    }
    else
    {
      resultValue -= currentCharVal;
    }
  }

  return resultValue;
}

function DigitalToRoman(number)
{
  let remainingNumber = number;
  let romanNumber = "";
  
  while (remainingNumber > 0)
  {
    let previousNumber = 0;
    let previousRStr = "";
    for (let [val, rStr] of romanAssignationDico)
    {
      if (val === remainingNumber)
        return romanNumber + rStr;
      else if (val > remainingNumber)
        break;

      [previousNumber, previousRStr] = [val, rStr];
    }

    romanNumber += previousRStr;
    remainingNumber -= previousNumber;
  }
  
}

module.exports = {
  romanToDigital: RomanToDigital,
  digitalToRoman: DigitalToRoman
};


//console.log(RomanToDigital("IIC"));