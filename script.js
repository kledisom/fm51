
     document.getElementById('formInicio').style.display = "block";
	 document.getElementById('formInicio2').style.display = "none";

 function exibir() {
     document.getElementById('formInicio').style.display = "block";
	 document.getElementById('formInicio2').style.display = "none";
 }
 
  function ocultar() {
     document.getElementById('formInicio').style.display = "none";
	 document.getElementById('formInicio2').style.display = "block";
 }
 


 // document.getElementById('display1').value = localStorage.getItem('fio-colado');
 // document.getElementById('display2').value = localStorage.getItem('ponta');
 
 function dados(id) {
     var ocor = {
		'fioColado': document.getElementById('display1').value,
	    'ponta': document.getElementById('display2').value,
		'roloEmb': document.getElementById('display3').value,
		'fioLd': document.getElementById('display4').value,
		'fioLe': document.getElementById('display5').value,
		'fioMeio': document.getElementById('display6').value,
		'carritel': document.getElementById('display7').value,
		'fioBam': document.getElementById('display8').value,
		'slub': document.getElementById('display9').value,
		'bucha': document.getElementById('display10').value,
		'outros': document.getElementById('display11').value,
		'fioGro': document.getElementById('display12').value,	
		'noTrama': document.getElementById('display101').value,
		'tramaFra': document.getElementById('display20').value,
		'defBom': document.getElementById('display30').value,
		'coniVazio': document.getElementById('display40').value,
		'quebraCala': document.getElementById('display50').value,
		'aliA': document.getElementById('display60').value,
		'aliB': document.getElementById('display70').value,
		'slubTram': document.getElementById('display80').value,
		'voltTrama': document.getElementById('display90').value,
		'outrosTram': document.getElementById('display100').value,	 
	 }
		localStorage.setItem(id + " fio-colado", ocor.fioColado);
		localStorage.setItem(id + " ponta", ocor.ponta);
		localStorage.setItem(id + " roloEmb", ocor.roloEmb);
		localStorage.setItem(id + " fio-fioLd", ocor.fioLd);
		localStorage.setItem(id + " fio-fioLe", ocor.fioLe);
		localStorage.setItem(id + " fio-fioMeio", ocor.fioMeio);
		localStorage.setItem(id + " carritel", ocor.carritel);
		localStorage.setItem(id + " fioBam", ocor.fioBam);
		localStorage.setItem(id + " slub", ocor.slub);
		localStorage.setItem(id + " bucha", ocor.bucha);
		localStorage.setItem(id + " outros", ocor.outros);
		localStorage.setItem(id + " fioGro", ocor.fioGro);
		
		localStorage.setItem(id + " noTrama", ocor.noTrama);
		localStorage.setItem(id + " tramaFra", ocor.tramaFra);
		localStorage.setItem(id + " defBom", ocor.defBom);
		localStorage.setItem(id + " coniVazio", ocor.coniVazio);
		localStorage.setItem(id + " quebraCala", ocor.quebraCala);
		localStorage.setItem(id + " aliA", ocor.aliA);
		localStorage.setItem(id + " aliB", ocor.aliB);
		localStorage.setItem(id + " slubTram", ocor.slubTram);
		localStorage.setItem(id + " voltTrama", ocor.voltTrama);
		localStorage.setItem(id + " outrosTram", ocor.outrosTram);
	 
	 console.log(ocor)
	 console.log(localStorage.length)
	 
    }

function salvar() {
	var tearClicavel = localStorage.getItem('tear clicavel');
	switch(tearClicavel) {
	case '1':
	 dados('tear 01');
	break;
	case '2':
	 dados('tear 02');
	break;
		case '3':
	 dados('tear 03');
	break;
		case '4':
	 dados('tear 04');
	break;
		case '5':
	 dados('tear 05');
	break;
		case '6':
	 dados('tear 06');
	break;
		case '7':
	 dados('tear 07');
	break;
		case '8':
	 dados('tear 08');
	break;
		case '9':
	 dados('tear 09');
	break;
		case '10':
	 dados('tear 10');
	break;
		case '11':
	 dados('tear 11');
	break;
		case '12':
	 dados('tear 12');
	break;
	default:
	console.log('sem valor')
}
}

 
 
 
 