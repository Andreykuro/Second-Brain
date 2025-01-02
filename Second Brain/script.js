let subjects = [];
let currentSubject = '';

function addSubject() {
    const subjectInput = document.getElementById('subjectInput');
    const subject = subjectInput.value.trim();
    if (subject && !subjects.includes(subject)) {
        subjects.push(subject);
        subjectInput.value = '';
        updateSubjectList();
    }
}

function updateSubjectList() {
    const subjectList = document.getElementById('subjectList');
    subjectList.innerHTML = '';
    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.textContent = subject;
        li.onclick = () => selectSubject(subject);
        subjectList.appendChild(li);
    });
}

function selectSubject(subject) {
    currentSubject = subject;
    document.getElementById('currentSubject').textContent = currentSubject;
    document.getElementById('todoList').innerHTML = ''; // Clear the To-Do list when a subject is selected
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todo = todoInput.value.trim();
    if (todo) {
        const li = document.createElement('li');
        li.textContent = todo;
        document.getElementById('todoList').appendChild(li);
        todoInput.value = '';
    }
}

function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const note = noteInput.value.trim();
    if (note) {
        const notesDisplay = document.getElementById('notesDisplay');
        const noteDiv = document.createElement('div');
        noteDiv.textContent = note;
        notesDisplay.appendChild(noteDiv);
        noteInput.value = '';
    }
}

function appendToCalc(value) {
    const calcInput = document.getElementById('calcInput');
    calcInput.value += value;
}

function calculateResult() {
    const calcInput = document.getElementById('calcInput');
    try {
        calcInput.value = eval(calcInput.value) || 0; // Evaluate the expression
    } catch (e) {
        calcInput.value = 'Error';
    }
}

function clearCalc() {
    document.getElementById('calcInput').value = '';
}