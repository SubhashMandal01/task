let div= document.createElement("div");
div.id="main_div";
let head=document.createElement("h1");
head.id="heading";
head.textContent="Student form";
div.appendChild(head)
document.body.appendChild(div)

// form creation
var form=document.createElement('form');
form.id='formId'


// var table1=document.createElement('table');
// div.appendChild(table1)
// var trr=document.createElement('tr')
// table1.appendChild(trr)
// var tdd= document.createElement('td')
// trr.appendChild(tdd)
// tdd.appendChild(form)


div.appendChild(form)
//label And input1
var label=document.createElement('label');
label.textContent="Name:"
form.appendChild(label);
var br=document.createElement('br');
form.appendChild(br);

var input1=document.createElement('input');
input1.type='text';
input1.autocomplete="off"
input1.name='fname';
input1.id='fname';
form.appendChild(input1);
var br=document.createElement('br');
form.appendChild(br);

//label And input3
var label3=document.createElement('label');
label3.textContent="roll number:"
form.appendChild(label3);
var br=document.createElement('br');
form.appendChild(br);

var input3=document.createElement('input');
input3.type='text';
input3.name='roll';
input3.id='roll';
input3.autocomplete="off"
form.appendChild(input3);
var br=document.createElement('br');
form.appendChild(br);

//label And input4
var label4=document.createElement('label');
label4.textContent="mobile no.:"
form.appendChild(label4);
var br=document.createElement('br');
form.appendChild(br);

var input4=document.createElement('input');
input4.type='number';
input4.name='mobile';
input4.id='mobile';
input4.autocomplete="off"
form.appendChild(input4);
var br=document.createElement('br');
form.appendChild(br);
var br1=document.createElement('br');
form.appendChild(br1);

// creating button
var button=document.createElement('button')
button.className='btn1'
button.id='btn';
button.textContent="Save";
form.appendChild(button);

// Creation of Show and delete table
var div2=document.createElement('div')
div2.id="contain_div";
document.body.appendChild(div2)
var sec2=document.createElement('section')
sec2.id="main_sec"
div2.appendChild(sec2)
var tb=document.createElement('table')
sec2.appendChild(tb)
tb.id="main_table"
tb.className="list"
var thead= document.createElement('thead')
tb.appendChild(thead)
thead.id="tableHead"
var trow= document.createElement('tr')
trow.id="tableRow"
thead.appendChild(trow)
var th=document.createElement('th')
th.id="theading"
th.textContent="Name"
trow.appendChild(th)
var th1=document.createElement('th')
trow.appendChild(th1)
th1.id="theading1"
th1.textContent="Roll Number"
var th2=document.createElement('th')
trow.appendChild(th2)
th2.id="theading2"
th2.textContent="Mobile Number"
var th3=document.createElement('th')
trow.appendChild(th3)
th2.id="theading2"
var tbody=document.createElement('tbody')
tbody.id="tabody"
tb.appendChild(tbody)
// perform task on Show and delete table 

// onclick 
button.setAttribute("onClick", "SaveData")
 document.addEventListener("DOMContentLoaded", () => 
 	{
      document.getElementById("btn").addEventListener("click", SaveData);
  }) ;

 let stdArray = [];
 var selectedRow = null
    const SaveData = (ev) => 
    {
      ev.preventDefault();

        

       var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
    }
        else{
            updateRecord(formData);
    }
        resetForm();


        function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["roll"] = document.getElementById("roll").value;
    formData["mobile"] = document.getElementById("mobile").value;
    
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.querySelector(".list");
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = data.fname;
    cell2.innerHTML = data.roll;
    cell3.innerHTML = data.mobile;
    cell4.innerHTML = "<button id='edite' >Edit</button> <button class='dlt' >Delete</button>";
    // document.getElementsById("edite").addEventListener("click", edit);
    document.addEventListener("DOMContentLoaded", () => 
   {
      document.getElementById("edite").addEventListener("click", edit);
  }) ;
    //     if (confirm('Successfully added')) {
        
    // }
}

//Edit the data
function edit() {
  // console.log("msg....")
  var selectt= document.querySelector(".edite");
  console.log(selectt);
    // selectedRow = td.parentElement.parentElement;
    // document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    // document.getElementById("roll").value = selectedRow.cells[1].innerHTML;
    // document.getElementById("mobile").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.roll;
    selectedRow.cells[2].innerHTML = formData.mobile;
    
}

//Delete the data

// function onDelete() {

//     if (confirm('Do you want to delete this record?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById('tableRow').remove();
//         resetForm();
//     }
// }

function onDelete() {
    if (confirm('Are you sure to delete this record ?')) {
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    }
}


//Reset the data
function resetForm() {
    document.getElementById("fname").value = '';
    document.getElementById("roll").value = '';
    document.getElementById("mobile").value = '';
    
    selectedRow = null;
}



      
    

	  }

// design for student form
var body=document.querySelector('body');
body.style.backgroundImage="url('back.png')";
body.style.backgroundSize="cover"

var h= document.querySelector('h1')
h.style.color="#fff";
form.style.color="#fff";
form.style.width="50%"
form.style.padding="20px 25px"
form.style.border="1px solid rgba(255,255,255,0.3)";
form.style.background="rgba(255,255,255,0.2)"
form.style.borderRadius="15px"
form.style.boxShadow="0 4px 30px rgba(0,0,0,0.1)"
var b= document.querySelector('button')
b.style.color="#fff"
b.style.fontSize="15px"
b.style.border="1px solid rgba(255,255,255,0.3)"
b.style.borderRadius="5px"
b.style.margin="5px 0 10px"
b.style.backgroundColor="#3B5999"

// design for data show and delete
var trow=document.getElementById('main_table')
trow.style.backgroundColor="#3B5999"
trow.style.color="#ffffff"
trow.style.minWidth="500px"
trow.style.padding="5px"


var tab=document.getElementById("tabody");
tab.style.color="black";
tab.style.fontSize="18px"
