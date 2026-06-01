import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Service } from '../../services/portfolio.service';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.services = this.portfolioService.getServices();
  }
}
