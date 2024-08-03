const EmailTemplate = (data: {
  Fullname: string
  userName: string
  userEmail: string
  cart: Array<{ name: string; quantity: number; price: number }>
  total: number
  address: string
  paymentMethod: string
}) => {
  // Build HTML content
  return `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            background: #fff;
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h2 {
            color: #333;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          table, th, td {
            border: 1px solid #ddd;
          }
          th, td {
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          .total {
            font-weight: bold;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Order Confirmation</h2>
          <p>Dear ${data.Fullname},</p>
          <p>Thank you for your order! Here are the details:</p>
          <h3>User Details</h3>
          <p><strong>Name:</strong> ${data.userName}</p>
          <p><strong>Email:</strong> ${data.userEmail}</p>
          <h3>Cart Information</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${data.cart
                .map(
                  (item) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>Rs${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
          <p class="total">Total: Rs${data.total.toFixed(2)}</p>
          <p class="total">Tax: Rs${(data.total * 0.16).toFixed(2)}</p>
          <p class="total">Shipping: Rs${data.total > 1000 ? 250 : 0}</p>
          <p class="total">SubTotal: Rs${
            data.total > 1000
              ? (250 + data.total + data.total * 0.16).toFixed(2)
              : (data.total + data.total * 0.16).toFixed(2)
          }</p>
          <h3>Billing Details</h3>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
          <div class="footer">
            <p>If you have any questions, please contact us.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export default EmailTemplate
