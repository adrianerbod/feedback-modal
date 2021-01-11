let userExperience;
let replyToUser;
const expRadio = document.querySelectorAll('#exp');
const replyRadio = document.querySelectorAll('#reply');

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let userSugestion = document.getElementById('sugest').value;

    for (let i = 0; i <expRadio.length; i++) {
        if (expRadio[i].checked) {
            userExperience = expRadio[i].value;
        }
    }

    for (let i = 0; i <replyRadio.length; i++) {
        if (replyRadio[i].checked) {
            replyToUser = replyRadio[i].value;
        }
    }

    let data = {
        experience: userExperience,
        sugestion: userSugestion,
        reply: replyToUser
    }

    console.log(data);
});

function alertShow() {
    alert('This button is just for show');
};

