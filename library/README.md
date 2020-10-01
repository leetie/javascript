# Javascript *library*

This repository is for a [Javascript Library](https://www.theodinproject.com/courses/javascript/lessons/library?ref=lnav) project that is part of [The Odin Project's](https://theodinproject.com) curriculum. 

### Overview

This project was an exercise in Javascript objects and DOM manipulation. 
- A user can create Javascript Book objects by filling out a form
- The form information is validated and an object is constructed
- The object is dynamically appended to the page
- The object is turned into a string via `JSON.stringify(obj)` and saved in local browser storage

### To be improved

I feel as though my JS code is quite messy in this project, and can be further modularized. I realized probably 3/4 of the way through writing the code that to remove objects from localStorage and the myLibrary array, I would need to use a more reliable reference to the desired object to be removed than just an index - as this is a changing value. I guess a function for generating random ID values and assigning them to objects and removing based on that would work, but it'll take a little refactoring. 

Initially my ambition was to save images for subsequent book objects in localStorage as well, but this proved to be a little more challenging than imagined and has not been implemented yet. Something along the lines of writing the image to a canvas and encoding it into a long string.. to be assembled later upon page load. There's gotta be a library or some easier way, but for now we've got the [Eloquent Javascript](https://eloquentjavascript.net/) cover as a sample. 