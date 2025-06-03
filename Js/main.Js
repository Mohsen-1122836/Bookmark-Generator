var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var btnActivate = document.getElementById('btnAct');
var newElement = [];
var userData = document.getElementById('userData');
var i;
var closeBtn = document.getElementById('closeBtn');
var submit = document.getElementById('submit')
var webSiteRegex = /^[a-zA-z][a-zA-z0-9]{2,15}$/;
var urlRegex =
    /^((https:\/\/)?(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;

if (localStorage.getItem('storage') != null) {
    newElement = JSON.parse(localStorage.getItem('storage'));
    disElemnt(newElement);
} else {
    newElement = [];
}

function addItem() {
   if (siteName.value === '' || siteUrl.value === '') {
    closeBtn.classList.remove('d-none')
   } else {
  var item = {
            name: siteName.value,
            url: siteUrl.value
        }
        newElement.push(item);
        disElemnt();
        localStorage.setItem('storage', JSON.stringify(newElement));
        clearForm();
   }
      
    }




function display(){
if (siteName.classList.contains('is-invalid') || siteUrl.classList.contains('is-invalid') ) {
        disappear();
    } 
    else {
        addItem();
    }
}


function clearForm() {
    siteName.value = null;
    siteUrl.value = null;
}

function disElemnt() {
   
   
cartoona = '';
    for (var i = 0; i < newElement.length; i++) {
        cartoona += `<tr>
        <td>${i + 1}</td>
        <td>${newElement[i].name}</td>
        <td>
            <a href="${newElement[i].url}" class="btn btn-success border-0" target="_blank">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit
            </a>
        </td>
        <td>
            <button onclick="deleteUrl(${i})" class="btn btn-danger">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </td>
    </tr>`;
    }
    userData.innerHTML = cartoona;
    
    
}


function deleteUrl(i) {
    newElement.splice(i, 1);
    disElemnt();
    localStorage.setItem('storage', JSON.stringify(newElement));
}

function validateFormName() {
    if (webSiteRegex.test(siteName.value)) {
        siteName.classList.add('is-valid')
        siteName.classList.remove('is-invalid')


    } else {
        siteName.classList.add('is-invalid')
        siteName.classList.remove('is-valid')
    }
}

function validateFormUrl() {
    if (urlRegex.test(siteUrl.value)) {
        siteUrl.classList.add('is-valid')
        siteUrl.classList.remove('is-invalid')
        


    } else {
        siteUrl.classList.add('is-invalid')
        siteUrl.classList.remove('is-valid')
    }
}



function disappear() {
  
    closeBtn.classList.remove('d-none')

}

function closeAlert(){
    closeBtn.classList.add('d-none')    
}