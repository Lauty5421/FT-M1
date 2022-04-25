"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let numeroDecimal = 0;
  for(let i = 0; i < num.length; i++) {
    numeroDecimal += +num[i] * 2 ** (num.length - 1 - i);
  }
  return numeroDecimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let resta = ""
  while (num > 0) {
      resta = (num % 2) + resta
      num = Math.floor(num / 2)
  }
  return resta
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
