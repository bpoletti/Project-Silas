const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main_popup');

function allFilled() {
	
	filled = true;
	if((document.getElementById("name").value != "") 
	&& (document.getElementById("email").value != "") 
	&& (document.getElementById("phone").value != "")) {
		filled = false;
		document.getElementById("submit").disabled = false;
	} else if((document.getElementById("name").value == "") 
	&& (document.getElementById("email").value == "") 
	&& (document.getElementById("phone").value == "")) {
		filled = true;
		document.getElementById("submit").disabled = true;
	}
	return filled;
	
}

function openForm() {
    popup.style.display = 'flex';
    main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
  }
  
  function closeForm() {
    main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
  }

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});