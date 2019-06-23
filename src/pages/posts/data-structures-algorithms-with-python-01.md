---
title: "數據結構與算法（一）"
description: "時間複雜度與遞歸"
date: "2019-06-15"
tags: ["computer"]
---

最近在看[Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714)，邊看也邊查相關資料，想做個簡單的整理。

### 電腦結構 Computer Architecture
電腦的子系統包含：中央處理單元(CPU)、記憶體(Memory)、以及輸入輸出(I/O)

輸入輸出(I/O)
- 電腦與外部連結的設備：如鍵盤、滑鼠等。
- 即使關閉電腦也可以存處資料的設備：如 CD。

中央處理單元 (Central Processing Unit, CPU)：
- 解釋或執行儲存在電腦主記憶體（Main Memory，主存）並與 I/O 設備交互（如滑鼠、鍵盤）的基體電路（Integrated Circuit, IC, 集成电路）。粗略說，就是執行透過滑鼠鍵盤或程式等輸入的指令，並將結果呈現在螢幕、喇叭等 I/O 設備的積體電路。

暫存器(registers)
- CPU 內含少量且快速的電腦記憶體 -- 暫存器（registers ，寄存器），提供快速共同存取數值來加速電腦程式的執行，可用來暫存指令、資料和位置。暫存器包含：
    - 程式計數器（Progrem counter, PC, 程序计数器）：儲存電腦程式序列的位址(確切說是指向電腦主記憶體中下一條機器語言指令（即含有該條指令的地址）)。
    - 指令暫存器（Instruction register, IR）：用於儲存執行中指令的暫存器，每個將被執行的指令都會被放入指令暫存器中，從解碼、準備到執行完成的過程都會被持續保存，
    - 資料暫存器（Data register, DR）：儲存輸入的資料以及運算的結果。

RAM (Random Access Memory 隨機存取記憶體)：

-  與 CPU 直接交換資料的記憶體，不負責永久存儲，斷電會丟數據。

### Python 程式怎麼運行？
- 當程式運行時，會被從硬件讀進 RAM
- 作業系統 （operating system，操作系统）會將 RAM 分成 runtime stack 與 heap，當函式被呼叫的時候，作業系統會建立啟動紀錄（activation record）或稱啟動框架(activation frane)，用來儲存函式的參數與變數，而activation record 會被存放在執行期間堆疊（runtime stack, 执行栈）記憶體區間內。runtime stack 或稱執行堆疊(exeuction stack)，呼叫堆疊(call stack)，採用後進先出 (last in, first out, LIFO)，的方式處理函式，而其計算的結果會存在 heap ，heap 是用於動態存放的記憶體，採用先進先出(first in, first out, FIFO)的方式存放計算結果。
- 作業系統會讓 CPU 將執行程式，從硬件讀取相關數據
- 每個指令，都會從 RAM 中獲取一小部分數據並執行再返回
- 最後將結果顯示在螢幕或其他 I/O 設備 
