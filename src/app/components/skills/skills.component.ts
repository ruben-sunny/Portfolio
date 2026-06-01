import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, SkillCategory } from '../../services/portfolio.service';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [];
  techStack: string[] = [];

  proficiencies = [
    { name: 'Java', pct: 88, color: 'linear-gradient(90deg, #f89820, #f5c842)' },
    { name: 'Angular / TypeScript', pct: 82, color: 'linear-gradient(90deg, #dd0031, #c3002f)' },
    { name: 'Spring Boot', pct: 78, color: 'linear-gradient(90deg, #6db33f, #4f8ef7)' },
    { name: 'MySQL / SQL', pct: 80, color: 'linear-gradient(90deg, #00d4ff, #4f8ef7)' },
    { name: 'REST API Design', pct: 83, color: 'linear-gradient(90deg, #9b6dff, #4f8ef7)' },
    { name: 'HTML / CSS', pct: 90, color: 'linear-gradient(90deg, #f5c842, #ff9f43)' },
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.categories = this.portfolioService.getSkillCategories();
    this.techStack = this.portfolioService.getTechStack();
  }
}
