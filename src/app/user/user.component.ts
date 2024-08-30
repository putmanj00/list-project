import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { type User } from './user.model';
// import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  // standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
  // imports: [CardComponent],
})
export class UserComponent {
  // >>> Decorator approach <<<
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // Output function, alternative to decorator output; not a signal
  // select = output<string>();

  // >>> Signal approach (need to import 'computed' and 'input') <<<
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
