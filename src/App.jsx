import FiveStarRating from "./FiveStarRating";
const App = () => (
  <>
    <FiveStarRating />
    <FiveStarRating value={2} />
    <FiveStarRating value={5} />
    <FiveStarRating value={3} disabled />
    <FiveStarRating disabled />
  </>
);

export default App;
