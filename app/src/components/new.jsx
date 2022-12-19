import React from "react";
import "../../src/App.css";
import Gifanimation from "../assets/5cd47d06a1024f69daee5ed3_Web-22.gif";

// useViewportScroll, useTransform
import { motion } from "framer-motion";

function New() {

  // const { scrollYProgress } = useViewportScroll();
  // console.log(scrollYProgress);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <>
     
        <div>
          <motion.div
            className="container"
            initial={{ opacity: 0, scale: 2.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            
          >
            <h1 className="heading">I HELP BUSINESSES STAND OUT</h1>
            <p className="paragraph1">
              By creating badass visual identities and awesome websites.
            </p>
            <img
              className="image"
              style={{ backgroundImage: "Gifanimation",}}
              src={Gifanimation}
              alt=""
            />
            <p className="paragraph2">
              You can scroll if you want to, you can leave your friends behind
              <br />
              ’Cause your friends don't scroll and if they don't scroll <br />
              Well they're no friends of mine.
            </p>
          </motion.div>
        </div>
      {/* </div> */}
    </>
  );
}

export default New;
