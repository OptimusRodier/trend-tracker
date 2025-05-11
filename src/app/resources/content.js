import { Logo } from "@/once-ui/components";

/*const person = {
  firstName: "Selene",
  lastName: "Yu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  //location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};*/





const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `trend tracker`,
  description: `Portfolio website showcasing my work as a Rodierintel smart trend analytics dashboard `,
  headline: <>Building bridges between design and code</>,

  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};



const politics = {
  path: "/politics",
  label: "Politics Trends",
  title: "See trending political terms/hashtags.",
  description: `check the recent political trends`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const ecommerce = {
  path: "/ecommerce",
  label: "E-Commerce Trends",
  title: `E-Commerce Trends`,
  description: `Ecommerce thingy and dev projects by Rodier`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const others = {
  path: "/others",
  label: "Others",
  title: `to be confirmed `,
  description: `A photo collection `,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
  ],
};
const about = {
  path: "/about",
  label: "About",
  title: `About the project`,
  //description: `Meet ${person.name}, ${person.role} from ${person.location}`,


 
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        
        
      },
    ],
  },
};

export {  home, about, politics, ecommerce, others };
