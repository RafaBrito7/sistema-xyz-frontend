import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RedefinirSenhaComponent } from '../redefinir-senha/redefinir-senha.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(RedefinirSenhaComponent, {hasBackdrop:true, disableClose:true});
  }
}
