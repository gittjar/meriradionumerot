import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alus } from '../models/alusrekisteri';
import { AlusService } from '../alus.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alus-details',
  templateUrl: './alus-details.component.html',
  styleUrls: ['./alus-details.component.css']
})
export class AlusDetailsComponent {

    alus: Alus | undefined;
    alusdetails: any;
    pageTitle = 'Aluksen lisätiedot';
    currentIndex: number = 0; // initialize it to 0


  constructor (private router: Router, private activatedreitti: ActivatedRoute, private location: Location, private alusService: AlusService ) {}

  ngOnInit(){
    const id = Number(this.activatedreitti.snapshot.paramMap.get('id'));
    if(id){
      this.getAlusDetails(id);
    }

  }

  getAlusDetails(ID: number): any {
    this.alusService.getAlusDetails(ID).subscribe((data: any) => {
      this.alusdetails = data;
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
  }

  // +1 
  goNext(): void{
    const id = Number(this.activatedreitti.snapshot.paramMap.get('id'));
    if(id){
      this.currentIndex++;
      const nextId = id + 1; // assuming ids are incremental
      this.router.navigate(['/alus-details/', nextId]);
      this.getAlusDetails(nextId);
    }
  }

  // -1
  goPrevious(): void{
    const id = Number(this.activatedreitti.snapshot.paramMap.get('id'));
 
    if(id > 1){  
      this.currentIndex++;
      const prevId = id - 1; 
      this.router.navigate(['/alus-details/', prevId]);
      this.getAlusDetails(prevId);
    }

  }

  //goback napin metodi kyseessa
  goBack(): void {
    this.router.navigate(['/alusrekisteri/']);
}

}
