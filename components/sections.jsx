"use client"

import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from "@/components/feature-card"
import InteractiveStats from "@/components/interactive-stats"
import { Brain, Layers, Zap, Sparkles, Wand2, Cpu } from 'lucide-react';
import PricingCard from "@/components/pricing-card"

export function FeaturesSection() {
	const features = [
    {
      icon: Brain,
      title: 'Neural Background Removal',
      description: 'Advanced AI algorithms instantly detect and remove backgrounds with quantum precision, preserving every detail of your subject.',
    },
    {
      icon: Layers,
      title: 'Quantum Upscaling',
      description: 'Enhance resolution up to 16K using proprietary neural networks that reconstruct missing pixels with photorealistic accuracy.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Process complex edits in milliseconds with our distributed GPU clusters optimized for real-time creative workflows.',
    },
    {
      icon: Sparkles,
      title: 'Style Transfer Magic',
      description: 'Transform any image with artistic styles using generative adversarial networks trained on millions of masterpieces.',
    },
    {
      icon: Wand2,
      title: 'One-Click Enhancement',
      description: 'Automatically optimize lighting, color balance, and composition using computer vision and machine learning.',
    },
    {
      icon: Cpu,
      title: 'Smart Object Detection',
      description: 'Identify and isolate any object or person with pixel-perfect precision using advanced semantic segmentation.',
    },
  ];

	return (
		<section id="features" className="relative py-24 text-white">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
					Why creators choose Pixxel
				</h2>
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{(features || []).map((f, index) => (
						<FeatureCard key={f.title} {...f} delay={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export function StatsSection() {
	return <InteractiveStats />
}




export function PricingSection({ onHover }) {
  const plans = [
    {
      plan: 'Starter',
      price: 19,
      features: [
        'Up to 500 AI enhancements/month',
        'Basic neural upscaling (4x)',
        'Standard background removal',
        'Email support',
        'Cloud storage (5GB)',
      ],
      buttonText: 'Start Creating',
    },
    {
      plan: 'Professional',
      price: 49,
      features: [
        'Unlimited AI enhancements',
        'Advanced neural upscaling (16x)',
        'Quantum background removal',
        'Style transfer library',
        'Priority support',
        'Cloud storage (100GB)',
        'API access',
      ],
      featured: true,
      buttonText: 'Unleash Power',
    },
    {
      plan: 'Enterprise',
      price: 149,
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated account manager',
        'SLA guarantee (99.9%)',
        'Unlimited cloud storage',
        'Advanced analytics',
        'Custom integrations',
      ],
      buttonText: 'Scale Beyond',
    },
  ];

  return (
    <section id="pricing" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Creative Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From individual creators to enterprise teams, find the perfect plan 
            to transform your creative workflow with AI precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {(plans || []).map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              featured={plan.featured}
              buttonText={plan.buttonText}
              onHover={onHover}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

