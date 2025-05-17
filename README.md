# 💝 Namoro Site - 2 Anos de Amor

Um site especial para celebrar 2 anos de relacionamento, com cronologia interativa, galeria de fotos, diário secreto e jogos personalizados.

## 🛠️ Tecnologias
- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Backend**: Python (Flask)
- **Banco de Dados**: SQLite
- **Hospedagem**: Render (backend) + GitHub Pages (frontend)

## 📦 Estrutura do Projeto

namoro-site/<br>
│<br>
├── app.py                      # Backend principal (Flask)<br>
├── requirements.txt            # Dependências Python (Flask, SQLAlchemy, etc.)<br>
├── README.md                   # Instruções do projeto (opcional)<br>
│<br>
├── static/<br>
│   ├── css/<br>
│   │   ├── bootstrap.min.css   # Bootstrap 5<br>
│   │   └── custom.css          # Seus estilos personalizados<br>
│   │<br>
│   ├── js/<br>
│   │   ├── core/<br>               # Scripts essenciais<br>
│   │   │   ├── contador.js     # Cálculo de dias juntos<br>
│   │   │   └── animacoes.js    # Efeitos de hover/scroll<br>
│   │   │<br>
│   │   ├── modulos/            # Funcionalidades específicas<br>
│   │   │   ├── mapa.js         # Google Maps/Leaflet<br>
│   │   │   ├── jogo_memoria.js # Lógica do jogo<br>
│   │   │   └── botao_fugitivo.js # Botão "Não" que foge<br>
│   │   │<br>
│   │   └── main.js             # Inicializa todos os módulos<br>
│   │<br>
│   ├── img/<br>
│   │   ├── polaroids/          # Fotos no estilo Polaroid<br>
│   │   ├── timeline/           # Imagens da linha do tempo<br>
│   │   └── jogos/             # Fotos para o jogo da memória<br>
│   │<br>
│   ├── videos/                 # Vídeos locais (opcional)<br>
│   └── audio/                  # Músicas locais (ex: mais_ninguem.mp3)<br>
│<br>
└── templates/                  # Todas as páginas HTML<br>
    ├── base.html               # Template base (nav, footer)<br>
    ├── index.html              # Página inicial<br>
    ├── timeline.html           # Linha do tempo<br>
    ├── galeria.html            # Galeria (polaroids)<br>
    ├── cartas.html             # Diário (com login)<br>
    ├── lugares.html            # Mapa interativo<br>
    ├── futuros.html            # Planos futuros<br>
    ├── jogos.html              # Jogos e surpresas<br>
    └── primeiro_encontro.html  # Página do Shopping Estação<br>
<br>
    
## 🚀 Como Executar Localmente

1. **Clone o repositório**
   ```bash
    git clone https://github.com/seu-usuario/namoro-site.git
    cd namoro-site     
    python -m venv venv
    source venv/bin/activate  # Linux/Mac
    .\venv\Scripts\activate  # Windows
    pip install -r requirements.txt
    python app.py

    Acesse: http://localhost:5000

## 🌐Como hospedar

1. Frontend: [GitHub Pages](https://github.com/RenMarValerio/Second-Year)
2. Backend: [Render](https://render.com/) (configurar como Web Service)

## ✨ Funcionalidades Implementadas

* Página inicial com contador de dias
* Linha do tempo interativa
* Galeria de fotos estilo Polaroid
* Diário secreto com login
* Jogo da memória personalizado
* Mapa dos lugares especiais