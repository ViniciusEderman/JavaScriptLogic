/* DESAFIO MAPA
ARRAY DE OBJETOS (CHAVE / VALOR) -> ITENS(NOME DO ARRAY)
METODOS A SEREM CRIADOS -> OBTER(CHAVE), COLOCAR({C, V})
LIMPAR() -> REMOVE O OBJETO, IMPRIMIR() -> LOGA TODO O ARRAY
*/

type Par<Key, Val> = { key: Key; value: Val };

class Mapa<Key, Val> {
  private itens: Array<Par<Key, Val>> = new Array<Par<Key, Val>>();

  public obter(key: Key): Par<Key, Val> | null {
    const encontrado = this.itens.find((par) => par.key === key);
    return encontrado || null;
  }

  public colocar(par: Par<Key, Val>) {
    const encontrado = this.obter(par.key);

    if (encontrado) {
      encontrado.value = par.value;
    } else {
      this.itens.push(par);
    }
  }

  public limpar() {
    return new Array<Par<Key, Val>>();
  }

  public imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ key: 1, value: "Pedro" });
mapa.colocar({ key: 2, value: "Rebeca" });
mapa.colocar({ key: 3, value: "Maria" });
mapa.colocar({ key: 1, value: "Gustavo" });
