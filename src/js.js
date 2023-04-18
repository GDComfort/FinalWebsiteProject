function onClick() {
    let money = parseInt(prompt("Enter the amount of money you wish to calculate"));
    let years = parseInt(prompt("How many years are you calculating?"));
    var currentyear = new Date();
    var currentYear = currentyear.getFullYear();
    var moneyinflation = [];

    if (years > 60)
        inflation = 0.0375;

    else 
        inflation = 0.04; 

    document.getElementById("onc").innerHTML = `Something that cost \$${money} in ${currentYear - years} would cost in ${currentYear} after inflation:`;

    for (let i = 1; i <= years; i++) {
        money += money * inflation
    }
    document.getElementById("inflation").innerHTML = `\$${money}`

}