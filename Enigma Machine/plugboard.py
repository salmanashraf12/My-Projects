class Plugboard:
    def __init__(self,pairs):
        self.left="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        self.right="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for pair in pairs:
            A=pair[0]
            B=pair[1]
            pos_A=self.left.find(A)
            pos_B=self.left.find(B)
            self.left=self.left[:pos_A] +B+ self.left[pos_A+1:]
            self.left=self.left[:pos_B] +A+ self.left[pos_B+1:]
    def input_pairs(self):
        pairs = []
        while True:
            pair = input("Enter plugboard pair (e.g., 'AB' or enter 'done' to finish): ").upper()
            if pair == "DONE":
                break
            if len(pair) != 2 or not pair.isalpha():
                print("Invalid input. Pair must consist of two alphabetical characters.")
                continue
            if pair[0] == pair[1]:
                print("Invalid input. Both characters in a pair must be different.")
                continue
            if pair in pairs:
                print("Invalid input. Pair already exists.")
                continue
            pairs.append(pair)
        self.__init__(pairs)        
    def forward(self,signal):
        letter=self.right[signal]
        signal=self.left.find(letter)
        return signal
    def backward(self,signal):
        letter=self.right[signal]
        signal=self.left.find(letter)
        return signal


