class Dustbin{
    constructor(){
        side1 = new Ground(900,370,200,20,"lightblue");
        side2 = new Ground(800,320,20,100,"lightblue");
        side3 = new Ground(1000,320,20,100,"lightblue");
    }
    display(){
        side1.display();
        side2.display();
        side3.display();

    }
}