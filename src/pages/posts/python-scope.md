---
title: "python 的作用域、命名空間、LEGB 原則"
description: "作用域、命名空間、LEGB 原則"
date: "2019-08-14"
tags: ["python"]
---

### 作用域 Scope

- 作用域 (Scope)：是名字 (name) 與實體 (entity) 的繫結 (binding) 保持有效的那部分電腦程式。在 python 中，只有在模塊 (Module)、類 (Class)、函式 (def) 定義的變量名才有作用域的概念。要創建、修改、查找一個變量名只在該作用域內生效。  
如在一個函式中將 1 (entity) 賦值給 a (name)，則我們查找 a 得到 1 這個繫結 (binding) 在該函式內有效，離開函式想要獲取 a 的值會報 `NameError: name 'a' is not defined`。

### 命名空間 Namespaces
- 命名空間 (Namespaces)：是標記 python 對象與特殊名字的字典，對象可為變量或函式。

### Python 解析變量名的方法 - LEGB 原則
- Python 作用域規則： 變量的引用依照 Local -> Enclosed -> Global -> Build-in 作用域的順序來查找。
- Local：本地作用域
- Enclosed：閉包作用域
- Global： 全局作用域
- Build-in：內建作用域，如 int


### Reference
- [Data Structures and Algorithms with Python](https://www.amazon.com/Structures-Algorithms-Undergraduate-Computer-Science/dp/3319130714), Chapter 2
- [wiki 作用域](https://zh.wikipedia.org/zh-tw/%E4%BD%9C%E7%94%A8%E5%9F%9F)
- [wiki 命名空間](https://zh.wikipedia.org/zh-tw/%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4)
