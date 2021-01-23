"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dropdown =
/*#__PURE__*/
function () {
  function dropdown(list) {
    var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'container';

    _classCallCheck(this, dropdown);

    this.node = node;
    this.list = Object.assign(list);
    this.isOpened = false;
    this.elements;
    this.current;
  }

  _createClass(dropdown, [{
    key: "createDropdown",
    value: function createDropdown() {
      var _this = this;

      // debugger
      var forms = "<div class=\"forms d-flex justify-content-between m-auto\" id=\"dropdownForms\">\n        <input type=\"button\" class=\"btn btn-info btn-sm me-auto\" id=\"showCurrent\" value=\"Display current\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Element name\" id=\"addElementField\">\n        <input type=\"button\" class=\"btn btn-primary\" btn-sm value=\"Add elem\" id=\"addElementButton\">\n    \t</div>";
      var general = document.getElementById(this.node);
      general.innerHTML = "<div id=\"dropdown-wrapper\" class=\"w-50 m-auto\">".concat(forms, "<div id=\"dropdown\" class=\"dropdown-main m-auto dropdown\"><div id=\"selected\" class=\"dropdown\">Choose country</div></div></div>"); //	general.insertAdjacentHTML('afterbegin', `<div id="dropdown-wrapper" class="w-50">${forms}<div id="dropdown" class="dropdown-main m-auto dropdown"><div id="selected" class="dropdown">Choose country</div></div></div>`);

      document.getElementById("dropdown").onclick = function () {
        return _this.event();
      };

      document.getElementById("showCurrent").onclick = function () {
        return _this.showCurrent();
      };

      document.getElementById("addElementButton").onclick = function () {
        return _this.addElem(document.getElementById("addElementField").value);
      };

      for (var key in this.list) {
        this.addElem(this.list[key], key);
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.elements.forEach(function (elem) {
        return elem.style.display = "grid";
      });
      this.isOpened = true;
    }
  }, {
    key: "close",
    value: function close() {
      this.elements.forEach(function (elem) {
        return elem.style.display = "none";
      });
      this.isOpened = false;
    }
  }, {
    key: "event",
    value: function event() {
      this.isOpened ? this.close() : this.open();
    }
  }, {
    key: "changeGeneral",
    value: function changeGeneral(key) {
      var change = document.getElementById(key); //console.log(change)

      document.getElementById('selected').innerHTML = change.innerHTML;
      change.setAttribute('class', "".concat(change.className, " d-none"));

      if (this.current != null) {
        document.getElementById(this.current).setAttribute('class', "".concat(change.className).replace(' d-none', ''));
      }

      this.current = key;
    }
  }, {
    key: "showCurrent",
    value: function showCurrent() {
      alert(document.getElementById("selected").innerHTML == "Choose country" ? "Please, choose a county" : document.getElementById("selected").innerHTML);
    }
  }, {
    key: "addElem",
    value: function addElem(elem) {
      var _this2 = this;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : elem;

      if (document.getElementById(key) != null) {
        alert("That element already exists");
        return;
      }

      var node = document.getElementById("dropdown");
      node.insertAdjacentHTML('beforeend', "<div id=\"".concat(key, "\" ").concat(this.isOpened ? "style=\"display: grid;\"" : "", " class=\"dropdown choises m-auto\">").concat(elem, "</div>")); //console.log(key);

      var current = document.getElementById(key);

      current.onclick = function () {
        return _this2.changeGeneral(current.id);
      };

      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.elements = document.querySelectorAll('.choises');
    }
  }]);

  return dropdown;
}();

var dropdownForm =
/*#__PURE__*/
function () {
  function dropdownForm() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dropdown-creating';

    _classCallCheck(this, dropdownForm);

    this.node = node;
    this.items = [];
    this.general;
    this.count = 1;
    this.obj = {};
  }

  _createClass(dropdownForm, [{
    key: "createDropp",
    value: function createDropp() {}
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.general = document.getElementById(this.node);
      this.general.innerHTML = "<div id=\"forms\"></div>\n\t\t<div id=\"formButtons\" class=\"d-flex flex-row justify-content-end\">\n\t\t<input type=\"button\" class=\"btn btn-info btn-xs\" id=\"addForm\" value=\"+\">\n\t\t<input type=\"button\" class=\"btn btn-primary btn-xs\" id=\"initForm\" value=\"Init form\"></div>";
      this.addForm();

      document.getElementById("addForm").onclick = function () {
        return _this3.addForm();
      };

      document.getElementById("initForm").onclick = function () {
        return _this3.createDrop();
      };
    }
  }, {
    key: "addForm",
    value: function addForm() {
      document.getElementById("forms").insertAdjacentHTML('beforeend', "<input class=\"form-control\" id=\"form-control-".concat(this.count++, "\" type=\"text\" placeholder=\"Default input\">"));
      /* document.querySelectorAll(".form-control").forEach((elem)=>elem.addEventListener('keyup', function(event) {
      	this.updateForm()})
      	) */
    }
    /* updateForm(e){
    	document.querySelectorAll(".form-control").forEach((elem)=>{
    	this.items.push(elem.value)})
    	//console.log(this.items)
    } */

  }, {
    key: "createDrop",
    value: function createDrop() {
      var _this4 = this;

      document.querySelectorAll(".form-control").forEach(function (elem) {
        _this4.obj[elem.value] = elem.value;
      });
      console.log(this.obj);
      var elemm = new dropdown(this.obj);
      elemm.createDropdown();
    }
  }]);

  return dropdownForm;
}();

var form;

function createForm() {
  form = new dropdownForm();
  form.init();
}

document.getElementById("createDropdown").onclick = function () {
  return createForm();
};

var citiesList = {
  'msk': 'Moskow',
  'spb': 'Saint-Petersburg',
  'mnsk': 'Minsk',
  'lndn': 'London',
  'mg': "Marjina Gorka",
  'nyс': "New York"
};