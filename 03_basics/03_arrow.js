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

