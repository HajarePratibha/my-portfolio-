import { Component, TemplateRef, ViewChild, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule,
    FormsModule,

    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

  ],
})
export class App {

  @ViewChild('projectDialog') projectDialog!: TemplateRef<any>;
  selectedProject: any;
  title = 'portfolio';

  /* ===== NAV LINKS ===== */
  navLinks = [
    { label: 'Homepage', link: '#about' },
    { label: 'My Service', link: '#service' },
    { label: 'Project', link: '#projects' },
    { label: 'Timeline', link: '#timeline' },
    { label: 'Contact', link: '#contact' }
  ];

  isMobile = false;



  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  /* ===== SERVICES ===== */
  services = [
    {
      icon: 'devices',
      title: 'Responsive Design',
      description: 'Responsive UI for web and mobile devices'
    },
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Angular, HTML, CSS, JavaScript based applications'
    },
    {
      icon: 'phone_android',
      title: 'Software Development',
      description: 'DOTNET Core & cross-platform app development'
    },
    {
      icon: 'bug_report',
      title: 'Software Testing',
      description: 'Testing & debugging for quality applications'
    }
  ];

  /* ===== PROJECTS ===== */
  projects = [
    {
      image: 'assets/images.png',
      type: 'Front-End',
      title: 'PERSONAL PORTFOLIO',
      desc: 'UI with Angular material based portfolio website',
      screenshots: [
        'assets/portfolioimg.PNG'

      ]

    },
    {
      image: 'assets/img1.png',
      type: 'Web Development',
      title: 'CODING PLATFORM',
      desc: 'Responsive platform with clean UI by using different library',
      screenshots: [
        'assets/responsive.PNG'

      ]
    },
    {
      image: 'assets/manual.png',
      type: 'Manual testing',
      title: 'MANUAL TESTING',
      desc: 'Testing & debugging for quality applications and design the test plan',
      screenshots: [
        'assets/testplan.PNG'

      ]
    }
  ];
  timeline = [
    {
      title: 'SSC',
      year: '2017',
      desc: 'Maharashtra State Board – 85.80%'
    },
    {
      title: 'MS-CIT',
      year: '2017',
      desc: 'MKCL Computer Course - 84.90%'
    },
    {
      title: 'POST SSC (Diploma in computer engineering)',
      year: '2020',
      desc: 'Maharashtra Board of Technical Education - 78.80%'
    },
    {
      title: 'B.E Computer Science and engineering',
      year: '2024',
      desc: 'ICEEM, Chhatrapati Sambhajinagar,Maharashtra. - 6.71'
    }
  ];
  /* ===== CONTACT FORM ===== */
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Contact Form Data:', this.contactForm);
    alert('Message submitted successfully!');
  }

  /* ===== SCROLL TO TOP ===== */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  constructor(private dialog: MatDialog) { this.checkScreenSize(); }

  openDialog(project: any) {
    this.selectedProject = project;

    this.dialog.open(this.projectDialog, {
      width: '80%',
      maxWidth: '900px'
    });
  }

  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    form.reset();
  }
}
