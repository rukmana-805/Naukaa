"use client";

import React, { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// console.log(`Bearer ${process.env.REFRESH_TOKEN}`);

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    console.log(process.env.REFRESH_TOKEN);
    try {
      setLoading(true);

      // STEP 1: Create Order
      const res = await fetch("https://headlamp-rosy-disparate.ngrok-free.dev/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjVkZGM4NDEyOGFkMzc0NmI4N2ViZCIsImlhdCI6MTc3NzcyMTc4NiwiZXhwIjoxNzc3NzI1MzI2fQ.1P6ZGO7m6fr7l-xkbN62HelA7bNU-kXy8ILqwXA8eGM`, // ⚠️ replace
        },
      });

      // ERROR HANDLING
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Create Order Error:", errorText);
        alert("Create order failed");
        return;
      }

      const data = await res.json();
      const { order, paymentId } = data;

      // STEP 2: Razorpay script check
      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded");
        return;
      }

      //  STEP 2: Razorpay popup
      const options = {
        key: "rzp_test_SjHlCc8e3tlrTr", // replace
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        name: "Naukaa",
        description: "Upgrade Plan",

        handler: async (response: any) => {
          alert("Payment successfully 🎉");
          console.log("Payment Success:", response);
        },

        theme: {
          color: "#22c55e",
        },
      };

      const rzp = new window.Razorpay(options);

      //  PAYMENT FAILED
      rzp.on("payment.failed", async (response: any) => {
        console.log("Payment Failed:", response);

        alert("Payment failed");

        try {
          await fetch("https://headlamp-rosy-disparate.ngrok-free.dev/api/payment/fail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjVkZGM4NDEyOGFkMzc0NmI4N2ViZCIsImlhdCI6MTc3NzcyMTc4NiwiZXhwIjoxNzc3NzI1MzI2fQ.1P6ZGO7m6fr7l-xkbN62HelA7bNU-kXy8ILqwXA8eGM`, // ⚠️ replace
            },
            body: JSON.stringify({
              razorpay_order_id: response.error.metadata.order_id,
            }),
          });
        } catch (err) {
          console.error("Fail API Error:", err);
        }
      });

      rzp.open();

    } catch (err) {
      console.error("Main Error:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Upgrade Plan 🚀</h2>

      <button
        className="px-5 py-3 bg-green-500 text-white rounded-md"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Buy Plan"}
      </button>
    </div>
  );
}