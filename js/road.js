class Road{
    constructor(x,width,laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity;
        this.bottom=infinity;
    }

    draw(context){
        context.lineWidth=5;
        context.strokeStyle="white";

        for(let i = 0; i<this.laneCount; i++){
            const x= lerp(this.left,this.right,i/this.laneCount);
        

            context.beginPath();
            context.moveTo(x,this.top);
            context.lineTo(x,this.bottom);
            context.stroke();
        }
    }
}

