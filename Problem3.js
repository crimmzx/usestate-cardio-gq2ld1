import React from 'react';

/**
 * PROBLEM 3: BABY'S FIRST CALCULATOR
 *
 * Let's tackle something a bit more useful: a simple addition calculator!
 * This is a little trickier, since we need to deal with user input in order
 * to set the values of our state variables. So, check out the template code
 * shown below!
 *
 * 1. Create state variables for the left and righthand values we'll be adding.
 *    Note you won't need a state variable for displaying the answer!
 * 2. Check out the setLefthandNumber function. Notice this gets called every time
 *    the left input box changes (triggered by an onChange event). Whenever this function
 *    gets triggered, we want to grab the value out of the input and throw it into
 *    a state variable. In this case, we can get the value straight off the "event"
 *    object passed to our function by the input box: event.target.value. You'll also
 *    need to the use the parseInt function to convert this input into an integer. Search
 *    for this function on MDN to see how it works, and how you might be able to handle
 *    invalid inputs as well!
 * 3. Check out the setRighthandNumber function, and do the same thing as step 2 (this time
 *    for your other state variable handling the rightmost input box)
 * 4. Display the answer on the page. No, you don't need another state variable for this!
 *    Just compute the sum directly in the HTML by replacing {0 + 0} with
 *    {leftStateVariable + rightStateVariable} (using whatever state variable names you came
 *    up with of course)
 */

const Prob3 = () => {
  // create any state variables you'll need
  const [leftValue, setLeftValue] = React.useState();
  const [rightValue, setRightValue] = React.useState();

  const changeLefthandNumber = (event) => {
    // handle the input into the leftmost input box
    setLeftValue(parseInt(event.target.value));
    console.log(leftValue);
  };

  const changeRighthandNumber = (event) => {
    // handle the input into the rightmost input box
    setRightValue(parseInt(event.target.value));
    console.log(rightValue);
  };

  return (
    <div className="problem three">
      <input onChange={changeLefthandNumber} />
      <p>+</p>
      <input onChange={changeRighthandNumber} />
      <p>= {leftValue + rightValue}</p>
    </div>
  );
};

export default Prob3;
