import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/services/users/users.service';
import { User } from '../../../../shared/interfaces/User';
import { BehaviorSubject, combineLatest, map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  public users$!: Observable<User[]>; // Fluxo original de usuários
  public filteredUsers$!: Observable<User[]>; // Fluxo filtrado de usuários
  public filterControl: FormControl; // Controlador para o input de filtro

  constructor(private userService: UsersService) {
    this.filterControl = new FormControl('');
  }

  ngOnInit(): void {
    this.users$ = this.userService.list();

    this.filteredUsers$ = combineLatest([
      this.users$,
      this.filterControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([users, filter]) =>
        users.filter(user =>
          user.name.toLowerCase().includes(filter.toLowerCase())
        )
      )
    );
  }
}
