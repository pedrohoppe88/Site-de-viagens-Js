const card_shopp1 = {
      img: 'teste',
      nome: 'Leo Grill & Pizza',                
      descricao: '',            
      valor: 160,                             
};

const card_shopp2 = {
      img: 'teste',
      nome: 'Dans Le Noir',
      descricao: '',
      valor: 250,
};

const card_shopp3 = {
      img: 'teste',
      nome: 'Tavern Hlebnikov',
      descricao: '',      //hoteis
      valor: 90,
};

const card_shopp4 = {
      img: 'teste',
      nome: 'Paul Apartments Boutique Hotel',
      descricao: '',      
      valor: 250,
};

const card_shopp5 = {
      img: 'teste',
      nome: 'Hampton Inn Pinellas Park St Petersburg',
      descricao: 'igyifyryf8yfyutu',      
      valor: 200,
};

const card_shopp6 = {
      img: 'teste',
      nome: 'qualquer',
      descricao: 'igyifyryf8yfyutu',      
      valor: 200,
};


let v1; let v2; let v3; let v4; let v5; let v6;
let soma_geral;

soma_geral =  v1 + v2 + v3 + v4 + v5;



let cont1 = 0;
let bnt_1 = document.getElementById('Shopp_bnt1'); //capturando o id dos bottuns
let bnt_2 = document.getElementById('Shopp_bnt2');
let bnt_3 = document.getElementById('Shopp_bnt3');
let bnt_4 = document.getElementById('Shopp_bnt4'); 
let bnt_5 = document.getElementById('Shopp_bnt5'); 

                                                            
//contando a quantidade de dias do user no carrinho
let quantity1 = document.getElementById('quantity_1'); 
let quantity2 = document.getElementById('quantity_2');
let quantity3 = document.getElementById('quantity_3');
let quantity4 = document.getElementById('quantity_4');
let quantity5 = document.getElementById('quantity_5');

var quantCard = 0;

function quantCardF() {
      quantCard++;
      console.log(quantCard);

      if(quantCard === 10 || quantCard > 10) {
            alert("não é possivel adicionar mais itens nomcarrinho!!!");
      }
      
}

function bnt1() {
      cont1++;
      console.log(cont1);
}

let valor_1 = document.getElementById('valor_c1'); // botão para calcular a quantidade de dias e etc...
let valor_2 = document.getElementById('valor_c2');
let valor_3 = document.getElementById('valor_c3');
let valor_4 = document.getElementById('valor_c4');
let valor_5 = document.getElementById('valor_c5');

//função criada para Imprimir o valor do hotel * dias (è utilisada quando for chamada pela função de click)
function valor_c1() {
      document.getElementById('card1_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp1.valor * quantity1.value; 
      v1 = document.getElementById('card1_span').innerHTML = card_shopp1.valor * quantity1.value;
      console.log(v1);
}

function valor_c2() {
      document.getElementById('card2_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp2.valor * quantity2.value; 
      v2 = document.getElementById('card2_span').innerHTML = card_shopp2.valor * quantity2.value; 
}

function valor_c3() {
      document.getElementById('card3_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp3.valor * quantity3.value; 
      v3 = document.getElementById('card3_span').innerHTML = card_shopp3.valor * quantity3.value; 
}

function valor_c4() {
      document.getElementById('card4_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp4.valor * quantity4.value; 
      v4 = document.getElementById('card4_span').innerHTML = card_shopp4.valor * quantity4.value; 
}

function valor_c5() {
      document.getElementById('card5_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp5.valor * quantity5.value; 
      v5 = document.getElementById('card5_span').innerHTML = card_shopp5.valor * quantity5.value; 
}
 
bnt_1.addEventListener('click', function nadaver(e) {
      e.preventDefault();
      document.cookie = "username";
      if(quantity1 > 1) {

            valor_c1();   
            soma_geral = soma_geral + v1;
            if(v1 ===NaN) {
                  v1 = 0;
            }
            
      }else {
      quantCardF();
      console.log(card_shopp1);
      console.log(cont1);
      document.getElementById('card1_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp1.valor;
      v1 = document.getElementById('card1_span').innerHTML = card_shopp1.valor;
      alert(v1);
      soma_geral = soma_geral + v1;
      if(v1 ===NaN) {
            v1 = 0;
      }
      document.getElementById('card1_h2').innerHTML = card_shopp1.nome;
      }
});

bnt_2.addEventListener('click', function nadaver(e) {
      e.preventDefault();
      if(quantity2 > 1) {    

            valor_c2(); 
            if(v2 === NaN) {
                  v2 = 0;
            }
            
      }else {
      quantCardF();
      console.log(quantCard);
      console.log(card_shopp2);
      document.getElementById('card2_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp2.valor;
      v2 = document.getElementById('card2_span').innerHTML =  card_shopp2.valor;
      if(v2 === NaN) {
            v2 = 0;
      }
      document.getElementById('card2_h2').innerHTML = card_shopp2.nome;

      }
});

bnt_3.addEventListener('click', function nadaver(e) {
      e.preventDefault();
      if(quantity3 > 1) {

            valor_c3(); 
            if(v3 === NaN) {
                  v3 = 0;
            }
            
      }else {
      quantCardF();
      console.log(card_shopp3);
      document.getElementById('card3_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp3.valor;
      v3 = document.getElementById('card3_span').innerHTML = card_shopp3.valor;
      if(v3 === NaN) {
            v3 = 0;
      }
      document.getElementById('card3_h2').innerHTML = card_shopp3.nome;

      }
});

bnt_4.addEventListener('click', function nadaver(e) {
      e.preventDefault();
      if(quantity4 > 1) {

            valor_c4(); 
            if(v4 === NaN) {
                  v4 = 0;
            }
            
      }else {
      quantCardF();
      console.log(card_shopp4);
      document.getElementById('card4_span').innerHTML = 'Valor à ser pago:' + " " + "$" + card_shopp4.valor;
      v4 = document.getElementById('card4_span').innerHTML = card_shopp4.valor;
      if(v4 === NaN) {
            v4 = 0;
      }
      document.getElementById('card4_h2').innerHTML = card_shopp4.nome;

      }
});

bnt_5.addEventListener('click', function nadaver(e) {
      e.preventDefault();
      if(quantity5 > 1) {

            valor_c5();
            if(v5 === NaN) {
                  v5 = 0;
            }
            
      }else {
      quantCardF();
      console.log(card_shopp5);
      document.getElementById('card5_span').innerHTML = 'meu deus meu senhor' + " " + "$" + card_shopp5.valor;
      v5 = document.getElementById('card5_span').innerHTML = card_shopp5.valor;
      if(v5 === NaN) {
            v5 = 0;
      }
      document.getElementById('card5_h2').innerHTML = card_shopp5.nome;

      }
});



if(v3 === NaN) {
      v3 = 0;
}
if(v4 === NaN) {
      v4=0;
}
if(v5 === NaN) {
      v5=  0;
}


// Sitema do carrinho com modal
      
let modal = document.getElementById("myModal");
let bnt = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

bnt.onclick = function() {
      bnt1();
      if(cont1 > 0) {
            modal.style.display = "block";
      }else {
            modal.style.display = "none";
      }
}

span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    let input_convert = document.getElementById("input_convert");
    let bnt_convert = document.getElementById("Submeter_convet");
    

    bnt_convert.addEventListener('click', function() {
      document.getElementById("span_Submeter").innerHTML = 'valor a ser pago em rublos é:' + " " + "$" + parseFloat(input_convert.value * 13.15);
    })

    