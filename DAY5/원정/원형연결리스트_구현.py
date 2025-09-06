class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class CircularLinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        if self.head is None:
            return 
        
        result = []
        current = self.head
        while True:
            result.append(current.data)
            current = current.next
            if current == self.head:
                break
        return result
    
    def append(self, data):
        new_node = Node(data)
        # 리스트가 비어있다면?
        if self.head is None:
            new_node.next = new_node
            self.head = new_node
            return
        # 리스트가 비어있지 않다면?
        # 마지막에 노드 추가
        current = self.head
        # 마지막 노드의 next가 self.head라면 루프는 종료됨 즉 마지막 노드를 찾았다는 뜻
        while current.next != self.head:
            current = current.next
        
        # 마지막 노드의 next를 새로운 노드로 설정해줌
        new_node.next = self.head
        current.next = new_node
        return
    
    # 맨 앞에 추가
    def prepend(self, data):
        new_node = Node(data)
        if self.head is None:
            new_node.next = new_node
            self.head = new_node
            return
        # 맨 앞에 추가하기 위해서는 첫번째 노드와 마지막 노드가 필요함
        current = self.head
        # current.next가 self.head인 노드를 찾을 때 까지
        while current.next != self.head:
            current = current.next

        # 마지막 노드의 next를 new_node로
        current.next = new_node
        # 새 노드의 next를 현재 head 노드를 가리키도록
        new_node.next = self.head
        self.head = new_node
        return
    
    def delete(self, index):
        if self.head is None:
            return index
        
        if index == 0:
            if self.head.next == self.head:
                self.head = None
                return index
            
            last = self.head
            while last.next != self.head:
                last = last.next
            
            self.head = self.head.next
            last.next = self.head
            return index
        
        prev = self.head
        count = 0

        while count < index - 1:
            if prev.next == self.head:
                raise IndexError
            prev = prev.next
            count += 1
            
        prev.next = prev.next.next
        return index

        
    
    
list = CircularLinkedList()

for i in range(1, 8):
    list.append(i)