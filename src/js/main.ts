import '../css/style.css';
import { createRegistrationModal } from '../templates/components/modals/registration_modal';

const url = 'http://localhost:9000/';

if (window.location.href === url) {
	console.log('home')
} else {
	console.log('another page')
}

const regBtn = document.querySelector('#registration-btn');

regBtn.addEventListener('click', () => {
	createRegistrationModal();
})



