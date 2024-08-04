function mySqrt(x: number): number {
    if(x < 2){
        return x;
    }
    let y = x;
        let z = (y + (x/y))/2;
        
    while(Math.abs(y-z)>=0.00001){
        y = z;
        z = (y + (x/y))/2;
    }
    return Math.floor(z);
};