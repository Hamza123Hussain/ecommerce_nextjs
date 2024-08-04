const EmailTemplate = (data: {
  id: any
  Fullname: string
  userName: string
  userEmail: string
  cart: Array<{
    name: string
    quantity: number
    price: number
    image_url: string
  }>
  total: number
  address: string
  paymentMethod: string
}) => {
  return `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            margin: 0;
          }
          .container {
            background: #ffffff;
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
            border-bottom: 2px solid #f2f2f2;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          p {
            color: #555;
            line-height: 1.6;
          }
          h3 {
            color: #333;
            margin-top: 20px;
            margin-bottom: 10px;
            border-bottom: 2px solid #f2f2f2;
            padding-bottom: 10px;
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
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #f8f8f8;
            color: #333;
          }
          .total-row {
            font-weight: bold;
            color: #333;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
            border-top: 1px solid #f2f2f2;
            padding-top: 10px;
          }
          .item-row {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .item-row img {
            max-width: 40px;
            border-radius: 4px;
          }
          .item-row span {
            font-size: 14px;
            line-height: 1.6;
            color: #333;
          }
          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }
            th, td {
              padding: 8px;
            }
            .item-row {
              flex-direction: column;
              align-items: flex-start;
            }
            .item-row img {
              max-width: 60px;
            }
            .item-row span {
              font-size: 16px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Order ${data.id} Has Been Placed</h2>
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
                  <td class="item-row">
                    <img src="${item.image_url}" alt="${item.name}" />
                    <span>${item.name}</span>
                  </td>
                  <td>${item.quantity}</td>
                  <td>Rs ${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr class="total-row">
                <td colspan="2">Total</td>
                <td>Rs ${data.total.toFixed(2)}</td>
              </tr>
              <tr class="total-row">
                <td colspan="2">Tax</td>
                <td>Rs ${(data.total * 0.16).toFixed(2)}</td>
              </tr>
              <tr class="total-row">
                <td colspan="2">Shipping</td>
                <td>Rs ${data.total > 1000 ? 250 : 0}</td>
              </tr>
              <tr class="total-row">
                <td colspan="2">SubTotal</td>
                <td>Rs ${
                  data.total > 1000
                    ? (250 + data.total + data.total * 0.16).toFixed(2)
                    : (data.total + data.total * 0.16).toFixed(2)
                }</td>
              </tr>
            </tbody>
          </table>
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
