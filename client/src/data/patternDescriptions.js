export const patternDescriptions = {
  Array:
    "Fundamental collection of elements stored at contiguous memory locations",

  Strings: "Sequence of characters and common string manipulation patterns.",

  "Binary Search":
    "Efficient seach algorithm that divides the search interval in half repeatedly to find target element.",

  Stack: "LIFO (Last In First Out) data structure patterns",

  "Linked List":
    "Linear data structure where elements are not stored at contiguous memory locations.",

  "Double Linked List":
    "Linked List with navigation in both forward and backward directions.",

  HashMap:
    "Key-value pair data structure for O(1) average time complexity lookups.",

  Heap: "Priority Queue data structure for efficient retrieval of highest/lowest priority elements.",

  Recursion:
    "Solving problems by breaking them down into smaller, self-similar subproblems.",

  Tree: "Hierarchical data structure with a root value and subtrees of children.",

  "Binary Search Tree":
    "Tree data structure where left child < root < right child.",

  Graph: "Non-linear data structure consisting of nodes and edges.",

  Backtracking:
    "Algorithmic technique for solving problems recursively by trying to build a solution incrementally..",

  Greedy:
    "Algorithm paradigm that follows the problem solving heuristic of making the locally optimal choice.",

  "Dynamic Programming":
    "Optimization method involving breaking down problems into simpler subproblems and storing their solutions.",

  Trie: "Tree-based data structure used for efficiently storing and retrieving keys in a dataset of strings.",

  "Bit Manipulation":
    "Techniques that perform operations on data at the bit level.",
};

export const subPatternDescriptions = {
  // ARRAY
  "Two Pointer":
    "Use two indices that move towards or away from each other to reduce redundant comparisons",

  "Sliding Window":
    "Maintain a window of fixed size or expand/shrink it to satisfy a condition.",

  "Prefix Sum":
    "Precompute cumulative sums so any subarray or range sum can be answered in O(1).",

  "Kadane’s Algorithm":
    "Track the best subarray sum ending at each index and update the global maximum.",

  // STRINGS
  "Two Pointer (Palindrome)":
    "Use two pointers from both ends to check for palindromes efficiently.",

  "Sliding Window (String)":
    "Apply sliding window on strings to find substrings satisfying certain constraints.",

  // BINARY SEARCH
  "Classic Binary Search":
    "Standard approach to find an element in a sorted array using divide and conquer.",

  "Lower / Upper Bound":
    "Find the first or last occurrence of an element using modified binary search.",

  "Binary Search on Answers":
    "Apply binary search on the answer space when direct computation is difficult.",

  "Search in 2D Matrix":
    "Extend binary search logic to 2D matrices treated as sorted arrays.",

  // STACK
  "Monotonic Stack":
    "Maintain elements in increasing or decreasing order to solve range queries efficiently.",

  "Expression Evaluation":
    "Evaluate arithmetic expressions using stack-based parsing techniques.",

  "Stack Simulation / Undo Operation":
    "Simulate operations like undo/redo using stack behavior.",

  "Parenthesis & Scoring":
    "Solve problems related to balanced parentheses and scoring systems.",

  "Stack-Based Design":
    "Design systems using stack logic such as browser history or custom stacks.",

  "Recursive Stack":
    "Apply recursion to manipulate stack elements without extra space.",

  // LINKED LIST
  "Basic Operations":
    "Perform insertion, deletion, and traversal in linked lists.",

  "Fast and Slow Pointers":
    "Use two pointers moving at different speeds to detect cycles or midpoints.",

  "Reversal Pattern": "Reverse linked list or its segments efficiently.",

  "Merge / Sort":
    "Merge or sort linked lists using techniques like merge sort.",

  "Linked List + Stack":
    "Combine stack and linked list logic for advanced problems.",

  // DLL
  "Basic DLL Operations":
    "Handle insertion and deletion in doubly linked lists.",

  "Merge / Sort / Reorder":
    "Perform complex transformations like reordering or merging DLLs.",

  // HASHMAP
  "Frequency Map / Counting":
    "Track occurrences of elements efficiently using a hashmap.",

  "Prefix-Sum with Map":
    "Combine prefix sum with hashmap to optimize subarray problems.",

  "Sliding Window + HashMap":
    "Use hashmap inside sliding window to track dynamic conditions.",

  // HEAP
  "Top-K Elements":
    "Find k largest or smallest elements using heap efficiently.",

  "Merge K Sorted":
    "Merge multiple sorted arrays or lists using priority queue.",

  "Heap with Sliding Window":
    "Maintain heap inside sliding window for dynamic queries.",

  "Implementation of Heap":
    "Understand how heap works internally and implement it.",

  "Huffman Pattern": "Use greedy + heap for optimal encoding problems.",

  // RECURSION
  "Linear Recursion":
    "Solve problems with simple recursive calls in one direction.",

  "Divide & Conquer":
    "Break problems into independent subproblems and combine results.",

  "Recursive String Processing": "Manipulate strings using recursion.",

  "Recursive Stack / Linked List":
    "Apply recursion on stack or linked list structures.",

  // TREE
  "DFS Traversals":
    "Traverse tree using depth-first strategies like preorder, inorder, postorder.",

  "BFS / Level-Order": "Traverse tree level by level using queue.",

  "Lowest Common Ancestor": "Find common ancestor of two nodes in a tree.",

  "Serialization / Construction":
    "Convert tree to/from string or build tree from traversal.",

  // BST
  "BST Operations": "Insert, delete, and search nodes in a BST.",

  "LCA & Range Queries": "Perform advanced queries using BST properties.",

  // GRAPH
  "BFS (Unweighted Path)": "Find shortest path in unweighted graph using BFS.",

  "DFS (Connectivity)": "Check connectivity and explore graph using DFS.",

  "Topological Sort": "Order nodes in DAG based on dependencies.",

  "MST / Union-Find": "Find minimum spanning tree and use disjoint sets.",

  "Dijkstra (Weighted)":
    "Find shortest path in weighted graph with non-negative weights.",

  "Bellman-Ford": "Handle graphs with negative weights.",

  "Floyd-Warshall": "Compute shortest paths between all pairs of nodes.",

  // BACKTRACKING
  "Choice-Based Backtracking": "Explore all possible choices recursively.",

  "Constraint-Based Backtracking":
    "Prune invalid paths early using constraints.",

  "Grid / Path Backtracking": "Traverse grid with backtracking techniques.",

  "Decision Tree / Sequence Generation":
    "Generate permutations and combinations.",

  // GREEDY
  "Intervals & Reach": "Solve interval-based problems using greedy decisions.",

  "Sorting / Local Choice": "Sort data and make optimal local decisions.",

  // DP
  "1D / Linear DP": "Solve linear problems using DP arrays.",

  "2D / Grid DP": "Apply DP on matrices or grids.",

  "DP on Strings": "Solve string problems using DP like LCS.",

  "DP on Intervals": "Apply DP on ranges or partitions.",

  "DP on Trees / DAGs": "Use DP in tree or graph structures.",

  "Knapsack / Subset Sum":
    "Classic DP problems involving selection under constraints.",

  // TRIE
  "Basic Trie Operations": "Insert and search words efficiently in trie.",

  "Word Break / Segmentation": "Break strings using dictionary words.",

  "Bitwise Trie / XOR": "Use trie for XOR optimization problems.",

  // BIT
  "Basic Bit Operations": "Use AND, OR, XOR, shifts for optimization.",

  "Subsets / Bitmask": "Generate subsets using bit representation.",

  "Advanced XOR": "Solve complex problems using XOR properties.",
};
