const Myarrey = [1,2,3,'Sameer',5,6,7,8,9,];
Myarrey.push(['sameerijaz']); 
let lastvalue = Myarrey.pop(Myarrey);


const Myarrey1 = [
    { Name: 'Sameer',
      Age : 20

   },
   { Name: 'Sameer',
   Age : 21

},
{ Name: 'Sameer',
Age : 22

},
{ Name: 'Sameer',
Age : 23

},
{ Name: 'Sameer',
Age : 24

},

]
let fillterage = (HumanArrey) => {

 HumanArrey.forEach(element => {
  
    if (element.age >= 23) {
        Myarrey1.pop();
        
    }
 });


return HumanArrey;
}
fillterage(Myarrey1);
console.log(Myarrey1)





