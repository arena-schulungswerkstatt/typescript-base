const { print } = require("./common/printer");

const providedData = {
    test: 'data',
    lore: 'ipsum',
    data: {
        lore: 'ipsums',
        ipsum: 'lore',
        'test': 'test'

    }
}
const text = JSON.stringify(providedData, null, 2);

print(text);
console.log('PDF generated!')
