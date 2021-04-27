"use strict";

const chai = require("chai");
const assert = chai.assert;
const { calcularAreaCirculo } = require("../index");

describe("Testando calculo de área do circulo", function () {
  it("Usando entrada 2.00", () => {
    assert.equal(
      calcularAreaCirculo(2),
      12.5664
    );
  });

  it("Usando entrada 100.64", () => {
    assert.equal(
      calcularAreaCirculo(100.64),
      31819.3103
    );
  });

  it("Usando entrada 150.00", () => {
    assert.equal(
      calcularAreaCirculo(150.00),
      70685.7750
    );
  });

});
