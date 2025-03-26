import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

export default function AddressesSection() {
  return (
    <section id="addresses" className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Saved Addresses
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Manage your shipping and billing addresses.
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="border rounded-lg p-4 relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-gray-400 hover:text-gray-500">
                <FiEdit2 size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <FiTrash2 size={16} />
              </button>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Default
              </span>
            </div>
            <h4 className="text-sm font-medium">Home</h4>
            <p className="text-sm text-gray-500 mt-1">
              John Doe
              <br />
              123 Main St
              <br />
              Apt 4B
              <br />
              San Francisco, CA 94103
              <br />
              United States
              <br />
              (555) 123-4567
            </p>
          </div>
          <div className="border rounded-lg p-4 relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-gray-400 hover:text-gray-500">
                <FiEdit2 size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <FiTrash2 size={16} />
              </button>
            </div>
            <h4 className="text-sm font-medium">Work</h4>
            <p className="text-sm text-gray-500 mt-1">
              John Doe
              <br />
              456 Market St
              <br />
              Suite 1200
              <br />
              San Francisco, CA 94105
              <br />
              United States
              <br />
              (555) 987-6543
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <FiPlus className="mr-2" size={16} />
            Add New Address
          </button>
        </div>
      </div>
    </section>
  );
}
