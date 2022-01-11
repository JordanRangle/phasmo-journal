import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ouija',
  templateUrl: './ouija.component.html',
  styleUrls: ['./ouija.component.less']
})
export class OuijaComponent implements OnInit {

  ouijaQuestions = [
    {
      title: "Special",
      hint: "You can force trigger a hunt by playing hide and seek with the ghost. When playing on nightmare the board can give you a general idea of what your sanity level is.",
      questions: [
        "Hide and seek?",
        "What is my sanity?"
      ]
    },
    {
      title: "Location",
      hint: "The location given will be the currently occupied room of the Ghost. In the Setup Phase it is Ghost Room, so using the Ouija Board earlier is one sure way to identify it. However, once the Setup Phase ends, the Ghost will (most likely) begin roaming, at which point asking for its location on the Board will give out its current location at that time.",
      questions: [
        "Where are you?",
        "What is your favorite room?",
        "Where is your room?",
        "What is your room?",
        "Are you here?",
        "Are you close?",
        "Are there any spirits?",
        "Are you near?",
        "Are you around?"
      ]
    },
    {
      title: "Age",
      hint: "The age of the ghost is randomly generated number between 2 and 90 years that is predetermined at level start.",
      questions: [
        "How old are you?",
        "What is your age?",
        "Are you old?",
        "Are you young?"
      ]
    },
    {
      title: "Death",
      hint: "The length of death of a ghost is a randomly generated number between 50 and 1000 years that is predetermined at level start.",
      questions: [
        "How long have you been dead?",
        "How many years ago did you die?",
        "How long have you been here?",
        "How long ago did you die?",
        "When did you die?"
      ]
    },
    {
      title: "Room",
      hint: "The response will be determined by the amount of people in the room. If the ghost is in the same room as the Ouija Board, the count is added by one.",
      questions: [
        "How many are in this room?",
        "How many people are in this room?",
        "How many people are here?",
        "How many ghosts are in this room?",
        "How many ghosts are here?",
        "Are you alone?",
        "Are we alone?",
        "Who is here?",
        "Who is in this room?"
      ]
    },
    {
      title: "Victim",
      hint: "The victim name is a randomly picked first name of either gender that is predetermined at level start.",
      questions: [
        "Who did you kill?",
        "Who is your victim?",
        "What is the name of the person you killed?",
        "What is the name of the person you murdered?",
        "What is your victim?",
        "Did you murder?",
        "Who did you murder?",
        "Who died?"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
