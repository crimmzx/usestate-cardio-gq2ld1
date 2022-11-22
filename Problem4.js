import React from "react";

/**
 * PROBLEM 4: CHANGING WINDOW SIZE
 *
 * This is the first and only exercise dealing with the 'useEffect' hook.
 * Using browser APIs, we can get the width/height of a window (the code has
 * already been provided). Now, we want to display this information to the
 * user and update it when it changes! You can experiment with this
 * component by resizing the preview window.
 *
 * 1. Create state variables for the width and height values we'll be adding.
 *    What should the initial values be?
 * 2. Add the newly created state variables into the JSX between the curly braces
 * 3. Now, we want to use the 'useEffect' hook to run an effect that adds an
 *    event listener listening to the window "resize" event!
 *    In this event listener, we want to update our width/height state variables
 *    whenever the window size changes
 *    (QUESTION: what should the dependency list (second-argument of useEffect) be for this case?)
 * 4. When the component unmounts or we leave the page, we want to unregister
 *    this event listener to avoid any memory leaks/browser issues.
 *    How can we do this in our useEffect hook?
 */

const Prob4 = () => {
  // all your code goes here!
  const[height, setHeight] = React.useState(100)
  const[width, setWidth] = React.useState(100)


  // Example code for handling window resizes
  function handleResize(e) {
    useEffect(() => {
      window.addEventListener("resize", handleResize);
    })
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    setHeight(newHeight);
    setWidth(newWidth);
   }

  // adds event listener
  //window.removeListener("resize", handleResize); // removes event listener

  return (
    <div className="problem">
      <p>The window width is: {height}</p>
      <p>The window height is: {width}</p>
    </div>
  );
};

export default Prob4;
