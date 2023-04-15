import React from "react";
// import laptop from "../src/assets/pc-laptop.jpg";
// import cctv from "../src/assets/cctv.jpg";
// import biometric from "../src/assets/biometric.jpg";
// import intercom from "../src/assets/intercom.jpg";
// import solar from "../src/assets/solar-energy.jpg";
// import electric from "../src/assets/electric-services.jpg";
// import msb from "../src/assets/mobile-signal-boosters.jpg";
// import ac from "../src/assets/air-conditioner.jpg";
// import wifi from "../src/assets/wifi.jpg";
// import vdp from "../src/assets/video-door-phone.jpg";
// import website from "../src/assets/website-development.jpg";
// import application from "../src/assets/application-dev.jpg";
// import marketing from "../src/assets/digital-marketing.jpg";
const sublinks = [
  {
    id: "1",
    link: "pc&laptop",
    name: "PC & Laptops",
    // info: "Incretech is a leading provider of PC and laptop assembling, repairing, and reselling services. We have been in the business for more than 8 years and have a proven track record of delivering quality services to our clients. Our team of highly skilled technicians are well-versed in the latest technologies and can handle any problem that may arise. We take pride in our ability to provide fast and reliable service and strive to exceed customer expectations. We also offer competitive pricing and a wide range of products to choose from. We understand that purchasing the right PC or laptop can be a daunting task and our team is available to assist you every step of the way. Whether you need a brand new device or to repair an existing one, Incretech can help.",
    // img: "http://localhost:3000/static/media/pc-laptop.7a81ae110f3078981e8c.png",
  },
  {
    id: "2",
    link: "cctv",
    name: "CCTV",
    // info: "Incretech is a leading provider of CCTV installation services for residential and commercial customers across the India. With over 8 years of experience in the industry, we provide reliable and professional solutions to meet our customers' needs. Our experienced team of engineers and technicians are highly trained and certified to install and maintain a wide range of CCTV systems, from basic Digital  systems to the latest IP-based systems. We are dedicated to providing our clients with the highest levels of service, no matter their budget or requirements. We can provide customers with a free quote and on-site consultation to ensure they get the right system for their needs and budget. Whether you are looking for a simple CCTV system to protect your home or business or a more complex system to monitor multiple locations, we can provide the perfect solution.",
    // img: "http://localhost:3000/static/media/cctv.79db42bf96b2c103607a.png",
  },
  {
    id: "3",
    link: "biometric&AccessControl",
    name: "Biometric & Access Control",
    // info: "Incretech is a leading provider of biometric and access control installation services. Our team of certified professionals can help you secure your premises with the latest biometric and access control technologies. We provide a range of services including installation, maintenance, and repair of biometric scanners, door locks, and access control systems. Our products are designed to provide maximum security and convenience, allowing you to control access to authorized personnel only. We also offer a variety of additional services, such as custom software and hardware integration, remote access control, and end user training. With our smart security solutions, you can rest assured that your business is safe and secure.",
    // img: "http://localhost:3000/static/media/biometric.a5db870f9d1ddd94d459.png",
  },
  {
    id: "4",
    link: "EPABX&Intercom",
    name: "EPABX & Intercom",
    // info: "Incretech is an experienced provider of EPABX and Intercom installation services. We provide comprehensive solutions for businesses of all sizes, from small businesses to large enterprises. Our team of experienced engineers and technicians are capable of designing, installing and maintaining EPABX systems and intercoms to meet all of your needs. We specialize in installing and maintaining the latest technologies systems. Our solutions are tailored to your specific requirements and designed to maximize productivity, efficiency and cost-effectiveness. With our installation and maintenance services, we guarantee excellent customer service and hassle-free maintenance. We also provide training and support to ensure that you get the most out of your system.",

    // img: "http://localhost:3000/static/media/intercom.7a03ecd760d29e9985fa.png",
  },
  {
    id: "5",
    link: "networking",
    name: "Networking",
    // info: "At Incretech Pvt. Ltd, we provide comprehensive networking services to businesses of all sizes. Our team of certified professionals is well-versed in the latest technologies and can design, implement and manage complex network infrastructure. From LAN/WAN design, network security, and wireless networking to VPNs and cloud-based solutions, we have the expertise to support all your networking needs. We provide solutions that are tailored to your specific business requirements, ensuring that your network is reliable, secure, and scalable to meet your growing needs. Our proactive monitoring and maintenance services ensure that your network is always up and running smoothly, minimizing downtime and maximizing productivity. Trust us to keep your business connected and secure with our networking services.",
    // img: "http://localhost:3000/static/media/solar-energy.ea2bd4a992ff30446708.png",
  },
  {
    id: "6",
    link: "Solar-Energy",
    name: "Solar Energy",
    // info: "Incretech is a company dedicated to providing the highest quality solar installation services. We specialize in installing, maintaining, and repairing solar energy systems for residential, commercial, and industrial customers. Our team of highly trained and certified professionals have years of experience in solar engineering and design, and provide a comprehensive range of services for all types of solar installations. We provide a range of options for our customers, from traditional grid-tied systems to off-grid and hybrid systems. We provide quality solar systems that are reliable, efficient, and cost-effective. Additionally, we offer maintenance and repair services to help keep your system running smoothly and cost-effectively. With our innovative and reliable solutions, IncreTech can provide the perfect solar system to meet your needs.",
    // img: "http://localhost:3000/static/media/solar-energy.ea2bd4a992ff30446708.png",
  },
  {
    id: "7",
    link: "Electrical-Services",
    name: "Electrical Services",
    // info: "Incretech is a professional electrical services company based in the India. We provide a wide range of electrical services including electrical installation, repair, and maintenance. Our team of experienced and qualified electricians are committed to providing the highest quality of service. We use the latest tools and technologies to ensure that all our work is up to the highest standards. We also offer energy efficiency advice and solutions to help our customers reduce their energy costs. Our team is available 24/7 for emergency services and can provide same-day services for most jobs. We are passionate about providing our customers with the best electrical services and solutions for all their needs.",
    // img: "http://localhost:3000/static/media/electric-services.a41a0590798ab395d0fe.png",
  },
  {
    id: "8",
    link: "Mobile-Signal-Boosters",
    name: "Mobile Signal Boosters",
    // info: "Incretech is a leading provider of mobile signal boosters, delivering innovative solutions to enhance wireless coverage in homes, offices and vehicles. Our boosters are designed to increase signal strength and data speed, allowing better reception and improved voice clarity for all types of mobile devices. Our products are easy to install, and come with a variety of features such as adjustable gain, adjustable frequency and adjustable power. Our boosters are certified with all major carriers, ensuring that our customers receive the best signal and the most reliable coverage. With our dedication to customer service, we are committed to providing the best mobile signal boosting solutions available.",
    // img: "http://localhost:3000/static/media/mobile-signal-booster.f17aeaa5396924ccb253.png",
  },
  {
    id: "9",
    link: "Air-Conditioner",
    name: "Air Conditioner",
    // info: "Incretech is a leading air conditioning service provider. We specialize in all aspects of air conditioning, from installation and maintenance to repair and replacement. Our mission is to provide our customers with the highest quality services and products, delivered with exceptional professionalism and customer service. We strive to ensure that all of our customers are satisfied with the work we do and the products we provide. We use the latest technology and top-of-the-line equipment to ensure that all of our products are of the highest quality and are designed to last. We are committed to providing our customers with the best air conditioning solutions for their individual needs. Our technicians are highly trained and certified in all aspects of air conditioning and we take great pride in our work. We guarantee our customers the highest level of satisfaction, no matter what their air conditioning needs may be.",
    // img: "http://localhost:3000/static/media/air-conditioner.5c65692a51d617fb1850.png",
  },
  {
    id: "10",
    link: "WiFi-Extensions",
    name: "Wi-Fi Extensions",
    // info: "Incretech is a company that provides Wifi Extension services. We specialize in providing high-speed, reliable Wifi access to both residential and commercial customers. Our Wifi Extension solutions are designed to expand your current Wifi network and extend it to areas of your home or business that may not be receiving a strong signal. We offer a wide range of products, including Wifi Extenders, Access Points, and Routers, as well as a variety of technical support services. Our Wifi Extension solutions are designed to provide you with a secure, reliable, and cost-effective way to extend your current Wifi network. We are dedicated to providing our customers with the best in customer service and support. Our team of experts is available to answer any questions you may have and will help to ensure that your Wifi Extension solutions are installed and working properly.",
    // img: "http://localhost:3000/static/media/wi-fi.0094014cc6396b79bd76.png",
  },
  {
    id: "11",
    link: "Video-Door-Phone",
    name: "Video Door Phone",
    // info: "Incretech is an innovative technology company that provides advanced Video Door Phone services to business and residential customers. Our Video Door Phone systems combine a high quality digital video camera with a two-way audio intercom, allowing you to visually identify and communicate with visitors from the safety and comfort of your home or office. Our systems allow you to monitor your front door 24 hours a day, 7 days a week, with automatic recording and alerting features that give you peace of mind. We also provide professional installation and maintenance services, as well as a wide range of accessories and upgrades to customize your system. With our cutting edge Video Door Phone systems, you can rest assured that your home or business is safe and secure.",
    // img: "http://localhost:3000/static/media/video-door-phone.842bb541d21dadb5d30f.png",
  },
  {
    id: "12",
    link: "Website-Development",
    name: "Website Development",
    // info: "Incretech is a full-service web development agency dedicated to providing innovative and creative web solutions that meet the needs of our clients. We specialize in creating websites using WordPress, Flutter, React, Bootstrap, CSS, and HTML. Our experienced team of web developers and designers use these powerful technologies to create high-performance, secure, and dynamic websites that are tailored to the specific needs of our clients. We believe in providing our clients with the most up-to-date technology, support, and guidance. We strive to stay up-to-date with the latest trends in web design and development, so that we can deliver the best possible solutions for our clients. Whether you are looking for a simple website or a complex web application, our team can provide you with the web development services to meet your needs.",
    // img: "http://localhost:3000/static/media/website-dev.912f2841e54c9f9e7b2e.png",
  },
  {
    id: "13",
    link: "Application-Development",
    name: "Application Development",
    // info: "Incretech is a leading application development services provider specializing in Flutter and React Native technologies. We focus on creating custom applications for web and mobile platforms, with a focus on creating an exceptional user experience. Our team of expert developers and designers are dedicated to delivering the highest quality applications and solutions, as quickly and efficiently as possible. Our services include development, design, integration, deployment, and maintenance. We use the latest technologies and development best practices to ensure that our solutions are secure, scalable, and maintainable. Whether it's a new project or an existing one, Incretech can help you get the most out of your application development project.",
    // img: "http://localhost:3000/static/media/app-dev.234c8bdddb48ece29e5f.png",
  },
  {
    id: "14",
    link: "Digital-Marketing",
    name: "Digital Marketing",
    // info: "Incretech is a leading Digital Marketing company that offers a wide range of services to help businesses reach their goals. Our team of experienced professionals works closely with clients to create custom strategies to boost online performance. We provide comprehensive solutions to increase visibility and engagement on search engines, social media, and other digital channels. Our comprehensive services include SEO, SMM, website design, content marketing, email marketing, and more. With our experience and expertise, we help businesses grow and reach their target audience. We are committed to helping businesses reach their digital marketing goals and drive more business growth.",
    // img: "http://localhost:3000/static/media/marketing.32d89e8da2fd7cb75a66.png",
  },
  {
    id: "15",
    link: "Graphic-Design",
    name: "Graphic Design",
    // info: "Incretech Pvt. Ltd. offers professional graphic design services that can help businesses stand out in the digital age. Our team of experienced designers creates visually appealing designs that communicate your brand message effectively. We provide a wide range of graphic design services such as logo design, brochure design, social media graphics, product packaging, and more. We understand the importance of consistency in visual branding, so we work closely with our clients to ensure that the design aligns with their overall brand identity. Our designs are not only visually appealing but also communicate your message and engage your audience effectively. We use the latest design software and techniques to create high-quality designs that are optimized for digital and print media. Trust us to take your business to the next level with our graphic design services.",
    // img: "http://localhost:3000/static/media/marketing.32d89e8da2fd7cb75a66.png",
  },
];
export default sublinks;
