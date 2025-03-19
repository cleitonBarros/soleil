import Image from "next/image";
import Img from "../../../public/logo.svg";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.figure
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", repeat: Infinity, duration: 50 }}
      className="rounded-full bg-black p-2"
    >
      <Image src={Img} alt="logo" width={100} height={100} />
    </motion.figure>
  );
};
