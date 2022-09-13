const productPrices = [1, 11, 21, 25, 13.50];

productPrices.push(133); //prideda i gala

productPrices.shift(); //istrina pirma

productPrices.pop(); //istrina paskutini

productPrices.unshift(-18); //prideda pirma elementa. LABAI nenasus

productPrices.splice(1, 1); //istrina antra elementa

console.info(productPrices.length);
console.info(productPrices);