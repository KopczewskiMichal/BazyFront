function asyncDivide(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b == 0) reject("Nie można dzielić przez zero")
      else resolve(a / b);
    })
    
  })
}

asyncDivide(6,2)
.then((res => console.log(res)))
.catch((res => console.log(res)))