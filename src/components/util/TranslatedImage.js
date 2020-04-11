export default function TranslatedImage(image) {
  switch (image) {
    case 'bottle.jpg':
      return require('../../img/bottle.jpg');
    case 'bottle_label.jpg':
      return require('../../img/bottle_label.jpg');
    case 'chair.jpg':
      return require('../../img/chair.jpg');
    case 'chair_seat.jpg':
      return require('../../img/chair_seat.jpg');
    case 'chair_stand.jpg':
      return require('../../img/chair_stand.jpg');
    case 'lid.jpg':
      return require('../../img/lid.jpg');
    default:
      return require('../../img/bottle.jpg');
  }
}
