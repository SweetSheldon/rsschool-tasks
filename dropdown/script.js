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
		
		let forms = `<div class="forms d-flex justify-content-between m-auto" id="dropdownForms">
        <input type="button" class="btn btn-info btn-sm me-auto" id="showCurrent" value="Display current">
        <input type="text" class="form-control" placeholder="Element name" id="addElementField">
        <input type="button" class="btn btn-primary" btn-sm value="Add elem" id="addElementButton">
    	</div>`
		let general = document.getElementById(this.node)
		
		general.innerHTML = `<div id="dropdown-wrapper" class="w-50 m-auto">${forms}<div id="dropdown" class="dropdown-main m-auto dropdown"><div id="selected" class="dropdown">Choose country</div></div></div>`
	//	general.insertAdjacentHTML('afterbegin', `<div id="dropdown-wrapper" class="w-50">${forms}<div id="dropdown" class="dropdown-main m-auto dropdown"><div id="selected" class="dropdown">Choose country</div></div></div>`);

		document.getElementById("dropdown").onclick = () => this.event()

		document.getElementById("showCurrent").onclick =()=>this.showCurrent()
		
		document.getElementById("addElementButton").onclick=()=>this.addElem(document.getElementById("addElementField").value)
		

		for(var key in this.list) {
			
			this.addElem(this.list[key],key)
			
		}
		

		
		
	}

	open(){
		this.elements.forEach((elem)=>elem.style.display="grid")
		this.isOpened=true
	}

	close(){
		this.elements.forEach((elem)=>elem.style.display="none")
		this.isOpened=false
	}

	event(){
		this.isOpened ? this.close():this.open()
	}

	changeGeneral(key){

		let change = document.getElementById(key)
		//console.log(change)
		document.getElementById('selected').innerHTML=change.innerHTML
		change.setAttribute('class',`${change.className} d-none`)
		
		if(this.current!=null){
		document.getElementById(this.current).setAttribute('class',`${change.className}`.replace(' d-none','')) }
		this.current=key
	}


	showCurrent(){
		alert(document.getElementById("selected").innerHTML=="Choose country"?"Please, choose a county":document.getElementById("selected").innerHTML)
	}

	addElem(elem, key=elem){
		if(document.getElementById(key)!=null){alert("That element already exists");return}
		let node = document.getElementById("dropdown");
		node.insertAdjacentHTML('beforeend', `<div id="${key}" ${this.isOpened?`style="display: grid;"`:""} class="dropdown choises m-auto">${elem}</div>`);
		//console.log(key);
		let current = document.getElementById(key)
		current.onclick=()=>(this.changeGeneral(current.id))
		this.update()
	}


	update(){
		this.elements = document.querySelectorAll('.choises')
	}
	
}









class dropdownForm{
	constructor(node='dropdown-creating'){
		this.node = node
		this.items=[]
		this.general
		this.count=1
		this.obj ={}
	}
	createDropp(){
		
	}
	init(){
		this.general = document.getElementById(this.node);
		this.general.innerHTML = `<div id="forms"></div>
		<div id="formButtons" class="d-flex flex-row justify-content-end">
		<input type="button" class="btn btn-info btn-xs" id="addForm" value="+">
		<input type="button" class="btn btn-primary btn-xs" id="initForm" value="Init form"></div>`;
		this.addForm()
		document.getElementById("addForm").onclick=()=>this.addForm();	
		document.getElementById("initForm").onclick=()=>this.createDrop();	
	}
	 
	addForm(){
		document.getElementById("forms").insertAdjacentHTML('beforeend', `<input class="form-control" id="form-control-${this.count++}" type="text" placeholder="Default input">`);

		
		/* document.querySelectorAll(".form-control").forEach((elem)=>elem.addEventListener('keyup', function(event) {
			this.updateForm()})
			) */
	}

	/* updateForm(e){
		document.querySelectorAll(".form-control").forEach((elem)=>{
		this.items.push(elem.value)})
		//console.log(this.items)
	} */

	createDrop(){
		
		
		document.querySelectorAll(".form-control").forEach((elem)=>{this.obj[elem.value]=elem.value})
		
		  console.log(this.obj)

		let elemm = new dropdown(this.obj)
		elemm.createDropdown()

	}

}






let form
function createForm(){
	form = new dropdownForm();
	form.init()
}


document.getElementById("createDropdown").onclick=()=>createForm();






let citiesList={
	'msk':'Moskow',
	'spb':'Saint-Petersburg',
	'mnsk':'Minsk',
	'lndn':'London',
	'mg':"Marjina Gorka",
	'nyс':"New York"
}
