
//let numberOfFilms=0;

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
		"x-rapidapi-key": "fd6e552db8mshf731cb78e069e10p1130bajsne4e2df782100",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
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
































/*
node.insertAdjacentHTML('beforeend', `<span id='count'>${personalMovieDB.count.length}</span>`);

node.insertAdjacentHTML('beforeend', `<span id='filmName'>${lastFilm}</span>`);
if(personalMovieDB.API.d[0].i!=undefined){
node.insertAdjacentHTML('beforeend', `<img id='count' src='${personalMovieDB.API.d[0].i.imageUrl}' height = '100px'></img>`);
}

node.insertAdjacentHTML('beforeend', `<span id='persRating'>My rating:${lastRating}</span>`);

node.insertAdjacentHTML('beforeend', `<span id='actors'>Actors:${personalMovieDB.API.d[0].s} </span>`);

node.insertAdjacentHTML('beforeend', `<span id='actors'>Rank:${personalMovieDB.API.d[0].rank} </span>`);
*/
