<script>
//import firebase from './main';
//import firebase from 'firebase/app';// NÃO DAR PRA USAR NÉ
import 'firebase/auth';
import api from './src/services/api';
export default {

  contructor(props){
    super(props):
    this.state = {
      book:[]
    }
  },
  componentDidMount(){
const response = await api.get('/book');
this.setState({
  book: response.data
});
  },
 // name: 'HomeApp', (ROTA NÃO QUER PEGAR)
  data() {
    return {
      sidebar: false,
      
      books: [
        {
          title: "Dev",
          author: "Rayza",
          description: "historia de como vira um dev",
          image: "..." ,
        },
        {
          title: "Matematica",
          author: "Carla",
          description: "introdução a matematica",
          image: "..."
        },
        {
          title: "Programação",
          author: "Silva",
          description: "logica para programação",
          image: "..."
        },
        {
          title: "Codar ou não codar",
          author: "Simplicio",
          description: "entenda a filosofia logica",
          image: "..."
        },
        {
          title: "C",
          author: "Carla",
          description: "comece da base",
          image: "..."
        },
        {
          title: "Dev III",
          author: "Carla",
          description: "IA a nova velha amiga",
          image: ""
        },
        {
          title: "Dev III",
          author: "Carla",
          description: "IA a nova velha amiga",
          image: ""
        },
        {
          title: "Dev III",
          author: "Carla",
          description: "IA a nova velha amiga",
          image: ""
        },
        
      
      ],
      modalLeitura: false,
      modalEdicao: false,
      modalPerfil:false,
      livroSelecionado: null,
      novoLivro: {
        title: "",
        author: "",
        description: "",
        image: ""
      }
    };
  },
  methods:{
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    sair(){
window.location.href="login.html";
      alert("esta pegando");
    },
    perfil(){
      this.modalPerfil = true;
    },
    fecharModalLeitura() {
      this.modalLeitura = false;
      this.livroSelecionado = null;
    },
    fecharModalPerfil() {
      this.modalPerfil = false;
      this.livroSelecionado = null;
    },
    home(){
      window.location.href="App.vue";
      alert("esta pegando");
    },
    ler(){
      alert("esta pegando");

    },
    lerLivro(book) {
      this.livroSelecionado = book;
      this.modalLeitura = true;
    },
    
      editarLivro(book) {
      this.livroSelecionado = { ...book }; // Cria uma cópia do livro para edição
      this.modalEdicao = true;
    },
    fecharModalEdicao() {
      this.modalEdicao = false;
      this.livroSelecionado = null;
    },
    salvarEdicao() {
      alert('Atualização Salva')
      this.modalEdicao = false;
      this.livroSelecionado = null;
    },
    adicionarLivro() {
      if (this.novoLivro.title && this.novoLivro.author && this.novoLivro.description && this.novoLivro.image) {
        this.books.push({ ...this.novoLivro });
        this.fecharModalAdicionar();
        this.novoLivro = { title: "", author: "", description: "", image: "" }; // Reseta os campos do formulário
      } else {
        alert('Por favor, preencha todos os campos!');
      }
    } ,
    },
    remover(){
      alert("esta pegando");
    },
    mylivros(){
      alert("esta pegando");
    },
    livros(){
      alert("esta pegando");
    },
  }
const styles = StyleSheet.create({
  template:{
   flex:1
} 
});
</script>
<template>
  <v-app>
    <v-app-bar app color="primary" dark> 
      <v-app-bar-nav-icon @click="toggleSidebar">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Biblioteca Digital</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- BOTÃO NAVBAR-->
      <v-btn text @click="home()"><v-icon>mdi-home</v-icon>Início</v-btn>
      <v-btn text @click="perfil()">
      <v-icon>mdi-account</v-icon><a href="app.vue" style="color: aliceblue; text-decoration: none;">Perfil</a></v-btn>
      <router-link to="/login"></router-link>  <v-btn text @click="sair()"><v-icon>mdi-logout</v-icon>Sair</v-btn>
<!--MODEL PERFIL-->
      <v-dialog v-model="modalPerfil" class="modelPerfil" color="white" max-width="600">
                  <v-card class="custom-modal">
                    <v-spacer></v-spacer>
                    
                    <img src="./assets/Imgadmin.jpg" class="modelPerfil_img" alt="Diretora Olivia">
                  
                    <v-spacer></v-spacer>
              
                  <h4 class="modelPerfil_h1" >Perfil</h4><P class="modelPerfilP">Admin adminProfile</P>
                  <v-spacer></v-spacer>
                <h4 class="modelPerfil_h1">Email</h4><P class="modelPerfilP">adminProfile@gmail.com</P>
                  <v-spacer></v-spacer>
                <h4 class="modelPerfil_h1">Formação</h4><P class="modelPerfilP">Doutorado em Praticas Tradicionais,Mestrado em Educação,Licenciatura em pedagogia</P>
                <v-spacer></v-spacer>
                <h4 class="modelPerfil_h1">Descrição</h4>
                 <p class="modelPerfilP">O incentivo ao avanço tecnológico, assim como a
                   estrutura atual da organização faz parte de um processo
                   de gerenciamento de todos os recursos funcionais envolvidos. </p> 
                      
                    <v-card-actions>
                <v-btn color="primary" @click="fecharModalPerfil()">Fechar</v-btn>
              </v-card-actions>
            </v-card>
         </v-dialog>
      <!-- BARRA DE NAVEGAÇÃO-->
      <v-navigation-drawer color="primary" v-model="sidebar" width="300" height="250px"  absolute temporary>
     <v-list>
        <v-list-item link to="/adicionar-book">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title-btn @click="adicionarLivro()">adicionar book</v-list-item-title-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/remover-book">
          <v-list-item-icon>
            <v-icon>mdi-minus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title-btn @click="remover()">Remover Book</v-list-item-title-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/store-book">
          <v-list-item-icon>
            <v-icon>mdi-book-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title-btn @click="mylivros()">Meus Livros</v-list-item-title-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/acessar-book">
          <v-list-item-icon>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title-btn @click="livros()">Livros</v-list-item-title-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
      </v-navigation-drawer>
   </v-app-bar>
