export default function WeeklyRecipeDeliveryForm() {
  return (
    <form className="flex flex-col md:flex-row gap-4">
      <input
        type="email"
        placeholder="Email Address"
        className="flex-grow px-4 py-2 rounded-full"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
      >
        Join
      </button>
    </form>
  );
}
