interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}



// Desestructuracion
// function taxCalculation(options: TaxCalculationOptions): [number, number]{
// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number]{
function taxCalculation(options: TaxCalculationOptions): [number, number]{

    const {tax, products} = options;
    
    let total = 0;

    // Desestructuracion
    products.forEach(({price}) => {
        total += price;
    });

    // console.log(tax);
    
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

// Desestructuracion
const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax,
})



console.log('Total', total);
console.log('Tax', taxResult);

export{};