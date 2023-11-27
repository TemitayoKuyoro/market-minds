import React from "react";
import Image from "next/legacy/image";
import { Star, CircleDollarSign } from "lucide-react";

import Container from "@/components/ui/container";

const Home = () => {
  return (
    <>
      <Container>
        <section className="mt-4 px-3 pt-4 pb-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-14">
            <div>
              <h1 className="font-black text-5xl tracking-tight leading-tight">
                Unlock Your Digital Success with Us!
              </h1>
              <p className="text-lg font-light mt-8 tracking-wide leading-snug">
                Elevate your online presence, engage your audience, and drive
                growth with our expert digital marketing solutions.{" "}
              </p>
            </div>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "350px",
              }}
            >
              <Image
                src="/img/Firefly image of ai robot improving business sales 46993.jpg"
                alt="ai seo image"
                layout="fill"
                sizes="100vw, 50vw"
                style={{
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </section>
        <section className="my-14 py-6 px-3">
          <h3 className="font-semibold text-2xl text-right">
            What Our Clients Say About Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 mt-6">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center py-10 px-6 border rounded">
                <span className="text-2xl flex items-center gap-2">
                  <img
                    width="20"
                    height="20"
                    src="/img/4230539_audience_customer_target_team_icon.svg"
                  />
                  <p className="font-medium">1.5k</p>
                </span>
                <p className="leading-wide mt-1 font-light">
                  Over 1,500 trusted customers
                </p>
              </div>
              <div className="flex flex-col items-center py-10 px-6 border rounded">
                <span className="text-2xl flex items-center gap-2 tracking-wide">
                <img
                    width="20"
                    height="20"
                    src="/img/172506_money_icon.svg"
                  />
                  <p className="tracking-tight font-medium">40%</p>
                </span>
                <p className="leading-wide mt-1 font-light">
                  Increase in customer conversions
                </p>
              </div>
            </div>
            <blockquote>
              <p className="text-lg font-light tracking-wide leading-snug">
                Thanks to their expertise, we witnessed a remarkable surge in
                our online presence, and our brand is now thriving like never
                before. Market Minds truly knows how to turn visions into
                reality.
              </p>
            </blockquote>
          </div>
        </section>
        <section className="mt-18 pt-4 px-3">
          <h2 className="font-semibold text-3xl">Our Services</h2>
          <div className="flex gap-8 py-4">
            <img
              className="social-icon"
              width="50"
              height="50"
              src="/img/7422484_amazon_smile_happy_avatar_icon.svg"
            />
            <img
              className="social-icon"
              width="50"
              height="50"
              src="/img/367582_facebook_social_icon.svg"
            />
            <img
              className="social-icon"
              width="50"
              height="50"
              src="/img/4373722_gmail_logo_logos_icon.svg"
            />
            <img
              className="social-icon"
              width="50"
              height="50"
              src="/img/3066977_circle_high quality_media_social_social media_icon.svg"
            />
            <img
              className="social-icon"
              width="50"
              height="50"
              src="/img/843786_whatsapp_icon.svg"
            />
          </div>
        </section>
        <section className="mt-20 py-6 px-3">
          <h2 className="font-semibold text-3xl">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
            <div className="grid grid-cols-1 content-start">
              <div
                className="w-[25vmin] h-[25vmin]"
                style={{
                  position: "relative",
                  border: "none",
                }}
              >
                <Image
                  src="/img/Firefly corporate image of male ceo of a digital marketing company 42157.jpg"
                  alt="ai seo image"
                  layout="fill"
                  sizes="100vw, 50vw"
                  style={{
                    borderRadius: "5px",
                  }}
                />
              </div>
              <h3 className="font-medium text-2xl self-center leading-none pt-4 pb-2">
                Co-founder & CEO
              </h3>
              <p className="text-lg font-light tracking-wide leading-tight">
                With over 10 years of experience in the digital marketing
                industry, Tayo is a true expert in developing innovative
                strategies that drive results. He is passionate about helping
                businesses grow and succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 content-start">
              <div
                className="w-[25vmin] h-[25vmin]"
                style={{
                  position: "relative",
                  border: "none",
                }}
              >
                <Image
                  src="/img/DALL·E 2023-09-10 16.56.40 - a corporate picture of a lead marketing strategist for a digital marketing company.png"
                  alt="ai seo image"
                  layout="fill"
                  sizes="100vw, 50vw"
                  style={{
                    borderRadius: "5px",
                  }}
                />
              </div>
              <h3 className="font-medium text-2xl self-center leading-none pt-4 pb-2">
                Lead Marketing Strategist
              </h3>
              <p className="text-lg font-light tracking-wide leading-tight">
                Elina is an accomplished Lead Marketing Strategist with a proven
                record of driving digital marketing success for businesses
                across diverse industries Adept at harnessing data-driven
                insights to optimize campaigns and enhance online visibility,
                resulting in increased engagement and revenue.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-20 mb-12 pt-4 pb-12 px-3">
          <h2 className="font-semibold text-3xl">Client Testimonials</h2>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <blockquote>
                  <p className="text-lg font-light tracking-wide leading-tight">
                    Working with Market Minds has been a game-changer for our
                    business. Their team&apos;s expertise in digital marketing
                    strategies, from SEO to social media, has significantly
                    boosted our online presence. Our website traffic has soared,
                    and we&apos;ve seen a remarkable increase in qualified
                    leads. Market Minds has truly been a trusted partner in our
                    growth journey.
                  </p>
                  <p className="blockquote-text text-right mt-2">
                    Sarah Anderson
                  </p>
                </blockquote>
              </div>
              <div>
                <blockquote>
                  <p className="text-lg font-light tracking-wide leading-tight">
                    We&apos;ve been with Market Minds for several years, and
                    their dedication to our success has been unwavering. Their
                    ability to adapt to the ever-changing digital landscape
                    while maintaining a data-driven approach has been
                    instrumental in our growth. Whether it&apos;s optimizing our
                    website, managing our PPC campaigns, or crafting engaging
                    content, Market Minds consistently delivers results.
                    They&apos;ve not just met but exceeded our digital marketing
                    expectations.
                  </p>
                  <p className="blockquote-text text-right mt-2">
                    Michael Ramirez
                  </p>
                </blockquote>
              </div>
              <div>
                <blockquote>
                  <p className="text-lg font-light tracking-wide leading-tight">
                    We&apos;ve been collaborating with Market Minds for over a
                    year, and the results have been exceptional. Their
                    data-driven approach to PPC advertising has significantly
                    reduced our ad spend while increasing conversions. The
                    dedication to our goals and transparent communication has
                    made Market Minds an invaluable extension of our marketing
                    team.
                  </p>
                  <p className="blockquote-text text-right mt-2">
                    Jessica Taylor
                  </p>
                </blockquote>
              </div>
              <div>
                <blockquote>
                  <p className="text-lg font-light tracking-wide leading-tight">
                    I can&apos;t thank Market Minds enough for their outstanding
                    digital marketing services. They&apos;ve transformed our
                    boutique&apos;s online visibility and brand recognition.
                    Their tailored content strategies and social media
                    management have not only increased our followers but also
                    driven sales like never before. Market Minds is a top-notch
                    team dedicated to delivering results.
                  </p>
                  <p className="blockquote-text text-right mt-2">
                    Olivia Roberts
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
