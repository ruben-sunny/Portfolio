import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-tech-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-strip.component.html',
  styleUrls: ['./tech-strip.component.scss']
})
export class TechStripComponent implements OnInit {
  techStack: string[] = [];

  get doubled(): string[] {
    return [...this.techStack, ...this.techStack];
  }

  techIcons: Record<string, string> = {
    'Java': 'fab fa-java',
    'Angular': 'fab fa-angular',
    'Spring Boot': 'fas fa-leaf',
    'TypeScript': 'fab fa-js-square',
    'MySQL': 'fas fa-database',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'Git': 'fab fa-git-alt',
    'REST APIs': 'fas fa-code-branch',
    'Microservices': 'fas fa-server',
    'Postman': 'fas fa-tools',
    'OOP': 'fas fa-shield-alt'
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.techStack = this.portfolioService.getTechStack();
  }

  getIcon(tech: string): string {
    return this.techIcons[tech] || 'fas fa-code';
  }
}
