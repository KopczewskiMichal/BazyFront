function changeCase(text) {
  return new Promise(function (resolve) {
    setTimeout(()=> {
      resolve(text.toUpperCase());
    }, 1000)
  })
}


changeCase("Uwielbiam Placki")
.then(res => console.log(res))