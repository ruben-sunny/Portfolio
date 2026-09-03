import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  label: string;
  imgBg: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  name: string;
  iconClass: string;
  colorClass: string;
  skills: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'blue' | 'gold';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Student Marks & Result Evaluation',
        description: 'A Java-based student result calculator leveraging OOP concepts including abstraction, inheritance, and polymorphism. Features modular class design (Person, Student, ResultCalculator) and automated pass/fail evaluation via a clean CLI.',
        emoji: '📊',
        label: 'Java · OOP',
        imgBg: 'linear-gradient(135deg, #0f1923, #1a2840)',
        tech: ['Java', 'OOP', 'CLI', 'Inheritance', 'Polymorphism'],
        demoUrl: '#',
        githubUrl: 'https://github.com/ruben-sunny/Student-mangement'
      },
      {
        id: 2,
        title: 'Employee Management System',
        description: 'Built in Java applying encapsulation, constructors, and method overriding. Uses HashSet/TreeSet to store unique employee records, demonstrating solid understanding of the Collections Framework.',
        emoji: '👥',
        label: 'Java · Collections',
        imgBg: 'linear-gradient(135deg, #0d1b2a, #1a2a40)',
        tech: ['Java', 'Collections', 'HashSet', 'TreeSet', 'OOP'],
        demoUrl: '#',
        githubUrl: 'https://github.com/ruben-sunny/Employee-Mangement'
      },
      {
        id: 3,
        title: 'Smart Banking System',
        description: 'Console-based banking system with account creation, deposit, withdrawal, balance inquiry, and transaction history. Robust exception handling and input validation for reliable execution.',
        emoji: '🏦',
        label: 'Java · Exception Handling',
        imgBg: 'linear-gradient(135deg, #0a1a0a, #162616)',
        tech: ['Java', 'OOP', 'Exception Handling', 'CLI', 'Modular Design'],
        demoUrl: '#',
        githubUrl: 'https://github.com/ruben-sunny/Smart_BankingManagement'
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        name: 'Programming & Core',
        iconClass: 'fas fa-code',
        colorClass: 'icon-gold',
        skills: ['Java', 'C++', 'SQL', 'OOP', 'Data Structures', 'Algorithms', 'Collections Framework']
      },
      {
        name: 'Frontend Development',
        iconClass: 'fab fa-angular',
        colorClass: 'icon-blue',
        skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'RxJS', 'Angular CLI']
      },
      {
        name: 'Backend & Frameworks',
        iconClass: 'fas fa-server',
        colorClass: 'icon-cyan',
        skills: ['Spring Boot', 'REST APIs', 'Microservices', 'MVC Pattern', 'JPA / Hibernate', 'Maven']
      },
      {
        name: 'Database & Tools',
        iconClass: 'fas fa-database',
        colorClass: 'icon-purple',
        skills: ['MySQL', 'SQL Queries', 'Postman', 'Git', 'GitHub', 'Agile / Scrum']
      }
    ];
  }

  getTimeline(): TimelineItem[] {
    return [
      {
        date: '2018 – 2019',
        title: 'Secondary School (Class X)',
        description: 'Ratnam High School, Nellore — Built strong academic foundations.',
        type: 'blue'
      },
      {
        date: '2019 – 2021',
        title: 'Intermediate — MPC (Class XII)',
        description: 'Chandra Reddy Junior College, Nellore — Focused on Maths, Physics & Chemistry.',
        type: 'blue'
      },
      {
        date: '2021 – 2025',
        title: 'B.Tech in Computer Science Engineering',
        description: 'Sri Venkateswara Engineering College, Tirupati — Strong programming & OOP skills.',
        type: 'gold'
      },
      {
        date: 'July 2025 – July 2026',
        title: 'Software Developer Intern — Infosys',
        description: 'Java Full Stack (Angular) — Building production-level full-stack enterprise applications.',
        type: 'gold'
      }
    ];
  }

  getServices(): Service[] {
    return [
      {
        icon: 'fas fa-globe',
        title: 'Full Stack Development',
        description: 'End-to-end web application development using Spring Boot backend and Angular frontend with REST API integration.'
      },
      {
        icon: 'fab fa-angular',
        title: 'Angular / Frontend',
        description: 'Creating dynamic, responsive, and user-friendly interfaces with Angular, TypeScript, and modern CSS.'
      },
      {
        icon: 'fas fa-server',
        title: 'Backend API Development',
        description: 'Designing and building robust RESTful APIs with Spring Boot, clean architecture, and MySQL database integration.'
      },
      {
        icon: 'fab fa-java',
        title: 'Java Engineering',
        description: 'Building performant Java applications leveraging OOP principles, Collections Framework, and Data Structures & Algorithms.'
      }
    ];
  }

  getExperience(): Experience {
    return {
      role: 'Software Developer Intern',
      company: 'Infosys · Java Full Stack – Angular',
      period: 'July 2025 – July 2026',
      bullets: [
        'Developed full-stack application features using Spring Boot (backend) and Angular (frontend).',
        'Built and integrated RESTful APIs with Angular components for seamless data flow.',
        'Implemented responsive UI screens, services, and routing in Angular using TypeScript.',
        'Debugged and optimized code across the stack, improving performance and reliability.',
        'Collaborated using Git/GitHub and followed Agile development practices within a team.'
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'TypeScript', 'Git/GitHub', 'Agile']
    };
  }

  getTechStack(): string[] {
    return [
      'Java', 'Angular', 'Spring Boot', 'TypeScript', 'MySQL',
      'HTML5', 'CSS3', 'Git', 'REST APIs', 'Microservices', 'Postman', 'OOP'
    ];
  }
}
