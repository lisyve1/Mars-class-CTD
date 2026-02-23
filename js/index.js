//to show/hide a message form//
function toggleMessageSection() {
    const messageSection = document.getElementById('messages');
    const messagesList = messageSection.querySelector('ul');
    if (messagesList.children.length == 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}

// click leave message submit button//
const messageForm = document.querySelector("form[name='leave_message']");

//add event listener to the form submit event//
if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        console.log("event ===> ", event);
        //prevent the default form submission behavior//
        event.preventDefault();

        // retrive the values from the form fields
        // fixing this errors
        const userName = event.target[0].value;
        console.log("userName ===> ", userName);
        console.log("helloooooooooo!!!!");
        console.log("event ===> ", event);
        // const userEmail = event.target.userEmail.value;
        const userEmail = event.target[1].value;

        const userMessage = event.target[2].value;

        /// select the messages section//
        const messagesSection = document.getElementById('messages');

        /// select the ul element in the messages section//
        const messagesList = messagesSection.querySelector('ul');

        /// create a new li element to hold the message//
        const newMessage = document.createElement('li');

        //set the inner text of the HTML//
        newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: <span>${userMessage}</span>`;

        // create edit button//
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.className = 'edit-button';
        editButton.type = 'button';

        // create remove button//
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.type = 'button';

        // event listener for remove button//
        removeButton.addEventListener('click', function () {
            // find the li//
            const entry = removeButton.parentNode;
            //remove li//
            entry.remove();
            //toggle if there are not more messages//
            toggleMessageSection();
        });

        // add click event listener to the edit button//
        editButton.addEventListener('click', function () {
            const entry = editButton.parentNode;
            const messageText = entry.querySelector('span');
            const newText = prompt('Edit your message:', messageText.innerText);
            if (newText !== null) {
                messageText.innerText = newText;
            }
        });

        //append the edit button to the message item//
        newMessage.appendChild(editButton);

        //append the remove button to the message item//
        newMessage.appendChild(removeButton);

        //append the message item to the messages list//
        messagesList.appendChild(newMessage);

        // toggle the message section visibility//
        toggleMessageSection();

        /// after submit clear the form fields//
        messageForm.reset();
    });
} else {
    console.error("Form not found. Check the form name attribute!");
}
