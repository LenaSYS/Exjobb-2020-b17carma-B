export default function TranslatedImage(props) {
  const image = props.image;

  if (image === 'machine.jpg') {
    return require('../../img/machine.jpg');
  } else if (image === 'machine2.jpg') {
    return require('../../img/machine2.jpg');
  }
  return require('../../img/machine.jpg');
}
