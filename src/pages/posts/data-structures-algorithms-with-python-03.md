---
title: "數據結構與算法（三）"
description: "時間複雜度與遞歸"
date: "2019-06-22"
tags: ["computer"]
---

### 程式怎麼運行？
- 資料由 I/O 下達指令給 CPU
- 提許指令：當程式運行時，會被從硬件讀進 RAM
- 作業系統  (operating system，操作系统) 會將 RAM 分成 runtime stack 與 heap
- 解碼、讀取運算元
- 執行：
    - 當函式被呼叫的時候，作業系統會建立啟動紀錄 (activation record) 或稱啟動框架(activation frane)，用來儲存函式的參數與變數，而activation record 會被存放在執行期間堆疊 (runtime stack, 执行栈) 記憶體區間內。  
    - runtime stack 或稱執行堆疊(exeuction stack)，呼叫堆疊(call stack)，採用後進先出 (last in, first out, LIFO)，的方式處理函式，而其計算的結果會存在 heap 。
    - heap 是用於動態存放的記憶體，採用先進先出(first in, first out, FIFO)的方式存放計算結果。
- 儲存結果：最後將結果顯示在螢幕或其他 I/O 設備 

### Sets and Maps
- Sets: 沒有重複值的集合。如 [1, 2] 是一個 set，但[1, 1, 2] 不是，因為 1 重複兩次。[1, 2] 內含有 n = 2 個值，我們稱一個 set 內含的值的數量 n 為「基數」(cardinality)， ( n 為 >= 0 的正整數) 。
- Maps: 字典 (dictionary) 或是哈希表 (hash table)

### Python 的 Sets 
Python 內建 (built-in) 的 sets 分為兩種：
- set：可變的 (mutable) 集合。
- forzenset：不可變 (immutable) 的集合。

### Python 的 hash
- 透過 index 隨機訪問 list 的任意值皆是 O(1)。
- 如果沒有 index 則訪問任意值為 O(n)。
- 內置的可變對象的不能為 hash 對象，不可變對象都可為 hash 對象（有 __hash__ ）。
- 可透過 ```__hash__``` 自定義哈希。

### hashSet class
- python 透過 hashset 來實現 set，減少運行的時間 (O(n^2) -> O(n)) 
``` Python
class HashSet:
    def __init__(self, contents = []):
        self.items = [None] * 10
        self.numItems = 0

        for item in contents:
            self.add(item)
```

### Storing an Item
-  用 % mod 計算餘數 (remainder)，當作索引 index ，故 0 < index < len(哈希表) - 1

### Collision Resolution
- 當想將 3 以及 -7 放入長度為 10 的哈希表時，因為 3 與 -7 除 10 後的所得的餘數都是 3，如果都作為它們的 index 會有衝突 (collision)。
- Linear Probing：
    - Python 透過 None 和 __Placeholder 檢測下一個位置是否為空。

    ``` Python
    def __add(item, items):
        idx = hash(item) % len(items)
        loc=-1

        while items[idx] != None:
            if items[idx] == item:
                # item already in set
                return False

            if loc < 0 and type(items[idx]) == HashSet.__Placeholder:
                loc = idx

            idx = (idx + 1) % len(items)

        if loc < 0:
            loc = idx

        items[loc] = item

        return True

    ```

### 載荷因子 (load factor)
- 載荷因子 (load factor) = 填入表中的元素個數 / len(Hash)
- 一個高的載荷因子代表可以更有效的運用空間，但同時衝突的機率也更高。
- rehashing：當載荷因子 > 75 %，新請求空間將現有的 hash 表移動到更大的 hash 表。
- 時間複雜度：O(1)。
``` Python
def __rehash(oldList, newList):
	for x in oldList:
		if x != None and type(x) != HashSet.__Placeholder:
			HashSet.__add(x,newList)

	return newList
```
``` Python
def add(self, item):
	if HashSet.__add(item,self.items):
		self.numItems += 1
		load = self.numItems / len(self.items)

	if load >= 0.75:
        self.items = HashSet.__rehash(self.items,[None]*2*len(self.items))
```

### 刪除元素
- 不直接不刪除，而是標記該位置不可用，以避免之後找不到值。
- 如果載荷因子 < 25 %，代表不用這麼多空間，新請求一個更小的 hash 表空間，將現有的值移入新的 hash 表。
- 時間複雜度：O(1)。
