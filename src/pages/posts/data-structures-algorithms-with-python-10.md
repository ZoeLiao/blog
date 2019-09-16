---
title: "數據結構與算法（十) "
description: ""
date: "2019-07-15"
tags: ["computer"]
---

### AVL Tree
- 起源：當樹沒有平衡時，執行 insert、delete、find 的操作為 O(n)，如下圖： 
    ```python
          A     
        /      # 此時 insert、delete、find C
       B       # 所需耗費的時間為 n (n = 3)
     /
    C
    ```
為了優化這個問題 AVL Tree 誕生了！
- 提出者：G.M. Adelson-Velskii 和 E.M. Landis 兩位蘇聯學者於 1962 年提出
- 定義：
    - Height：1 + 最高子樹高
    - Balance：右子樹高度 - 左子樹高度
    - AVL Tree：為 balance 為 -1、0、1 的 binary tree
    - 平衡：當 | balance | >= 2 時，需要進行平衡，平衡後的時間複雜度從 O(n) 優化到 O(log n)

- 怎麼平衡：
    - single rotation：
    ```python
            10 (-2)    ->     8  
           /                 /  \
          8 (-1)            6   10 
        /
       6 (0)
    ```
    - double rotation：
        ```python
              5 (2)                 5 (1)
             /   \                 /   \
            略   10 (-1)    ->   略     8 (1)
               /    \                /    \
              8 (-1)  12 (0)        6 (-1) 10 (1)
            /   \   /  \          /      /   \
           6 (-1) 9 11   13      4      9     12 (0)
          /                                  /  \
         4 [new!]                          11    13
        ```

- - -

### Splay Tree
- 不要要求平橫，但會把訪問過的 x 移動到根節點
- 單次旋轉
    - zig
    - zag
- 兩次旋轉
    - zig-zig / zag-zag
    - zig-zag / zag-zig

- - -

#### 參考資料
- [Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714)，Chapter 10。
