var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let prevEmpty = (i === 0 || flowerbed[i - 1] === 0); 
            let nextEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1; 
                count++;  
                i++; 
            }
        }

        if (count >= n) {
            return true;
        }
    }

    return count >= n;
};