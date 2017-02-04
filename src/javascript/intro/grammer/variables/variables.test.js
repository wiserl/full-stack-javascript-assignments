import Test from 'ava';
import * as Assignment from './';

Test('greeting is proper', t => {
  t.is(Assignment.greeting, 'Bonjour');
});

Test('message is proper', t => {
  t.is(Assignment.message, 'Hey!');
});

Test('saying is proper', t => {
  t.is(Assignment.saying, 'Booyah');
});  

Test('salut is proper', t => {
  t.is(Assignment.salut, 'cha');
});  
