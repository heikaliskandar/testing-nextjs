import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "One of the best article website in Malaysia!",
    content:
      "Every article I read here offers a fresh, well-researched take on current issues. It’s refreshing to find a platform that prioritizes substance over clicks.",
    author: "Danial Azmi",
    designation: "Student",
  },
  {
    rating: 5,
    title: "Perfect for staying informed without the noise",
    content:
      "The topics are concise, insightful, and relevant. I love how this site makes complex issues easier to understand, especially around politics and education.",
    author: "Syahir Khalid",
    designation: "Policy Analyst",
  },
  {
    rating: 5,
    title: "Strong content, elegant design",
    content:
      "I keep coming back not just for the articles, but for the clean layout and dark mode too! Would love to see more local economic insights though.",
    author: "Farah Nabila",
    designation: "Economics Undergraduate",
  },
  {
    rating: 4,
    title: "A serious platform for critical minds",
    content:
      "House of Thoughts is not your average blog. It's where meaningful discussions happen, written in a voice that respects intelligence and diversity.",
    author: "Harith Zulkeffli",
    designation: "Lecturer",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          A beautiful reviews section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
