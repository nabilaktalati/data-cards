var alanlar = [
  { id: "ad", isim: "Ad" },
  { id: "soyad", isim: "Soyad" },
  { id: "eposta", isim: "E-posta" },
  { id: "telefon", isim: "Telefon" },
  { id: "sehir", isim: "Şehir" },
  { id: "meslek", isim: "Meslek" },
  { id: "yas", isim: "Yaş" },
  { id: "okul", isim: "Okul" },
  { id: "hobiler", isim: "Hobiler" },
  { id: "notlar", isim: "Notlar" }
];

function rastgeleRenk() {
  var r = Math.floor(Math.random() * 100) + 150;
  var g = Math.floor(Math.random() * 100) + 150;
  var b = Math.floor(Math.random() * 100) + 150;
  return "rgb(" + r + "," + g + "," + b + ")";
}

function olustur() {
  var seciliRenk = document.getElementById("renk").value;


  var mevcutKart = document.getElementById("cikti").children.length;
  var yeniIndex = mevcutKart + 1;

  var kart = document.createElement("div");
  kart.className = "kart";


  if (yeniIndex % 2 !== 0) {
    kart.style.backgroundColor = rastgeleRenk();
    kart.style.color = "#333";
  } else {
    kart.style.backgroundColor = seciliRenk;
    kart.style.color = "#ffffff";
    kart.style.textAlign = "center";
  }
  var numara = document.createElement("p");
  numara.textContent = yeniIndex;
  numara.style.fontWeight = "bold";
  numara.style.fontSize = "18px";
  kart.appendChild(numara);

  for (var i = 0; i < alanlar.length; i++) {
    var deger = document.getElementById(alanlar[i].id).value || "-";

    var p = document.createElement("p");

    var b = document.createElement("b");
    b.textContent = alanlar[i].isim + ": ";

    p.appendChild(b);
    p.appendChild(document.createTextNode(deger));
    kart.appendChild(p);

    document.getElementById(alanlar[i].id).value = "";
  }

  document.getElementById("cikti").appendChild(kart);
}

document.getElementById("btn").addEventListener("click", olustur);