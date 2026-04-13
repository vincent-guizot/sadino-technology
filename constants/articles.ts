export const articles = [
   {
      slug: "scaling-llms-enterprise",
      title: "Scaling LLMs for Enterprise Software Architecture",
      category: "AI & Machine Learning",
      readTime: "12 min read",
      date: "October 24, 2024",

      image:
         "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",

      description:
         "How we integrate large language models into enterprise systems while maintaining performance and compliance.",

      intro:
         "As digital systems grow more complex, integrating AI into enterprise workflows requires architectural precision and reliability.",

      /* ================= SECTIONS ================= */

      section1: {
         title: "The Decomposition Paradox",
         content:
            "Breaking systems into microservices introduces flexibility but also complexity. The challenge is balancing modularity with performance.",
      },

      section2: {
         title: "Infrastructure as Code: The Blueprint",
         content:
            "Using IaC tools like Terraform and Kubernetes enables consistent deployments and scalable infrastructure patterns.",
      },

      /* ================= QUOTE ================= */

      quote:
         "The premium feel of an architecture comes from the space between the elements—the APIs and the network.",

      /* ================= POINTS ================= */

      points: [
         {
            title: "Event-Driven Orchestration",
            desc: "Reduce latency using async pipelines instead of synchronous calls.",
         },
         {
            title: "Observability Layers",
            desc: "Monitor system health with real-time telemetry.",
         },
         {
            title: "Edge Computation",
            desc: "Move processing closer to users for better performance.",
         },
      ],

      /* ================= AUTHOR ================= */

      author: {
         name: "Marcus Chen",
         role: "Lead Engineer",
         avatar: "https://i.pravatar.cc/100?img=3",
         bio: "Marcus is a senior engineer specializing in distributed systems and AI infrastructure.",
      },

      featured: true,
   },

   {
      slug: "micro-interactions-psychology",
      title: "The Psychology of Micro-interactions",
      category: "UI/UX",
      readTime: "6 min read",
      date: "October 12, 2024",

      image:
         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200",

      description:
         "How subtle animations improve user engagement and perception.",

      intro:
         "Micro-interactions create emotional feedback loops that enhance usability.",

      section1: {
         title: "Why Micro-interactions Matter",
         content:
            "They provide instant feedback and guide users through interactions.",
      },

      section2: {
         title: "Designing Delight",
         content:
            "Small animations can significantly impact user satisfaction.",
      },

      quote:
         "Users don't notice good UX — but they feel it.",

      points: [
         {
            title: "Feedback",
            desc: "Immediate visual response improves usability.",
         },
         {
            title: "Clarity",
            desc: "Helps users understand system behavior.",
         },
      ],

      author: {
         name: "Dina Hartono",
         role: "Product Designer",
         avatar: "https://i.pravatar.cc/100?img=5",
         bio: "Dina focuses on crafting human-centered digital experiences.",
      },
   },

   {
      slug: "data-as-product",
      title: "Beyond the Dashboard: Data as Product",
      category: "Business",
      readTime: "8 min read",
      date: "October 08, 2024",

      image:
         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",

      description:
         "Turning analytics into monetizable products.",

      intro:
         "Data is no longer just reporting — it's a product.",

      section1: {
         title: "From Insight to Product",
         content:
            "Companies are monetizing data through APIs and analytics platforms.",
      },

      section2: {
         title: "Scalability",
         content:
            "Data pipelines must be reliable and scalable to support growth.",
      },

      quote:
         "Data becomes valuable when it drives decisions.",

      points: [
         {
            title: "Monetization",
            desc: "Turn insights into revenue streams.",
         },
         {
            title: "Automation",
            desc: "Reduce manual reporting processes.",
         },
      ],

      author: {
         name: "Rizky Pratama",
         role: "Data Architect",
         avatar: "https://i.pravatar.cc/100?img=8",
         bio: "Rizky builds scalable data platforms for enterprises.",
      },
   },
];