# hackmidwestbackend/run.py
from app import create_app

app = create_app()
print("test")
if __name__ == '__main__':
    app.run(debug=True)

