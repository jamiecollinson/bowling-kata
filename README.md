# Bowling kata in javascript

## Building a 10 pin bowling scorer

In 10 pin bowling a player rolls a bowling ball down a wooden lane towards 10 pins in an equilateral triangle-type pattern at the far end. The objective of the game is to knock down all the pins on the first roll of the ball (a “strike”) or the second roll of the ball (a “spare”). 

Each game of bowling includes 10 turns (or “frames”) for the bowler, and in each frame the bowler gets 2 rolls to try and knock down all the pins. Whether you knock down all the pins on the first roll, the second roll, or if you don’t knock them all down gives you a different score for that frame.

Scoring of 10 pin bowling:
- If in two tries the bowler fails to knock all the pins down, her score for that frame is the total number of pins knocked down in the two rolls.
- If in two tries the bowler knocks all the pins down (a “spare”) her score for the frame is 10 plus the number of pins knocked down on her next roll (the first roll of her next turn).
- If the bowler knocks all the pins down on the first roll (a “strike”), her turn is over and her score for the frame is 10 plus the total of the pins knocked down in her next two rolls.
- If she gets a spare or a strike in the last (10th) frame, the bowler gets to roll one or two more bonus balls, respectively. - These bonus rolls are taken as part of the same turn. If the bonus throw knocks down all the pins the process does not repeat; the bonus rolls are only used to calculate the final score.
- The bowler’s score is the total of all frame scores.

## The challenge
The goal of this challenge is to write the scorer portion of a 10 pin bowling game. The scorer should be able to calculate the score for a whole game for a single player.

A string input will be passed to the scorer which will contain the output from each turn in the game. Examples of turn scores:

- `X`  strike
- `5/` spare (after knocking down 5 on the first roll)
- `32` knocking down 3 pins on the first roll, 2 on the next
- `3-` knocking down 3 pins on the first roll and missing on the next

The scorer that you produce should be capable of:
- Taking a string input for the whole game like the below and processing the score for it
- Scoring the whole game correctly

The scorer should not:
- Check for valid rolls
- Check for the correct number of rolls and frames
- Provide scores for intermediate frames

### Example games

Possible game inputs could be as follows:

&quot;9- 81 9/ 2/ 12 X 9- 8- 9- 34&quot;

| Frame | Score | Comments|
| --- | --- | --- |
| Frame 1 `9-` | 9 + 0 = 9 | Number of pins knocked down |
| Frame 2 `81` | 8 + 1 = 9 | Number of pins knocked down |
| Frame 3 `9/` | 10 + 2 = 12 | Spare! 10 plus number of pins knocked down on the next roll |
| Frame 4 `2/` | 10 + 1 = 11 | Spare! 10 plus number of pins knocked down on the next roll |
| Frame 5 `12` | 1 + 2 = 3 | Number of pins knocked down |
| Frame 6 `X` | 10 + 9 + 0 = 19 | Strike! 10 plus number of pins knocked down on the next two rolls |
| Frame 7 `9-` | 9 + 0 = 9 | Number of pins knocked down |
| Frame 8 `8-` | 8 + 0 = 8 | Number of pins knocked down |
| Frame 9 `9-` | 9 + 0 = 9 | Number of pins knocked down |
| Frame 10 `34` | 3 + 4 = 7 | Number of pins knocked down |
| Total | 96 | 9 + 9 +12 + 11 + 3 + 19 + 9 + 8 + 9 + 7 |

## Notes

- There's a lot to implement here and not much time to do it. The most important thing is to get something working end-to-end which you're proud of and reflects the standard of code you like to write.
- We strive for good design and code that's ideally under test, or at least written in a testable way. We'll be looking for this in the code that you write too.
- Haven't got time to implement refactorings that make your code as good as you'd like? Tell us about it! As software engineers we have to make trade-offs between _time to get a job done_ and _perfect code design_ all the time. Identifying the trade-offs we're making is important.

## Instructions for running

`npm install` then `npm test`

## Expected output

```
> jest --coverage
 PASS  ./bowling.test.js
  ✓ parseFrame (6ms)
  ✓ parseFrames (1ms)
  ✓ scoreGame (2ms)

------------|----------|----------|----------|----------|-------------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------|----------|----------|----------|----------|-------------------|
All files   |      100 |      100 |      100 |      100 |                   |
 bowling.js |      100 |      100 |      100 |      100 |                   |
------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.406s, estimated 2s
Ran all test suites.
```
