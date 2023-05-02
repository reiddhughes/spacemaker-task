# Solution Overview

The solution uses reeact and semantic-ui for the overall framework.  It uses maplibre to generate a map
and then loads the polygons onto a layer.  The polygons are clickable and change color when clicked.  
A limiting factor right now is that the features in the layer are not easily editable.  The next step would
be to look up a drawing library that can more dynamically handle polygons.

# Prompt
Candidate Task: Software Engineer - State Management

Background
The Spacemaker software is a web application. The platform is primarily written in JavaScript using a framework. In our platform users can create, edit and review multiple proposed solutions for a project for a specific site. We facilitate multiple workflows and ways to create and edit these proposed solutions by providing them with a ​work surface​. In addition, all the relevant, tool specific features and statistics for a selected solution are also displayed at all times. If you add the mentioned tools together, that leaves us with the following view:

List of proposed solutions | Work surface for a selected solution | Statistics & Tools available for selected solution
 
Prerequisites
● Experience with HTML/CSS/JavaScript.

Task
The task is to make a simple web application based on the specifications mentioned above. Attached to this task you should find two JSON-files containing one GeoJSON feature collection each. Each feature collection represents a proposed solution and contains a list of polygons. The left panel should be a list of proposed solutions (one solution per JSON-file). The work surface should be a map with the polygons for the selected solution displayed on a map. The right panel should have area statistics for the selected solution.
Requirements
● It should be possible to select two polygons and do the following operations on them: union​ and ​intersect​. The resulting polygon of the operation should replace the selected polygons. The app should keep the current state of the polygons until the page is reloaded. It is not necessary to persist the data on disk.
● It should be possible to switch between the proposed solutions. Edited polygons should remain in the same state they are left in when switching between solutions.
● The total area of the selected polygons should be displayed in the right panel.
● You are free to choose any language, frameworks and/or libraries to solve the task.
● The code should be well-structured and easy to extend.
● Document any assumptions that you make.
● Deliver the task with a zip-file or a link to a GitHub repository. The repository should
include a README-file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
