
const PI = 3.14159;

module.exports = {
    calcularAreaCirculo: (raio) => {
        let area = PI * (raio * raio);
        area = parseFloat(area.toFixed(4));
        return area;
    },
};