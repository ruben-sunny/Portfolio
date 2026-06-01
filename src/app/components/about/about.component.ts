import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, TimelineItem } from '../../services/portfolio.service';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  timeline: TimelineItem[] = [];

  stats = [
    { num: '3+', label: 'Projects Built' },
    { num: '1', label: 'Internship' },
    { num: '8+', label: 'Technologies' },
    { num: '2025', label: 'Graduate' }
  ];

  tags = [
    { icon: 'fas fa-graduation-cap', label: 'B.Tech CSE (2025)' },
    { icon: 'fas fa-briefcase', label: 'Infosys Intern' },
    { icon: 'fas fa-lightbulb', label: 'Problem Solver' },
    { icon: 'fas fa-rocket', label: 'Fast Learner' },
    { icon: 'fas fa-users', label: 'Team Player' },
    { icon: 'fas fa-code', label: 'Clean Coder' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.timeline = this.portfolioService.getTimeline();
  }
}
