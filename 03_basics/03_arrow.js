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