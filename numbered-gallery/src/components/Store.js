// Use Unicode entities in HTML for more safety in React / JSX strings
// http://stackoverflow.com/questions/27934238/rendering-raw-html-with-reactjs

export const Store = {
  imgData: [
    {
      id: '1000',
      url: 'http://spiritphyz.io/img/gg/centrifuge-insert_900x600.jpg',
      alt: 'person loading a centrifuge',
      title: 'Centrifuge Applications for Blood Separation',
      description: `The blood is collected in tubes or bags, depending on the prescribed test from the doctor. Tubes can vary in size from 1.2mL to 15mL, while bags are usually around 300mL to 500mL. The role of a centrifuge in testing blood is to separate whole blood into its various components.`,
      width: 900,
      height: 600,
    },
    {
      id: '2000',
      url: 'http://spiritphyz.io/img/gg/pipette-prepare_900x600.jpg',
      alt: 'preparing a pipette',
      title: 'Pipette Usage Technique',
      description: `The easiest way to test your technique is by using a pipette with an analytical balance. Pipette deionized water into a tared container on the balance to check your accuracy and reproducibility. One-thousand microliters of water weighs about 1,000 milligrams, which can be easily measured on an analytical balance.`,
      width: 900,
      height: 600,
    },
    {
      id: '3000',
      url: 'http://spiritphyz.io/img/gg/chair-black-empty_900x600.jpg',
      alt: 'medical station ready to receive patient',
      title: 'Diagnostic Medical Imaging',
      description: `Nuclear medicine technologists prepare and administer radioactive drugs that make abnormal areas of the body appear different than normal areas, use special cameras to detect gamma rays emitted by the radioactive drugs in a patient\u2019s body, explain imaging procedures to patients and answer questions.`,
      width: 900,
      height: 600,
    },
    {
      id: '4000',
      url: 'http://spiritphyz.io/img/gg/microscope-look-into_900x600.jpg',
      alt: 'looking into a microscope',
      title: 'Using CRISPR to Reverse Retinitis Pigmentosa and Restore Visual Function',
      description: `Using the gene-editing tool CRISPR/Cas9, researchers at University of California San Diego School of Medicine and Shiley Eye Institute at UC San Diego Health, with colleagues in China, have reprogrammed mutated rod photoreceptors to become functioning cone photoreceptors, reversing cellular degeneration and restoring visual function in two mouse models of retinitis pigmentosa.`,
      width: 900,
      height: 600,
    },
    {
      id: '5000',
      url: 'http://spiritphyz.io/img/gg/blood-pressure_900x600.jpg',
      alt: 'measuring blood pressure',
      title: `The Symplicity\u2122 Renal Denervation (RDN) System`,
      description: `The Symplicity renal denervation system consists of a small steerable treatment catheter and an automatically-controlled treatment delivery generator. The treatment does not require open surgery. A guiding catheter is inserted through a sheath to direct the Symplicity\u2122 catheter to the renal arteries. The Symplicity catheter delivers high-frequency radio waves, called RF waves, to 4-6 locations within each of the two renal arteries. The energy delivered is about 8 watts, similar to that used to power a flashlight. This energy delivery aims to disrupt the nerves and lower blood pressure over a period of months.`,
      width: 900,
      height: 600,
    },
    {
      id: '6000',
      url: 'http://spiritphyz.io/img/gg/surgery-empty-table_1085x600.jpg',
      alt: 'empty surgery table',
      title: 'Mission Bay BMT Facilities: A Wish Come True',
      description: `Before the new Mission Bay hospital was built, the blood and marrow transplant (BMT) team was tasked with drawing up a \u201Cdream big\u201D wish list \u2013 a list of innovative features and small touches that would make up the ideal BMT facility for patients, parents and staff alike. So Dr. Mort Cowan, chief of allergy, immunology and BMT at UCSF Benioff Children\u2019s Hospital San Francisco, gathered together parents, nurses and doctors for some extensive brainstorming.`,
      width: 1085,
      height: 600,
    },
    {
      id: '7000',
      url: 'http://spiritphyz.io/img/gg/skull-model_906x600.jpg',
      alt: 'close-up of skull model in a waiting room',
      title: 'Johns Hopkins Blood-Brain Barrier Working Group',
      description: `The blood-brain barrier (BBB) is a dynamic interface that separates the brain from the circulatory system and protects the central nervous system from potentially harmful chemicals while regulating transport of essential molecules and maintaining a stable environment. The BBB is formed by highly specialized endothelial cells that line brain capillaries and transduce signals from the vascular system and from the brain. The structure and function of the BBB is dependent upon the complex interplay between the different cell types (such as the endothelial cells, astrocytes, and pericytes), and the extracellular matrix of the brain and blood flow in the capillaries.`,
      width: 906,
      height: 600,
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
