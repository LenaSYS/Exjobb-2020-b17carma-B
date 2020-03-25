export default function TranslatedImage(image) {
  switch (image) {
    case 'machine.png':
      return require('../../img/machine.png');
    case 'machine2.png':
      return require('../../img/machine2.png');
    case 'bearings.png':
      return require('../../img/bearings.png');
    case 'gears.png':
      return require('../../img/gears.png');
    case 'hinge.png':
      return require('../../img/hinge.png');
    default:
      return require('../../img/machine.png');
  }
}
