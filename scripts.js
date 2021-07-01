function calcWeight() {

  const width = document.getElementById('width').value;
  const heidht = document.getElementById('heidht').value;

  let bmi = width / Math.pow(heidht, 2);
  console.log(bmi);

  let resMin = 20 - bmi;
  let resMax = 25 - bmi;
  let resultMin = resMin.toFixed(2);
  let resultMax = resMax.toFixed(2);

  if(bmi < 20) {
      alert('У вас дефицит веса на : ' + resultMin + 'кг.');
  } else if (bmi > 25) {
      alert('У вас лишний вес на : ' + resultMax + 'кг.');
  } else {
      alert('У вас нориальный вес.' + ' Поздравляю!');
  }
}
