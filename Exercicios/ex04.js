function aleatoria(tamanho = 10) {
    let senha = "";
  
    for (let i = 0; i < tamanho; i++) {
      const code = parseInt(Math.random() * (126 - 33 + 1)) + 33;
      senha += String.fromCharCode(code);
    }
  
    return senha;
  }
  
  console.log(aleatoria());