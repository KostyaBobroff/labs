function create(classname, inner){
var temp=document.createElement('div');
	temp.className=classname;
	temp.innerText=inner;
	return temp;
}
function add(name, cst){
	if (document.getElementById(cst+"_"+name)==null){
		var line=create('row', '');
		line.appendChild(create('cell', name));
		line.appendChild(create('cost', parseInt(cst)));
		line.id=cst+"_"+name;
		line.appendChild(create('cell', 1));
		document.getElementById("t1").appendChild(line);
	}
	else
		document.getElementById(cst+"_"+name).children[2].innerText=parseInt(document.getElementById(cst+"_"+name).children[2].innerText)+1;
}
function add2(){
	name=document.getElementById("lname").value; 
	cst=document.getElementById("cost").value;
	cst=cst+0;
	if (cst >0 ){
	
	cst=document.getElementById("cost").value;
	if (document.getElementById("!"+cst+"_"+name)==null){
	var line=create('row2', '');
	line.onclick=function(){add(this.children[0].innerText, this.children[1].innerText);};
	line.id="!"+cst+"_"+name;
	line.appendChild(create('cell', name));
	line.appendChild(create('cost', parseInt(cst)));
	document.getElementById("t0").appendChild(line);
		} else 
			alert ("Такой товар уже существует")
	}
	else 
			alert ("Введите стоимость >0")
}
function summ(){
	var summa=0;
	for(var i=2; i<document.getElementById("t1").children.length; i++)
	    summa+=parseInt(document.getElementById("t1").children[i].children[1].innerText)*parseInt(document.getElementById("t1").children[i].children[2].innerText);
	alert("Итоговая сумма заказа: " + summa + " у.е.");
}
