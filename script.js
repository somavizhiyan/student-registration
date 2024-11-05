let username = document.getElementById('username');
let email = document.getElementById('email');
let classs = document.getElementById('class');
let dob = document.getElementById('dob');
let tbody = document.getElementById('tbody');

function submitfun(e) {
    e.preventDefault()

    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let classs = document.getElementById('class').value.trim();
    let dob = document.getElementById('dob').value;

    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (classs === "") {
        alert("Please enter your class.");
        return;
    }

    if (dob === "") {
        alert("Please enter your date of birth.");
        return;
    }

    addStudentToTable(username, email, classs, dob);

}
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// let td4 = document.createElement('td');
// let td5 = document.createElement('td');
// let td6 = document.createElement('td');


// td1.innerHTML = `${username.value}`;
// td2.innerHTML = `${email.value}`;
// td3.innerHTML = `${classs.value}`;
// td4.innerHTML = `${dob.value}`;
// td5.innerHTML = `<button>Edit</button>`;
// td6.innerHTML = `<button>delete</button>`;

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// tr.appendChild(td4);
// tr.appendChild(td5);
// tr.appendChild(td6);
// tbody.appendChild(tr)

function addStudentToTable(username, email, classs, dob) {
    let tr = document.createElement('tr')
    tr.innerHTML = `<tr>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${classs}</td>
                    <td>${dob}</td>
                    <td><button onclick="edit(event)">Edit</button></td>
                    <td><button onclick="deletee(event)">Delete</button></td>
                </tr>`

    tbody.appendChild(tr)

     document.getElementById('username').value = ''
     document.getElementById('email').value = ''
     document.getElementById('class').value = ''
     document.getElementById('dob').value = ''
}

function edit(event) {

    const row = event.target.closest('tr')
    const cells = row.getElementsByTagName('td');

    username.value = cells[0].innerText;
    email.value = cells[1].innerText;
    classs.value = cells[2].innerText;
    dob.value = cells[3].innerText;

    row.remove();
}

function deletee(event) {
    const row = event.target.closest('tr')
    row.remove()
}