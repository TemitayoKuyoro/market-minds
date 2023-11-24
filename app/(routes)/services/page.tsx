import React from "react";

import Container from "@/components/ui/container";
import Image from "next/legacy/image";

const Services = () => {
  return (
    <Container>
      <section className="mt-4 mb-12 pt-4 pb-12 px-3">
        <div className="min-h-screen">
          <h2 className="font-semibold text-3xl">Our Services</h2>
          <div
            id="services"
            className="grid grid-cols-1 gap-16 md:gap-10 justify-between mt-8"
          >
            <div
              className="grid grid-cols-1"
              style={{
                gridTemplateRows: "max-content max-content auto",
              }}
            >
              <h3 className="text-2xl font-medium pb-4 tracking-normal leading-none">
                Website Development
              </h3>
              <div
                style={{ position: "relative", width: "30vh", height: "30vh" }}
              >
                <Image
                  src="/img/Firefly website development 97938.jpg"
                  alt="ai seo image"
                  layout="fill"
                  sizes="100vw, 50vw"
                  style={{
                    objectFit: "contain",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <p className="text-lg font-light tracking-wide leading-tight mt-4  max-w-md">
                We create intuitive, user-friendly websites with seamless
                functionality and sleek design to enhance your online presence.
              </p>
            </div>
            <div
              className="grid grid-cols-1"
              style={{
                gridTemplateRows: "max-content max-content auto",
              }}
            >
              <h3 className="text-2xl font-medium pb-4 tracking-normal leading-none">
                Mobile App Design
              </h3>
              <div
                style={{ position: "relative", width: "30vh", height: "30vh" }}
              >
                <Image
                  src="/img/Firefly mobile app design 89151.jpg"
                  alt="ai seo image"
                  layout="fill"
                  sizes="100vw, 50vw"
                  style={{
                    objectFit: "contain",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <p className="text-lg font-light tracking-wide leading-tight mt-4 max-w-md">
                Our team crafts innovative mobile applications, with great user
                experience to deliver app solutions that resonate with your
                target audience.
              </p>
            </div>
            <div
              className="grid grid-cols-1"
              style={{
                gridTemplateRows: "max-content max-content auto",
              }}
            >
              <h3 className="text-2xl font-medium pb-4 tracking-normal leading-none">
                Digital Marketing & SEO
              </h3>
              <div
                style={{ position: "relative", width: "30vh", height: "30vh" }}
              >
                <Image
                  src="/img/Firefly digital marketing bar graph showing sales optimization 79759.jpg"
                  alt="ai seo image"
                  layout="fill"
                  sizes="100vw, 50vw"
                  style={{
                    objectFit: "contain",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <p className="text-lg font-light tracking-wide leading-tight mt-4 max-w-md">
                We provide tailored digital marketing strategies and SEO
                solutions to boost your online visibility and increase customer
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Services;
