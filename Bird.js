class Bird{
    constructor(x,y,width, height){
        var options={
            restitution:0.08,
            friction:0.05,
            density:0.08  
           }    
          this.body=Bodies.rectangle(x,y,width, height,options)  
             }
         }
    
  