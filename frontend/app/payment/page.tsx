"use client";

import { useNotifications } from "@/hooks/useNotifications";
import React, { useState } from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// console.log(`Bearer ${process.env.REFRESH_TOKEN}`);

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const userId = "69edb58d28440a9f4f5f5bdd"; // replace
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWRiNThkMjg0NDBhOWY0ZjVmNWJkZCIsImlhdCI6MTc3NzkxNDAzNSwiZXhwIjoxNzc3OTE3NTc1fQ.TqcQ2MwaUoVpHwbcn57r5i1nJhu9VlCZeAn85sVg2c0";

  // userId for socket
  const { notifications, setNotifications } = useNotifications(userId);

  const fetchNotifications = async () => {
    const res = await fetch("http://localhost:4000/api/notifications/get-notifications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ⚠️ replace
      }
    });
    const data = await res.json();
    setNotifications(data);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handlePayment = async () => {
    console.log(process.env.REFRESH_TOKEN);
    try {
      setLoading(true);

      // STEP 1: Create Order
      const res = await fetch(
        "https://headlamp-rosy-disparate.ngrok-free.dev/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ⚠️ replace
          },
        },
      );

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
          // fetch latest notifications after payment
          fetchNotifications();
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

        fetchNotifications()

        try {
          await fetch(
            "https://headlamp-rosy-disparate.ngrok-free.dev/api/payment/fail",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // ⚠️ replace
              },
              body: JSON.stringify({
                razorpay_order_id: response.error.metadata.order_id,
              }),
            },
          );
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
      <h2 className="my-2 text-xl">Upgrade Plan 🚀</h2>

      <button
        className="px-5 py-3 bg-green-500 text-white rounded-md"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Buy Plan"}
      </button>

      <div className="my-2">🔔 Notifications {notifications.length}</div>
      <ul>
        {notifications.map((n) => (
          <li key={n._id}>
            <strong>{n.title}</strong>
            <p>{n.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
