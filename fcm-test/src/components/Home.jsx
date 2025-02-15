import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">FCM TEST</h1>
      <nav className="mt-4">
        <Link to="/fcm-test" className="mr-4 text-blue-500">
          Go to FCM Test
        </Link>
      </nav>
    </div>
  );
};

export default Home;
