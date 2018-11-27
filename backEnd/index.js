
const transfer=require('./bank');

const  {resive_limits,send_limits} =require('./limits');
  
//resiver Mena
var Mena = {
    balnce:0, 
    dailyCount:44,
    dailyAmount: 6,
    monthlyCount: 11,
    monthlyAmount:0 ,
  };

//sender Ahmed
var Ahmed = {
  balnce:100,
  dailyCount:4,
  dailyAmount: 0,
  monthlyCount: 12,
  monthlyAmount:0 ,
};


transfer(Ahmed,send_limits,Mena,resive_limits,22);
