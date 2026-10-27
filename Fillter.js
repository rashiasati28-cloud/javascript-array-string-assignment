const orders = [
  {
    id: 101,
    customer: "Aman",
    status: "delivered",
    amount: 1200,
    items: ["mouse", "keyboard"],
    city: "Nashik"
  },
  {
    id: 102,
    customer: "Rahul",
    status: "cancelled",
    amount: 800,
    items: ["keyboard"],
    city: "Pune"
  },
  {
    id: 103,
    customer: "Aman",
    status: "delivered",
    amount: 2500,
    items: ["monitor", "mouse"],
    city: "Nashik"
  },
  {
    id: 104,
    customer: "Priya",
    status: "delivered",
    amount: 1800,
    items: ["laptop stand", "mouse"],
    city: "Mumbai"
  },
  {
    id: 105,
    customer: "Rahul",
    status: "delivered",
    amount: 3200,
    items: ["keyboard", "monitor"],
    city: "Pune"
  },
  {
    id: 106,
    customer: "Aman",
    status: "cancelled",
    amount: 1500,
    items: ["mouse"],
    city: "Nashik"
  }
];

function generateReport(orders) {
    // 1. Separate delivered and cancelled orders
    const deliveredOrders = orders.filter(
        order => order.status === "delivered"
    );

    const cancelledOrders = orders.filter(
        order => order.status === "cancelled"
    );

    // 2. Calculate total revenue
    const totalRevenue = deliveredOrders.reduce(
        (total, order) => total + order.amount,
        0
    );

    // 3. Calculate spending per customer
    const customerSpending = deliveredOrders.reduce(
        (acc, order) => {
            acc[order.customer] =
                (acc[order.customer] || 0) + order.amount;

            return acc;
        },
        {}
    );

    // 4. Find the top customer
    const topCustomer = Object.entries(customerSpending).reduce(
        (top, current) =>
            current[1] > top[1] ? current : top
    )[0];

    // 5. Calculate revenue per city
    const cityRevenue = deliveredOrders.reduce(
        (acc, order) => {
            acc[order.city] =
                (acc[order.city] || 0) + order.amount;

            return acc;
        },
        {}
    );

    // 6. Find the top city
    const topCity = Object.entries(cityRevenue).reduce(
        (top, current) =>
            current[1] > top[1] ? current : top
    )[0];

    // 7. Count product frequency across all orders
    const products = orders
        .flatMap(order => order.items)
        .reduce((acc, product) => {
            acc[product] = (acc[product] || 0) + 1;
            return acc;
        }, {});

    // 8. Return the final report
    return {
        totalOrders: orders.length,
        deliveredOrders: deliveredOrders.length,
        cancelledOrders: cancelledOrders.length,
        totalRevenue,
        averageOrderValue:
            totalRevenue / deliveredOrders.length,
        topCustomer,
        topCity,
        products
    };
}

const report = generateReport(orders);
console.log(report);
