from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')  # Certifique-se de que esse arquivo existe na pasta templates

# Adicione outras rotas conforme os links da navbar:
@app.route('/galeria')
def galeria():
    return render_template('galeria.html')

@app.route('/cartas')
def cartas():
    return render_template('cartas.html')

@app.route('/lugares')
def lugares():
    return render_template('lugares.html')

@app.route('/futuros')
def futuros():
    return render_template('futuros.html')

@app.route('/jogos')
def jogos():
    return render_template('jogos.html')

@app.route('/primeiro-encontro')
def primeiro_encontro():
    return render_template('primeiro_encontro.html')

if __name__ == '__main__':
    app.run(debug=True)

# Timeline Backend

@app.route('/timeline')
def timeline():
    eventos = [
        {
            'data': '16/04/2023',
            'titulo': 'Nosso Primeiro Encontro',
            'descricao': 'Nosso dia no Shopping Estação, onde fomos "Assistir Super Mario Bros"',
            'midia': './static/image/timeline/shopping.jpeg',
            'tipo': 'foto'
        },
        {
            'data': '20/06/2023',
            'titulo': 'Primeira Viagem',
            'descricao': 'Fim de semana na praia',
            'midia': 'video/timeline/viagem.mp4',
            'tipo': 'video'
        },
        # Adicione mais eventos...
    ]
    return render_template('timeline.html', eventos=eventos)