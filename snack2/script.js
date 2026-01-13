const squadre = [
    {
        nome : "Torino",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Roma",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Lazio",
        punti : 0,
        falliSubiti : 0
    },
];

function randomScore(){
   return Math.floor(Math.random() * 101);
}

for(let i=0;i<squadre.length;i++){
    if(squadre[i].punti===0 && squadre[i].falliSubiti===0 ){
        squadre[i].punti = randomScore()
        squadre[i].falliSubiti = randomScore()
    }
}
console.log(squadre);

const squadre2=[];

for(let i=0;i<squadre.length;i++){
  if( squadre[i].nome!=="" || squadre[i].falliSubiti!=="" ){
        squadre2.push(squadre[i].nome, squadre[i].falliSubiti)
    }
}
console.log(squadre2);