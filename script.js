let calculate=document.querySelector('#caculate');


calculate.addEventListener('click',() => {
    let totalBill=document.querySelector('#billamount').value;
    let tipPercentage=document.querySelector('#quality').value;
    let noOfPerson=document.querySelector('#noof').value;
    
    
    if( totalBill==='' || tipPercentage==0 || noOfPerson==0){
        alert('Please enter the values');
        return;
    }
    let total=(totalBill*tipPercentage) / noOfPerson ;
    total=total.toFixed(2);
     document.getElementById('TipAmount').innerHTML=total;
})