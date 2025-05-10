# 💝 Namoro Site - 2 Anos de Amor

Um site especial para celebrar 2 anos de relacionamento, com cronologia interativa, galeria de fotos, diário secreto e jogos personalizados.

![Preview](static/img/preview.jpg) *(Adicione uma imagem de preview depois)*

## 🛠️ Tecnologias
- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Backend**: Python (Flask)
- **Banco de Dados**: SQLite
- **Hospedagem**: Render (backend) + GitHub Pages (frontend)

## 📦 Estrutura do Projeto

namoro-site/
│
├── app.py                      # Backend principal (Flask)
├── requirements.txt            # Dependências Python (Flask, SQLAlchemy, etc.)
├── README.md                   # Instruções do projeto (opcional)
│
├── static/
│   ├── css/
│   │   ├── bootstrap.min.css   # Bootstrap 5
│   │   └── custom.css          # Seus estilos personalizados
│   │
│   ├── js/
│   │   ├── core/               # Scripts essenciais
│   │   │   ├── contador.js     # Cálculo de dias juntos
│   │   │   └── animacoes.js    # Efeitos de hover/scroll
│   │   │
│   │   ├── modulos/            # Funcionalidades específicas
│   │   │   ├── mapa.js         # Google Maps/Leaflet
│   │   │   ├── jogo_memoria.js # Lógica do jogo
│   │   │   └── botao_fugitivo.js # Botão "Não" que foge
│   │   │
│   │   └── main.js             # Inicializa todos os módulos
│   │
│   ├── img/
│   │   ├── polaroids/          # Fotos no estilo Polaroid
│   │   ├── timeline/           # Imagens da linha do tempo
│   │   └── jogos/             # Fotos para o jogo da memória
│   │
│   ├── videos/                 # Vídeos locais (opcional)
│   └── audio/                  # Músicas locais (ex: mais_ninguem.mp3)
│
└── templates/                  # Todas as páginas HTML
    ├── base.html               # Template base (nav, footer)
    ├── index.html              # Página inicial
    ├── timeline.html           # Linha do tempo
    ├── galeria.html            # Galeria (polaroids)
    ├── cartas.html             # Diário (com login)
    ├── playlist.html           # Playlist do amor
    ├── lugares.html            # Mapa interativo
    ├── futuros.html            # Planos futuros
    ├── jogos.html              # Jogos e surpresas
    └── primeiro_encontro.html  # Página do Shopping Estação

    
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