import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">{children}</div>
    </motion.div>
  );
};

export default Page;
