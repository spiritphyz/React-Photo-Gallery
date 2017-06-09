// Use Unicode entities in HTML for more safety in React / JSX strings
// http://stackoverflow.com/questions/27934238/rendering-raw-html-with-reactjs

export const Store = {
  imgData: [
    {
      id: '1000',
      url: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/img/b-sheet-illustration_773x494.jpg',
      pdfUrl: '',
      alt: 'beta sheet of protein structures',
      title: 'Protein Secondary Structures: Beta Pleated Sheets',
      subheading: 'Client: University of California, San Francisco',
      role: 'Illustrator: Tony Le',
      description: `Because of the tetrahedral nature of carbon bonds, a b-sheet is puckered, leading to the \u201Cpleated sheet\u201D designation.`,
      width: 773,
      height: 494,
    },
    {
      id: '2000',
      url: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/img/cell-gates_1000x661.png',
      pdfUrl: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/Tony-TC-Le-Ion-Channels-Illustration.pdf',
      alt: 'ion channel proteins being activated',
      title: 'Ion Channel Gating Mechanisms',
      subheading: 'Client: University of California, Berkeley',
      role: 'Illustrator: Tony Le',
      description: `Cells manage a multitude of signals with ion channels, in part by using channels controlled in different ways. These \u201Cgating mechanisms\u201D are generally variations on a common theme: A stimulus causes a shape change in the ion channel protein that opens the channel pore to conduct ion flow or closes to block it.`,
      width: 1000,
      height: 661,
    },
    {
      id: '3000',
      url: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/img/photosynthesis_1000x583.png',
      pdfUrl: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/Tony-TC-Le-Photosynthesis-Illustrations.pdf',
      alt: 'electrical generation in plants and photovoltaics',
      title: 'Lean, Mean, Green Machines',
      subheading: 'Client: University of California, Berkeley',
      role: 'Illustrator: Tony Le',
      description: `Once photons have been trapped, the absorbed energy must travel to sites where electrons are actually generated and exported. In these later steps of energy conversion, plants can actually outperform solar cells, transporting absorbed energy with near-perfect efficiency. Scientists are therefore probing photosynthetic mechanisms of energy transport, with the goal of using their discoveries to improve the overall efficiency of photovoltaic materials.`,
      width: 1000,
      height: 583,
    },
    {
      id: '4000',
      url: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/img/CRISPR-illustration_1000x961.jpg',
      pdfUrl: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/Tony-TC-Le-CRISPR-Illustration.pdf',
      alt: 'high-level overview of CRISPR mechanism',
      title: 'The Evolution of Bacterial Immunity',
      subheading: 'Client: University of California, Berkeley',
      role: 'Illustrator: Tony Le',
      description: `It appears that when bacteria recognize the DNA of an invading virus, they cut it up and incorporate a short piece of the virus\u02BC genetic material into their CRISPR region between the repetitive sequences.`,
      width: 1000,
      height: 961,
    },
    {
      id: '5000',
      url: 'http://spiritphyz.io/img/bsr/nobel-tradition-page-layout_1028x668.png',
      pdfUrl: 'https://www.ocf.berkeley.edu/~tonyle/sci-viz-gallery/Tony-TC-Le-Print-Design.pdf',
      alt: 'timeline of Nobel laureates',
      title: `A History of UC Berkeley\u02bcs Laureates`,
      subheading: 'Client: University of California, Berkeley',
      role: 'Print Design: Tony Le',
      description: `Since the prize originated in 1901, 20 UC Berkeley faculty and 24 alumni have been awarded the Nobel Prize. Here is the story of Berkeley’s Nobel tradition, from the Prize\u02BCs surprising origin (it owes its existence to dynamite), to Berkeley’s most recent recipient, George Smoot.`,
      width: 1028,
      height: 668,
    }
  ],
  position: 0,
  getPosition: function() {
    return this.position;
  },
  setPosition: function(newPosition) {
    this.position = newPosition;
    return this.getPosition();
  },
  getImages: function() {
    return this.imgData;
  },
  setImages: function(newimgData) {
    this.imgData = newimgData;
  }
};
