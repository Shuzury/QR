function generateQRCode() {
    var text = document.getElementById('text').value;
    if (text) {
        var qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = '';
        new QRCode(qrcodeContainer, text);
    } else {
        alert('Please enter text');
    }
}

const button = document.querySelector('.hover-button');
        button.addEventListener('mouseenter', () => {
            document.body.style.backgroundColor = '#f0e68c'; // change to your desired color
        });

        button.addEventListener('mouseleave', () => {
            document.body.style.backgroundColor = 'white'; // change back to original color
        });