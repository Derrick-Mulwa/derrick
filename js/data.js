// Data for simple site (converted from portfolioData.ts)
window.personalInfo = {
  name: "Derrick Mulwa",
  title: "Data Professional",
  bio: `I'm a results-driven data professional with three years of experience delivering innovative solutions across data analysis, financial analysis, machine learning, and automation. I transform complex data into actionable insights that drive success.`,
  email: "derrickmulwa.programming@gmail.com",
  phone: "+254 799 368 479",
  location: "Nairobi, Kenya",
  social: {
    linkedin: "https://www.linkedin.com/in/derrick-mulwa/",
    github: "https://github.com/Derrick-Mulwa",
    whatsapp: "https://api.whatsapp.com/send?phone=254799368479&text=Hello%20Derrick.%0B%0BI%20am%20reaching%20out%20to%20discuss%20a%20potential%20job/project%20opportunity%20with%20you",
  }
};

window.skills = [
  {
    name: "Python",
    icon: "images/python_icon.svg",
    description: "I am adept in using Python for data collection via APIs, database connections, and web scraping; for cleaning and analyzing data with Pandas and NumPy; and for building and optimizing machine learning models using scikit-learn, TensorFlow, and Statsmodels, delivering actionable insights and accurate forecasting.",
  },
  {
    name: "Power BI",
    icon: "images/powerbi_icon.svg",
    description: "I excel in Power BI for seamless data import and cleaning using Power Query, establishing relationships across tables, crafting custom DAX measures, creating impactful visualizations, and designing interactive dashboards and reports for informed decision-making.",
  },
  {
    name: "Machine Learning & AI",
    icon: "images/ai_icon.svg",
    description: "I develop and optimize machine learning and AI models using TensorFlow and scikit-learn, emphasizing time series forecasting and large language models (LLMs). My expertise includes advanced techniques for regression, classification, and deep learning, along with data preprocessing, feature engineering, and hyperparameter tuning.",
  },
  {
    name: "Microsoft Excel",
    icon: "images/excel_icon.svg",
    description: "I possess extensive expertise in advanced Excel functionalities, utilizing complex formulas, Power Query for data transformation, PivotTables for dynamic analysis, and VBA for automation. My skills enable me to derive actionable insights, enhance operational efficiency, and support data-driven decision-making.",
  },
  {
    name: "SQL",
    icon: "images/sql_icon.svg",
    description: "My SQL expertise encompasses advanced techniques in database management and manipulation. I excel in crafting complex queries and optimizing database performance. My skills include designing normalized schemas, implementing data integrity constraints, leveraging joins for efficient data retrieval, and automating processes through stored procedures and triggers.",
  },
  {
    name: "Automation",
    icon: "images/automation_icon.svg",
    description: "I specialize in automating workflows using Power Automate and Python, integrating diverse systems through APIs, manipulating and transforming data, crafting custom scripts, and ensuring robust error handling. My solutions prioritize efficiency, security, and scalability across business processes.",
  },
  {
    name: "Communication",
    icon: "images/communication_icon.svg",
    description: "I possess strong communication skills that allow me to articulate complex technical concepts in an understandable manner. I engage effectively with diverse stakeholders and team members, ensuring clarity and alignment in discussions. My cross-team collaborative approach fosters open dialogue.",
  },
  {
    name: "Data Storytelling",
    icon: "images/data_story_icon.svg",
    description: "I transform complex data sets into engaging narratives that resonate with audiences. By combining compelling visualizations with structured frameworks, I illuminate key insights, guiding stakeholders toward informed decisions and fostering a deeper understanding of strategic implications.",
  }
];

