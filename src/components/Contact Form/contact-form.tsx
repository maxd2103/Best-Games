import { Component, State, h, } from '@stencil/core';

@Component({
    tag: 'contact-form',
    styleUrl: 'contact-form.css'
  })
  export class ContactForm {
  
    selectedReceiverIds = [102, 103];
    @State() value: string;
    @State() selectValue: string;
    @State() secondSelectValue: string;
    @State() avOptions: any[] = [
      { 'id': 101, 'name': 'Mark' },
      { 'id': 102, 'name': 'Smith' }
    ];
  
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.value);
    }
  
    handleChange(event) {
      this.value = event.target.value;
  
      if (event.target.validity.typeMismatch) {
        console.log('this element is not valid')
      }
    }
  
    handleSelect(event) {
      console.log(event.target.value);
      this.selectValue = event.target.value;
    }
  
    handleSecondSelect(event) {
      console.log(event.target.value);
      this.secondSelectValue = event.target.value;
    }
  
    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Email:
            <input type="email" value={this.value} onInput={(e) => this.handleChange(e)} />
          </label>
  
          <select onInput={(event) => this.handleSelect(event)}>
            <option value="tictactoe" selected={this.selectValue === 'tictactoe'}>TicTacToe</option>
            <option value="spaceship" selected={this.selectValue === 'spaceship'}>Space Ship</option>
            <option value="memorie" selected={this.selectValue === 'memorie'}>Memorie</option>
          </select>
  
          <select onInput={(event) => this.handleSecondSelect(event)}>
            {this.avOptions.map(recipient => (
              <option value={recipient.id} selected={this.selectedReceiverIds.indexOf(recipient.id) !== -1}>{recipient.name}</option>
            ))}
          </select>
  
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }