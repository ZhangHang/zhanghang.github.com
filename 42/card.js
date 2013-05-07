function createCard (row,clounm,parentTable) {
	for (var i = row - 1; i >= 0; i--) {
		var tr = document.createElement('tr');
		
		for (var j = clounm - 1; j >= 0; j--) {
			var td = document.createElement('td');
			var card =  document.createElement('div');
			
			card.classList.add('card');

			if(j%2 === 0){
				card.classList.add('active');
			}

			td.appendChild(card);
			tr.appendChild(td);
		};
		parentTable.appendChild(tr);
	};
}


function init(){
	var cardheight = 90;
	var cardwidth = 90;
	var mainTable = document.getElementById('cardContianer');


	while (mainTable.hasChildNodes()) {
		console.log('remove');
    	mainTable.removeChild(mainTable.lastChild);
	}


	var row = document.height/cardheight + 1;
	var colunm = document.width/cardwidth + 1;
	createCard(row,colunm,mainTable);
}

window.addEventListener("resize", init, false);


function tryit(){

	var mainTable = document.getElementById('cardContianer');

	for (var i = mainTable.children.length - 1; i >= 0; i--) {
		var tr = 	mainTable.children[i];

		for (var j = tr.children.length - 1; j >= 0; j--) {
			var card = tr.children[j].children[0];
			card.classList.add('active');
		};
	};
}