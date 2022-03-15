function calculate(numberOne, numberTwo) {
  numberOne = parseFloat(document.getElementById("firstNumber").value)
  numberTwo = parseFloat(document.getElementById("secondNumber").value)

  selector = document.getElementById("operations").value

  //switch/case
  switch(selector) {
    case '+':
      calculation = (numberOne + numberTwo)
      document.getElementById("result").innerHTML = `O resultado da soma de ${numberOne} + ${numberTwo} é = ${calculation}`
      break

    case '-':
      calculation = (numberOne - numberTwo)
      document.getElementById("result").innerHTML = `O resultado da subtração de ${numberOne} - ${numberTwo} é = ${calculation}`
      break
    
    case '*':
      calculation = (numberOne * numberTwo)
      document.getElementById("result").innerHTML = `O resultado da multiplicação de ${numberOne} - ${numberTwo} é = ${calculation}`
      break

    case '/':
      calculation = (numberOne / numberTwo).toFixed(2)
      if(Number.isNaN(calculation)) {
        document.getElementById("result").innerHTML = 'Insira um divisível válido!'
      } else {
        document.getElementById("result").innerHTML = `O resultado da divisão de ${numberOne} / ${numberTwo} é = ${calculation}`
        break
      }
  }
}