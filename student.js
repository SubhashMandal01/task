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

div.appendChild(form)

//label And input1
var label=document.createElement('label');
label.textContent="Name:"
form.appendChild(label);
var br=document.createElement('br');
form.appendChild(br);
let saveindex=document.createElement('input')
saveindex.type="hidden"
saveindex.id='saveindex'
form.appendChild(saveindex);

var input1=document.createElement('input');
input1.type='text';
input1.autocomplete="off"
input1.name='fname';
input1.id='fullName';
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
input3.type='number';
input3.name='roll';
input3.id='roll_number';
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
let button=document.createElement('button')
button.className='btn1'
button.id='btn';
button.textContent="Submit";
form.appendChild(button);

// let button1=document.createElement('button')
// button1.className='button1'
// button1.id='button1';
// button1.textContent="Save";
// form.appendChild(button1);

let button121=document.createElement('button')
button121.className='button1'
button121.id='button1';
button121.textContent="Clear";
form.appendChild(button121);
// Creation of Show and delete table
var div2=document.createElement('div')
div2.id="contain_div";
document.body.appendChild(div2)
var sec2=document.createElement('section')
sec2.id="main_sec"
div2.appendChild(sec2)
var tb=document.createElement('table')
sec2.appendChild(tb)
tb.id="list"
tb.className="list"
var thead= document.createElement('thead')
tb.appendChild(thead)
thead.id="tableHead"
var trow= document.createElement('tr')
trow.id="tableRow"
thead.appendChild(trow)
let th2=document.createElement('th')
th2.id="theading1"
th2.textContent="Name"
trow.appendChild(th2)
let th3=document.createElement('th')
th3.id="theading2"
th3.textContent="Roll Number"
trow.appendChild(th3)

let th4=document.createElement('th')
th4.id="theading3"
th4.textContent="Mobile Number"
trow.appendChild(th4)

let th5=document.createElement('th')
th5.id="theading4"
trow.appendChild(th5)

var tbody=document.createElement('tbody')
tbody.id="tabody"
tb.appendChild(tbody)

/*performing task on localstorage(display the data and edit, delete the data)
when click save button the data will be save on localstorage as well display on browser*/
button.setAttribute("onClick", "SaveData");
 document.addEventListener("DOMContentLoaded", () => 
 	{
      document.getElementById("btn").addEventListener("click", SaveData);
  }) ;

 let stdArray = [];
 var selectedindex= -1;
 
    const SaveData = (e) => 
    {
      e.preventDefault();
      let stdObj = {
          fullName: document.getElementById("fullName").value,
          roll_number: document.getElementById("roll_number").value,
          mobile: document.getElementById("mobile").value,
         };
         if(selectedindex === -1)
         {

           stdArray.push(stdObj); 
         }
         else{
           stdArray.splice(selectedindex, 1, stdObj);
         }
         localStorage.StudentJson = JSON.stringify(stdArray);
       show();
       clear();
}

// when refreshing the browser the data wont be cleared with the help of this function.
function show(){
  var tabody=document.getElementById('tabody').textContent="";
  if(localStorage.StudentJson)
  {
    stdArray=JSON.parse(localStorage.StudentJson);
    for(var i = 0; i < stdArray.length; i++)
    {
       // console.log(i,stdArray[i].fullName,stdArray[i].roll_number,stdArray[i].mobile)
      insertNewRecord(i,stdArray[i].fullName,stdArray[i].roll_number,stdArray[i].mobile);

    }
  }
}
// .........................................

//this function comes up from the save button to display the data on browser. 
function insertNewRecord(index,fullName,roll_number,mobile)
{
   
    var table = document.getElementById("tabody");
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
   
    cell1.textContent = fullName;
    cell2.textContent = roll_number;
    cell3.textContent = mobile;
    let btn11=document.createElement('button');
    btn11.id=`editpro(${index})`
    btn11.textContent='Edit'
    btn11.setAttribute("onClick",`javascript:edit(${index})`)
    btn11.style.backgroundColor="#03fc3d"
    btn11.style.borderRadius='5px'
    btn11.style.color="#040505"
    cell5.appendChild(btn11);
   
    let btn112=document.createElement('button');
    btn112.id=`dlt(${index})`
    btn112.textContent='Delete'
    btn112.style.backgroundColor="#f20000"
    btn112.style.borderRadius='5px'
    btn112.style.color="#040505"
    btn112.setAttribute("onClick",`javascript:Delete(${index})`)
    cell5.appendChild(btn112); 
} 
// .....................................................

/* when we click on edit button the data will be display on the form and after clicking
on save button the data will be save on the same row and also update on localstorage */
function edit(index) 
{
  var stdObj=stdArray[index];
selectedindex=index;
    document.getElementById("fullName").value = stdObj.fullName;
    document.getElementById("roll_number").value = stdObj.roll_number;
    document.getElementById("mobile").value = stdObj.mobile;
  document.getElementById('btn').textContent="save";
  
}
// ...............................

//this function will delete the data from the localstorage and also from the browser
function Delete(index)
{
   
    if (confirm('Do you want to delete this record?')) 
    {
      stdArray.splice(index, 1);
      localStorage.StudentJson= JSON.stringify(stdArray);
       
         show();
      
     
      }

      
}
// ...............................................

// clear function will clear the inputs which is giving in the form
function clear()
{
  selectedindex= -1;
  document.getElementById("fullName").value="";
  document.getElementById("roll_number").value="";
  document.getElementById("mobile").value ="";
  document.getElementById('btn').textContent="Submit";

}
// .............................................

// design for student form
var body=document.querySelector('body');
body.style.backgroundImage="url('back.png')";
body.style.backgroundSize="cover"

var h= document.querySelector('h1')
h.style.color="#fff";
form.style.color="#fff";
form.style.width="20%"
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

let button11=document.getElementById('button1')
button11.style.color="#fff"
button11.style.fontSize="15px"
button11.style.border="1px solid rgba(255,255,255,0.3)"
button11.style.borderRadius="5px"
button11.style.margin="5px 0 10px"
button11.style.backgroundColor="#3B5999"

var trow=document.getElementById('list')
trow.style.backgroundColor="#3B5999"
trow.style.color="#ffffff"
trow.style.minWidth="500px"
trow.style.padding="8px"
trow.style.border="1px solid white"
trow.style.fontFamily="Lucida Console"
var tab=document.getElementById("tableRow");
tab.style.color="#03fcdf";
tab.style.fontSize="15px"
tab.style.fontFamily="Verdana"
button121.style.color="#fff"
button121.style.fontSize="15px"
button121.style.border="1px solid rgba(255,255,255,0.3)"
button121.style.borderRadius="5px"
button121.style.margin="5px 0 10px"
button121.style.backgroundColor="#3B5999"

