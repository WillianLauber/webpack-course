import singleDefaultExports from './modules/singleDefaultExports/index';
import multipleNamedExports from './modules/multipleNamedExports/index';

import theLetKeyword from './newSyntax/let';
import constant from './newSyntax/const';
import templateLiteral from './newSyntax/template-literal';
import spread from './newSyntax/spread';
import arrowFunctions from './newSyntax/arrow-functions';

import enhancedObjectProperties from './functionsAndObjects/enhancedObjectProperties';
import destructuringAssignment from './functionsAndObjects/destructuringAssignment';

const modules = () => {
  singleDefaultExports();
  multipleNamedExports();
}

const newSyntax = () => {
  theLetKeyword();
  constant();
  templateLiteral();
  spread();
  arrowFunctions();
}


 modules();
// newSyntax();
