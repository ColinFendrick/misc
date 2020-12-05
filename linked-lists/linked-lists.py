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

    def Inbetween(self, middle_node, newdata):
        if middle_node is None:
            print("The mentioned node is absent")
            return

        NewNode = Node(newdata)
        NewNode.nextval = middle_node.nextval
        middle_node.nextval = NewNode


lst = LinkedList()
lst.headval = Node("Mon")
lst.headval.nextval = Node("Tue")

lst.AtBegining("Sun")
lst.AtEnd("Sat")
lst.Inbetween(lst.headval.nextval.nextval, "Wed")
lst.Inbetween(lst.headval.nextval.nextval.nextval, "Thurs")
lst.Inbetween(lst.headval.nextval.nextval.nextval.nextval, "Fri")


lst.listprint()
