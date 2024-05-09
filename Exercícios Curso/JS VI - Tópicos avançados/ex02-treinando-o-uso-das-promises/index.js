function calculateIMC(weight, height) {
  const imc = weight / (height ^ 2);
  return new Promise((resolve, reject) => {
    if (typeof imc === 'number') {
      resolve(imc);
    } else {
      reject('IMC inválido');
    }
  });
}

function showResult(weight, height) {
    console.log('Calculando...\n');
    calculateIMC(weight, height)
        .then((result) => {
            setTimeout(() => {
                console.log(`IMC calculado! O resultado foi ${result}`);
                console.log(`Peso: ${weight}`);
                console.log(`Altura: ${height}`);
                if (result < 18.5) {
                    console.log('Situação: abaixo de 18,5 (magreza)');
                } else if (result < 25) {
                    console.log('Situação: entre 18.5 e 24.9 (normal)');
                } else if (result < 30) {
                    console.log('Situação: entre 25 e 29.9 (sobrepeso)');
                } else if (result < 40) {
                    console.log('Situação: entre 30 e 39.9 (obesidade)');
                } else {
                    console.log('Situação: acima de 40 (obesidade grave)');
                }
                console.log('\nEncerrando...\n');
            }, 2000); // Delay de 2 segundos
        })
        .catch((err) => {
            console.log(`Algo deu errado! Motivo: ${err}`);
            console.log('Encerrando...');
        });
}

showResult(100, 1.78);
// showResult(48, 1.60)
// showResult(71, "texto")
// showResult(82, 1.72)
