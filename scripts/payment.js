var options = {
    "key": "rzp_test_r3h5rcSErH0KME", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or ₹500.
    "currency": "INR",
    "name": "Pizza App",
    "description": "Pizza Bill Payment",
    "image": "https://example.com/your_logo",
    //"order_id": "order_9A33XWu170gUtm", // This is a sample Order ID. Replace with your actual Order ID.
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

var rzp1 = new Razorpay(options);

document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
