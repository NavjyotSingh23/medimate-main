// About.js
import React from 'react';
import Image from 'next/image';

function About() {
  
  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <Image
                        alt=""
                        src="/3647444.jpg"
                        width={800}
                        height={900}
                        className="absolute inset-0 h-full rounded-3xl w-full object-cover"
                    />
                </div>

                <div className="lg:py-24">
                    <h2 className="text-4xl font-bold sm:text-4xl mt-0 mb-4"> {/* Adjusted margin top */}
                        Welcome to Medimate: Your Trusted Healthcare Companion
                    </h2>

                    <p className="mt-4 text-gray-500">
                        At Medimate, we understand the importance of easy access to quality healthcare. That's why we've created a platform that puts the power of finding and booking appointments with nearby doctors right at your fingertips. With a seamless blend of technology and personalized care, we're here to make your healthcare journey as smooth and stress-free as possible.
                    </p>
                    <h2 className="text-4xl font-bold sm:text-4xl mt-8 mb-4"> {/* Added margin top */}
                        Our Mission
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Our mission is clear: to connect individuals with the healthcare they need, when they need it. We're committed to leveraging technology to improve access to healthcare services and streamline the appointment booking process, ensuring that everyone can easily find and book appointments with trusted doctors in their area.
                    </p>

                </div>
            </div>
        </div>
    </section>
)
}
export default About;
