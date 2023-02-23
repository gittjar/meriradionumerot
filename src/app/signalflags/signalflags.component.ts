import { Component, OnInit } from '@angular/core';
import { SignalFlag } from '../models/signalflag';
import { SignalflagService } from '../signalflag.service';

@Component({
  selector: 'app-signalflags',
  templateUrl: './signalflags.component.html',
  styleUrls: ['./signalflags.component.css']
})
export class SignalflagsComponent implements OnInit {

flagsaddress: SignalFlag [] = [];

constructor (private hpservice : SignalflagService) {}

getFlag(): void {
  this.hpservice.getFlag().subscribe(flagsaddress => this.flagsaddress = flagsaddress);
}

ngOnInit(): void {
  this.getFlag();
}

}
