[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  <a href="https://github.com/apache/age/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/apache/age-viewer"/>
  <a href="https://github.com/apache/age/stargazers">
    <img src="https://img.shields.io/github/stars/apache/age-viewer"/>
</p>

# What is Apache-Age Viewer
Apache-Age Viewer is a web based user interface that provides visualization of graph data stored in a postgreSQL database with AGE extension. 
It is graph visualisation tool, for Apache AGE.

This is a sub-project of [the Apache AGE project](https://age.apache.org/#).

# Recommend Node Version & install module

- Node version - ^14.16.0

- Node Module - pm2 

Install latest **pm2** with :
``` npm i pm2 ```


> [pm2](https://www.npmjs.com/package/pm2) is an NPM module to run the project in production mode, and hence is optional for getting started with setting up development environment for Age-Viewer 

# Running Age-Viewer

 - Install the required node modules using  :  
	```npm run setup```
- Run Age-Viewer using : 
```npm run start```

>This will start the age-viewer on http://localhost:3000 if port 3000 is free.


# How to build using command

- Build the front-end : 
```npm run build-front ```

- Build the back-end :
``` npm run build-back```

- Start the project in production mode :
  ``` 
	pm2 stop ag-viewer-develop

	pm2 delete ag-viewer-develop

	pm2 start ecosystem.config.js

	```

  # How to start using Age-Viewer
 - To start using Age-Viewer we need to have a running postgreSQL database server with Apache Age Extension 
	 ### Setting up the PostgreSQL server with AGE extension
	-  Easiest way  for Windows, Mac-OS and Linux Environment using **Docker**
  
	> Install docker in advance (https://www.docker.com/get-started), install the version compatible with your OS from the provided link.
	
	 **Run Using Docker** :
   
	- Get the docker image - 
	```docker pull apache/age ```
	
	- Create AGE docker container
	```bash
	docker run --name myPostgresDb -p 5455:5432 -e POSTGRES_USER=postgresUser \
	-e POSTGRES_PASSWORD=postgresPW -e POSTGRES_DB=postgresDB -d apache/age
	```
	
	| Docker variables| Description |
	|--|--|
	| ``--name`` | Assign a name to the container |
	|	`-p` |	Publish a container’s port(s) to the host|
	|	``-e``|	Set environment variables|
	|	``-d``|	Run container in background and print container ID|
- To Get the running log of the docker container created - 
`` docker logs --follow myPostgresDb``
- To Get into postgreSQL Shell (There are two ways this can be done) -
	- First get into docker shell using -	`` docker exec -it myPostgresDb bash`` 
	<br>Then get into postgreSQL shell using - `` psql -U postgresUser postgresDB``
	
	OR
	
	- Alternatively postgres shell can also be assessed directly (without getting into the docker shell) -
		`` psql -U postgresUser -d postgresDB -p 5455 -h localhost``
		and put in ``postgresPW`` when prompted for password.
- After logging into postgreSQL shell follow the [Post-Installation](https://github.com/apache/age#post-installation) instruction to create a graph in the database.
### Connect Apache Age-Viewer to PostgreSQL Database
**Initial Connection Layout**
![enter image description here](https://user-images.githubusercontent.com/69689387/211624181-9644f489-1a45-4eed-ac8e-7aaf156b97ea.png)
To Connect to postgreSQL server running from Docker Container
- Connect URL - localhost
- Connect Port - 5455 
- Database Name - postgresDB
- User Name - postgresUser
- Password - postgresPW
> The following field is same as used to make the docker container specified above as flags.



# License

Apache AGE Viewer is licensed under the Apache License, Version 2.0. See LICENSE for the full license text.



# My Version of Apache AGE Viewer

## Apache AGE Viewer with Landing Page, Navigation Bar, and Routes

This modified version of the Apache AGE Viewer project includes a number of new features and enhancements, such as an introductory landing page, a navigation bar, and custom routes.

### Landing Page

The landing page serves as an introduction to the Apache AGE Viewer project and provides users with an overview of its features. It includes a hero section with a background image, a heading, and a call-to-action button that invites users to "Get Started". 

Clicking the "Get Started" button will take the user to the `localhost/root` route, which displays the main landing page content.

### Navigation Bar

To improve navigation throughout the application, we added a custom navigation bar that appears on every page. The navigation bar features the Apache AGE Viewer logo on the left, and two clickable text links on the right - "Generate Query" and "Create Query".

### Routes

In addition to the default `localhost` and `localhost/age-viewer` routes, we added a new `localhost/root` route to display the landing page content. This new route is now the default route when the server is started, and users will be redirected to this page when they visit `localhost`.

### Age-Viewer Page

The `localhost/age-viewer` page has been enhanced with new features and functionality, including an off-canvas query generator and a dropdown for creating queries. The off-canvas query generator appears when the user clicks on the "Generate Query" link in the navigation bar. The dropdown for creating queries appears when the user clicks on the "Create Query" link.

### How to Run the Project

To run the modified version of the Apache AGE Viewer project, follow these steps:

1. Clone the project repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Open a web browser and navigate to `localhost` to view the landing page. Click the "Get Started" button to proceed to the `localhost/age-viewer` route and explore the rest of the application.

Note that this modified version of the project requires the `react-router-dom` and `scss` packages as dependencies. These should be installed automatically when you run `npm install` in step 2.

