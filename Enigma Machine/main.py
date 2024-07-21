
from keyboard import Keyboard
from rotor import Rotor
from plugboard import Plugboard
from reflector import Reflector
from enigma import Enigma



I = Rotor("QAZWSXEDCRFVTGBYHNUJMIKOLP", 'Q')
II = Rotor("PLOKMIJNUHBYGVTFCRDXESZWAQ", 'E')
III = Rotor("ZXCVBNMASDFGHJKLQWERTYUIOP", 'V')


I.input_wiring()
I.input_notch()
II.input_wiring()
II.input_notch()
III.input_wiring()
III.input_notch()





A=Reflector("EJMZALYXVBWFCRQUONTSPIKHGD")
B=Reflector("YRUHQSLDPXNGOKMIEBFZCWVJAT")
C=Reflector("FVPJIAOYEDRZXWGCTKUQSBNMHL")
KB=Keyboard()
PB=Plugboard([])
ENIGMA=Enigma(B,III,II,I,PB,KB)
PB.input_pairs()
ENIGMA.set_rings()
ENIGMA.set_key()

message =input(" Message : ").upper()
cipher_text = ""
for letter in message:
    cipher_text += ENIGMA.encipher(letter)

print("Encrypted message:", cipher_text)




