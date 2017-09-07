import Rox from 'rox-browser';

export default {
  sayHello: new Rox.Flag(),
  flagA: new Rox.Flag(),
  disabledFlag: new Rox.Flag(),
  colorsVariant: new Rox.Variant('red', ['green', 'blue']),
  textColor: new Rox.Configuration('red')
}
