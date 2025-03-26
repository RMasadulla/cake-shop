import { FaCreditCard, FaRegCreditCard } from "react-icons/fa";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

export default function PaymentSection() {
  return (
    <section id="payment" className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Payment Methods
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Your saved payment methods for faster checkout.
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="space-y-4">
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded p-2 mr-4">
                <FaCreditCard size={20} color="white" />
              </div>
              <div>
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-xs text-gray-500">Expires 12/2026</p>
                <div className="flex items-center mt-1">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Default
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-500">
                <FiEdit2 size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-500 rounded p-2 mr-4">
                <FaRegCreditCard size={20} color="white" />
              </div>
              <div>
                <p className="text-sm font-medium">Mastercard ending in 5678</p>
                <p className="text-xs text-gray-500">Expires 08/2025</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-500">
                <FiEdit2 size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <FiPlus className="mr-2" size={16} />
            Add New Payment Method
          </button>
        </div>
      </div>
    </section>
  );
}
