"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Coffee, Users, Sparkles, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="noiseDiagonalGradient"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Nothing Before Coffee"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "Menu", id: "#menu" },
            { name: "About", id: "#about" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "Contact", id: "#contact" }
          ]}
          button={{
            text: "Order Now",            href: "#menu"
          }}
        />
      </div>
      <div id="home" data-section="home">
        <HeroCarouselLogo
          logoText="Nothing Before Coffee"
          description="Your daily dose of exceptional coffee and culinary delights in Ludhiana. Experience our passion in every cup."
          buttons={[
            { text: "Order Online", href: "#menu" },
            { text: "View Menu", href: "#menu" }
          ]}
          slides={[
            { imageSrc: "http://img.b2bpic.net/free-photo/young-friends-looking-phones_23-2148395315.jpg", imageAlt: "Cozy coffee shop interior with warm lighting" },
            { imageSrc: "http://img.b2bpic.net/free-photo/ground-coffee-black-grains-coffee-containers_1157-47312.jpg", imageAlt: "Close-up of a perfectly crafted latte with art" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-croissants-plate-cup-tea-cutting-board-blue-background_141793-27809.jpg", imageAlt: "Assortment of freshly baked pastries and desserts" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cocktails-bar-with-waitress-background_23-2147821272.jpg", imageAlt: "Modern and comfortable coffee shop seating area" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-bowl-with-coffee-beans_23-2148937294.jpg", imageAlt: "Barista pouring coffee into a cup behind the counter" },
            { imageSrc: "http://img.b2bpic.net/free-photo/person-getting-break-time-office_23-2149272023.jpg", imageAlt: "Happy customers enjoying coffee and conversation" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <AboutMetric
          title="Our Story & Passion for Coffee"
          metrics={[
            { icon: Coffee, label: "Years of Brewing", value: "10+" },
            { icon: Users, label: "Happy Customers", value: "10K+" },
            { icon: Sparkles, label: "Signature Blends", value: "15+" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="Experience the Nothing Before Coffee Difference"
          description="Discover what makes our coffee shop a beloved destination for coffee aficionados and casual visitors alike."
          features={[
            { id: "f1", title: "Handcrafted Beverages", author: "Expert Baristas", description: "Every drink is a masterpiece, crafted with precision and passion by our skilled baristas.", tags: ["Artisanal", "Fresh Brews"], imageSrc: "http://img.b2bpic.net/free-photo/cup-creamy-coffee-cutlery_250224-146.jpg", imageAlt: "Handcrafted latte with intricate latte art" },
            { id: "f2", title: "Freshly Baked Delights", author: "In-house Bakery", description: "Pair your coffee with our exquisite range of pastries and snacks, baked fresh daily.", tags: ["Gourmet", "Sweet & Savory"], imageSrc: "http://img.b2bpic.net/free-photo/three-sweet-croissants-with-sugar-powder-white-napkin_114579-37473.jpg", imageAlt: "Assortment of freshly baked croissants and muffins" },
            { id: "f3", title: "Cozy & Inviting Ambiance", author: "Relaxation Hub", description: "Our warm and inviting atmosphere is perfect for work, relaxation, or catching up with friends.", tags: ["Comfort", "Atmosphere"], imageSrc: "http://img.b2bpic.net/free-photo/red-haired-girl-smiles-because-sun-strokes-her-cheeks_8353-9131.jpg", imageAlt: "Cozy corner of a coffee shop with comfortable seating" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Signature Menu"
          description="Explore our exquisite range of coffees, snacks, and delightful treats, crafted for every palate."
          products={[
            { id: "p1", name: "Espresso Shot", price: "₹120", imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-beans-around_114579-16736.jpg", imageAlt: "Classic espresso shot" },
            { id: "p2", name: "Cappuccino", price: "₹180", imageSrc: "http://img.b2bpic.net/free-photo/2-latte-wooden-table_501050-1095.jpg", imageAlt: "Creamy cappuccino with latte art" },
            { id: "p3", name: "Iced Mocha", price: "₹220", imageSrc: "http://img.b2bpic.net/free-photo/hot-chocolate-with-whipped-cream-milk-chocolate-table_140725-11052.jpg", imageAlt: "Refreshing iced mocha with whipped cream" },
            { id: "p4", name: "Chocolate Croissant", price: "₹150", imageSrc: "http://img.b2bpic.net/free-photo/glass-jar-full-cinnamon-sticks-with-cup-tea_114579-77500.jpg", imageAlt: "Flaky chocolate croissant" },
            { id: "p5", name: "Blueberry Muffin", price: "₹130", imageSrc: "http://img.b2bpic.net/free-photo/delicious-cinnamon-rolls-with-fruit-topping_23-2148904743.jpg", imageAlt: "Delicious blueberry muffin" },
            { id: "p6", name: "Chicken Club Sandwich", price: "₹280", imageSrc: "http://img.b2bpic.net/free-photo/homemade-crispbread-toast-with-cottage-cheese-green-olives-slices-cabbage-tomatoes-corn-green-pepper-cutting-board-healthy-food-concept-top-view-flat-lay_114579-1326.jpg", imageAlt: "Gourmet chicken club sandwich" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Valued Customers Say"
          description="Hear firsthand from our patrons about their delightful experiences at Nothing Before Coffee."
          testimonials={[
            { id: "1", name: "Ananya Sharma", role: "Regular Customer", company: "Local Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/excited-joyful-beautiful-woman-gesturing-with-hand_74855-2753.jpg", imageAlt: "Ananya Sharma" },
            { id: "2", name: "Rahul Kapoor", role: "Entrepreneur", company: "Tech Startup", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-man-drinks-tea-works-laptop-freelancer-working-cafe_1321-4578.jpg", imageAlt: "Rahul Kapoor" },
            { id: "3", name: "Priya Singh", role: "Student", company: "Ludhiana University", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-green-eyed-woman-white-t-shirt-knitted-sweater-smiling-botanical-garden_197531-12363.jpg", imageAlt: "Priya Singh" },
            { id: "4", name: "Deepak & Pooja", role: "Couple", company: "Local Residents", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cute-couple-spend-time-cafe_1157-19305.jpg", imageAlt: "Deepak and Pooja" },
            { id: "5", name: "Mrs. Kaur", role: "Retiree", company: "Community Member", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-elder-woman-window_329181-14796.jpg", imageAlt: "Mrs. Kaur" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our cafe, menu, and services."
          faqs={[
            { id: "faq1", title: "What are your opening hours?", content: "We are open from 8:00 AM to 10:00 PM, seven days a week." },
            { id: "faq2", title: "Do you offer vegan options?", content: "Yes, we have a selection of vegan coffees and food items. Please ask our staff for recommendations." },
            { id: "faq3", title: "Can I place an order for pickup?", content: "Absolutely! You can place your order through our website or call us directly for convenient pickup." },
            { id: "faq4", title: "Do you have Wi-Fi available?", content: "Yes, complimentary high-speed Wi-Fi is available for all our customers." },
            { id: "faq5", title: "Are pets allowed?", content: "We welcome service animals, but due to health regulations, other pets are not permitted inside the cafe." },
            { id: "faq6", title: "Do you host private events?", content: "We do! For inquiries about hosting private events, please contact us directly to discuss your needs." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Coffee Chronicles"
          description="Dive into the aromatic world of coffee with our latest articles, insights, and updates."
          blogs={[
            { id: "blog1", category: "Brewing Tips", title: "Mastering the Art of Pour-Over Coffee at Home", excerpt: "Elevate your morning ritual with our expert guide to brewing the perfect pour-over coffee.", imageSrc: "http://img.b2bpic.net/free-photo/background-brown-bean-roasted-beans_1303-1923.jpg", imageAlt: "Pour-over coffee brewing", authorName: "Aarav Singh", authorAvatar: "http://img.b2bpic.net/free-photo/smiling-young-pretty-delivery-woman-uniform-stands-sideways-holding-food-containers-food-package-isolated_141793-43867.jpg", date: "Oct 26, 2024" },
            { id: "blog2", category: "Seasonal Specials", title: "Discover Our Delicious Autumn Coffee Menu", excerpt: "Warm up with our limited-time seasonal beverages, crafted to perfection for fall.", imageSrc: "http://img.b2bpic.net/free-photo/vertical-photo-fresh-chocolate-ice-cream-with-christmas-decorations_114579-65062.jpg", imageAlt: "Autumn-themed coffee drinks", authorName: "Ishaani Gupta", authorAvatar: "http://img.b2bpic.net/free-photo/portrait-redhead-female-barista-small-coffee-shop_613910-10446.jpg", date: "Oct 19, 2024" },
            { id: "blog3", category: "Coffee Culture", title: "The Journey of a Bean: From Farm to Cup", excerpt: "Explore the incredible journey our premium coffee beans take to reach your favorite mug.", imageSrc: "http://img.b2bpic.net/free-photo/adult-harvesting-coffee_23-2151711587.jpg", imageAlt: "Coffee beans in a farmer's hand", authorName: "Kabir Das", authorAvatar: "http://img.b2bpic.net/free-photo/bar-concept_23-2147798071.jpg", date: "Oct 12, 2024" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Visit Us Today"
          title="Your Perfect Coffee Break Awaits in Ludhiana"
          description="Stop by Nothing Before Coffee for an unforgettable experience. Find us on Malhar Road."
          buttons={[
            { text: "Get Directions", href: "https://maps.app.goo.gl/YourLocation" },
            { text: "Call Us", href: "tel:+911234567890" }
          ]}
          background={{
            variant: "plain"
          }}
          useInvertedBackground={true}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Nothing Before Coffee"
          copyrightText="© 2024 Nothing Before Coffee. All rights reserved."
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/nothingbeforecoffee", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/nothingbeforecoffee", ariaLabel: "Instagram" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
