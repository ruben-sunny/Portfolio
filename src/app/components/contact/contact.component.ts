import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../services/reveal.directive';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  submitting = false;

  contactItems = [
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 7842653386' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'rubensunny96@gmail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Nellore / Andhra Pradesh, India' }
  ];

  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/ruben-sunny', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ruben-sunny-61801030b/', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:rubensunny96@gmail.com', label: 'Email' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' }
  ];

  sendMessage(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.submitting = true;

    // Simulate sending
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.form = { name: '', email: '', subject: '', message: '' };

      setTimeout(() => { this.submitted = false; }, 4000);
    }, 1500);
  }
}
