class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = None

    def listprint(self):
        printval = self.head
        while printval is not None:
            print (printval.data)
            printval = printval.next

    def AtBegining(self, newdata):
        NewNode = Node(newdata)
        NewNode.next = self.head
        self.head = NewNode

    def AtEnd(self, newdata):
        NewNode = Node(newdata)
        if self.head is None:
            self.head = NewNode
            return
        laste = self.head
        while(laste.next):
            laste = laste.next
        laste.next=NewNode

    def Inbetween(self, middle_node, newdata):
        if middle_node is None:
            print("The mentioned node is absent")
            return

        NewNode = Node(newdata)
        NewNode.next = middle_node.next
        middle_node.next = NewNode

    def RemoveNode(self, Removekey):
        Head = self.head

        if (Head is not None):
            if (Head.data == Removekey):
                self.head = Head.next
                Head = None
                return

        while (Head is not None):
            if Head.data == Removekey:
                break
            prev = Head
            Head = Head.next

        if (Head == None):
            return

        prev.next = Head.next
        Head = None

def AddList(list, llist = None):
    if (llist is None):
        llist = LinkedList()
    
    for el in list:
        llist.AtEnd(el)
    
    return llist



lst = AddList([1, 4, 5, 6])
lst.Inbetween(lst.head, 2)
lst.Inbetween(lst.head.next, 3)
lst.listprint()

# lst.head = Node("Mon")
# lst.head.next = Node("Tue")

# lst.AtBegining("Sun")
# lst.AtEnd("Sat")

# # This is a dumb way to do this, obviously just can insert these into the end but hey wygd
# lst.Inbetween(lst.head.next.next, "Wed")
# lst.Inbetween(lst.head.next.next.next, "Thurs")
# lst.Inbetween(lst.head.next.next.next.next, "Fri")
# lst.RemoveNode("Tue")
