const grade = 'ojjjoj';

if (grade >= 80) {
    console.log('Parabéns, você foi aprovada!');
} else if (grade <= 80 && grade >= 60) {
    console.log('Você está na lista de espera');
} else if (grade < 60) {
    console.log('Infelizmente, você reprovou');
} else {
    console.log('Opção inválida');
};