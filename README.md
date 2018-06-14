# visual-linkedlist
A React App for visualizing a singly-linked list data structure.

## Installation
Install packages
```bash
npm install
```

## Usage
Run the development server
```bash
npm start
```

### Controls
1. Add to Head - User inputs a value and adds it to the head of the linked list.
2. Delete Specific - User inputs a value that matches a node in the linked list. On submit the node is selected and removed from the list.
3. Delete From Head - On click the head node is deleted.

### Bugs

1. BUG: 'Delete Specifc' action unresponsive if the node is 3 links deep.
2. BUG: Pass keys to children. (Works without for the time being but warning still fires.)
3. BUG: The visualizer header (#action) will stack on itself if the string is too long.
4. BUG: The visual linked list will create empty space if there's too much variety in string length. (Grid auto-flow)
5. BUG: Visualizer needs to stop at footer to prevent overflow.

### To Dos
1. Split up components and pass props.
2. FEATURE: Find Node - User inputs a value and the first matching node is highlighted. (Method in LinkedList.js)
3. FEATURE: Head pointer.
4. FEATURE: Nest visual nodes in a NEXT block to show direction of linked list.
5. FEATURE: Fancy animations.
6. FEATURE: Fancy styling.
7. FEATURE: Histogram Component w/ Revert button.
