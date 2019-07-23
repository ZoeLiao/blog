---
title: "數據結構與算法（九) "
description: ""
date: "2019-07-14"
tags: ["computer"]
---

### Heap
- heap 有多種含義，一種是指 dynamic memory allocation，一種是指 complete binary tree，用於執行 priority queues 還有 heapsort 算法，還有一些圖形算法。

#### largest-on-top heap
- 父節點 >= 子節點的完全樹，形狀如下：
```bash
      X
    X   X
  X  X X  X
 X XX X
```
- 完全樹 ( complete tree )，除了最下面那一層以外的每一層，都是滿的，並依序由左填至右節點。

#### 父節點的 Index
- parentIndex = ⌊(childrenIndex - 1) / 2⌋
- 父節點的 index 為子結點 index - 1 除以 2 並向下取整數

#### heap 的高度 h
- h = ⌈log2(n + 1)⌉

#### 參考資料
- [Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714)，Chapter 9。
