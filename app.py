from flask import Flask, render_template, abort

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

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

@app.route('/galeria')
def galeria():
    return render_template('galeria.html')

@app.route('/lugares')
def lugares():
    return render_template('lugares.html')

@app.route('/futuros')
def futuros():
    return render_template('futuros.html')

@app.route('/jogos')
def jogos():
    return render_template('jogos.html')

# Rotas removidas para evitar erros 404
@app.route('/cartas')
def cartas_removida():
    abort(404)

@app.route('/primeiro-encontro')
def primeiro_encontro_removido():
    abort(404)

if __name__ == '__main__':
    app.run(debug=True)