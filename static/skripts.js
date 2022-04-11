let sk=0;
let atlikusaisLaiks = 180;  //spēles ilgums 180 jeb 3min
let laikaAtskaite;
let jauktiDati = [];        //vārdi sajauktā secībā
let sajauktiDati = [];      //vārdu burti sajauktā secībā

function SPELET(){
    window.location = "/spele.html";
}
function SPELES_IELADE(){
    let dati = ["Daugavpils", "Jelgava", "Jūrmala", "Liepāja", "Rēzekne", "Rīga", "Ventspils",
                "Aizkraukles novads", "Alūksnes novads", "Augšdaugavas novads", "Ādažu novads",	
                "Balvu novads", "Bauskas novads", "Cēsu novads", "Dienvidkurzemes novads",
                "Dobeles novads", "Gulbenes novads", "Jelgavas novads", "Jēkabpils novads",
                "Krāslavas novads", "Kuldīgas novads",	"Ķekavas novads", "Limbažu novads",	
                "Līvānu novads", "Ludzas novads", "Madonas novads", "Mārupes novads", "Ogres novads",	
                "Olaines novads", "Preiļu novads", "Rēzeknes novads", "Ropažu novads",	"Salaspils novads",	
                "Saldus novads", "Saulkrastu novads", "Siguldas novads", "Smiltenes novads", "Talsu novads",	
                "Tukuma novads", "Valkas novads", "Valmieras novads", "Varakļānu novads", "Ventspils novads"];
    let n = dati.length;
    let q, x, y;
    let qn = n;
    for(let i=0; i<n; i++){
        q = Math.floor(Math.random() * qn);
        qn--;
        //jauktiDati[i] = dati[q];
        jauktiDati.push(dati[q]);
        dati[q] = dati[qn];
    }
    for(let i=0; i<n; i++){
      let vertiba = jauktiDati[i].split('');
      q = vertiba.length;
      for(let k=0; k<2*q; k++){
        x = Math.floor(Math.random() * q);
        y = Math.floor(Math.random() * q);
        let pag = vertiba[x];
        vertiba[x] = vertiba[y];
        vertiba[y] = pag;
      }
      if(vertiba[0]==' '){
        x = 0;
        y = Math.floor(q/2);
        let pag = vertiba[x];
        vertiba[x] = vertiba[y];
        vertiba[y] = pag;
      }
      if(vertiba[q-1]==' '){
        x = q-1;
        y = Math.floor(q/2);
        let pag = vertiba[x];
        vertiba[x] = vertiba[y];
        vertiba[y] = pag;
      }
      let virkne="";
      for(let k=0; k<q; k++){
        virkne=virkne+vertiba[k];
      }
      //alert(virkne);
      sajauktiDati.push(virkne);
    }
    //console.log(sajauktiDati);
    //laiks.innerHTML = atlikusaisLaiks; 
    LAIKS();
    nr.innerHTML = (sk+1)+". vārds";   
	  vards.innerHTML=sajauktiDati[sk].toUpperCase();						
	  vertejums.innerHTML="";									
	  document.getElementById("turpinat").style.visibility = "hidden"; 
    document.getElementById("speletajs").style.visibility = "hidden";
    document.getElementById("saglabat").style.visibility = "hidden";
    document.getElementById("nesaglabat").style.visibility = "hidden";
    laikaAtskaite = setInterval(TICK, 1000);
}

function PARBAUDE(){
	var v=document.getElementById("atbilde").value; //nolasa, ko ievadījis lietotājs
  if(v.toUpperCase() == jauktiDati[sk].toUpperCase()){    //bauda vai lietotāja ievadītais vārds sakrīt ar masīvā esošo
		atbilde.innerHTML="Pareizi!";    //parāda atbildi
		vertejums.innerHTML="Pareizi! Tā turpināt!"; //parāda atbildi
        document.getElementById("turpinat").style.visibility = "visible"; //pogu TURPINĀT parāda
		document.getElementById("parbaudit").style.visibility = "hidden"; //pogu PĀRABUDĪT paslēpj
		document.getElementById("dzest").style.visibility = "hidden"; //pogu DZĒST paslēpj
	}else{
		vertejums.innerHTML="Nepareizi! Mēģini vēl!"; //parāda atbildi
	}
}

