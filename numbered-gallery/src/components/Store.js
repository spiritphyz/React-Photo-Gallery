export const Store = {
  imgData: [
    {
      id: '1000',
      url: 'http://spiritphyz.io/img/gg/centrifuge-insert_1920x1280.jpg',
      alt: 'person loading a centrifuge',
      title: 'Centrifuge Applications for Blood Separation',
      description: 'The blood is collected in tubes or bags, depending on the prescribed test from the doctor. Tubes can vary in size from 1.2mL to 15mL, while bags are usually around 300mL to 500mL. The role of a centrifuge in testing blood is to separate whole blood into its various components.',
      width: 1920,
      height: 1280,
    },
    {
      id: '2000',
      url: 'http://spiritphyz.io/img/gg/pipette-prepare_1920x1280.jpg',
      alt: 'preparing a pipette',
      title: 'Pipette Usage Technique',
      description: 'The easiest way to test your technique is by using a pipette with an analytical balance. Pipette deionized water into a tared container on the balance to check your accuracy and reproducibility. One-thousand microliters of water weighs about 1,000 milligrams, which can be easily measured on an analytical balance.',
      width: 1920,
      height: 1280,
    },
    {
      id: '3000',
      url: 'http://spiritphyz.io/img/gg/chair-black-empty_19280x1280.jpg',
      alt: 'medical station ready to receive patient',
      title: 'Diagnostic Medical Imaging',
      description: 'Nuclear medicine technologiests prepare and administer radioactive drugs that make abnormal areas of the body appear different than normal areas, use special cameras to detect gamma rays emitted by the radioactive drugs in a patient’s body, explain imaging procedures to patients and answer questions.',
      width: 0,
      height: 0,
    }
  ],
  position: 0,
  getPosition: function() {
    return this.position;
  },
  setPosition: function(newPosition) {
    this.position = newPosition;
  },
  getImages: function() {
    return this.imgData;
  },
  setImages: function(newimgData) {
    this.imgData = newimgData;
  }
};