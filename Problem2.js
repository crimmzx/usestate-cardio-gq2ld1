import React from 'react';

/**
 * PROBLEM 2: RED LIGHT, GREEN LIGHT
 *
 * Let's make a super simple traffic light for a busy intersection.
 *
 * EASY VERSION
 * Let's not worry about the yellow light for now. Here's all you need to do:
 * 1. Create a state variable to keep track of whether or not people should stop
 *    (some suggestions for naming: "stop", "redLight"). Set it to "false" initially
 * 2. Create a function that gets called whenever the button is clicked. Inside this
 *    function, simply toggle your state variable from false to true, or true to false
 * 3. Change the CSS class applied to the lights depending on your variable. Remember
 *    our friend the ternary operator for this! Right now, we have an "off" CSS class
 *    that makes the light look dim, and an "on" CSS class to brighten it up.
 *    For example, our red light should have the classes "red on" if redLight = true,
 *    and "red off" if redLight = false
 *
 * HARD VERSION
 * Now, let's show the yellow light for 1 second before changing from green to red 😱
 * 1. Change your state variable to keep track of which color light is currently showing.
 *    So, instead of a boolean, store a string (or integer if you prefer) representing
 *    the current light that should be showing. Set this variable to "red" intially.
 * 2. You're gonna need to change the logic of your click function a bit. Here's my
 *    suggestion:
 *    - if it's currently "red," set the color to "green" similar to the EASY VERSION
 *    - if it's currently "green," set the color to "yellow." Then, add a timeout for
 *      1 second before setting the color to "red." Search for setTimeout on MDN to
 *      refresh yourself on how to do this!
 * 3. Fix your CSS class logic to handle our string values instead of a simple boolean
 */

const Prob2 = () => {
  // all your code goes here!
  const [light, toggleStopState] = useState('red');
  return (
    <div className="problem">
      <button
        onClick={() => {
          if (light == 'red') toggleStopState('green');
          if (light == 'green') {
            toggleStopState('yellow');
            setTimeout(() => {
              toggleStopState('red');
            }, '1000');
          }
        }}
      >
        Next
      </button>
      <div className="traffic-light">
        <div className={light == 'red' ? 'red on' : 'red off'}></div>
        <div className={light == 'yellow' ? 'yellow on' : 'yellow off'}></div>
        <div className={light == 'green' ? 'green on' : 'green off'}></div>
      </div>
    </div>
  );
};

export default Prob2;
