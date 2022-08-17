function encrypt() {
  let decryptedMessage = document.getElementById('encrypt-text').value;
  if (decryptedMessage.length > 0) {
    document.querySelector('.not-find').style.display = 'none';
    document.querySelector('.encrypted-box').style.display = 'flex';
  } else {
    document.querySelector('.not-find').style.display = 'block';
    document.querySelector('.encrypted-box').style.display = 'none';
  }

  let encryptMessage = decryptedMessage
    .replace(/e/gim, 'enter')
    .replace(/i/gim, 'imes')
    .replace(/a/gim, 'ai')
    .replace(/o/gim, 'ober')
    .replace(/u/gim, 'ufat');

  document.querySelector('.encrypted-text').innerHTML = encryptMessage;
}

function copy() {
  let encryptedMessage = document.querySelector('.encrypted-text').value;
  navigator.clipboard.writeText(encryptedMessage);
}

function decrypt() {
  let encryptedMessage = document.getElementById('encrypt-text').value;
  if (encryptedMessage.length > 0) {
    document.querySelector('.not-find').style.display = 'none';
    document.querySelector('.encrypted-box').style.display = 'flex';
  } else {
    document.querySelector('.not-find').style.display = 'block';
    document.querySelector('.encrypted-box').style.display = 'none';
  }

  let decryptedMessage = encryptedMessage
    .replace(/enter/gim, 'e')
    .replace(/imes/gim, 'i')
    .replace(/ai/gim, 'a')
    .replace(/ober/gim, 'o')
    .replace(/ufat/gim, 'u');

  document.querySelector('.encrypted-text').innerHTML = decryptedMessage;
}
