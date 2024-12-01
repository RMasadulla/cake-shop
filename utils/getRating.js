export const getRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const fullStarSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-yellow-400"><path d="M9.049 2.927a1 1 0 0 1 1.902 0l2.123 4.299a1 1 0 0 0 .76.553l4.755.687a1 1 0 0 1 .554 1.703l-3.437 3.347a1 1 0 0 0-.287.88l.81 4.683a1 1 0 0 1-1.45 1.05l-4.227-2.225a1 1 0 0 0-.917 0l-4.227 2.225a1 1 0 0 1-1.45-1.05l.81-4.683a1 1 0 0 0-.287-.88L2.768 9.616a1 1 0 0 1 .554-1.703l4.755-.687a1 1 0 0 0 .76-.553L9.049 2.927z"/></svg>';
  const halfStarSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-yellow-400"><path d="M9.049 2.927a1 1 0 0 1 1.902 0l2.123 4.299a1 1 0 0 0 .76.553l4.755.687a1 1 0 0 1 .554 1.703l-3.437 3.347a1 1 0 0 0-.287.88l.81 4.683a1 1 0 0 1-1.45 1.05l-4.227-2.225a1 1 0 0 0-.917 0l-4.227 2.225a1 1 0 0 1-1.45-1.05l.81-4.683a1 1 0 0 0-.287-.88L2.768 9.616a1 1 0 0 1 .554-1.703l4.755-.687a1 1 0 0 0 .76-.553L9.049 2.927z"/></svg>';
  const emptyStarSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400"><path d="M9.049 2.927a1 1 0 0 1 1.902 0l2.123 4.299a1 1 0 0 0 .76.553l4.755.687a1 1 0 0 1 .554 1.703l-3.437 3.347a1 1 0 0 0-.287.88l.81 4.683a1 1 0 0 1-1.45 1.05l-4.227-2.225a1 1 0 0 0-.917 0l-4.227 2.225a1 1 0 0 1-1.45-1.05l.81-4.683a1 1 0 0 0-.287-.88L2.768 9.616a1 1 0 0 1 .554-1.703l4.755-.687a1 1 0 0 0 .76-.553L9.049 2.927z"/></svg>';

  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += fullStarSVG;
  }

  if (halfStar) {
    stars += halfStarSVG;
  }

  for (let i = 0; i < emptyStars; i++) {
    stars += emptyStarSVG;
  }

  return stars;
};
