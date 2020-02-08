import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  public faqs: {title: string, description: string}[];

  ngOnInit() {
    this.faqs = this.getFaqs();
  }

  getFaqs = (): {title: string, description: string}[] => {
    return [
      { 
        title: 'What is a hackathon?',
        description: 'A hackathon is a 24-hour competition where programmers and researchers come together to build and design something cool.'
      },
      {
        title: 'Who is eligible?',
        description: 'Any students, academics and recent graduates over 18 are welcome to apply.'
      },
      {
        title: 'What should I bring?',
        description: 'Your ID, a laptop and charger and your A-game.'
      },
      {
        title: 'What if I can\'t code?',
        description: 'That\'s fine! Hackathons are great places to learn, so don\'t worry. There will be mentors available to help if you need.'
      },
      {
        title: 'What is the maximum team size?',
        description: 'There must only be 4 people per team. You will have the chance to join a team on the day.'
      },
      {
        title: 'How much does it cost?',
        description: 'It\'s 100% FREE'
      },
      {
        title: 'Can I sleep over?',
        description: 'The JKCC is open 24 hours. Feel free to bring a sleeping back if you need some rest.'
      },
      {
        title: 'Can I take photos?',
        description: 'Yes, but remember our Code of Conduct. If you don\'t want your photo taken, we will give you a lanyard on the day.'
      },
      {
        title: 'Can I volunteer at the event?',
        description: 'Absolutely! Please send an email to <a class="purple_link" href="mailto:contact@enucs.org.uk">contact@enucs.org.uk</a> to get involved.'
      },
    ];
  }

}
