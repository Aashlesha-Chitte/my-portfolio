import { motion } from "framer-motion";
import { styles } from "./utils/styles";
import { fadeIn, slideIn, staggerContainer } from "./utils/motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import contactImage from "../../assets/contact.jpeg";

const ContactButton = ({ href, icon, text, external = false }) => (
  <a 
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group"
  >
    <Button 
      variant="outlined" 
      endIcon={icon}
      className="relative overflow-hidden border-2 border-blue-500 transition-all duration-300"
      sx={{
        borderRadius: '8px',
        padding: '10px 15px',
        fontWeight: 'bold',
        background: 'rgba(240, 240, 240, 0.1)',
        color: 'white',
        backdropFilter: 'blur(8px)',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.2)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        }
      }}
    >
      {text}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </Button>
  </a>
);

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-5">
        <motion.div
          variants={slideIn("left", "tween", 0, 0.5)}
          className="flex-1 rounded-2x"
        >
          <p className={`${styles.sectionSubText} bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent`}>
            Get in touch
          </p>
          <h4 className={`${styles.sectionHeadText} text-gray-200 mb-2`}>
            Contact Us
          </h4>
          <motion.div 
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="space-y-4"
          >
            <p className="text-gray-300 mb-4">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <div className="flex flex-wrap gap-4">
              <ContactButton
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashleshachitte5@gmail.com"
                icon={<Email />}
                text="Email"
              />
              <ContactButton 
                href="https://www.linkedin.com/in/aashlesha-chitte-46634b178/" 
                icon={<LinkedIn />} 
                text="LinkedIn" 
                external 
              />
              <ContactButton 
                href="https://github.com/Aashlesha-Chitte/" 
                icon={<GitHub />} 
                text="GitHub" 
                external 
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="relative flex-1"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-lg">
            <img
              loading="lazy"
              src={contactImage}
              alt="contact us"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Contact, "contact");