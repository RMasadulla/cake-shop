export default function WeeklyRecipeDeliveryForm() {
  return (
    <form className="flex flex-col md:flex-row gap-4">
      <input
        type="email"
        placeholder="Email Address"
        className="flex-grow px-4 py-2 rounded-full outline-none ring-1 ring-transparent focus:ring-black"
      />
      <button
        type="submit"
        className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-900"
      >
        Join
      </button>
    </form>
  );
}
