const moedas = {
    BRL: 1,
    USD: 0.18,
    EUR: 0.15,
    GBP: 0.13,
    JPY: 0.02,
  };
  
  function converter() {
    const moedaOrigem = document.querySelector('#moeda_origem').value;
    const valor = parseFloat(document.querySelector('#valor').value);
    const moedaDestino = document.querySelector('#moeda_destino').value;
  
    const taxaCambial = moedas[moedaOrigem] / moedas[moedaDestino];
    const valorConvertido = valor * taxaCambial;
  
    document.querySelector('#resultado').textContent = `R${valorConvertido.toFixed(2)}`;
  }
  
  document.querySelector('#moeda_origem').addEventListener('change', converter);
  document.querySelector('#moeda_destino').addEventListener('change', converter);
  document.querySelector('#valor').addEventListener('keyup', converter);
  
  converter();