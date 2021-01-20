class dropdown{
	constructor(list, node='container'){
		
		this.node = node
		this.list= Object.assign(list)
		this.isOpened =false
		this.elements
		this.current
	}
	createDropdown(){
		// debugger
		let general = document.getElementById(this.node)
		general.insertAdjacentHTML('beforeend', `<div id="dropdown" class="dropdown-main m-auto dropdown"><div id="selected" class="dropdown">Choose country</div></div>`);
		general.onclick = () => this.event()


		for(var key in this.list) {

			//let node = document.createElement("div");
			//node.setAttribute(`id`,`${key}`)
			let node = document.getElementById("dropdown");
			node.insertAdjacentHTML('beforeend', `<div id="${key}" class="dropdown choises m-auto">${this.list[`${key}`]}</div>`);
			console.log( key);
			let current = document.getElementById(key)
			current.onclick=()=>(this.changeGeneral(current.id))
		}
		

		this.elements = document.querySelectorAll('.choises')
		
	}

	open(){
		//let elements = document.querySelectorAll('.choises')
		this.elements.forEach((elem)=>elem.style.display="grid")
		this.isOpened=true
	}
	close(){
		this.elements.forEach((elem)=>elem.style.display="none")
		this.isOpened=false
	}

	event(){
		this.isOpened ? this.close():this.open()
		//console.log('works!')
	}
	changeGeneral(key){

		let change = document.getElementById(key)
		console.log(change)
		document.getElementById('selected').innerHTML=change.innerHTML
		change.setAttribute('class',`${change.className} d-none`)
		
		if(this.current!=null){
		document.getElementById(this.current).setAttribute('class',`${change.className}`.replace(' d-none','')) }
		this.current=key
	}

	
}



function showCurrent(){
	alert(document.getElementById("selected").innerHTML=="Choose country"?"Please, choose a county":document.getElementById("selected").innerHTML)
}



let citiesList={
	'msk':'Moskow',
	'spb':'Saint-Petersburg',
	'mnsk':'Minsk',
	'lndn':'London',
	'mg':"Marjina Gorka",
	'nyс':"New York"
}


let elemm = new dropdown(citiesList)
elemm.createDropdown()


//document.getElementById(this.node).onclick=()=>alert('lol')















/*d


const personalMovieDB ={
 count :[],
 movies : {},
 actors :{},
 genres:[],
 privat : false,
 API : {}
};







loadFilmsList();




function addFilm(){
let lastFilm = prompt("One of last watched films?", 'enter filmname plz');
if(lastFilm==null){return}
do{lastRating = prompt("Enter pliz fimrating", '1-10 eg 8.3');
if(lastRating==null){return}
}while(lastRating>10||lastRating<1||lastRating instanceof Number)

personalMovieDB.movies[`${lastFilm}`]=`${lastRating}`
personalMovieDB.count.push(personalMovieDB.count.length);
//let curActors = personalMovieDB.actors['Actors']=(personalMovieDB.count.length);
//let curGenre = personalMovieDB.genres['Genre']=(personalMovieDB.count.length);

let newStr = lastFilm.replace(/ /g, "%20");

fetch(`https://imdb8.p.rapidapi.com/title/auto-complete?q=${newStr}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "key",
		"x-rapidapi-host": "imdb.p.rapidapi.com"
	}
})
.then(response =>
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
	personalMovieDB.API=res.data;
	console.log(res.data);


if(personalMovieDB.API.d==undefined){alert('Incorrect film name');return}


let j=0;

do{j++;}while(personalMovieDB.API.d[j].q!='feature'&&j<7)
if(j==7&&personalMovieDB.API.d[j].q!='feature'){alert('Can\'t find any films with this name');return}




var node = document.createElement("div");
node.setAttribute('id',`${lastFilm.replace(/ /g, "")}`)
node.setAttribute('class',`d-flex m-auto flex-row w-75 my-1`)
//var textnode = document.createTextNode(`${personalMovieDB.count.length}     ${lastFilm}:${lastRating}      actors:${personalMovieDB.API.d[0].s}     rank:${personalMovieDB.API.d[0].rank}`);
//node.appendChild(node);
document.getElementById("films").appendChild(node);








if(personalMovieDB.API.d[j].i!=undefined){
node.insertAdjacentHTML('beforeend', `<div class="w-25" id="count"><img id='count' src='${personalMovieDB.API.d[j].i.imageUrl}' height = '100px'></img></div>`);
}else{node.insertAdjacentHTML('beforeend', `<div class="w-25" id="count"><img id='count' src='https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png' height = '100px'></img></div>`);}

node.insertAdjacentHTML('beforeend', `<div class="w-25" id='filmName'>${personalMovieDB.API.d[j].l}</div>`);


node.insertAdjacentHTML('beforeend', `<div class="w-25" id='persRating'>My rating:${lastRating}</div>`);

node.insertAdjacentHTML('beforeend', `<div class="w-25" id='actors'>Actors:${personalMovieDB.API.d[j].s} </div>`);

node.insertAdjacentHTML('beforeend', `<input type="button" value="Del" class="btn btn-danger btn-sm" id="${lastFilm.replace(/ /g, "")}"   onlick="deleteFilm(this.id)" onmousedown="deleteFilm(this.id)" >`);


saveToLocal()




}).catch(err => {
	console.error(err);
}));



}







function deleteFilm(e){
	console.log(e)
	var removeElem = document.getElementById(e);
	removeElem.remove();

	saveToLocal()
}





function saveToLocal(){
	let films = document.getElementById('films').innerHTML;
	localStorage.setItem('filmsList', films);
}

function loadFilmsList(){

	var saved = localStorage.getItem('filmsList');
	if (saved!="undefined") {
		document.getElementById('films').innerHTML = saved;
	}
}

*/