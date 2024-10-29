import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function MenuCard({ item, onAdd, onRemove, quantity }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
          <div className="flex items-center space-x-2">
            {quantity > 0 && (
              <>
                <button
                  onClick={onRemove}
                  className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                >
                  <Minus size={16} />
                </button>
                <span className="font-semibold">{quantity}</span>
              </>
            )}
            <button
              onClick={onAdd}
              className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
