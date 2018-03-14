export class Coracao{

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = `../../assets/coracao_cheio`,
        public urlCoracaoVazio: string = `../../assets/coracao_vazio`
    ){}

    public exibeCoracao():string{

        if(this.cheio){
            return this.urlCoracaoCheio;
        }
        else{
            return this.urlCoracaoVazio;
        }
    }
    
}