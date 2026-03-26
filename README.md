Final Questions and Answers

1. Why are we using clamp instead of media queries?
Using clamp ensures that font sizes adjust in a fluid way as the screen changes size. This method avoids the sudden jumps found in traditional media queries. It simplifies the development process and makes the website look great on any device without extra lines of code.

2. Why did we use minmax instead of fixed columns?
The use of minmax provides a way to define a boundary for how small an element can get while allowing it to stretch into empty areas. This prevents columns from becoming too narrow to read and helps the grid fill the entire width of the page naturally. It replaces rigid column widths with a smarter and more responsive system.

3. Why is it important to implement a mobile first website?
Designing for mobile devices first encourages a cleaner and more focused approach to the layout. It helps to keep the website fast and lightweight before adding more advanced features for desktops. This method reduces the need for complex code and ensures the best experience for people using small screens.

4. What happens if we remove the variables that were defined at the beginning?
If the root variables are gone the entire visual theme will fail because the browser cannot find the instructions for colors or padding. This would lead to a broken appearance and make changing the brand style a nightmare. Having variables allows us to edit one single line to update the whole site instantly instead of searching through the entire file.