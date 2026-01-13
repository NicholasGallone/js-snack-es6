const bici = [
    {
        tipo : "Cross Country",
        peso : 11

    },
    {
        tipo : "Full Suspension",
        peso : 13
    },
    {
        tipo : "Downhill",
        peso : 15
    }
];

let biciLeggera = bici[0];

for(let i=1; i<bici.length;i++){
    if(bici[i].peso<biciLeggera.peso){
        biciLeggera=bici[i];
    }
}
console.log(biciLeggera);