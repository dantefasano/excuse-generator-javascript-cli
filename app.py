from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Excuse already programmed
    excuse = "The dog ate my homework when I finished."
    return render_template('index.html', excuse=excuse)

if __name__ == '__main__':
    app.run(debug=True)
