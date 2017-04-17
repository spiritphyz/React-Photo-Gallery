export const Store = {
  imageData: [
    {
      id: '1000',
      url: '',
      title: 'Blood Analysis',
      description: '',
      width: 0,
      height: 0,
    },
    {
      id: '2000',
      url: '',
      title: 'Receiving Dialysis',
      description: '',
      width: 0,
      height: 0,
    },
    {
      id: '3000',
      url: '',
      title: 'Receiving Dialysis',
      description: '',
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
    return this.imageData;
  },
  setImages: function(newImageData) {
    this.imageData = newImageData;
  }
};