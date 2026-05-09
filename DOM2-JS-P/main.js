//CATTURO ELEMENTI PER FARE LE MIE VARIABILI ISTANZIATE
//Prendiamo il bottone .add_Press e la textarea contenitore_1.

const bottoneAggiungi = document.querySelector('.add_Press');
const inputTitolo = document.querySelector('.txt-input');
const areaTesto = document.getElementById('contenitore_1');
//dove vanno a finire i miei articoli, catturato contenitore div.
const contenitoreArticoli = document.querySelector('.sezione_Articoli');


//Ascolta sul bottoneAggiungi

bottoneAggiungi.addEventListener('click', function(){

    //PRENDI TEXTAREA E TITOLO
const titoloArticolo = inputTitolo.value.trim()
const testoArticolo = areaTesto.value.trim();


//EXTRA  -> ALER MESSAGGIO 
if (titoloArticolo === '' || testoArticolo === ''){
    alert('Fai attenzione. Obbligo inserire ad inserire del testo e titolo per creare un articolo!');
    
    
    return;

}

contenitoreArticoli.innerHTML += 

`

  <div class="col-3">
            <article class="scatola_Articolo">
                <h2>${titoloArticolo}</h2>
                <p>${testoArticolo}</p>
            </article>
        </div>

`


//extra : PULISCI
inputTitolo.value = '';
areaTesto.value = '';



});

//const nuovoArticoloDiv = document.createElement('div');
//nuovoArticoloDiv.className = 'col-3';


