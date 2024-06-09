function knightMoves(start, end){
    //defining possible moves for the knight in the chess
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    //to chceck if a position is within the chessboard bound
    const isInBounds = (x,y) => x >=0 && x <8 && y >=0 && y <8;

    //to convert position to string and thus track visisted positions
    const positionToString = ([x,y]) => `${x}, ${y}`;

    //to initialise the queue with starting position and the path taken to reach
    const queue = [[start, [start]]];

    //set to track visisted position to avoid vising them
    const visited = new Set();
    visited.add(positionToString(start));

    //breadth first seach (bfs) looop
    while (queue.length > 0){
        //dequuee the first element in the queue
        const [current, path] = queue.shift();

        //check if we have reached the target position

        if (current[0]=== end[0] && current[1] === end[1]){
            console.log(`You made it in ${path.length-1} moves! Here is your path: `);
            path.forEach(step => console.log(step));
            return path;
                
         }

            //explore all possible moves from current position

        for (let [dx, dy] of directions){
            const [x,y] = current;
            const nextPosition = [x + dx, y +dy];

            //check if the move is within bounds and hasnt been visisted yet
            if(isInBounds(nextPosition[0], nextPosition[1] && !visited.has(positionToString(nextPosition)))){
                //mark as visisted
                visited.add(positionToString(nextPosition));
                //enqueue the next position and the path to reach it
                queue.push([nextPosition, [...path, nextPosition]]);
            }
        }
    }
}

// Examples
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3,3],[4,3]);
