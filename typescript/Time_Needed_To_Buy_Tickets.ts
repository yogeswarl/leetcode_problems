function timeRequiredToBuy(tickets: number[], k: number): number {
    let timeRequiredCounter = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i < k) {
            if (tickets[i] < tickets[k])
                timeRequiredCounter += tickets[i] - 1;
            if (tickets[i] >= tickets[k])
                timeRequiredCounter += tickets[k];
        }
        if (i === k && tickets[k] > 0) {
            timeRequiredCounter += tickets[k];
        }
        if (i > k) {
            if (tickets[i] < tickets[k])
                timeRequiredCounter += tickets[i] - 1;
            if (tickets[i] >= tickets[k])
                timeRequiredCounter += tickets[k] - 1;
        }
    }
    return timeRequiredCounter;
};
console.log(timeRequiredToBuy([2,6,3,4,5], 2)) 
console.log(timeRequiredToBuy([84,49,5,24,70,77,87,8],3)) 