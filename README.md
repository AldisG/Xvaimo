### Xvaimo

This is a simple single page application, that fetches API data and displays it, imitating online shop.

## To run this project you need NodeJs and Git on your system.

1. Clone the link of this project
2. Open terminal in your code editor (or use other terminals),
   enter commands ' git init ' and then ' git clone "link-to-this-project '
3. After it has done downloading files, you will need node modules, to run it. For this
   In the same terminal, change to correct directory with ' cd ./xvaimo ' and then ' npm i '
4. To start up the project in the browser, write a command ' npm start '

- This Project uses LF, not CRLF, so you might have to adjust it on your system
- This is a single page App, therefor there is only 1 page, which is located in the 'pages' folder
- Bigger components are located in 'components' folder
- Smaller components are located 'components/elements'
- 'Elements' folder contains folders, that contain one or more Bigger component related files
- 'Elements' folder also contains 'assets' folder, which contains icon components
- Image assets (besides API called photo links) are located in 'img' folder
- Store and API call-related logic, including type list is located in 'store' folder
- For cleaner code some functions have been moved to a separate file in 'util' folder
- All style files are located in ' styles ' folder.

# For this project I used:

React, Typescript, ReduxToolkit, Scss and if there was a need, I could also use Route, for dynamic links.
I think, with the requirements provided to me, the technologies I used suited. One thing I would probably change is Icon components, meaning,
I'd rather have an array or object of all required icons (example, ['alert', 'info', 'plus'.....]) and use them to create a single Icon component, that would take a few short parameters in it to display what ever is required
