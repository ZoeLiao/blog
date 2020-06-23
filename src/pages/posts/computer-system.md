---
title: "電腦結構"
description: "CPU, I/O, RAM"
date: "2019-06-15"
tags: ["computer"]
---

最近在看 [Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714)，想簡單的記錄學習心得以及相關補充資料。

### 電腦結構 Computer Architecture
電腦的子系統包含：中央處理單元(CPU)、記憶體(Memory)、以及輸入輸出(I/O)

輸入輸出(I/O)
- 電腦與外部連結的設備：如鍵盤、滑鼠等。
- 即使關閉電腦也可以存處資料的設備：如 CD。

中央處理器 (Central Processing Unit, CPU)：
- 解釋或執行儲存在電腦主記憶體 (Main Memory，主存) 並與 I/O 設備交互的基體電路 (Integrated Circuit, IC, 集成电路) 。

暫存器(registers)
- CPU 內含少量且快速的電腦記憶體 -- 暫存器 (registers ，寄存器) ，提供快速共同存取數值來加速電腦程式的執行，可用來暫存指令、資料和位置。暫存器包含：
    - 程式計數器 (Progrem counter, PC, 程序计数器) ：儲存電腦程式序列的位址(確切說是指向電腦主記憶體中某條機器語言指令 (即含有該條指令的地址) )。
    - 指令暫存器 (Instruction register, IR) ：用於儲存執行中指令的暫存器，每個將被執行的指令都會被放入指令暫存器中，從解碼、準備到執行完成的過程都會被持續保存。
    - 資料暫存器 (Data register, DR) ：儲存輸入的資料以及運算的結果。

RAM (Random Access Memory 隨機存取記憶體)：

-  與 CPU 直接交換資料的記憶體，不負責永久存儲，斷電會丟數據。

### Reference
- [Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714), Chapter 2
- [wiki 中央處理器](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%A4%AE%E5%A4%84%E7%90%86%E5%99%A8)
- [wiki 暫存器](https://zh.wikipedia.org/wiki/%E5%AF%84%E5%AD%98%E5%99%A8)
