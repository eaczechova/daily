
var form1 = document.getElementById('form-1');
var form2 = document.getElementById('form-2');

function classToggle(e) {
  e.preventDefault();
  if(form1.className == 'visibility' && form2.className != 'visibility'){
    form1.classList.remove('visibility');
    form2.classList.add('visibility');
  } else if (form1.className != 'visibility' && form2.className == 'visibility'){
  form2.classList.remove('visibility');
  form1.classList.add('visibility');
  }
}

document.querySelector('button').addEventListener('click', classToggle);
