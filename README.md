# Giant Gallery
Demo: http://spiritphyz.io/giant-gallery

## Features
#### Responsive and Accessible Design
The layout can accomodate wide desktop browser windows and skinny mobile phone screens. The navigation bar will collapse into a "hamburber menu" for image list access when the window is too narrow. The menu system incorporates extra tags to provide additional information to users browsing with screen readers.

#### Modular Components
There is one main container component that sends state information to many 
stateless functional components. The functional components can pass along further event bindings and also feature CSS overrides. The "previous" and "next" buttons are re-used stateless components.

#### Polished UI and UX Design
Scroll bars will appear for long descriptions and disappear for short ones. The prev/next buttons have small "hover" animations, and the main poster images fade into view upon first load. (To replicate this initial behavior, visit the site again in a private browser window.)

#### Smart Stateless Functional Components
The prev/next buttons display a "disabled" state when the current position is at the endpoints of the image list.


## Future Improvements

#### Navigation Bar
There is no functionality to handle many numbered items that expand beyond the width of the browser window. What should happen if there are 20 items in the gallery? A meeting with the UI/UX team is needed to talk about the behavior of the navbar when there is an excessive amount of images. It would also be nice to show all the image headlines as a list in the hamburger menu while it's toggled on.

#### More Polished UX
The images stop fading when the images can be quickly loaded from the browser's cache instead of a network call. Areas like this inconsistent fading behavior can be improved in the future.

#### More Optimizations

Only 2 glyphs are used from the Typicons libary, so a custom font can be created that will be much smaller in file size. The medical images can be compressed further with Google's new [Guetzli](https://github.com/google/guetzli) perceptual JPG encoder. The list of images are in a component that acts as a local datastore. Connecting the images to a network endpoint (like the Flickr API) would show off the modularity of the design. 

## Tech Stack
* React 15.5.3 and [create-react-app](https://github.com/facebookincubator/create-react-app)
* [React-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com)
* [Typicons](http://typicons.com)
* [Sublime](https://www.sublimetext.com) / [Vim](http://www.vim.org) / [Eslint](http://eslint.org/)
* Freely-licensed images from [Pixabay](https://pixabay.com/) and [Unsplash](https://unsplash.com/)
* Deployed on Digital Ocean with Ubuntu 16.04 and Nginx