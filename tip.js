class Tip{
    billAmount;
    tipPercent;
    numberOfPeople;

    constructor(billAmount,tipPercent,numberOfPeople){
        this.billAmount = billAmount;
        this.numberOfPeople =  numberOfPeople;
        this.tipPercent =  tipPercent;
    }

    //calculating tip per person...
    calculateTipPerPerson(){
        var tip = (this.billAmount * (this.tipPercent/100))/this.numberOfPeople;
        return tip;
    }
    
    //calculating total amount per person...
    calculateTotalPerPerson(){
        var tip = this.calculateTipPerPerson();
        var total = tip + Number(this.billAmount/this.numberOfPeople);
        return total;
    }

}
var btnAdd1 = document.querySelector('#add1');
var btnSubtract1 = document.querySelector('#subtract1');
var btnAdd2 = document.querySelector('#add2');
var btnSubtract2 = document.querySelector('#subtract2');
var tip_perc = document.querySelector('#tip_perc');
var people= document.querySelector('#people');

btnAdd1.addEventListener('click',() => {
    tip_perc.value = parseFloat(tip_perc.value)+1;
});

btnSubtract1.addEventListener('click',() => {
    tip_perc.value = parseFloat(tip_perc.value)-1;
});

btnAdd2.addEventListener('click',() => {
    people.value = parseInt(people.value)+1;
});

btnSubtract2.addEventListener('click',() => {
    people.value = parseInt(people.value)-1;
});

function tipcalcy() {
    var amount = document.getElementById('bill').value;
    var perc = document.getElementById('tip_perc').value;
    var person = document.getElementById('people').value;
    
    try {
        if(amount=="") throw "an empty.";
        if(amount==0) throw "a Zero.";
        if(amount<0) throw "a negative number.";
        amount = Number(amount);
        try {
            if(perc=="") throw "an empty.";
            if(perc<0) throw "a negative number.";
            if(perc>100) throw "greater than 100%.";
            perc = Number(perc);
            try {
                if(person=="") throw "an empty.";
                if(person-parseInt(person) != 0) throw "a decimal number.";
                if(person==0) throw "a zero.";
                if(person<0) throw "a negative number.";
                person = Number(person);
                var tipVar = new Tip(amount,perc,person);
                var tip = tipVar.calculateTipPerPerson();
                var total = tipVar.calculateTotalPerPerson();
                document.getElementById('tip_total').value = tip;
                document.getElementById('total_bill').value = total;
                 }
            catch(err) {
                    alert("Number of people can't be "+err);
                       }
            }
        catch(err) {
                alert("Tip percentage can't be "+err);
               }
         }
    catch(err) {
            alert("Bill Amount can't be "+err);	
           }
}