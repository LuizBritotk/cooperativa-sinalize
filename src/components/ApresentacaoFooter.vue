<template>
    <footer>
      <div class="footer-columns-container">
        <div class="col-md-4 footer-column-footer">
          <ul class="nav-footer flex-column-footer">
            <li class="nav-item-footer">
              <span class="footer-title-footer">Produto</span>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Produto 1</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Produto 2</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Planos e Preços</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Perguntas Frequentes</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-column-footer">
          <ul class="nav-footer flex-column-footer">
            <li class="nav-item-footer">
              <span class="footer-title-footer">Companhia</span>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Sobre Nós</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Vagas de Emprego</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#">Notícias e Artigos</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-column-footer">
          <ul class="nav-footer flex-column-footer">
            <li class="nav-item-footer">
              <span class="footer-title-footer">Contato e Suporte</span>
            </li>
            <li class="nav-item-footer">
              <span class="nav-link-footer footer-link-footer"><i class="fas fa-phone"></i>+47 45 80 80 80</span>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#"><i class="fas fa-comments"></i>Chat ao Vivo</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#"><i class="fas fa-envelope"></i>Fale Conosco</a>
            </li>
            <li class="nav-item-footer">
              <a class="nav-link-footer footer-link-footer" href="#"><i class="fas fa-star"></i>Dar Feedback</a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="text-center-footer"><i class="fas fa-ellipsis-h"></i></div>
      
      <div class="row-footer text-center-footer">
        <div class="col-md-4 box-footer">
          <span class="copyright-footer quick-links-footer">Copyright &copy; Sinalize {{ anoAtual }}</span>
        </div>
        <div class="col-md-4 box-footer">
          <ul class="list-inline-footer social-buttons-footer">
            <li class="list-inline-item-footer">
              <a href="#">
                <img src="@/assets/facebook.svg" alt="Facebook">
              </a>
            </li>
            <li class="list-inline-item-footer">
              <a href="#">
                <img src="@/assets/instagram.svg" alt="Instagram">
              </a>
            </li>
            <li class="list-inline-item-footer">
              <a href="#">
                <img src="@/assets/linkedin-preto.svg" alt="LinkedIn">
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 box-footer">
          <ul class="list-inline-footer quick-links-footer">
            <li class="list-inline">
              <a href="#">Política de Privacidade</a>
            </li>
            <li class="list-inline">
              <a href="#">Termos de Uso</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>

<script src="../scripts/ApresentacaoFooter.js"></script>
  
  <style scoped>
  @import '@/styles/Global.css';
  @import '@/styles/ApresentacaoFooter.css';
  </style>