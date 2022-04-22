int bombilloAmarillo = 13;
int bombilloazul = 12;
int bombilloRojo = 11;
int bombilloNaranja = 10;
int bombilloGris = 9;
int intervalo = 100;

void setup()
{
  pinMode(bombilloAmarillo, OUTPUT);
  pinMode(bombilloazul, OUTPUT);
  pinMode(bombilloRojo, OUTPUT);
  pinMode(bombilloNaranja, OUTPUT);
  pinMode(bombilloGris, OUTPUT);
}

void loop()
{
  digitalWrite(bombilloAmarillo, HIGH);
  delay(intervalo * 2);
  digitalWrite(bombilloAmarillo, LOW);
  delay(intervalo);
  
  digitalWrite(bombilloazul, LOW);
  delay(intervalo * 2);
  digitalWrite(bombilloazul, HIGH);
  delay(intervalo);
  
  digitalWrite(bombilloRojo, HIGH);
  delay(intervalo * 2);
  digitalWrite(bombilloRojo, LOW);
  delay(intervalo);
  
  digitalWrite(bombilloNaranja, LOW);
  delay(intervalo * 2);
  digitalWrite(bombilloNaranja, HIGH);
  delay(intervalo);
  
  digitalWrite(bombilloGris, HIGH);
  delay(intervalo * 2);
  digitalWrite(bombilloGris, LOW);
  delay(intervalo);

}