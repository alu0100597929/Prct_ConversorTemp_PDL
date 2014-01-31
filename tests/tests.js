
var assert = chai.assert;

suite('temperatura', function()
{
  test('25C = 77 F', function()
  {   tempEntrada.value = "25C";
      convertir();
      assert.deepEqual(tempSalida.innerHTML, "77 F");
  });
  
  test('-12.5 c = 9.5 F', function()
  {   tempEntrada.value = "-12.5 c";
      convertir();
      assert.deepEqual(tempSalida.innerHTML, "9.5 F");
  });
  
  test('32F = 0 C', function()
  {   tempEntrada.value = "32F";
      convertir();
      assert.deepEqual(tempSalida.innerHTML, "0 C");
  });
  
  test('-12.5cxwe = ERROR', function()
  {   tempEntrada.value = "asz-12.5cxwe";
      convertir();
      assert.match(tempSalida.innerHTML, /ERROR/);
  });
  
  test('wree-12.5F = ERROR', function()
  {   tempEntrada.value = "wree-12.5F";
      convertir();
      assert.match(tempSalida.innerHTML, /ERROR/);
  });

});
