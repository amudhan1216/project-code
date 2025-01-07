import{ formatCurrency} from '../scripts/utils/money.js';

console.log('check with number 2095');
if(formatCurrency(2095)==='20.95'){

    console.log('You win');
}
else{
    console.log('Lose');
}
console.log('check with number 0');

if(formatCurrency(0)==='0.00'){
    console.log('You win');
}else
{
    console.log('Lose');
}
console.log('check with number 2000.5');
if(formatCurrency(2000.5)==='20.01'){
    console.log('You win');
}else
{
    console.log('Lose');
}