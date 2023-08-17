document.addEventListener("DOMContentLoaded", function() {
  const socket = io('http://localhost:4000'); // connect to the server
  const messageContainer = document.querySelector('.message-container');
  const messageInput = document.querySelector('input[type="text"]');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    messageInput.value = '';
    socket.emit('chat message', message);
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    messageDiv.textContent = message;
    messageContainer.appendChild(messageDiv);
  });

  socket.on('chat message', function(msg){
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'received');
    messageDiv.textContent = msg;
    messageContainer.appendChild(messageDiv);
  });
});
