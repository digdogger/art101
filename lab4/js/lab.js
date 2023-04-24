// Connect Four 
//Implementation of game
// Author: Newton Novak
// Date: April 23rd 2023


//Print board before each turn
// Loop through each row
// Loop through each space
// Print R (red), Y (yellow), or Space
           			// Print a | between each cell
       		// Print a newline at the end
      		// Print a horizontal line between
//Accept user input
	// allow user to pick a column to place their piece in
		// read over user input 
//Validate User input
  	 //Check that column user entered still has empty slots
     			//Loop from bottom up until empty slot is found
   				//Place piece on lowest empty row of column
				//if no empty slot, this is invalid
//have user enter new choice
	//Loop until User inputs valid input

//Evaluate possible moves
  	//loop every column left to right and check which columns still have empty slots
		//mark every lowest possible slot as a valid placement
//Choose computer move
	//check for valid placement slots that are adjacent (vertically, horizontally, diagonally) to computers own pieces
		// place computer piece in random valid slot that is adjacent 
			// if there are no pieces already placed for computer OR if there are no valid slots adjacent to computer’s pieces
				// choose any random valid placement slot
//end computer turn
//Test for win or draw situation
	// after each turn, loop through board and check for win/draw conditions
   		//Win: four in a row, horizontally, vertically, or diagonally
   		//draw : board filled up with no four in a row for either player
        //if either condition is met, end game
