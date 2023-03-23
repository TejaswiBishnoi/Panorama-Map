# Panorama-Map
It is a web-application that provides user with a Map and some coordinates displayed as circles. When a user clicks on the points displayed on the map, a panorama image is displayed on the right half of the viewport. The image is the photo of the real-world location represented by the coordinate. Screenshot of the webapp:<br/><br/>
<img src="https://github.com/TejaswiBishnoi/Panorama-Map/blob/main/readme_img/full.png?raw=true" height=400 height="auto" align="center">

<br/>
The web-app runs on top of the following technologies:
<ol>
<li>Node.js</li>
<li>Express.js</li>
<li>jQuery</li>
<li>OpenLayers</li>
<li>Panolens.js</li>
<li>Tailwind CSS</li>
</ol>

The app uses Express.js, a node.js based server, to serve the webapp. The webapp does not perform any server-side rendering and relies on frontend js execution. In frontend side the app uses OpenLayers to display the interactive OpenStreetMaps Map. To display the panorama, Panolens.js is used. Now to style the web-app, Tailwind CSS has been used as it provides lot of options and easy modification. Also, for the simplyfying the front-end JS, jQuery is used.

To use this application, clone the repository using git:</br>
<code>$ git clone https://github.com/TejaswiBishnoi/Panorama-Map.git</code></br></br>
Once cloned move into the repository and run the following command:</br>
<code>$ npm install</code></br>
This command will install all the required packages. If you encounter error such that "npm" is not recognised, you need to install Node.js. To download and Node.js, please visit this <b><a href="https://nodejs.org/en/download">link</a></b> and follow the instructions.
</br></br>
After installation and set-up, to run the app, run the following commands:
</br>
<code>$ node server.js</code></br></br>
Now the server is running and the site is static, you just need to visit:</br> 
<code>http://localhost:5000</code> and the app is in front of you.<br></br>
Now how to use the app? Just click on any point/circle to view the panorama.</br>
<b>Note: Only 10 images are available in this repo, so only few points will display the images. Refer to the picture below to see those points:</b></br>
<img src="https://github.com/TejaswiBishnoi/Panorama-Map/blob/main/readme_img/avail.png?raw=true" width=400 height="auto" align="center">
</br><br/><br/>
<h4>Files and Folders</h4>
<ol>
  <li><b>server.js</b>: It includes the code to set-up and run the express static server.</li>
  <li><b>tailwind.config.js</b>: It contains the configuration for the Tailwind CSS</li>
  <li><b>package.json</b>: This contains the node configuration of the app</li>
  <li><b>public</b>: This folder contains all the files required to use the webapp, including HTML, JS, CSS and images</li>
  <li><b>readme_img</b>: Images for this Readme.md</li>
 </ol>
