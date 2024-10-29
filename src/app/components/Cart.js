import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

export function Cart({ items, onRemove, onCheckout }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ShoppingBag className="text-green-600 mr-2" />
          <span className="font-semibold">Your Order</span>
        </div>
        <span className="text-sm text-gray-600">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="max-h-64 overflow-y-auto">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between py-2"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-gray-600 ml-2">
                  x{item.quantity}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1 rounded-full hover:bg-red-100 text-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {items.length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
