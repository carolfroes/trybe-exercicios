const chessPiece = 'rei';

switch (chessPiece.toLowerCase()) {
    case "bispo":
        console.log('Bispo -> diagonal, quantas casas estiverem disponíveis');
        break;
    case 'rainha':
        console.log('Rainha -> vertical, horizontal e diagonal, mas quantas casas estiverem disponíveis');
        break;
    case 'rei':
        console.log('Rei -> vertical, horizontal e diagonal, mas uma casa por vez');
        break;
    case 'torre':
        console.log('Torre -> vertical e horizonta, quantas casas estiverem disponíveis');
        break;
    case 'torre':
        console.log('Cavalo -> duas casas horizontal e duas na vertical');
        break;
    case 'peão':
        console.log('Peão -> vertical, mas apenas uma casa por vez');
        break;
    default:
        console.log('Erro, peça inválida');
        break;
}