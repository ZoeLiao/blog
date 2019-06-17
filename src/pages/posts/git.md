---
title: "git 簡介"
description: "git 簡介與常用指令"
date: "2019-06-15"
tags: ["git"]
---

## git 簡介
- 官方網址：[https://git-scm.com/](https://git-scm.com/)
- 定義: 分散式版本控制系統(Distributed Version Control System, DVCS)
    - 分散式：指可以將程式依照功能、模塊拆分成不同的分支(branch)，交給不同的工程師進行開發，當工程師開發完後，可以在分支提 PR (Pull Request)， 請求將改動合併(merge) 到主分支(master)。
    - 版本控制：記錄檔案在某一段時間的變更，以便之後能取回特定版本的系統。
- 用途：
    - 管理版本：git 可以把檔案修改的歷史記錄保存在 .git 的隱藏倉庫，可以透過 git 指令切換到想要的修改本版。
    - 便於協作：git 透過分支，將修改記錄依照分支分開儲存，可以彼此不受干擾的開發，直到後並到主分支。


## git 常用指令
- 下載倉庫到本地 
```bash
    git clone <url>
```
- 切換分支
```bash
    git checkout <branch>
```
- 檢查差異
```bash
    git diff
```
- 新增
```bash
    git add
```
- 提交
```bash
    git commit -m <提交改動>
```
- 推到遠端分支
```bash
    git push
```
- 提 PR

