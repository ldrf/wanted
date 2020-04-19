import { OnInit, Directive, OnDestroy, Input, Component, ElementRef, EventEmitter, Output, Injectable, Renderer } from '@angular/core';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.scss']
})
export class UtilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable()
export class ErrorHandler {
  errorMessage: string;

  handleError(error: Response): string {

   try {debugger;
         this.errorMessage =  error.toString();

         console.log(this.errorMessage);

         return this.errorMessage;

   } catch (e) { }
 }
}

@Component({
 selector: 'error-displayer',
 styleUrls: ['./util.component.scss'],
 template: `
 <div *ngIf="errorMessage" class="danger">
    <a (click)="close()"></a>
    <p>Se ha producido un error en la consulta.<br />{{errorMessage}}</p>
 </div>
 `
})
export class ErrorDisplayer {

  @Output() errorMessageChange: EventEmitter<string> = new EventEmitter();
  @Input() errorMessage: string;

 close(){
   this.errorMessage = null;
   this.errorMessageChange.emit(this.errorMessage);
 }

}
