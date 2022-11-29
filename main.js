
let fechaInicial = prompt("Escriba la fecha Inicial: (dd/mm/aaaa)");
let saldoInicial = parseFloat(prompt("Escriba el saldo Inicial: "));
console.log("Saldo inicial: " + fechaInicial + " --> $" + saldoInicial);

//Tipo de Movimiento
let tipoMovimiento = prompt("Escriba el tipo de movimiento. 1.Ingreso. 2.Egreso. 3.fin. ");

//Variables
let fechaMovimientoIngresado = 0;
let movimientoIngresado = 0;
let motivoIngreso = 0;
let fechaMovimientoEgreso = 0;
let movimientoEgreso = 0;
let motivoEgreso = 0;

//Switch para elegir entre ingreso y egreso:
while (tipoMovimiento != "3"){
    switch (tipoMovimiento){
        case "1":
            fechaMovimientoIngresado = prompt("Escriba la fecha del movimiento: (dd/mm/aaaa)");
            movimientoIngresado = parseFloat(prompt("Escriba el valor de Ingreso: "));
            while(isNaN( movimientoIngresado)){
                movimientoIngresado = parseFloat(prompt("Solo se permiten números. Escriba el valor de Ingreso: "));
            };
            motivoIngreso = prompt("Escriba el motivo del movimiento: ");
            console.log(fechaMovimientoIngresado + " Ingreso --> $" + movimientoIngresado + " Detalle: " + motivoIngreso);
            break;
        case "2":
            fechaMovimientoEgreso = prompt("Escriba la fecha del movimiento: (dd/mm/aaaa)");
            movimientoEgreso = parseFloat(prompt("Escriba el valor de Egreso: "));
            while(isNaN(movimientoEgreso)){
                movimientoEgreso = parseFloat(prompt("Solo se permiten números. Escriba el valor de Ingreso: "));
            };
            motivoEgreso = prompt("Escriba el motivo del movimiento: ");
            console.log(fechaMovimientoEgreso + " Egreso --> -$" + movimientoEgreso + " Detalle: " + motivoEgreso);
            break;
    }
    tipoMovimiento = prompt("Escriba el tipo de movimiento. 1.Ingreso. 2.Egreso. 3.fin. ");
}
//Función para realizar la suma del saldo:
const saldo = (valor1, valor2, valor3) => valor1 + valor2 - valor3;
console.log("Su saldo actual es de: $"+saldo(saldoInicial,movimientoIngresado,movimientoEgreso)); //