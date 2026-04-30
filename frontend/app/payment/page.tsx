"use client";

import React, { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // STEP 1: Create Order
      const res = await fetch("http://localhost:4000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWRiNThkMjg0NDBhOWY0ZjVmNWJkZCIsImlhdCI6MTc3NzUzOTg2NSwiZXhwIjoxNzc3NTQzNDA1fQ.fnI2l-l0ZsaIDkDdijyoZllQniB98D520JFfK7m0iVY", // ⚠️ replace
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
          try {
            // STEP 3: Verify Payment
            const verifyRes = await fetch(
              "http://localhost:4000/api/payment/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWRiNThkMjg0NDBhOWY0ZjVmNWJkZCIsImlhdCI6MTc3NzUzOTg2NSwiZXhwIjoxNzc3NTQzNDA1fQ.fnI2l-l0ZsaIDkDdijyoZllQniB98D520JFfK7m0iVY", // ⚠️ replace
                },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  paymentId,
                }),
              }
            );

            if (!verifyRes.ok) {
              const errorText = await verifyRes.text();
              console.error("Verify Error:", errorText);
              alert("Payment verification failed");
              return;
            }

            alert("Payment successful 🎉");
          } catch (err) {
            console.error("Verify Error:", err);
          }
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
          await fetch("http://localhost:4000/api/payment/fail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWRiNThkMjg0NDBhOWY0ZjVmNWJkZCIsImlhdCI6MTc3NzUzOTg2NSwiZXhwIjoxNzc3NTQzNDA1fQ.fnI2l-l0ZsaIDkDdijyoZllQniB98D520JFfK7m0iVY", // ⚠️ replace
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