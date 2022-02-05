import './styles/App.scss';
import { motion } from 'framer-motion';
import ShopProductPage from './pages/ShopProductPage';

const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      className="App"
    >
      <ShopProductPage />
    </motion.div>
  );
};

export default App;
