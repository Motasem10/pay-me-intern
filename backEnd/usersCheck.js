module.exports ={
     receiverCheck:(resiver,filter)=>{
    const errors={}
       
        if (resiver.dailyCount >= filter.dailyCount) 
          errors.dailyCountErr= `Mena has been reached to maximum of transactions for this day`;
      
        else if (resiver.monthlyCount >= filter.monthlyCount)
          errors.monthlyCountErr= `Mena cant resive `;
    
        else if (resiver.dailyAmount >= filter.dailyAmount) 
          errors.dailyAmountErr = `mena reched the mximaum limted amount   `;
          
        else if (resiver.monthlyAmount >= filter.monthlyAmount)
          errors.monthlyAmountErr = `you cannot withdrow moe than ${filter.monthlyAmount} per  month `;
          
         
          return {
            isAllowed:Object.keys(errors).length>0?false:true,
            errors,
          };
        },
       
    
    
     senderCheck : (sender,filter,amount) => {
        let errors = {};
     if(amount===undefined ||amount<=0 ||isNaN(amount)||amount===null||amount.length===0) 
     errors.moneyErr=`money field cannot be ${amount}`
     else  if(sender.balnce<amount) errors.balnceErr = `your creidit is not enough`
      else if (sender.dailyCount >= filter.dailyCount) 
        errors.dailyCountErr = `you cannot do more than ${sender.dailyCount} transactions  per  day `;
    
      else if (sender.monthlyCount >= filter.monthlyCount)
        errors.monthlyCountErr = `you cannot do more than ${sender.monthlyCount}transactions  per  month `;
         
      else if (sender.dailyAmount >= filter.dailyAmount) 
        errors.dailyAmountErr = `you cannot withdrow more than ${filter.dailyAmount}daily `;
        
      else if (sender.monthlyAmount >= filter.monthlyAmount)
        errors.monthlyAmountErr = `you cannot withdrow moe than ${filter.monthlyAmount} per  month `;
        return {
          isAllowed:Object.keys(errors).length>0?false:true,
          errors,
        }
      }
    }