import React from 'react';
import Image from 'next/image';

function Services() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image container with adjusted order for left placement */}
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full"
          >
            <Image
              alt=""
              src="/services.jpg"
              width={800}
              height={900}
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl mt-0 mb-4"> {/* Adjusted margin top */}
            Doctor Search

            </h2>

            <p className="mt-4 text-gray-500">
            Effortlessly search for nearby doctors based on your location and medical needs. Our intuitive search functionality helps you find the right healthcare professional to meet your requirements.
            </p>
            <h2 className="text-4xl font-bold sm:text-4xl mt-8 mb-4"> {/* Added margin top */}
            Appointment Booking
            </h2>
            <p className="mt-4 text-gray-500">
            Book appointments with ease directly through our platform. Say goodbye to long waiting times and endless phone calls. With just a few clicks, you can secure your appointment with your chosen doctor.
            </p>
            <h2 className="text-4xl font-bold sm:text-4xl mt-8 mb-4"> {/* Added margin top */}
            Flexible Scheduling
            </h2>
            <p className="mt-4 text-gray-500">
            Choose appointment times that fit your schedule. Whether you need a same-day appointment or prefer to plan ahead, we offer flexible scheduling options to accommodate your needs.
            </p>
            <h2 className="text-4xl font-bold sm:text-4xl mt-8 mb-4"> {/* Added margin top */}
            Trusted Healthcare Providers
            </h2>
            <p className="mt-4 text-gray-500">
            Access a network of trusted healthcare providers. We partner with reputable doctors and clinics to ensure that you receive quality care and personalized attention.
            </p>
            <h2 className="text-4xl font-bold sm:text-4xl mt-8 mb-4"> {/* Added margin top */}
            User-Friendly Interface
            </h2>
            <p className="mt-4 text-gray-500">
            Enjoy a seamless user experience with our user-friendly interface. Our platform is designed to be intuitive and easy to navigate, making it simple for you to find and book appointments hassle-free.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
