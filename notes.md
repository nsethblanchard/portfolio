Using Sanity.io- an open source SPA built with React.
going to manage.sanity.io will show you all of your projects

### Steps for setting up Sanity

1. npm install -g @sanity/cli (will allow us to run the sanity commands)
2. run "sanity login" and follow directions
3. "sanity init" will create our new project -add name, default dataset "y", pick template
<!-- content now lives in Sanity -->
4. cd "studio" (whatever you named the new project)
5. 'sanity start' to start up your sanity studio-
<!-- this will fire up the server -->
6. find/update your studio by going to localhost:3333
7. Create src/client.js. THIS WILL BE YOUR INTERFACE WITH SANITY
8. run npm install @sanity/client
9. from manage.sanity.io -click on the project, go to settings, go to API, then change the CORS to add localhost:3000 for your react side
10. When you want to deploy and host, you have to remember to also add the host URL here as well

<!-- Look at different tailwind customization installations to do more nuanced styling -->

11. Add Tailwind URLs to index.css
