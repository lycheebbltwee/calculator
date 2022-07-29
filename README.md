# Calculator Project

A project to implement a calculator using HTML, CSS, and JavaScript.

<img alt="May be a carrot-themed calculator" src="./reference-images/development-project-01" height="400">

The calculator that I will be replicating looks like this:

<figure>
    <img alt="May be a carrot-themed calculator" src="./reference-images/calculator-reference.jpg" height="400">
    <figcaption>Image sourced from Amazon.com</figcaption>
</figure>

## Planning

In thinking about how to recreate this design, I first decided to sketch up a basic layout of what I would need to write in HTML.

<figure>
    <img alt="May be a sketch of a HTML layout" src="./reference-images/IMG_22DBD6AB998A-1.jpeg" width="400">
    <figcaption> A draft of my HTML layout.</figcaption>
</figure>

While the sketch is quite rough, it was very helpful to physically draw out the structure of how to approach this problem of recreating such a complicated shape. I found that choosing such a complex shape would be a good challenge for me and a good place to practise more creating complex CSS.

## HTML & CSS

When I was writing the HTML for this calculator, the process was much easier because of my prior planning. I decided to mainly use non-semantic tags over semantic tags because there wasn't a need to to have meaningful elements, especially when creating visuals using CSS. The main semantic tag I used was the button tag for the actual calculator buttons.

For the stylesheet, I used SCSS to take advantage of using partials and modules, as well as the BEM naming convention to create different modifiers and to enhance the readability of my code.

To tackle the complexity of the carrot-shape, I had to do a lot of experimenting with different values for the CSS property: border-radius to achieve the design goals, as I had previously watched videos of CSS battles where border-radius was used to create round shapes. While I was unable to replicate the shape exactly, I believe that I was able to create a close representation.

I initially placed all twelve numbered and operation buttons of the calculator inside of a singular div, as I had sketched out. But I was very determined to replicate even the finer details, so I made the appropriate changes in my HTML to recreate the cascading effect of the numpad, which in hindsight may have not been the most practical solution, but it was necessary for the aesthetic goals I had in mind.

## JavaScript

I broke down the various tasks within a calculator to abstract the challenge and make it more manageable to solve:

### Coding Logic

-   ON/AC changes display to 0 and/or resets any stored values.
-   Off button turns off operation (i.e., numbers should not be displayed upon click)
-   Numbers output to the screen through EventListeners
    -   Numbers should concatenate to the current display
-   Operators work
-   Equals button executes math equation
    -   Can handle decimals (only can have one decimal point)
-   Display cannot exceed 10 characters

### Reflection

Some challenges I faced were:

-   Concatenating number presses to the display
    -   I had to make use of the browser console to make sure I was selecting the correct element.
-   Adding numbers resulted in concatenation
    -   I addressed this by converting the displayed numbers to the number type, and made sure to return back as a string
-   Numbers could still be inputted when display is "off"
    -   I was having a lot of trouble finding the correct expression to stop this from happening, but I eventually resolved this through creating a falsy condition.

### Additional functions to add (Completed)

-   Complex calculations using memory functions (optional)
    -   Storing result in a memory variable
    -   Adding (or subtracting) current value to (or from) the memory value (M+/M-)
    -   Display the value stored in memory (MRC)
    -   Pressing MRC twice will clear memory (need a counter)
-   GT button to store the grand total of previous calculations

## Project Reflection

I felt that this project was a good opportunity to practise Javascript and how to interact with the DOM. As I have had previous experience with HTML and CSS, I was really excited to dive into writing my own Javascript, instead of outsourcing scripts.

Coming into Javascript with beginner-level Python knowledge, I was able to approach this problem with similar kind of problem solving. However, I still need to continue practising to abstract the different parts of a problem, further breaking down processes and slowly writing the program to achieve these smaller tasks.
