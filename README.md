# GUTS Ticket Theater Layout

![Theater](https://github.com/davidkayce/GUTS-Ticket/blob/master/theater.png)

This project is a Vue application, setup using [Vite](https://vitejs.dev). It sorts through data given to display a layout of seats in a theater according to the sections. The project requirment can be found [here](https://github.com/davidkayce/GUTS-Ticket/requirement.pdf)

## Instructions:

To setup the application, run the following commands on your terminal: 

- `yarn`or `npm i`to install all dependencies
- `yarn dev` or `npm run dev` to start up the development server

## Walkthrough and considerations:

The application can be divided in two:

- Logic to filter the data and arrange it in an easily presentable manner. 
  For this, it was important to pay attention to the performance of the functions and the memory use. For this, a modification of the `for...loop` was used with look up within the loop, this has been stated to be the most efficent `for..loop`implementation as there is very overhead in array lookup. Using this also allows one to write more readable than a conventional `for..loop` would permit

  The `drawSeats` function takes in the layout and creates a two dimensional matrix for each section with the seat ranking

       `main hall` :       seats
                     rows  rank1 rank2 ... 
                           rank2 rank1 ...

  The `allocateSeats`function then takes in the group data and for each seat, it confirms it's position on the layout and walks over the matrix created in `drawSeats`, adding the group id where necessary.

- Frontend to view the layout
  For this, svg seats are manipulated on a table, and the `fill`and `stroke`css properties are updated depending on the rank and id in the matrix element

### Considerations and further work

A common method to scale working with complex data would be to using webowrkers, however they are not always applicable to all tasks especially considering the inefficencies of message passing between workers. In this case, I tested the sorting algorithm with 1,000,000 groups using 3 workers vs a single thread: performance gains were little and inconsistent, in more cases, the single thread performed better and so no workers are included in the finished work.

Further work would be checking to ensure that all seats in a group are within the same rank. From the question and in practice, this would normally be enforced in the data but it could also be considered in the application.


