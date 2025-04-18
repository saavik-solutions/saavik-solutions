"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LetsDiscuss() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
              Let's Discuss <br />
              Your <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent">Project!</span>
            </h2>
            <p className="mb-10 max-w-md text-lg text-gray-700">
              Share your project idea and we'll provide a free consultation on how we will turn it into an amazing
              digital product.
            </p>
            <Button className="w-full rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] py-6 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:max-w-xs">
              GET A QUOTE
            </Button>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            className="w-full overflow-hidden rounded-xl shadow-2xl lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15253.028939201358!2d77.62714395!3d17.108947199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc96d8dec116fa1%3A0x180c228509fb80c!2sKodangal%2C%20Telangana%20509338!5e0!3m2!1sen!2sin!4v1744654360999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

