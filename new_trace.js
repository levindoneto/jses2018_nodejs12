run().then(() => console.log('success'), error => console.error(error.stack));

async function run() {
  await new Promise(resolve => setTimeout(resolve, 10));
  await funcao1();
}

async function funcao1() {
  await new Promise(resolve => setTimeout(resolve, 10));
  await funcao2();
}

async function funcao2() {
  await Promise.resolve();
  await funcao3();
}

async function funcao3() {
  await Promise.resolve();
  throw new Error('Erro para demonstrar');
}
