function encrypt() {
  let message = document.getElementById('encrypt-text').value;
  if (message.length > 0) {
    document.querySelector('.not-find').style.display = 'none';
    document.querySelector('.encrypted-box').style.display = 'flex';
  } else {
    document.querySelector('.not-find').style.display = 'block';
    document.querySelector('.encrypted-box').style.display = 'none';
  }

  let encryptMessage = message;
  encryptMessage = encryptMessage
    .replace(/e/gim, 'enter')
    .replace(/i/gim, 'imes')
    .replace(/a/gim, 'ai')
    .replace(/o/gim, 'ober')
    .replace(/u/gim, 'ufat');

  document.querySelector('.encrypted-text').innerHTML = encryptMessage;
}
