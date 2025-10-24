import React, { useState } from "react";
import { Check, Users, Sparkles, X, CreditCard, Smartphone, Wallet, CheckCircle } from "lucide-react";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: "₹199/month",
      features: ["Access to Free Content", "Email Support", "1 Device Only"],
      friends: ["https://i.pravatar.cc/40?img=5", "https://i.pravatar.cc/40?img=7"],
      description:
        "The Basic plan gives you access to all free NetStream shows and series. Perfect for casual viewers who want to explore the world of entertainment on a budget.",
    },
    {
      name: "Premium",
      price: "₹499/month",
      features: [
        "All Basic Features",
        "Offline Access",
        "3 Devices",
        "Priority Support",
      ],
      friends: [
        "https://i.pravatar.cc/40?img=9",
        "https://i.pravatar.cc/40?img=10",
        "https://i.pravatar.cc/40?img=11",
      ],
      description:
        "The Premium plan unlocks the best of NetStream — offline downloads, priority customer support, and HD streaming across multiple devices.",
    },
    {
      name: "Ultimate",
      price: "₹899/month",
      features: [
        "Everything in Premium",
        "4K Streaming",
        "Exclusive Shows",
        "5 Devices",
      ],
      friends: [
        "https://i.pravatar.cc/40?img=12",
        "https://i.pravatar.cc/40?img=13",
        "https://i.pravatar.cc/40?img=14",
      ],
      description:
        "Experience the ultimate entertainment with NetStream Ultimate — 4K UHD quality, exclusive shows, and the ability to connect on 5 devices at once.",
    },
  ];

  const paymentMethods = [
    { name: "UPI", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Credit / Debit Card", icon: <CreditCard className="w-5 h-5" /> },
    { name: "PayPal", icon: <Wallet className="w-5 h-5" /> },
  ];

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        setShowPayment(false);
        setSelectedPlan(null);
        alert("✅ Payment Successful! Welcome to NetStream Premium 🎉");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center p-10">
      <br />
      <br />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Plan</h1>
      <p className="text-gray-600 mb-10 text-center max-w-lg">
        Compare plans, see what your friends use, and unlock premium experiences on{" "}
        <span className="font-semibold text-blue-600">NetStream</span>!
      </p>

      {/* Compare Plans Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(plan.name)}
            className={`relative bg-white border-2 rounded-2xl p-8 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 ${
              selectedPlan === plan.name
                ? "border-blue-500 scale-105"
                : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">{plan.name}</h2>
              {selectedPlan === plan.name && (
                <Sparkles className="text-blue-500 w-6 h-6 animate-pulse" />
              )}
            </div>
            <p className="text-blue-600 font-bold text-xl mb-4">{plan.price}</p>

            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <Check className="text-green-500 w-4 h-4 mr-2" /> {feature}
                </li>
              ))}
            </ul>

            {/* Friends using this plan */}
            <div className="flex items-center gap-2 mb-6">
              {plan.friends.map((friend, i) => (
                <img
                  key={i}
                  src={friend}
                  alt="Friend"
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
              ))}
              <Users className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-gray-500">using this plan</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                  selectedPlan === plan.name
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(plan);
                }}
                className="text-sm text-gray-500 hover:text-blue-600"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation / CTA Section */}
      {selectedPlan && (
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            You selected the{" "}
            <span className="text-blue-600">{selectedPlan}</span> plan.
          </h3>
          <button
            onClick={() => setShowPayment(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* View Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl p-8 w-96 shadow-xl relative animate-fadeIn">
            <button
              onClick={() => setShowDetails(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {showDetails.name} Plan
            </h2>
            <p className="text-blue-600 font-semibold mb-4">
              {showDetails.price}
            </p>
            <p className="text-gray-600 mb-5 text-sm">{showDetails.description}</p>

            <h3 className="font-semibold text-gray-700 mb-2">Includes:</h3>
            <ul className="mb-4 space-y-1">
              {showDetails.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600 text-sm">
                  <Check className="text-green-500 w-4 h-4 mr-2" /> {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setSelectedPlan(showDetails.name);
                setShowDetails(null);
              }}
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Choose {showDetails.name}
            </button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <X size={22} />
            </button>

            {!paymentSuccess ? (
              <>
                <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">
                  Complete Your Payment
                </h2>
                <p className="text-center text-gray-500 mb-6">
                  You selected the{" "}
                  <span className="text-blue-600 font-medium">
                    {selectedPlan}
                  </span>{" "}
                  plan.
                </p>

                {/* Payment Options */}
                <div className="space-y-3 mb-5">
                  {paymentMethods.map((method, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedMethod(method.name)}
                      className={`flex items-center justify-between px-4 py-3 border rounded-xl cursor-pointer transition ${
                        selectedMethod === method.name
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-gray-700">
                        {method.icon}
                        <span>{method.name}</span>
                      </div>
                      <input
                        type="radio"
                        checked={selectedMethod === method.name}
                        readOnly
                        className="accent-blue-600"
                      />
                    </div>
                  ))}
                </div>

                {/* Pay Button */}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  {isProcessing ? "Processing..." : "Pay Now"}
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Payment Successful!
                </h3>
                <p className="text-gray-600">
                  Welcome to{" "}
                  <span className="text-blue-600 font-medium">NetStream</span> 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
