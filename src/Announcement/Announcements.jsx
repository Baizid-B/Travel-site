
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

const Announcements = () => {
  const [isShow,setIsShow] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => setIsShow(false), 5000)
    return () => clearTimeout(time)
  },[])

  if (!isShow) return null;

  return(
    <motion.div
      initial = {{y: -50, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      exit = {{y: -50, opacity: 0}}
      transition = {{duration: 0.3}}
      className = "fixed top-3/4 left-2 transform -translate-x-2/4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
    >
      <div className='flex flex-col justify-center '>
        <div>📢 <strong>Notice:</strong> Today special offer 20% </div>
        <a target='_blank' href="https://baizid-bostami.netlify.app/"> <strong className='text-black'>click now </strong>and get the offer</a>
      </div>
    </motion.div>
  );
};

export default Announcements;

