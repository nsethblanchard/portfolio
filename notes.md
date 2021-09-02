All background images that I didn't take were gotten from pixabay.com

Using Sanity.io- an open source SPA built with React. Headless Content Management System
going to manage.sanity.io will show you all of your projects Your GUI data can be accessed and manipulated at
localhost:3333 after you cd into studio and run "sanity start"

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

<!-- Sanity will be using GROQ- (Graph-Relational Object Queries) is a declarative language designed to query collections of largely schema-less JSON documents. Its primary design goals are expressive filtering, joining of several documents into a single response, and shaping the response to fit the client application. -->

### Removing from Sanity Studio

1. studio/schemas folder...
2. Locate the specific one to be deleted and delete file
3. go to schema.js---scroll down to "types: schemaTypes.concat.."
4. remove mention of item from list and the import of that item near the top
5. If mentioned in other relationships ie..category was used in post..., go remove that relationship...
<!-- I commented out category to have an example of that relationship for future use -->

### Adding new to Sanity Studio

1. Add the new file with others in schemas directory
2. Go to schema file, import new one and then add to lower list
3. Build out that empty .js file with the specifics of your new item. (check project.js for example...)
4. Test in sanity studio on 3333
5. Add new .js file in components directory and build out

### For SinglePost Block edits (body)

1. You are making these changes in the studio...
