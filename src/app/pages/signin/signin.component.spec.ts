import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page :any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(SigninComponent);

    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  describe('given form',()=>{
    it('when email is empty, then recover password button should be disabled',()=>{
      setEmail(''),
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })

    it('when email is invalid, then recover password button should be disabled',()=>{
      setEmail('invalidEmail'),
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })

    it('when email is valid, then recover password button should be enabled',()=>{
      setEmail('valid@gmail.com'),
      expect(recoverPasswordButton().disabled).toBeFalsy();
    })

    it('when email is empty, then login button should be disabled',()=>{
      setEmail(''),
      setPassword('anypassword'),
      expect(loginButton().disabled).toBeTruthy();
    })

    it('when email is invalid, then login button should be disabled',()=>{
      setEmail('invalidEmail'),
      setPassword('anypassword'),
      expect(loginButton().disabled).toBeTruthy();
    })

    it('when password is empty, then login button should be disabled',()=>{
      setEmail('valid@gmail.com'),
      setPassword(''),
      expect(loginButton().disabled).toBeTruthy();
    })

    it('when password is not empty, then login button should be disabled',()=>{
      setEmail('valid@gmail.com'),
      setPassword('anypassword'),
      expect(loginButton().disabled).toBeTruthy();
    })
  })

function setEmail(value:string){
  component.form.get('email')?.setValue(value),
  fixture.detectChanges();
}

function setPassword(value:string){
  component.form.get('password')?.setValue(value),
  fixture.detectChanges();
}

function recoverPasswordButton() {
  return page.querySelector('[test-id="recover-password-button]');
}

function loginButton() {
  return page.querySelector('[test-id="login-button]');
}


});


