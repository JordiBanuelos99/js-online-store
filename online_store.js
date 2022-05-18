/* Variables */
let product = prompt("Product name");
let price = prompt("Price");
let qty = Number(prompt("Quantity"));

/* Price calculation */
let subtotal=price*qty;
let tax=subtotal*0.08;
let total=subtotal+tax;

/* Receipt */
document.writeln(`
    <div class="Receipt_Header"></div>
    <h2>Store Receipt</h2>
    <div class="Receipt_Header"></div>
    <table>
        <tr>
            <th>QTY</th>
            <th>Product</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>${qty}</td>
            <td>${product}</td>
            <td>${price}</td>
        </tr>
    </table>
    <div class="Receipt_Header"></div>
    <div>
        <p>Subtotal: $${subtotal}</p>
        <p>Taxes (8%): $${tax}</p>
        <p>Total: $${total}</p>
    </div>
    <div class="Receipt_Header"></div>
`);