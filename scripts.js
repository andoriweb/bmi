function calcWeight() {
    const width = document.getElementById('width').value;
    const heidht = document.getElementById('heidht').value;

    let bmi = width / Math.pow(heidht, 2);
    console.log(bmi);

    let resMin = 20 - bmi;
    let resMax = 25 - bmi;

    if (bmi < 20) {
        alert(`У вас дефицит веса в : ${resMin.toFixed(1)} кг.`);
    } else if (bmi > 25) {
        alert(`У вас лишний вес на : ${resMax.toFixed(1)} кг.`);
    } else {
        alert('У вас нориальный вес.' + ' Поздравляю!');
    }
}
