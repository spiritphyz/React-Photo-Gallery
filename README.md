# React Gallery
Demos:
* http://spiritphyz.io/react-gallery – (original design)
* http://spiritphyz.io/sci-viz-gallery – (alternate design + color scheme)

## FEATURES
### Responsive and Accessible Design
![giant-gallery-responsive](https://cloud.githubusercontent.com/assets/7908723/25415205/21fe52c6-29eb-11e7-8425-0995a021074b.gif)

The layout can accomodate wide desktop browser windows and skinny mobile phone screens. The navigation bar will collapse into a "hamburber menu" for image list access when the window is too narrow (and additionally shows image titles in a columnar format). The menu system incorporates extra tags to provide additional information to users browsing with screen readers.

### Modular Components
![giant-gallery-reusable-components](https://cloud.githubusercontent.com/assets/7908723/25415281/91d5d9b6-29eb-11e7-8ac8-88216d4de481.gif)

There is one main container component that sends state information to many 
stateless functional components. The functional components can pass along further event bindings and also feature CSS overrides. The "previous" and "next" buttons are actually the same component, re-used by having different properties sent to them to produce separate visual outcomes.

### Polished UI and UX Design
![giant-gallery-auto-scrollbars](https://cloud.githubusercontent.com/assets/7908723/25415142/b05a4490-29ea-11e7-8012-ce7cf40cfa57.gif)

Scroll bars will appear for long descriptions and disappear for short ones. The main poster images slide and fade into view depending on the direction of movement, and the text descriptions also have a small fade-in. The prev/next buttons have subtle "hover" animations.

The animations are optimized for GPU acceleration on mobile platforms, so they animate very smoothly.

### Smart Stateless Functional Components
![giant-gallery-next-button-becomes-disabled](https://cloud.githubusercontent.com/assets/7908723/25415169/da4cc98a-29ea-11e7-87f4-4281d23f5e2f.gif)

The prev/next buttons display a "disabled" state when the current position is at the endpoints of the image list.


## FUTURE IMPROVEMENTS

### Navigation Bar
There is no functionality to handle many numbered items that expand beyond the width of the browser window. What should happen if there are 20 items in the gallery? A meeting with the UI/UX team is needed to talk about the behavior of the navbar when there is an excessive amount of images.

### More Optimizations
The list of images are in a component that acts as a local datastore. Connecting the images to a network endpoint (like the Flickr API) would show off the modularity of the design. 

## TECH STACK
* React 15.5.3 and [create-react-app](https://github.com/facebookincubator/create-react-app)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com) / CSS3 Animations
* [React-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)
* [React-icons](https://github.com/gorangajic/react-icons)
  * for SVG versions of Typicons
* [Typicons](http://typicons.com)
  * Implemented as SVG graphics, not icon font glyphs
    * SVG icons [display correctly on mobile and have better accessibility](https://github.com/blog/2112-delivering-octicons-with-svg)
    * Icon font glyphs appear as [random Unicode emoticons on iOS](https://cloudfour.com/thinks/seriously-dont-use-icon-fonts/#they-encroach-on-emoji-turf) and have many display problems. Even the so-called "[bulletproof](http://typicons.com/more/how-to-use-typicons/)" method doesn't work on iOS.
* [ColorZilla CSS Gradients](http://www.colorzilla.com/gradient-editor/)
* [Sublime](https://www.sublimetext.com) / [Vim](http://www.vim.org) / [Eslint](http://eslint.org/)
* Freely-licensed images from [Pixabay](https://pixabay.com/) and [Unsplash](https://unsplash.com/)
* Deployed on Digital Ocean with Ubuntu 16.04 and Nginx
