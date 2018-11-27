const checker=require('./usersCheck');

  const transfer = function(sender,send_limits,receiver,resive_limits,Mony) {
      //if no error do it   
 if(sender.balnce>Mony&&
    sender.dailyAmount<send_limits.dailyAmount&&
    sender.dailyCount<send_limits.dailyCount&&
    sender.monthlyAmount<send_limits.monthlyAmount&&
    sender.monthlyCount<send_limits.monthlyCount&&
    receiver.dailyAmount<resive_limits.dailyAmount&&
    receiver.dailyCount<resive_limits.dailyCount&&
    receiver.monthlyAmount<resive_limits.monthlyAmount&&
    receiver.monthlyCount<resive_limits.monthlyCount   
)  { 
    sender.balnce=sender.balnce-Mony;
    sender.dailyAmount=sender.dailyAmount+Mony;
    sender.dailyCount++;
    sender.monthlyCount++;
    sender.monthlyAmount=sender.monthlyAmount+Mony;
  //update receiver account
  receiver.balnce=receiver.balnce+Mony;
  receiver.dailyCount++;
  receiver.monthlyCount++;
    return({
        success:true,
         sender  //account information after sending
     })};

//else =>check errors 
    {   //check sender error
        let {isAllowed,errors}=checker.senderCheck(sender,send_limits,Mony);
    if(!isAllowed) return (errors)} 
    {  //check resiver error
        let {isAllowed,errors}=checker.receiverCheck(receiver,resive_limits);
    if(!isAllowed)  return errors;}
  }

module.exports= transfer;
