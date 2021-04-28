const ham = document.getElementById('ham');
const menu_wrapper = document.getElementById('menu_wrapper');
ham.addEventListener('click', function() {
	ham.classList.toggle('clicked');
	menu_wrapper.classList.toggle('clicked');
});

const ham_v = document.getElementById('ham_v');
const menu_wrapper_v = document.getElementById('menu_wrapper_v');
const ham_v_text = document.getElementById('ham_v_text');
ham_v.addEventListener('click', function() {
	ham_v.classList.toggle('clicked');
	menu_wrapper_v.classList.toggle('clicked');
	ham_v_text.classList.toggle('clicked');
});
