/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZDEN EMİN OLUNUZ (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığınız kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanızı öneririz.
Bunu sağlamak için cevabı direk console'a loglayın veya çağırdığınız fonksiyondan dönen değeri console'a loglayın.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)*/

var surucuYasi = 25;

if ((surucuYasi) >= 18){
  console.log(true);
}
else{
  console.log(false);
}

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yapınız:   
   1. 2 değişken oluşturun ve bunlara değerler atayın (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/


/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. String türünde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/


/*
Görev 1d - Çarpma */

function carpma(a,b){
  return a*b
}
console.log(carpma(6,8));
 
/* Görev 2 : Köpeğin Yaşı */

function kopeginYasi(y){
  return y*7;
}
console.log(kopeginYasi(4));

/* Görev 3 */

// Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!

function player(p){
  return p;
}

let comp = Math.floor(Math.random() * 3);
function CompChoice(comp){

if (comp === 0){
  return 'Taş';
}
else if (comp === 1){
  return 'Makas';
}
else if (comp === 2){
  return 'Kağıt';
}
}

function oyun(oyuncu,bilgisayar){
  player(oyuncu);
  CompChoice(bilgisayar);

  console.log("Oyuncu" + ":" + player(oyuncu));
  console.log("Bilgisayar" +":" + CompChoice(bilgisayar));
  
  if (player(oyuncu) === 'Taş' && CompChoice(bilgisayar) === 'Kağıt'){
    return "Kaybettin!";
  }
  else if (player(oyuncu) === 'Taş' && CompChoice(bilgisayar) === 'Makas'){
    return "Kazandın!";
  }
  else if(player(oyuncu) === 'Taş' && CompChoice(bilgisayar) === 'Taş'){
    return "Beraberlik";
  }
  else if(player(oyuncu) === 'Makas' && CompChoice(bilgisayar) === 'Taş'){
     return "Kaybettin!";
  }
    else if(player(oyuncu) === 'Makas' && CompChoice(bilgisayar) === 'Makas'){
    return "Beraberlik";
  }
    else if(player(oyuncu) === 'Makas' && CompChoice(bilgisayar) === 'Kağıt'){
    return "Kazandın!";
  }
    else if(player(oyuncu) === 'Kağıt' && CompChoice(bilgisayar) === 'Taş'){
    return "Kazandın!";
  }
    else if(player(oyuncu) === 'Kağıt' && CompChoice(bilgisayar) === 'Makas'){
     return "Kaybettin!";
  }
    else if(player(oyuncu) === 'Kağıt' && CompChoice(bilgisayar) === 'Kağıt'){
    return "Beraberlik";
  }
}
console.log(oyun("Kağıt",comp));


/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil

function milDonusturucu(m){
  return m* 0.621371;
}
console.log(milDonusturucu(3));

//Görev 4b - Santimetreden Feet

function feetDonusturucu(f){
  return f / 30.48;
}

console.log(feetDonusturucu(3));


/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımızı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

function cocukSarkisi(){
  for(let i = 5; i>0; i--){
   console.log(i + " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!");
  }
}
console.log(cocukSarkisi());


/* Görev 6 : Not Hesaplayıcı */

function notHesapla(n){
  if (90 < n && n < 100)
  {
    return "A aldın";
  }
  else if (80 < n && n < 89)
  {
    return "B aldın";
  }
   else if (70 < n && n < 79)
  {
    return "C aldın";
  }
    else if (60 < n && n < 69)
  {
    return "D aldın";
  }
    else if (n < 60)
  {
    return "F aldın";
  }
}

console.log(notHesapla(84));



/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yapın.
1. Bir parametre alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/


function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}



/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla
}
