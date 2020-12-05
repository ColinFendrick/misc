class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.nextval = None

class LinkedList():
    def __init__(self):
        self.headval = None

    def listprint(self):
        printval = self.headval
        while printval is not None:
            print (printval.dataval)
            printval = printval.nextval

    def AtBegining(self, newdata):
        NewNode = Node(newdata)

        # Update the new nodes next val to existing node
        NewNode.nextval = self.headval
        self.headval = NewNode

    def AtEnd(self, newdata):
        NewNode = Node(newdata)
        if self.headval is None:
            self.headval = NewNode
            return
        laste = self.headval
        while(laste.nextval):
            laste = laste.nextval
        laste.nextval=NewNode

lst = LinkedList()
lst.headval = Node("Mon")
e2 = Node("Tue")
e3 = Node("Wed")

lst.headval.nextval = e2
e2.nextval = e3

lst.AtBegining("Sun")
lst.AtEnd("Thurs")

lst.listprint()
