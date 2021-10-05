import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spirit-box',
  templateUrl: './spirit-box.component.html',
  styleUrls: ['./spirit-box.component.less']
})
export class SpiritBoxComponent implements OnInit {
  boxQuestions = [
    {
      title: "Aggression",
      questions: [
        "What do you want?",
        "Why are you here?",
        "Do you want to hurt us?",
        "Are you angry?",
        "Do you want us here?",
        "Shall we leave?",
        "Should we leave?",
        "Do you want us to leave?",
        "What should we do?",
        "Can we help?",
        "Is anything wrong?",
        "Are you friendly?"
      ]
    },
    {
      title: "Location",
      questions: [
        "Where are you?",
        "Are you close?",
        "Can you show yourself?",
        "Give us a sign.",
        "Let us know you are here.",
        "Show yourself.",
        "Can you talk?",
        "Speak to us.",
        "Are you here?",
        "Are you with us?",
        "Anybody with us?",
        "Is anyone here?",
        "Anybody in the room?",
        "Anybody here?",
        "Is there a spirit here?",
        "Is there a Ghost here?",
        "What is your location?"
      ]
    },
    {
      title: "Age",
      questions: [
        "How old are you?",
        "How young are you?",
        "What is your age?",
        "When were you born?",
        "Are you a child?",
        "Are you old?",
        "Are you young?"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
