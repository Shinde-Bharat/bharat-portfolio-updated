export const projects = [
  {
    id: "01",

    name: "NYC Taxi Data Engineering Pipeline",
    description:
      "An end-to-end data engineering pipeline processing 3.47 million NYC Yellow Taxi records using Python, Pandas, PySpark, DuckDB, and Apache Airflow.",
    image: "/images/data-pipeline.png",
    features: [
      "Processed 3.47 million NYC Yellow Taxi records",
      "Built ETL pipeline using Python and Pandas",
      "Implemented global deduplication using DuckDB",
      "Developed separate PySpark ETL implementation",
      "Orchestrated ETL workflow using Apache Airflow",
      "Implemented data quality validation checks",
      "Performed SQL-based data analytics",
      "Created interactive Power BI dashboard",
      "Containerized Airflow environment using Docker"
    ],
    technologies: [
      "Python",
      "Pandas",
      "PySpark",
      "SQL",
      "DuckDB",
      "Apache Airflow",
      "Docker",
      "Power BI"
    ],

    github: "https://github.com/Shinde-Bharat/nyc-taxi-data-engineering",
    demo: "",
    image: "/projects/6.png",
  },

  {
    id: "02",
    name: "Grocery Store Sales Dashboard",
    description: "An interactive Power BI dashboard for analyzing grocery store sales performance, customer purchasing patterns, and regional sales trends.",
    image: "/projects/grocery-sales.png",
    features: [
      "Analyzed sales KPIs and overall business performance.",
      "Identified top-performing product subcategories.",
      "Visualized monthly sales trends and regional performance.",
      "Implemented interactive slicers for dynamic analysis.",
      "Created an interactive dashboard for business insights."
    ],
    technologies: ["Power BI", "Data Visualization", "Sales Analytics", "DAX"],
    github: "https://github.com/Shinde-Bharat/Grocery-Store-Sales-Dashboard",
    demo: "",
    image: "/projects/7.png",
  },


  {
    id: "03",
    name: "Online Bakery Platform",
    description:
      "A bakery e-commerce website with product browsing and online ordering, built for customers, shop owners, and delivery staff to operate on one platform.",
    technologies: ["React", "MongoDB", "Tailwind CSS", "Express"],
    features: [
      "Implemented role-based access for customers, shop owners, and delivery staff.",
      "Built a product management module for adding, editing, and managing bakery items.",
      "Created a responsive and user-friendly shopping experience.",
    ],
    github: "https://github.com/Shinde-Bharat/Bakery-project-system-",
    demo: "https://bakery-ecommerce-frontend.vercel.app/",
    image: "/projects/1.png",
  },
  {
    id: "04",
    name: "Signature Forgery Detection",
    description:
      "A machine learning model for detecting signature forgery and verifying authenticity from scanned signature images.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Pandas", "Matplotlib"],
    features: [
      "Utilized a multilayer perceptron model for signature analysis.",
      "Performed data analysis and visualization.",
      "Used image-processing techniques with OpenCV.",
    ],
    github: "https://github.com/Shinde-Bharat/Signature-Forgery",
    demo: "",
    image: "/projects/2.png",
  },
  {
    id: "05",
    name: "Swagat Banquet Portal",
    description:
      "An online banquet booking system for efficient hall reservation management.",
    technologies: ["PHP", "MySQL", "XAMPP", "JavaScript", "Bootstrap"],
    features: [
      "User-friendly platform for checking hall availability.",
      "User registration.",
      "Hall addition and management.",
      "Admin functionality.",
    ],
    github: "https://github.com/Shinde-Bharat/Swagat_Banquets-",
    demo: "",
    image: "/projects/3.png",
  },
  {
    id: "06",
    name: "Medical Reuse Marketplace",
    description:
      "A C2C e-commerce platform for reusable medical products, connecting sellers and buyers directly.",
    technologies: ["Python", "Django", "SQLite", "JavaScript", "Bootstrap"],
    features: [
      "User authentication.",
      "Product listing.",
      "Direct consumer-to-consumer selling.",
      "Dynamic marketplace experience.",
    ],
    github: "https://github.com/Shinde-Bharat/E-commerce-Website-for-Reusable-Medical-Products",
    demo: "",
    image: "/projects/4.png",
  },
  {
    id: "07",
    name: "Employee Management System",
    description:
      "An employee management system built with PHP and MySQL for internal HR operations.",
    technologies: ["PHP", "MySQL", "HTML", "JavaScript", "XAMPP"],
    features: [
      "Admin controls for employee management.",
      "Add/edit employee data.",
      "Attendance tracking.",
      "Salary tracking.",
      "Leave management.",
    ],
    github: "https://github.com/Shinde-Bharat/EMS",
    demo: "",
    image: "/projects/5.png",
  },
];
