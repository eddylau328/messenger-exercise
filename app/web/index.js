/*
  UI update functions
*/
function createMessageBox(data) {
  const messageBox = `
  <div class="card">
    <div class="card-body">
      <h6 class="card-title">${data.sender}</h6>
      <p class="card-text">${data.message}</p>
      <p class="card-text">
        <small class="text-body-secondary">${data.createdAt}</small>
      </p>
    </div>
  </div>
  `;
  const node = document.createElement('div');
  node.innerHTML = messageBox;
  return node;
}

function updateMessageContainer(datum) {
  const node = document.getElementById('messageContainer');
  const layout = document.getElementById('messageLayout');
  // clear all messages
  node.innerHTML = '';
  datum.forEach((data) => {
    node.appendChild(createMessageBox(data));
  })
  layout.scrollTo(0, node.scrollHeight);
}

/*
 * API related functions
 */
function getMessage() {
  fetch("/message", {
    method: "get",
  })
    .then((resp) => {
      if (resp.status === 200) {
        return Promise.resolve(resp.json());
      }
      return Promise.reject();
    })
    .then((datum) => {
      updateMessageContainer(datum);
      return Promise.resolve();
    })
    .catch((err) => {
      alert("Server is not ready");
    });
}

function sendMessage(senderName, message) {
  const data = JSON.stringify({
    sender: senderName,
    message: message,
  });
  // call API
  fetch("/message", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  })
    .then((resp) => {
      if (resp.status === 201) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    })
    .then(() => {
      getMessage();
      return Promise.resolve();
    })
    .catch((err) => {
      alert("Server is not ready");
    });
}

// when user click send button
function onClickSend(e) {
  e.preventDefault();
  const senderInputElement = document.getElementById("senderNameInput");
  const messageInputElement = document.getElementById("messageInput");
  const senderName = senderInputElement.value;
  const message = messageInputElement.value;

  if (!senderName) {
    alert("Sender name cannot empty");
    return;
  }
  if (!message) {
    alert("Message cannot empty");
    return;
  }
  sendMessage(senderName, message);
}

function setup() {
  getMessage();
  setInterval(() => {
    getMessage();
  }, 2000);
} 

setup();