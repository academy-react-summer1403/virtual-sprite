
import React, { useState } from "react";
import { payapi } from "../../../core/services/api/panel/MyCourses";
const Pay =({cost,id})=>{
    const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

//   const handlePayment = (e) => {
//     e.preventDefault();

//     setIsProcessing(true);
//     setPaymentStatus(null);

//     // Fake API call delay to simulate payment processing
//     setTimeout(() => {
//       if (cardNumber && expiryDate && cvv) {
//         setPaymentStatus("Payment Successful!");
//       } else {
//         setPaymentStatus("Payment Failed: Invalid details.");
//       }
//       setIsProcessing(false);
//     }, 2000); // Simulate network delay of 2 seconds
//   };
const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStatus(null);
    const formdata = new FormData();
    formdata.append("Paid", amount);
    formdata.append("PeymentDate", expiryDate);
    formdata.append("PaymentInvoiceNumber",cardNumber);
    formdata.append("CourseId",id);
    try {
      // ارسال درخواست به سرور جعلی
      const response = await payapi(formdata);
  
      if (response.ok) {
        setPaymentStatus("پرداخت با موفقیت انجام شد!");
      } else {
        setPaymentStatus("پرداخت ناموفق: مشکلی پیش آمده است.");
      }
    } catch (error) {
      setPaymentStatus("پرداخت ناموفق: خطای شبکه.");
    }
  
    setIsProcessing(false);
  };
  return (
    <div className="payment-container">
   
      <form onSubmit={handlePayment}>
        <div>
          <label>مبلغ: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-[50%] h-[30px] border-[#A4F6DE] border-[1px] mb-[2%] mt-[2%]"
          />
        </div>
        <div>
          <label>شماره کارت: </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
              className="w-[50%] h-[30px] border-[#A4F6DE] border-[1px] mb-[2%] mt-[2%]"
          />
        </div>
        <div>
          <label>تاریخ (MM/YY): </label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
              className="w-[50%] h-[30px] border-[#A4F6DE] border-[1px] mb-[2%] mt-[2%]"
          />
        </div>
        <div>
          <label>CVV: </label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
              className="w-[50%] h-[30px] border-[#A4F6DE] border-[1px] mb-[2%] mt-[2%]"
          />
        </div>

        <button type="submit" disabled={isProcessing} className="bg-[#A4F6DE] mt-[3%]">
          {isProcessing ? "Processing..." : " پرداخت"}
        </button>
      </form>

      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </div>
  );
};

export {Pay }