<!--<router-view></router-view> (ROTA NÃO QUER PEGAR)--->
   <!-- CORPO DE LIVROS-->
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="(book, index) in books"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card color="#FF7F50">
              
              <v-img :src="book.image" height="200px"></v-img>
              <v-card-title>{{ book.title }}</v-card-title>
              <v-card-subtitle>{{ book.author }}</v-card-subtitle>
              <v-card-text>{{ book.description }}</v-card-text>
              <v-card-actions>

                <v-btn text @click="lerLivro()">leia</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="editarLivro()">Editar</v-btn>
              </v-card-actions>

              <v-dialog v-model="modalLeitura" color="white" max-width="600">
                  <v-card class="custom-modal">
                    <v-spacer></v-spacer>
                    <v-card-title>{{ book.title }}</v-card-title>
                    <v-spacer></v-spacer>
              <v-card-text>O incentivo ao avanço tecnológico, assim como a estrutura atual da organização faz 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                parte de um processo de gerenciamento de todos os recursos funcionais envolvidos. O empenho 
                em analisar o novo modelo estrutural aqui preconizado garante a contribuição de um grupo importante 
                na determinação das direções preferenciais no sentido do progresso. Caros amigos, a constante divulgação 
                das informações afeta positivamente a correta previsão do investimento em reciclagem técnica. A nível organizacional, 
                o comprometimento entre as equipes ainda não demonstrou convincentemente que vai participar na mudança 
                em analisar o novo modelo estrutural aqui preconizado garante a contribuição de um grupo importante 
                na determinação das direções preferenciais no sentido do progresso. Caros amigos, a constante divulgação 
                das informações afeta positivamente a correta previsão do investimento em reciclagem técnica. A nível organizacional, 
                o comprometimento entre as equipes ainda não demonstrou convincentemente que vai participar na mudança 
                em analisar o novo modelo estrutural aqui preconizado garante a contribuição de um grupo importante 
                na determinação das direções preferenciais no sentido do progresso. Caros amigos, a constante divulgação 
                das informações afeta positivamente a correta previsão do investimento em reciclagem técnica. A nível organizacional, 
                o comprometimento entre as equipes ainda não demonstrou convincentemente que vai participar na mudança 
                em analisar o novo modelo estrutural aqui preconizado garante a contribuição de um grupo importante 
                na determinação das direções preferenciais no sentido do progresso. Caros amigos, a constante divulgação 
                das informações afeta positivamente a correta previsão do investimento em reciclagem técnica. A nível organizacional, 
                o comprometimento entre as equipes ainda não demonstrou convincentemente que vai participar na mudança 
                das formas de ação.</v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="fecharModalLeitura">Fechar</v-btn>
              </v-card-actions></v-card>
                </v-dialog>
             
            </v-card>
            <v-dialog class="modelEditar" v-model="modalEdicao" max-width="700">
            <v-card>
             
              <v-card-text>
                
                <h1 class="h1Edit">Titulo: {{ message }}</h1>
<input class="inputEdit" v-model="message" placeholder="edit me" />
                <h1 class="pEdit">Author: {{ message }}</h1>
<input class="inputEdit" v-model="message" placeholder="edit me" />
                <h1 class="pEdit">Descrição: {{ message }}</h1>
<input  class="inputEdit" v-model="message" placeholder="edit me" />
         <v-text>

         </v-text>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="salvarEdicao">Salvar</v-btn>
          <v-btn text @click="fecharModalEdicao">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-col>
        </v-row>
      
        
      </v-container>
    
    </v-main>
    <!-- MEU FOOTER-->
    <footer>
        <div class="link_rodape">
    <a href="https://www.instagram.com/rayza.carla/"> <img class="icon" src="https://cdn.icon-icons.com/icons2/2717/PNG/512/instagram_logo_icon_173753.png"></a>
    <a href="https://github.com/Rayza-18"> <img class="icon" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"></a>
    </div>
    <p class="p_rodape" > Rayza - beyond </p>
      </footer>  
  </v-app>
</template>

<style>
footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-top: 10px;
  }
  .p_rodape{
    margin: 0;
  }
 .p_rodape:hover{
  color: #4B0082;
  }
  .icon{
    width: 20px;
  }

  </style>
  <style scoped>
  .custom-modal {
    background-color: #ffffff; /* Defina a cor de fundo desejada */
  }

  .modelPerfil_img{
    border-radius: 50%;
      margin: 2% 1px 2% 21%;
}

  .modelPerfil_h1{
    color: orangered;
    font-size: 19px;
    margin-left: 2%;
  }
.modelPerfilP{
  margin-left: 2%;
  }
  
  .modelEditar{
    width: 100%;
  }
  .h1Edit[data-v-7ba5bd90] {
    margin-top: 2%;
    margin-bottom: 4%;
}
  .inputEdit{
    border: solid 1px orangered;
    margin-bottom: 7%;
    width: 100%;
    height: 62px;
    border-top: none;
    border-right: none;
    outline: none;
  }

  </style>