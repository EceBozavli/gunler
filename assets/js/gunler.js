let dayNumber= prompt('haftanın günlerini öğrenmek istersen bir sayı giriniz: ');

switch (dayNumber) {
  case '1':
    alert('Bugün günlerden pazartesi.');
    break;
  case '2':
    alert('Bugün günlerden salı.');
    break;
  case '3':
    alert('Bugün günlerden çarşamba.');
    break;
  case '4':
    alert('Bugün günlerden perşembe.');
    break;
  case '5':
    alert('Bugün günlerden cuma.');
    break;
  case '6':
    alert('Bugün günlerden cumartesi.');
    break;
  case '7':
    alert('Bugün günlerden pazar.');
    break;
  default:
    alert("Geçersiz gün.");


}
