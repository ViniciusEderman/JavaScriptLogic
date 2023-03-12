class Car {

    constructor(model) {
        
        if(model === "" ) {
            console.log("Você deve digitar um modelo");
        } else {
            this.model = model;
        }
    }

    setColor(color) {

        if(color === "" ) {
            console.log("Você deve digitar uma cor");
        } else {
            this.color = color;
        }
    }

    getColor() {
        return this.color;
    }
}  
