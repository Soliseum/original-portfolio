# File Structure to use to ease growth
<!-- https://create-react-app.dev/docs/deployment/#github-pages -->
# Developer A
https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb
	1) /src/Artist/index.js is <Artist />
	2) /src/Artist/Events/index.js is <ArtistEvents />
	3) /src/Artist/Events/List.js is <ArtistEventsList />
*This file structure:*
	Makes code that belongs together easier to discover
	Simplifies the naming of files and components
	Facilitates the reuse and refactoring of components

***Use Composition over Context/inheritance for Cleaner Code***
	https://reactjs.org/docs/context.html#before-you-use-context
	https://reactjs.org/docs/composition-vs-inheritance.html

Components which can be used in other projects can be kept in shared sub-directory (optional)

Routing logic go in pages directory:
	Inspired from the NextJs project structure convention, the routing logic is kept inside pages directory. Each page is a react class component having some state. A page component uses other components to assemble the page like lego blocks.
	The reason is that route logic is mostly non reusable, means page components are not reusable but we want the components inside components directory to be reusable. So it is better that page components are inside pages directory.
		Quickly see what routes are available in the app.
		Central location for all routing logic.
		Keeping page components separated from other components leads to less crowding.

# Developer B
my-app
└── src
    └── components
        └── component-name
            ├── component-name.css.
            ├── component-name.scss
            ├── component-name-container.js
            ├── component-name-redux.js
            ├── component-name-styles.js
            ├── component-name-view.js
            └── index.js

*component-name.css* is a straight-forward CSS file imported by your stateless view Component.
*component-name.scss* is a straight-forward SASS file imported by your stateless view Component.
*component-name-container.js* is your business logic and state management as handled before being sent to the stateless view Component.
*component-name-redux.js* is the mapStateToProps, mapDispatchToProps, and connect functionality of Redux. If you use an alternative global state management tool, give it a similar file name, such as component-name-mobx.js. This allows you to harness multiple global states (if necessary, though not recommended) and allows you to easily swap global state managers in the future.
*component-name-styles.js* is your JSS. I’ve used this file extensively for storing Material UI withStyles HOCs and JSS.
*component-name-view.js* is your stateless view Component. For the majority of cases, this Component should be able to be pure functional Component (no hooks!)
*index.js* is your entry point for importing your Component. It contains nothing but an export statement that points to the topmost Component at any point in time, because the topmost Component changes often during development.
