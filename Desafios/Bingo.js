function bingo(ticket, win){

    let wins = 0;

    for(let i=0; i < ticket.length; i++) {
        let string = ticket[i][0];
        let caracter = string.split("");
        
    
        for(let j = 0; j < caracter.length; j++) {
            let caracterValue = caracter[j].charCodeAt(0);

            if(caracterValue === ticket[i][1]) {
                wins++
                break;
            }
        }
    }

    if(wins >= win) {
        console.log("vencedor")
        return 'Winner!'
    }
    
    console.log("perdedor")
    return 'Loser!'
}

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)