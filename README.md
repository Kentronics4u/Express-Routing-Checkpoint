# Express-Routing-Checkpoint
This checkpoint is basically the use of Express to create a server and handles routes.
A custom middleware was programmed to detect the exact time and date that a request is sent. Based on the middleware, the app would only be accessible between Mondays to Fridays (09:00 – 17:00). Outside this time frame, the user gets the following message, “sorry, we are currently closed. Please visit us during working hours”. The middleware is positioned at the top of the route because the outcome of the check determines if the website will open or not.
EJS View Engine is applied for this project. The configurations are set at the top of the project. The pages to be rendered are stored in saved in the views folder. Each of the page is saved with a .ejs file extension. Also, the head, nav and footer in all the pages are the same. So, separate files are created in a folder (partials) for such similar sections and then dynamically rendered at the appropriate locations.
The styling is externally executed and linked to the head file. 
From the package.json file, app.js is set as the main file.



