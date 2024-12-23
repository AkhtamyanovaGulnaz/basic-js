const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';

  const additionSeparator = options.additionSeparator || '|';
  const separator = options.separator || '+';

  const additionStr = Array(options.additionRepeatTimes).fill(addition).join(additionSeparator);
  const fullStr = string + additionStr;
  const result = Array(options.repeatTimes).fill(fullStr).join(separator);

  return result;
}

module.exports = {
  repeater
};