window.projectCategories = [
  {
    name: "Power BI",
    projects: [
      {
        title: "Sales Analysis Dashboard for a Diamond Shop",
        image: "images/sales analysis dashboard.png",
        description: "This Power BI dashboard serves as a comprehensive analytical tool designed to provide deep insights into the sales and operational performance of a diamond shop. Leveraging data from a single Excel file with multiple tabs, the dashboard effectively consolidates information related to sales analysis, certified diamonds, and data entry operations.",
        tags: ["Power BI", "DAX", "Power Query", "Excel", "Sales Analysis"],
        link: "https://github.com/Derrick-Mulwa/Sales-Analysis-Dashboard/blob/main/README.md"
      },
      {
        title: "Survey Data Analysis",
        image: "images/SurveyDataAnalysis.png",
        description: "In this project, I conducted the analysis of survey data to understand merchants' detailed preferences and priorities regarding Value-Added Services. I communicated the findings through an informative Power BI report.",
        tags: ["Python", "Power BI", "Survey Data Analysis", "Strategic Thinking"],
        link: "https://github.com/Derrick-Mulwa/Survey-data-analysis/blob/main/README.md"
      },
      {
        title: "Tracking Inter-Nord's Real-time Movements",
        image: "images/InterNordDashboard.png",
        description: "I tracked the real-time movement of Inter-Nord, a Norwegian ship, and created a Power BI Dashboard to show its real-time location and speed, as well as its fuel and lube oil consumption.",
        tags: ["Power BI", "Python", "API", "Excel"],
        link: "https://github.com/Derrick-Mulwa/Inter-Nord-tracking/blob/main/README.md"
      },
      {
        title: "Google Sheets Sales Dashboard",
        image: "images/google_Sheets_dashboard.png",
        description: "This project involved the creation of a dynamic sales performance dashboard using Google Sheets. The dashboard provides insights into sales trends over time, product demand, regional performance, and deal size distribution.",
        tags: ["Google Sheet", "Data Visualisation", "Dashboard Design", "Strategic Recommendations"],
        link: "https://github.com/Derrick-Mulwa/Google-Sheets-Sales-Dashboard/blob/main/README.md"
      },
      {
        title: "Azure Cost Analysis Using Billing Data",
        image: "images/Power BI Azure_1.png",
        description: "I used azure billing data from multiple csv files to extract useful data from it. I proceeded to use the extracted data to create an interactive dashboard to give my client insights into their Azure spending.",
        tags: ["Text mining", "Python", "Power BI", "Data mining", "Excel"],
        link: "https://github.com/Derrick-Mulwa/Azure-cost-analysis-using-billing-data/blob/main/README.md"
      }
    ]
  },
  {
    name: "Machine Learning & AI",
    projects: [
      {
        title: "Object Detection System for Construction Workers' PPE",
        image: "images/prediction_1.png",
        description: "This project delivers an intelligent object detection system tailored for construction site safety, leveraging the YOLOv8 model to accurately identify six essential PPE items: Ear Muffs, Hand Gloves, Helmets, Reflective Jackets, Safety Boots, and Safety Glasses.",
        tags: ["Python", "Object Detection", "YOLOv8", "Computer Vision", "Deep Learning"],
        link: "https://github.com/Derrick-Mulwa/Object-Detection-System-for-Construction-Workers-PPE/blob/master/README.md"
      },
      {
        title: "Local RAG Document Query App with Ollama LLM",
        image: "images/ollama.jpg",
        description: "The Local RAG Document Query App is an AI-powered application that uses Retrieval-Augmented Generation (RAG) and a locally hosted Ollama LLM to provide intelligent document querying capabilities. Users can upload PDF files for context-driven question answering.",
        tags: ["Python", "RAG", "Ollama LLM", "Vector Database", "Langchain", "Streamlit"],
        link: "https://github.com/Derrick-Mulwa/Local-RAG-Document-Query-App-with-Ollama-LLM/blob/main/readme.md"
      },
      {
        title: "ASX Announcement Monitoring and AI-powered Analysis",
        image: "images/asx.jpg",
        description: "This python-based automation system empowers clients with real-time, AI-driven insights into critical market updates. It combines web scraping, pdf extraction, AI analysis, and automated notifications via email.",
        tags: ["Automation", "Python", "Web Scraping", "Selenium", "OpenAI API"],
        link: "https://github.com/Derrick-Mulwa/asx-automation-and-ai-integration/blob/main/readme.md"
      },
      {
        title: "Traffic Congestion Prediction Using Time Series and ML",
        image: "images/uber.jpg",
        description: "This project involves predicting traffic congestion levels at various junctions using time-series data and advanced machine learning models. The primary models used were ARIMA and LSTM neural networks.",
        tags: ["Time Series Forecasting", "LSTM", "ARIMA", "Ensemble modeling", "Hyperparameter tuning"],
        link: "https://github.com/Derrick-Mulwa/Traffic-Congestion-Prediction-and-Analysis-Using-Time-Series-and-Machine-Learning-Models/blob/main/README.md"
      },
      {
        title: "Feature Selection and Model Creation for NBA 2K Rating",
        image: "images/NBALogo.webp",
        description: "This project involved a comprehensive analysis of NBA players' statistics, using recursive feature elimination to identify the most important metrics that affect the 2K's overall player rating.",
        tags: ["Feature selection", "Machine Learning", "Python", "Statistics", "Jupyter Notebook"],
        link: "https://github.com/Derrick-Mulwa/Feature-selection-and-model-creation-for-NBA-2K-rating"
      }
    ]
  },
  {
    name: "Python",
    projects: [
      {
        title: "Real-Time Options Data Streaming from Schwab API",
        image: "images/schwabAPI.png",
        description: "This script is a robust Python application designed to stream live market data for 0 Days to Expiration (0DTE) S&P 500 Index (SPX) options using the Charles Schwab API. It integrates WebSocket streaming, REST API calls, and PostgreSQL storage.",
        tags: ["Data streaming", "Python", "WebSocket", "Charles Schwab API", "PostgreSQL", "Options Trading"],
        link: "https://github.com/Derrick-Mulwa/Real-Time-Options-Data-API-Streaming-Python-Script/blob/main/README.md"
      },
      {
        title: "Competitor Analytics for Etsy Shops",
        image: "images/competitoranalysis.jpeg",
        description: "This project focuses on analyzing competitor Etsy shops to derive actionable insights that can enhance market strategy and profitability. By examining posting behaviors and pricing strategies of competitors.",
        tags: ["Competitor analysis", "Python", "SQL", "Reportlab", "Pandas", "Data storytelling"],
        link: "https://github.com/Derrick-Mulwa/Competitor-Analytics-for-Etsy-Shops/blob/main/README.md"
      },
      {
        title: "Efficient Incremental Data Ingestion Pipeline",
        image: "images/etlDataIngestion.png",
        description: "This project centers on developing an incremental data ingestion pipeline. It leverages efficient data handling techniques to ingest only new or updated records from the dataset, optimizing both processing time and system resource consumption.",
        tags: ["Data Pipeline", "ETL", "Python", "SQL", "Amazon S3", "MySQL"],
        link: "https://github.com/Derrick-Mulwa/Efficient-Incremental-Data-Ingestion-Pipeline/blob/main/README.md"
      },
      {
        title: "Automated Website Testing using Selenium & Pytest",
        image: "images/automated_testing_page_object.svg",
        description: "This is a comprehensive end-to-end automated website testing solution built with Python, leveraging Selenium WebDriver for browser automation and pytest as the testing framework. Structured using the Page Object Model (POM).",
        tags: ["Automated testing", "Python", "Selenium", "Pytest", "Page Object Model"],
        link: "https://github.com/Derrick-Mulwa/Automated-Website-Testing-using-Selenium-Pytest-Page-Object-Model"
      },
      {
        title: "Data Analysis of SimplyHired.com Job Postings",
        image: "images/simplyhired.png",
        description: "This project analyzes job postings for Data and Business Analysis positions using data scraped from SimplyHired.com. The goal is to explore the job market and test several hypotheses about salary factors.",
        tags: ["Hypothesis testing", "Data cleaning", "Data Analysis", "Python", "Pandas", "Matplotlib"],
        link: "https://github.com/Derrick-Mulwa/SimplyHired-Job-Salary-Analysis/blob/main/README.md"
      }
    ]
  },
  {
    name: "Web Scraping",
    projects: [
      {
        title: "AllAfrica Web Scraper",
        image: "images/allafrica.jpg",
        description: "AllAfrica Web Scraper is a professional Python-based tool designed to extract and store news articles from AllAfrica. This project leverages Selenium for dynamic web scraping, concurrent processing for efficiency, and SQLite for structured data storage.",
        tags: ["Web scraping", "Selenium", "Python", "Concurrent processing", "SQLite", "Pandas"],
        link: "https://github.com/Derrick-Mulwa/AllAfrica-Web-Scraper/blob/master/readme.md"
      },
      {
        title: "RWG Services Web Scraper",
        image: "images/rwg.png",
        description: "The RWG Services Web Scraper is a Python-based automation tool designed to extract data from the RWG Services Object Status page. This tool leverages SeleniumBase for browser automation, handles CAPTCHA challenges.",
        tags: ["Data Extraction", "SeleniumBase", "Python", "CAPTCHA Handling", "Dynamic Pagination"],
        link: "https://github.com/Derrick-Mulwa/RWG-Services-Web-Scraper/blob/main/readme.md"
      },
      {
        title: "Web Scraper for Real Estate Agent Profiles",
        image: "./images/homesPic.avif",
        description: "This project is a web scraping tool designed to extract detailed profiles of real estate agents from various U.S. cities. Using Selenium and Python, the tool gathers essential agent information including names, ratings, and contact details.",
        tags: ["Selenium", "Python", "Chrome WebDriver", "Pandas", "Requests"],
        link: "https://github.com/Derrick-Mulwa/Real-Estate-Agent-Web-Scraping/blob/main/README.md"
      },
      {
        title: "Web Scraping SimplyHired.com",
        image: "images/simplyhired.png",
        description: "A python web scraper that scrapes data analyst job listings from SimplyHired.com. It collects details like job title, company, location, requirements, benefits, and salary, and saves them in a CSV file.",
        tags: ["Python", "BeautifulSoup", "Requests", "Pandas", "tqdm"],
        link: "https://github.com/Derrick-Mulwa/Web-Scraping-SimplyHired/blob/main/README.md"
      },
      {
        title: "Web Scraping Olympics.com Using Python",
        image: "images/parisolympics.jpg",
        description: "A Python web scraper using Selenium to extract athlete data from Olympics.com, including names, team, birth details, gender, height, birthplace, residence, disciplines, and events.",
        tags: ["Python", "Selenium", "Pandas", "CSV"],
        link: "https://github.com/Derrick-Mulwa/2024-olympics-athlete-selenium-scraper/blob/main/README.md"
      }
    ]
  },
  {
    name: "Automation",
    projects: [
      {
        title: "ASX Announcement Monitoring and AI-powered Analysis Automation",
        image: "images/asx.jpg",
        description: "This python-based automation system empowers clients with real-time, AI-driven insights into critical market updates. It combines web scraping, pdf extraction, AI analysis, and automated notifications via email.",
        tags: ["Automation", "Python", "Web Scraping", "Selenium", "PDF Processing", "OpenAI API"],
        link: "https://github.com/Derrick-Mulwa/asx-automation-and-ai-integration/blob/main/readme.md"
      },
      {
        title: "Automated Website Testing using Selenium & Pytest",
        image: "images/automated_testing_page_object.svg",
        description: "This is a comprehensive end-to-end automated website testing solution built with Python, leveraging Selenium WebDriver for browser automation and pytest as the testing framework with Page Object Model.",
        tags: ["Automated testing", "Python", "Selenium", "Pytest", "Page Object Model", "Regression testing"],
        link: "https://github.com/Derrick-Mulwa/Automated-Website-Testing-using-Selenium-Pytest-Page-Object-Model"
      },
      {
        title: "Automated Competitor Analysis and Reporting for Etsy Shop",
        image: "images/competitoranalysis.jpeg",
        description: "This project centers on automating the generation of competitor analytics reports for Etsy shops, enabling efficient and timely insights that can enhance market strategy and profitability.",
        tags: ["Automation", "Task scheduling", "Competitor analysis", "Python", "SQL", "Reportlab"],
        link: "https://github.com/Derrick-Mulwa/Automated-Competitor-Analysis-and-Reporting-for-Etsy-Shops/blob/main/README.md"
      },
      {
        title: "Seamless Dental Data Export using Power Automate",
        image: "images/POWERAUTOMATE.png",
        description: "This project focuses on developing an automated solution using Power Automate to streamline the process of extracting patient data from the Aligntech web platform and exporting it to OrthoCAD.",
        tags: ["Automation", "Power Automate", "Web Automation", "Desktop Automation", "Task Scheduling"],
        link: "https://github.com/Derrick-Mulwa/Seamless-Dental-Data-Export-with-Power-Automate/blob/main/README.md"
      }
    ]
  },
  {
    name: "SQL & Database",
    projects: [
      {
        title: "Hospital Management System Database",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
        description: "The Hospital Management System database was designed to manage various aspects of hospital operations, including patient management, physician management, appointments, room allocation, and billing. This documentation provides an overview of the database schema and implementation.",
        tags: ["SQL", "MySQL", "ERD Diagram", "Procedures", "Triggers", "Functions"],
        link: "https://github.com/Derrick-Mulwa/Hospital-Management-System-Database/blob/main/README.md"
      }
    ]
  },
  {
    name: "Microsoft Excel",
    projects: [
      {
        title: "Excel-Based Automated Invoicing System using VBA",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        description: "This Excel-based Automated Invoicing System, powered by Visual Basic for Applications (VBA), streamlines the invoicing process for a data consultancy. It automates client-specific invoice generation, service tracking, and recordkeeping.",
        tags: ["Microsoft Excel", "VBA", "Excel Formulas", "Data Validation", "Conditional Formatting"],
        link: "https://github.com/Derrick-Mulwa/Excel-Based-Automated-Invoicing-System-VBA/blob/main/README.md"
      },
      {
        title: "Google Sheets Sales Dashboard",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        description: "This project involved the creation of a dynamic sales performance dashboard using Google Sheets. The dashboard provides insights into sales trends over time, product demand, regional performance, and deal size distribution.",
        tags: ["Google Sheet", "Data Visualisation", "Dashboard Design", "Strategic Recommendations"],
        link: "https://github.com/Derrick-Mulwa/Google-Sheets-Sales-Dashboard/blob/main/README.md"
      }
    ]
  }
];
