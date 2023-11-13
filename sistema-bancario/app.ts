class ContaBancaria {
    private numero: number;
    private agencia: number;
    private titular: string;
    private saldo: number;
  
    constructor(numero: number, agencia: number, titular: string, saldo: number) {
      this.numero = numero;
      this.agencia = agencia;
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor: number) {
      this.saldo += valor;
    }
  
    sacar(valor: number) {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente");
      }
  
      this.saldo -= valor;
    }
  
    obterSaldo(): number {
      return this.saldo;
    }
  }
  const conta = new ContaBancaria(123456, 78910, "João da Silva", 1000);
  
  conta.depositar(500);
  
  console.log(conta.obterSaldo()); // 1500
  
  conta.sacar(200);
  
  console.log(conta.obterSaldo()); // 1300
  