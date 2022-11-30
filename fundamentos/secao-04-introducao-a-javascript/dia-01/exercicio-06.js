const status = 'aprovada';

switch (status) {
    case 'aprovada':
        console.log('Parábens, você foi aprovado(a)')
        break;
    case 'lista':
        console.log('você está na nossa lista de espera')
        break;
    case 'reprovada':
        console.log('Você foi reprovado(a)')
        break;
    default:
        console.log('Informação incorreta')
        break;
}