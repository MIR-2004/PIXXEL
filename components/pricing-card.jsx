import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PricingCard = ({
  plan,
  price,
  features = [],
  featured = false,
  buttonText,
  onHover = () => {},
}) => {
  return (
    <motion.div
      className={`relative backdrop-blur-lg border rounded-3xl p-8 transition-all duration-500 ${
        featured
          ? 'bg-white/10 border-blue-400/50 shadow-2xl shadow-blue-500/20 scale-105'
          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: featured ? 1.08 : 1.02,
        rotateY: 3,
      }}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
    >
      {featured && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Star className="w-4 h-4" />
          <span>Most Popular</span>
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-4 ${featured ? 'text-blue-300' : 'text-white'}`}>
          {plan}
        </h3>
        <div className="mb-6">
          <span className={`text-5xl font-bold ${featured ? 'text-white' : 'text-gray-200'}`}>
            ${price}
          </span>
          <span className="text-gray-400 text-lg">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {(features || []).map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-3 text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              featured ? 'bg-blue-500/20' : 'bg-white/10'
            }`}>
              <Check className={`w-4 h-4 ${featured ? 'text-blue-400' : 'text-gray-300'}`} />
            </div>
            <span className="leading-relaxed">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
          featured
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25'
            : 'backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;