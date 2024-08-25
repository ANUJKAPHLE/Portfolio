import Image from "next/image";
import coursera from "@/assets/coursera.jpeg";

const About = () => {
  return (
    <div className="pb-20">
      <div className="pt-14 pb-24 bg-black text-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28">
          <div className="mb-3">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] font-bold leading-[42px]">
              About Me
            </h1>
            <div className="w-full h-px my-6 bg-white border-0" />
          </div>
          <div>
            {[
              {
                title: "Who Am I",
                content:
                  "Hello! I’m Anuj Kaphle, a passionate UI/UX designer based in Kathmandu with over two years of experience in creating intuitive, user-centered designs. My journey in design began with a fascination for how visual aesthetics and functionality come together to shape user experiences. Over the years, I’ve honed my skills in crafting interfaces that are not only visually appealing but also highly functional and easy to use.",
              },
              {
                title: "What I do",
                content:
                  "I’m a designer specializing in UI/UX design and branding. My work focuses on creating intuitive digital experiences and strong brand identities that resonate with users and stand out in the market. Whether it’s crafting user-friendly interfaces or developing cohesive brand visuals, I’m passionate about design that not only looks great but also delivers meaningful impact. Beyond design, I’m deeply interested in how technology can improve lives, and I’m constantly exploring new ways to enhance the user experience. When I’m not working, you can find me exploring the vibrant culture of Kathmandu, experimenting with photography, or brainstorming my next creative project. I’m always excited to collaborate on innovative projects and bring new ideas to life.",
              },
              {
                title: "Working experience",
                content:
                  "My journey into the world of design began as a Graphics Intern at Hammer Lab, where I quickly transitioned into the role of Junior Graphic Designer. It was here that I honed my foundational skills, learning the art of visual storytelling and understanding the impact of design on user engagement. My time at Hammer Lab was transformative, as it allowed me to explore the nuances of design and solidify my passion for creating visually compelling content. With a growing interest in how design could influence user behavior on a deeper level, I decided to pivot into UI/UX design. I applied for a UI/UX Designer role, and for the next two years, I immersed myself in crafting user-centric designs that not only looked great but also provided seamless and intuitive experiences. This experience was a significant leap in my career, as I learned to balance aesthetics with functionality, always keeping the user at the forefront of my design process. After one years of sharpening my UI/UX skills, I joined Arhant Solution as a Junior UI/UX Designer. This role has allowed me to further expand my expertise, working on diverse projects that challenge me to innovate and push the boundaries of what great design can achieve. Today, I continue to explore new design methodologies, striving to create digital experiences that are both beautiful and highly functional.",
              },
              {
                title: "Design course",
                content:
                  "I have completed the Google UX Design course, where I gained in-depth knowledge and practical skills in user experience design. The course covered essential topics like user research, wireframing, prototyping, and usability testing. It also provided hands-on experience with industry-standard tools and methodologies, allowing me to further enhance my ability to create user-centered designs that are both functional and visually appealing.",
                image: { src: coursera, alt: "course certificate" },
              },
            ].map((section, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                  <h2 className="w-full lg:w-1/2 font-semibold leading-[43.2px] text-left text-[24px] sm:text-[28px] md:text-[32px] lg:text-[22px]">
                    {section.title}
                  </h2>
                  <div className="w-full lg:w-1/2 leading-[27px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px]">
                    {section.image ? (
                      <a
                        href="https://coursera.org/share/9ebc871716c330fb5218994db87b7845"
                        target="_blank"
                      >
                        <Image
                          src={section.image.src}
                          className="pt-7 h-[440px] w-[500px] pb-8"
                          alt={section.image.alt}
                        />
                      </a>
                    ) : null}
                    <p>{section.content}</p>
                  </div>
                </div>
                <div className="w-full h-px my-6 bg-white border-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
