from flask import Flask
from flask import request, redirect, url_for
from flask import render_template
app = Flask(__name__)
app.debug = True
# https://www.w3schools.com/tags/ref_httpmethods.asp
# EZ NEM EGY IGAZI BEJELENTKEZŐ FELÜLET

validuser = "bence"

@app.route("/", methods=['GET', 'POST'])
def index():
	# egy error változót deklarálunk aminek a kezdőértéke none
	error = None
	# ha ez a page ugy van meghivva hogy a kliens post ot kuld
	if request.method == 'POST':
		# a login.html-ben lévő form adatokat kiszedjük a postbol és betöltjük
		# két darab változóban
		email = request.form.get('email')
		passwd = request.form.get('password')
		print(email)
		print(passwd)
		# a beküldött adatok közül ellenőrizzük a felhasználó nevet és ha az helye
		if email == "bence":
			# átirányitjuk a felhasználót   belső oldara
			return redirect(url_for('nyilvantarto'))
		else:
			# ha rossz adatokat adott meg akk hiba üzenetet kap
			error = 'Invalid Credentials. PLZ TRAJ AGAN.'
	# flask minden template filet a templates mappán belül keres.
	# ha nem post a http kérés hanme get akkor simán csak a logint html rendereljük:
	return render_template('login.html', error=error)





@app.route("/nyilvantarto")
def nyilvantarto():
    user = "bence"
    # a user változo az az index html fileban is user változóként elérhető
    return render_template('index.html', user=user)




if __name__ == "__main__":
    app.run(host='0.0.0.0')