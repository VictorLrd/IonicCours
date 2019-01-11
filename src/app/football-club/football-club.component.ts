import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.scss']
})
export class FootballClubComponent implements OnInit {

  players = [
    {
      name:'Gabriel',
      level:'0',
      id:0
    }
  ]



  constructor() { }

  ngOnInit() {
  }

  public addPlayer(name,level){
    let player = {
      name: name,
      level: level,
      id: this.players.length
    }
    this.players.push(player)
  }

  public removePlayer(id){
    let pos = this.players.indexOf(id);
    this.players.splice(pos)
  }

  public nulPlayer(id){
    let pos = this.players.indexOf(id);
    this.players[pos]['state']="done";
  }

  public getColor(){
    return "red"
  }

  public getColorDone(state){
    return state ? "green" : "red"
  }


}
