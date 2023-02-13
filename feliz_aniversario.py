import turtle

janela = turtle.Screen()

tartaruga = turtle.Turtle()

tartaruga.penup()
tartaruga.goto(-100, 0)
tartaruga.pendown()
tartaruga.write("Feliz Aniversário", font=("Arial", 24, "bold"))

janela.mainloop()
