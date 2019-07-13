---
title: "數據結構與算法（四) "
description: ""
date: "2019-07-04"
tags: ["computer"]
---

最近在看 [Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714)，想簡單的記錄學習心得以及相關補充資料。

### Graph Notation

#### Graph
- Graph ：G = (V, E)，V：點， E：邊
- A graph G = (V,E) is defined by a set of vertices, named V,and a set of edges,named E.  
- The cardinality of a set is its size or number of elements. The cardinality of the set V is written as |V |. ThecardinalityofV is13andU is3,so|V|=13and|U|=3.

#### Directed Graph
- A Directed Graph ：G = (V, E)
- E = {(vi , vj ) where vi , vj ∈ V } means that edges can be traversed in one direction only
- Path: A path in a graph is a series of edges, none repeated, that can be traversed in order to travel from one vertex to another in a graph
- Cycle: A cycle in a graph is a path which begins and ends with the same vertex
- tree: A tree is a directed, connected acyclic graph.
- An acyclic graph is a graph without any cycles.
- A weighted graph G = (V,E,w)，a weighted graph has a weight function, w, that maps edges to real numbers. So the signature of w is given by w: E → Real.

### spanning tree 生成樹 
- 定義：spanning tree 是圖

### Searching a Graph
- DFS (stack)
- The iterative version of depth first search can be modified to do a breadth first search of a graph if the stack is replaced with a queue.

### Kruskal's Algorithm
- The supervisor wants to find the shortest number of total miles that must be plowed so any person can travel from one point to any other point in the county, but not necessarily by the shortest route
- 1. First we must discover the set for each endpoint of the edge being considered for addition to the spanning tree.
- 2. Then the two sets must be compared for equality.
- 3. Finally,the union of the two sets must be formed and any necessary updates must
be performed so the two endpoint vertices now refer to the union of the two sets instead of their original sets.
- https://zh.wikipedia.org/wiki/%E5%85%8B%E9%B2%81%E6%96%AF%E5%85%8B%E5%B0%94%E6%BC%94%E7%AE%97%E6%B3%95

### Partition Data Structure

### Dijkstra's Algorithm

### bloom filter

### Trie
