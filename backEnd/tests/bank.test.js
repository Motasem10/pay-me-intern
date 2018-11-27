const bank=require('../bank')


//##########  test send error ###################
describe('send error :',()=>{
   const args=[NaN,undefined,'string',0];
        args.forEach(element=>{
            it(`should return object wit key moneyErr ${element}`,()=>{
            const result=bank({},{},{},{},element);
            expect(result).toHaveProperty('moneyErr');})
    })
it('should return object wit key balnceErr',()=>{
    const result=bank({balnce:200},{},{},{},3100);
 expect(result).toHaveProperty('balnceErr');

})
it('should return object wit key dailyCountErr  ',()=>{
    const result=bank({dailyCount:10},{dailyCount:10},{},{},310);
     expect(result).toHaveProperty('dailyCountErr');

})
it('should return object wit key dailyAmountErr  ',()=>{
    const result=bank({dailyAmount:100},{dailyAmount:99},{},{},310);
     expect(result).toHaveProperty('dailyAmountErr');

})
it('should return object wit key monthlyCountErr  ',()=>{
    const result=bank({monthlyCount:100},{monthlyCount:20},{},{},1);
     expect(result).toHaveProperty('monthlyCountErr');

})
it('should return object wit key monthlyAmountErr  ',()=>{
    const result=bank({monthlyAmount:100000},{monthlyAmount:1000},{},{},1);
     expect(result).toHaveProperty('monthlyAmountErr');

})
})

//#################### test resive error ###############
describe('resive  error :',()=>{

    it('should return object wit key dailyCountErr  ',()=>{
        const result=bank({},{},{dailyCount:5},{dailyCount:5},310);
         expect(result).toHaveProperty('dailyCountErr');
    
    })
    it('should return object wit key dailyAmountErr  ',()=>{
        const result=bank({},{},{dailyAmount:100},{dailyAmount:100},310);
         expect(result).toHaveProperty('dailyAmountErr');
    
    })

    it('should return object wit key monthlyCountErr  ',()=>{
        const result=bank({},{},{monthlyCount:100},{monthlyCount:100},11);
         expect(result).toHaveProperty('monthlyCountErr');
    })
    it('should return object wit key monthlyAmountErr  ',()=>{
        const result=bank({},{},{monthlyAmount:100},{monthlyAmount:100},310);
         expect(result).toHaveProperty('monthlyAmountErr');
    
    })
  
    })

//############ test sucsess statment ##############################

 describe('success :',()=>{

        it('should return object secsess:true  ',()=>{
            const result=bank({
                balnce: 500,
                dailyCount: 0,
                dailyAmount: 0,
                monthlyCount: 0,
                monthlyAmount: 0,
              },
              {
                dailyCount: 1,
                dailyAmount: 100,
                monthlyCount: 30,
                monthlyAmount: 3000
              },
              {
                balnce: 0,
                dailyCount: 0,
                dailyAmount: 0,
                monthlyCount: 0,
                monthlyAmount: 0
              },
              {
                balnce: 500,
                dailyCount: 1,
                dailyAmount: 100,
                monthlyCount: 30,
                monthlyAmount: 3000
              },30);
             expect(result).toHaveProperty('success',true)
        
        })
    })