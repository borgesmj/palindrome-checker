input = document.querySelector("#input");
result = document.querySelector("#result");

function myFunction() {
  str = input.value;
  if (str.length === 0){
    result.innerText = 'Debe ingresar letras o numeros'
  } else {
    str = str.toLowerCase().replace(/\W|_/g, "")
    let splitNumber = Math.floor(str.length / 2);
    for (let i = 0; i<splitNumber; i++){
      if(str[i] !== str[str.length - 1 - i]){
        result.innerText = `${input.value} NO es un palindromo`
          input.value = "";
        return
      } else {
        result.innerText = `${input.value} SI es un palindromo`
        input.value = "";
        return
      }
    }
  }
  // else {
  //     str = str.toLowerCase().replace(/\W|_/g, "");
  //     let splitNumber = Math.floor(str.length / 2);
  //     for (let i = 0; i < splitNumber; i++) {
  //         if (str[i] !== str[str.length - 1 - i]) {
  //         console.log('No es un palindromo')}
  //         input.value = "";
  //         return
  // } else {
  //   result.innerText = "Si es un palindromo";
  //   input.value = "";
  // }
  }