function TURPINAT(){
  sk=sk+1;  //gatavojoties nākošā vārda minēšanai minamā vārda kārtas numuru palielina par 1
	nr.innerHTML = (sk+1)+". vārds";             //maina vārdu skaitītāja ierakstu
	vards.innerHTML = sajauktiDati[sk].toUpperCase();	 //parāda nejauši izvēlētu vārdu
	document.getElementById("turpinat").style.visibility = "hidden"; //pogu TURPINĀT paslēpj
	document.getElementById("parbaudit").style.visibility = "visible"; //pogu PĀRABUDĪT parāda
	document.getElementById("dzest").style.visibility = "visible"; //pogu DZĒST parāda
	document.getElementById("atbilde").value = "";  //dzēš iepriekš ievadīto vārdu
	vertejums.innerHTML = "";						//dzēš atbildes lauka vērtību
}

function DZEST(){
  document.getElementById("atbilde").value = "";  //dzēš ievadīto vārdu (teksta lauks)
	vertejums.innerHTML = "";   //dzēš atbildes novērtējumu (iezīme - label)
}

function LAIKS(){
  let min = Math.floor(atlikusaisLaiks / 60);
	let sec = atlikusaisLaiks - (min * 60);
  if (sec < 10) {
		sec = "0" + sec;
	}
  laiks.innerHTML = min.toString() + ":" + sec;
}

function TICK(){
	if (atlikusaisLaiks > 0){
    atlikusaisLaiks--;
  }else{
		clearInterval(laikaAtskaite);
		vertejums.innerHTML = "Lieliski, Tu atminēji "+sk+" vārdus!";  
    document.getElementById("speletajs").style.visibility = "visible";
    document.getElementById("saglabat").style.visibility = "visible";
    document.getElementById("nesaglabat").style.visibility = "visible";
		document.getElementById("nr").style.visibility = "hidden";
		document.getElementById("vards").style.visibility = "hidden";
		document.getElementById("atbilde").style.visibility = "hidden";	 
		document.getElementById("turpinat").style.visibility = "hidden";
    document.getElementById("dzest").style.visibility = "hidden";
    document.getElementById("parbaudit").style.visibility = "hidden";
	}
	LAIKS();
}


//negrib strādāt, datu bāzē'ierakstu veic, bet nepārslēdzas uz top10.htmls
function REZULTATI(speletajs, rezultats){
  fetch('postTop/' + speletajs + '/' + rezultats)
    .then(response => response.json())
    .then(data => {
      alert("Nepārslēdzas uz topu!!!");
      window.location = "/top10.html";
    });
}

function TOP10_SAGLABAT(){
  let speletajs = document.getElementById("speletajs").value;
  if(!((speletajs.charAt(0)>="A" && speletajs.charAt(0)<="Z") ||
     (speletajs.charAt(0)>="a" && speletajs.charAt(0)<="z"))){
    alert("Lai iekļautu rezultātu Top10 tabulā, jāievada vārds!");
  }else{
    REZULTATI(speletajs,sk);
  }
}

async function IEGUT_DATUS_NO_SERVERA(url){
  let datiNoServera = await fetch(url);
  let datiJson = await datiNoServera.json();
  return datiJson;
}

async function IELADE_REZULTATI(){
  let teksts="";
  let dati = await IEGUT_DATUS_NO_SERVERA('topData');
  let desmit = 10;
  if(dati.length<10) desmit=dati.length;
  for (let i = 0; i < desmit; i++){
    teksts = teksts + (i+1) + ". " + 
             dati[i]['vards'] + "(" +
             dati[i]['rezultats']+
             " vārdi)<br>";
  }
  rez.innerHTML = teksts;
}

function TOP10_NESAGLABAT(){
  window.location = "/top10.html";
}

function SAKUMS(){
  window.location = "/";
}
function saktSpeli() 
    {
        let vards   = document.querySelector('#vards').value
        let vecums  = document.querySelector('#vecums').value
        let regions = document.querySelector('#regions').value
        
        console.log(regions)

        if( vards=='' )
        {
            alert('Ievadi vārdu!')
        }
        else
        {
            window.location='spele.html#'+vards+','+vecums+','+regions
        }

    }//beidzas saktSpeli()