import React from 'react';
import { useState } from 'react';

/**
 * PROBLEM 1: TRACK THE DAYS SINCE HELL ON EARTH
 * If you somehow missed the memo... 2020 was a terrible mistake for everyone involved.
 * So, let's celebrate every day further from this hell!
 *
 * 1. Make a state variable to keep track of the days since 2020. Let's initialize this to 1.
 * 2. Create a function that gets called when you click the <button>
 * Note: if you aren't sure how to handle button clicks, this guide is pretty helpful: https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
 * 3. onClick, you should increment your days by one
 * 4. In the curly braces within the <p> tag {}, display your current "days since 2020"
 */

const Prob1 = () => {
  const [daysCount, setDaysCount] = React.useState(1)

  const toggleButton = () => {
    console.log("another day slayed")
    setDaysCount(daysCount + 1)
  }

  return (
    <div className="problem one">
      <p>It's been {daysCount} days since 2020 🙏</p>
      <button onClick= {toggleButton} > Another day thankfully passed</button>
    </div>
  );
};

export default Prob1;
