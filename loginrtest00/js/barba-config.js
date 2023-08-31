// barba-config.js
Barba.init({
  transitions: [{
    name: 'fade', // Nome da transição
    async leave(data) {
      // Animações de saída (por exemplo, desvanecer)
      await new Promise(resolve => {
        // Suas animações de saída aqui
        resolve();
      });
    },
    async enter(data) {
      // Animações de entrada (por exemplo, aparecer)
      await new Promise(resolve => {
        // Suas animações de entrada aqui
        resolve();
      });
    },
  }],
});
