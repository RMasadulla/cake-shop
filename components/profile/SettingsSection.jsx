export default function SettingsSection() {
  return (
    <section id="settings" className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Account Settings
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Manage your account preferences and security.
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Email Notifications
            </h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="order-updates"
                    name="order-updates"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="order-updates"
                    className="font-medium text-gray-700"
                  >
                    Order updates
                  </label>
                  <p className="text-gray-500">
                    Get notified when your order status changes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="promotions"
                    name="promotions"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="promotions"
                    className="font-medium text-gray-700"
                  >
                    Promotions and deals
                  </label>
                  <p className="text-gray-500">
                    Receive emails about new promotions and deals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-medium text-gray-700"
                  >
                    Newsletter
                  </label>
                  <p className="text-gray-500">
                    Receive our weekly newsletter with product updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-900">Password</h4>
            <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current password
                </label>
                <input
                  type="password"
                  name="current-password"
                  id="current-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2 border"
                />
              </div>
              <div></div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2 border"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Update Password
              </button>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-900">
              Delete Account
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
