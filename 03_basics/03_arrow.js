const user ={
    username:"haris",
    price: 999,

    welcomeMesage: function(){
        console.log('$(this.username) ,welcome to website');
        console.log(this);
        
        
    }
}

user.welcomeMesage()

console.log(this);


function code(){

    let username = "haris"
    console.log(this.username);
    
}

code()



function code(){

    let username = "haris"
    console.log(this.username);
    
}

code()



function addition (){
    let number1 = 24
    let number2 = 67

    console.log(number1*number2);
    console.log(number1+number2);
    console.log(number1-number2);
    console.log(number2/number1);
    
  
}

addition()


function average(){
 const number1 = 600
 const number2 = 700
 const number3 = 800
 const number4 = 1000
 const number5 = 1200
 const number6 = 2000


 console.log((number1+number2+number3+number4+number5+number6)/6);
 


}

average()

function  multiplications(){

}

