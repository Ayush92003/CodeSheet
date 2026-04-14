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
    "Compare characters from both ends and move inward until the condition fails.",

  "Sliding Window (String)":
    "Maintain a moving window and adjust its size to satisfy character constraints.",

  // BINARY SEARCH
  "Classic Binary Search":
    "Standard approach to find an element in a sorted array using divide and conquer.",

  "Lower / Upper Bound":
    "Find the first or last occurrence of an element using modified binary search.",

  "Binary Search on Answers":
    "Treat answer space as sorted → binary search to find minimum/maximum feasible value.",

  "Search in 2D Matrix":
    "Extend binary search logic to 2D matrices treated as sorted arrays.",

  // STACK
  "Monotonic Stack":
    "Maintain a monotonic increasing/decreasing stack to find next/prev greater/smaller, histogram ranges, or collisions.",

  "Expression Evaluation":
    "Use two stacks or postfix evaluation to handle numbers and operators efficiently.",

  "Stack Simulation / Undo Operation":
    "Simulate operations using a stack → pop on undo, remove adjacent duplicates, collapse characters.",

  "Parenthesis & Scoring":
    "Solve problems related to balanced parentheses and scoring systems.",

  "Stack-Based Design":
    "Design systems using stack logic such as browser history or custom stacks.",

  "Recursive Stack":
    "Handle top/head element recursively → recurse on remaining stack/list → combine/insert results.",

  // LINKED LIST
  "Basic Operations":
    "Perform insertion, deletion, and traversal in linked lists.",

  "Fast and Slow Pointers":
    "Use two pointers moving at different speeds to detect cycles, midpoints, or duplicates.",

  "Reversal Pattern": "Reverse linked list or its segments efficiently.",

  "Merge / Sort":
    "Merge sorted lists, sort list using merge sort, or reorder using middle + reverse + merge.",

  "Linked List + Stack":
    "Combine stack and linked list logic for advanced problems.",

  // DLL
  "Basic DLL Operations":
    "Maintain prev and next pointers carefully for insert, delete, traversal; use DLL + HashMap for O(1) cache operations.",

  "Merge / Sort / Reorder":
    "Use DLL properties (prev/next) to efficiently merge, sort, reorder, flatten, or perform pointer-based checks.",

  // HASHMAP
  "Frequency Map / Counting":
    "Count elements to find majority, top-k frequent, or sort by frequency.",

  "Prefix-Sum with Map":
    "Track cumulative sums; map stores first occurrence → solve subarray sum problems.",

  "Sliding Window + HashMap":
    "Maintain counts in a moving window → expand/shrink → track longest/shortest satisfying condition.",

  // HEAP
  "Top-K Elements":
    "Use min-heap for top-k largest, max-heap for top-k smallest → maintain heap of size k.",

  "Merge K Sorted":
    "Merge multiple sorted arrays or lists using priority queue.",

  "Heap with Sliding Window":
    "Maintain a heap of elements in the window → pop outdated elements → track maximum.",

  "Implementation of Heap":
    "Understand how heap works internally and implement it.",

  "Huffman Pattern": "Use greedy + heap for optimal encoding problems.",

  // RECURSION
  "Linear Recursion":
    "Solve problems with simple recursive calls in one direction.",

  "Divide & Conquer":
    "Break problems into independent subproblems and combine results.",

  "Recursive String Processing": "Recursively process substrings or characters → combine results.",

  "Recursive Stack / Linked List":
    "Handle top/head element recursively → recurse on remaining stack/list → combine/insert results.",

  // TREE
  "DFS Traversals":
    "Standard DFS → used for max depth, path sums, subtree calculations.",

  "BFS / Level-Order": "Use queue → traverse level by level → calculate sums, averages, or side views.",

  "Lowest Common Ancestor": "Find common ancestor of two nodes in a tree.",

  "Serialization / Construction":
    "Convert tree to/from string or build tree from traversal.",

  // BST
  "BST Operations": "Leverage BST property (left < root < right) for search, insertion, deletion, and range queries.",

  "LCA & Range Queries": "Use BST property → traverse from root to find split point → LCA.",

  // GRAPH
  "BFS (Unweighted Path)": "Standard BFS → track distance/levels → queue-based traversal → multi-source if needed.",

  "DFS (Connectivity)": "DFS recursion or stack → track visited → identify connected components or detect cycles.",

  "Topological Sort": "Order nodes in DAG based on dependencies.",

  "MST / Union-Find": "Use Kruskal’s / Prim’s algorithm or Union-Find → find MST, minimum cost connections, or detect cycles.",

  "Dijkstra (Weighted)":
    "Find shortest path in weighted graph with non-negative weights.",

  "Bellman-Ford": "Handle graphs with negative weights.",

  "Floyd-Warshall": "Compute shortest paths between all pairs of nodes.",

  // BACKTRACKING
  "Choice-Based Backtracking": "It is commonly used in problems that ask to generate all possible combinations, subsets, or permutations.",

  "Constraint-Based Backtracking":
    "At each step, choose whether to include an element → explore all subsets/choices recursively.",

  "Grid / Path Backtracking": "Move in grid recursively → explore all valid paths → backtrack after each move.",

  "Decision Tree / Sequence Generation":
    "Generate sequences or strings recursively by making a choice at each step.",

  // GREEDY
  "Intervals & Reach": "Sort intervals or extend reach as far as possible from current position → maximize tasks done / minimize step.",

  "Sorting / Local Choice": "Sort array or select elements → make locally optimal choice → achieve global optimum.",

  // DP
  "1D / Linear DP": "Track optimal solution using a 1D array → sequences, sums, or counts.",

  "2D / Grid DP": "Use 2D array → track states for row/column → movement or path constraints.",

  "DP on Strings": "Use 2D DP → index i,j represent substrings/subsequences → solve LCS, palindrome, or edit distance.",

  "DP on Intervals": "Track optimal solutions for subarrays/intervals → matrix chain, merging, or balloon burst patterns.",

  "DP on Trees / DAGs": "Recursion + memoization → track states along tree paths → post-order traversal.",

  "Knapsack / Subset Sum":
    "Track states based on weight/value → classic 0-1 / bounded / unbounded variants.",

  // TRIE
  "Basic Trie Operations": "Build Trie → insert words → search full word or prefix efficiently → collect suggestions in lexicographic order.",

  "Word Break / Segmentation": "Use Trie for fast lookup → combine with DP or backtracking for word segmentation and concatenation.",

  "Bitwise Trie / XOR": "Use Trie for binary representation of numbers → efficiently find maximum/minimum XOR or subset XOR.",

  // BIT
  "Basic Bit Operations": "Use XOR / AND / OR / shift operations → detect single/missing numbers or count bits efficiently.",

  "Subsets / Bitmask": "Iterate through all subsets using bits → solve combinatorial or DP counting problems.",

  "Advanced XOR": "Use XOR properties → maximize/minimize XOR over array/subarray or ranges.",
};
