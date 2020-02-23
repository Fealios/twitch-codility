# Amazon codility quiz
### 2/22/2020

## Premise
We are tasked with figuring out the outcome for 1 player in a game of battleship based on a set of coordinates for ships, and a set of moves from the opponent.  Given a grid size, N, the upper left and lower right coordinates for a ship, S, and the targeted spaces of the opponents moves, T, determine how many hits there were, and how many ships would have been sunk.

## Limitations
N <= 26
No ship may have an area greater than 4 spaces

## Examples
N = 3, S = '1A 1B, 2C 2C', T = '1B'
Answer = '1, 0', where 1 hit and 0 sinks
