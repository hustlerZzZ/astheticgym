const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

//Alternate way
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

function gotowhatsapp(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;

    var url = "https://wa.me/91817862706?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Message:" + message;

    window.open(url, '_blank').focus();
}

function gotowhatsapp_1(e) {
    e.preventDefault();

    let name_1 = document.getElementById("name-1").value;
    let phone_1 = document.getElementById("mobile-1").value;
    let message_1 = document.getElementById("message-1").value;

    var url = "https://wa.me/91817862706?text="
        + "Name: " + name_1 + "%0a"
        + "Phone: " + phone_1 + "%0a"
        + "Message:" + message_1;

    window.open(url, '_blank').focus();
}