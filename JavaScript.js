// Použijeme knihovnu pro generování QR kódů (např. qr-code-styling)
// Předpokládáme, že knihovna je stažena a dostupná na adrese qrcode.js

// URL adresu naší svatební stránky
var weddingURL = window.location.href;

// Vytvoření QR kódu
var qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  margin: 20,
  colorDark: "#000000",
  colorLight: "#ffffff",
  image: "logo.png", // Volitelně, pokud chcete přidat vlastní logo do QR kódu
  imageURL: "https://example.com/logo.png", // URL adresa vašeho loga
  text: weddingURL,
  imageOptions: {
    crossOrigin: "anonymous"
  }
});

// Zobrazení QR kódu na stránce
qrCode.append(document.getElementById('qr-code'));
