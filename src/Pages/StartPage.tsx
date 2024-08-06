import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const StartPage = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default StartPage;
