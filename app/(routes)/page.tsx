import React from "react";

import Container from "@/components/ui/container";
import Image from 'next/image';

const Home = () => {
  return ( 
    <>
      <section className="mt-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div >
              <h1 className="font-black text-5xl">Unlock Your Digital Success with Us!</h1>
              <p className="text-xl font-light mt-5">Elevate your online presence, engage your audience, and drive growth with our expert digital marketing solutions. </p>
            </div>
            <div style={{position:'relative', minHeight: '250px'}}>
              <Image 
                src='/img/Firefly image of ai robot improving business sales 46993.jpg'
                alt="ai seo image"
                sizes="500"
                fill
                style={{                   
                objectFit: 'cover',
                borderRadius: '6px'
                    }}
              />
            </div>
          </div>
        </Container>
      </section>
        <section className="mt-20">
          <Container>
          <h3 className="font-semibold text-2xl text-right">What Our Clients Say About Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center py-6 px-1">
                <span className="text-3xl">+1.5k</span>
                <p>Over 1,500 trusted customers.</p>
              </div>
              <div className="flex flex-col items-center py-6 px-1">
                <span className="text-3xl">40%</span>
                <p>40% increase in conversions.</p>
              </div>
            </div>
              <p className="text-xl font-light">"Thanks to their expertise, we witnessed a remarkable surge in our online presence, and our brand is now thriving like never before. Market Minds truly knows how to turn visions into reality."</p>
          </div>
          </Container>
        </section>
        <section className="mt-24">
          <Container>
          <h2 className="font-semibold text-3xl">Our Services</h2>
          <div className="grid grid-cols-2">
            <div>
              <p></p>
            </div>
          </div>
          </Container>
        </section>
        <section className="mt-24">
          <Container>
          <h2 className="font-semibold text-3xl">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 justify-between">
            <div className="grid grid-cols-1" style={{
              gridTemplateRows: ' 20vw 70px auto'
            }}>
              <div style={{position:'relative', width: '20vw', height: '20vw'}}>
                <Image 
                  src='/img/Firefly corporate image of male ceo of a digital marketing company 42157.jpg'
                  alt="ai seo image"
                  fill
                  style={{                   
                    objectFit: 'contain',
                    borderRadius: '6px',
                    objectPosition: 'left'
                  }}
                  />                
              </div>
              <h3 className="font-semibold text-2xl py-1">Co-founder & CEO</h3>
              <p className="text-xl font-light py-2">With over 10 years of experience in the digital marketing industry, Tayo is a true expert in developing innovative strategies that drive results. He is passionate about helping businesses grow and succeed.</p>
            </div>   
            <div className="grid grid-cols-1" style={{
              gridTemplateRows: '20vw 70px auto'
            }}>
              <div style={{position:'relative', width: '20vw', height: '20vw'}}>
                <Image 
                  src='/img/DALL·E 2023-09-10 16.56.40 - a corporate picture of a lead marketing strategist for a digital marketing company.png'
                  alt="ai seo image"
                  fill
                  style={{                   
                    objectFit: 'contain',
                    borderRadius: '6px',
                    objectPosition: 'left'
                  }}
                  />
              </div>               
              <h3 className="font-semibold text-2xl py-1">Lead Marketing Strategist</h3>              
              <p className="text-xl font-light py-2">
                  Elina is an accomplished Lead Marketing Strategist with a proven record of driving digital marketing success for businesses across diverse industries
                  Adept at harnessing data-driven insights to optimize campaigns and enhance online visibility, resulting in increased engagement and revenue.
              </p>
            </div>         
          </div>         
          </Container>
        </section>
        <section className="mt-24 pb-12">
          <Container>
            <h2 className="font-semibold text-3xl">Client Testimonials</h2>
              <div className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xl font-light">Working with Market Minds has been a game-changer for our business. Their team's expertise in digital marketing strategies, from SEO to social media, has significantly boosted our online presence. Our website traffic has soared, and we've seen a remarkable increase in qualified leads. Market Minds has truly been a trusted partner in our growth journey.</p>
                  </div>
                  <div>
                    <p className="text-xl font-light">We've been with Market Minds for several years, and their dedication to our success has been unwavering. Their ability to adapt to the ever-changing digital landscape while maintaining a data-driven approach has been instrumental in our growth. Whether it's optimizing our website, managing our PPC campaigns, or crafting engaging content, Market Minds consistently delivers results. They've not just met but exceeded our digital marketing expectations.</p>
                  </div>             
                  <div>
                    <p className="text-xl font-light">We've been collaborating with Market Minds for over a year, and the results have been exceptional. Their data-driven approach to PPC advertising has significantly reduced our ad spend while increasing conversions. The dedication to our goals and transparent communication has made Market Minds an invaluable extension of our marketing team.</p>
                  </div>
                  <div>
                    <p className="text-xl font-light">I can't thank Market Minds enough for their outstanding digital marketing services. They've transformed our boutique's online visibility and brand recognition. Their tailored content strategies and social media management have not only increased our followers but also driven sales like never before. Market Minds is a top-notch team dedicated to delivering results.</p>
                  </div>
                </div>
              </div>         
          </Container>
        </section>
    </>
   );
}
 
export default Home;
