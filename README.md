# List of channels

**Live version**: https://vmontala.github.io/channel-list/

## Decisions/Thoughts
- Used react hooks, felt like a nice opportunity to try them out
- I've considered using context to share state between the application, although I discarded it as it seemed a bit overkill given the complexity/boilerplate
- Implemented a basic design with some responsive functionalities
- Tried to keep functions as pure as possible although in lots of cases it didn't make sense
- Aimed for "good" accessibility
- Code may seem a bit verbose, it's intentional
- Kept in mind to follow as much ES6+ stuff as possible, yet again most of functionalities are not going to improve the code substantially
- I thought about implementing a lazy-loading, and even tho it'd _feel_ nice, it wouldn't make sense on a real life application of this type (just think about implementing persistent pagination over a remote API)
- I believe on client-side caching (hence the `sessionStorage`), but also it made sense as there are calculated colors on application mount
- Decided for grid instead of flex as there's no browser limitation, also seems to fit better the needs (keeping in mind that grid keeps size consistency regardless the amount of items without any magic numbers around)
- Used css variables everywhere I've seen fit, although sadly they cannot be used everywhere (_yet_?)

## Next steps
- I wanted to include a router to track the current page and filter status based on the query parameters
- Maybe some small redesign, changing some colors in order to improve contrast (background/foreground)
- Search UX is pretty basic (therefore quite improvable) also
- It was unclear if the first/last pagination item were previous/next page (usually one arrow) or first/last page (usually two arrows), it should be checked
- In case of implementing router, a nice functionality would be to have some "featured" items to be displayed first/bolder
- Another nice functionality would be some sort of "cart" where to keep track of all selected items

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />

The build is minified and the filenames include the hashes.

### `yarn lint`

Lints the app source code to find inconsistencies.
