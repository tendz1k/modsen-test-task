class rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
area(){
 var area = this.height*this.width;  
 return area; 
}
perimeter(height,width){
    var perim = 2*(this.height+this.width);
    return perim;
}
}
const rect1 = new rectangle (50, 40);
console.log (rect1.area (this.height,this.width)), 
console.log (rect1.perimeter(this.height,this.width));