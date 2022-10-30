import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../servicios/token.service';
//import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  isLogged = false;
  //id: number;
  //descripcion = new FormControl("");

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      } else this.isLogged = false;
  }

}

/*
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Acerca } from 'src/app/models/acerca';
import { TokenService } from '../../servicios/token.service';
import { AcercadeService } from 'src/app/servicios/acercade.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  isLogged = false;
  public acercade: Acerca[] = [];
  public editacercade: Acerca | undefined;
  public deleteacercade: Acerca | undefined;

  constructor(
    private acercadeService: AcercadeService,
    public tokenService: TokenService
  ) {}

  public getAcerca(): void {
    this.acercadeService.getAcerca().subscribe({
      next: (response: Acerca[]) => {
        this.acercade = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }
  
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      } else this.isLogged = false;
    this.getAcerca();
  }


  public onOpenModal(mode: string, acerca?: Acerca): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillModal');
    } else if (mode === 'delete') {
      this.deleteacercade = acerca;
      button.setAttribute('data-target', '#deleteSkillModal');
    } else if (mode === 'edit') {
      this.editacercade = acerca;
      button.setAttribute('data-target', '#editSkillModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddAcerca(addForm: NgForm): void {
    document.getElementById('add-skill-form')?.click();
    this.acercadeService.addAcerca(addForm.value).subscribe({
      next: (response: Acerca) => {
        console.log(response);
        this.getAcerca();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateAcerca(acerca: Acerca): void {
    this.editacercade = acerca;
    this.acercadeService.updateAcerca(acerca).subscribe({
      next: (response: Acerca) => {
        console.log(response);
        this.getAcerca();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteAcerca(idSkill: number): void {
    this.acercadeService.deleteAcerca(idSkill).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getAcerca();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  onDrop(event: CdkDragDrop<Acerca[]>) {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      } {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }
}
*/