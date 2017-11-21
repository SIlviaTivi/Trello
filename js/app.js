var addList = document.getElementById('ListOff');
var secc = document.getElementById('secc');
var container = document.getElementById('container');

function showTable(){

  container.removeChild(addList);
  var divTable = document.createElement('div');
    container.appendChild(divTable);
    divTable.classList.add('tableList');
  var inputTable= document.createElement('input');
    divTable.appendChild(inputTable);
    inputTable.classList.add('tableInput');
    inputTable.getAtribute
  var btnTable= document.createElement('button');
    divTable.appendChild(btnTable);
    btnTable.classList.add('btnSave');
    btnTable.textContent='Guardar';
  var spanTable= document.createElement('span');
    divTable.appendChild(spanTable);
    var iTable = document.createElement('i');
    spanTable.appendChild(iTable);
    spanTable.classList.add('fa');
    spanTable.classList.add('fa-times');

    function grey(){

      if(inputTable.value){
        inputTable.classList.add('offTableInput');
      }
    }

    btnTable.addEventListener('click', grey)

    function clickSave(){

      var divTable = document.createElement('div');
        container.appendChild(divTable);
        divTable.classList.add('tableList');
      var inputTable= document.createElement('input');
        divTable.appendChild(inputTable);
        inputTable.classList.add('tableInput');
      var btnTable= document.createElement('button');
        divTable.appendChild(btnTable);
        btnTable.classList.add('btnSave');
        btnTable.textContent='Guardar';
      var spanTable= document.createElement('span');
        divTable.appendChild(spanTable);
        var iTable = document.createElement('i');
        spanTable.appendChild(iTable);
        spanTable.classList.add('fa');
        spanTable.classList.add('fa-times');


        btnTable.addEventListener('click', clickSave)
    }

    btnTable.addEventListener('click', clickSave)



}
addList.addEventListener('click', showTable)
