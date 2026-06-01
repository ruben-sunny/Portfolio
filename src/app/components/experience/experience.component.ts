import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Experience } from '../../services/portfolio.service';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience!: Experience;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experience = this.portfolioService.getExperience();
  }
}
