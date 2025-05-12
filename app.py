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
