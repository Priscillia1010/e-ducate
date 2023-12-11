function addInput() {
    // Mengambil teks dari input pengguna
    var userInput = document.querySelector('.inputContent').value;
  
    // Membuat elemen untuk pesan baru
    var newMessage = document.createElement('div');
    newMessage.classList.add('chat-message');
  
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.textContent = userInput;
  
    newMessage.appendChild(messageContainer);
  
    // Menambahkan pesan ke dalam kotak chat
    var chatBox = document.querySelector('.chat-box');
    chatBox.appendChild(newMessage);
  
    // Membersihkan input setelah mengirim pesan
    document.querySelector('.inputContent').value = '';
  }
  