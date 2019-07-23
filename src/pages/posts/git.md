---
title: "git 簡介與常用指令"
description: "git 簡介與常用指令"
date: "2019-06-15"
tags: ["git"]
---

## git 簡介
官方網址：[https://git-scm.com/](https://git-scm.com/)

### 定義與用途
定義: 分散式版本控制系統 (Distributed Version Control System, DVCS)
- 分散式：指可以將程式依照功能、模塊拆分成不同的分支 (branch)，交給不同的工程師進行開發，當工程師開發完後，可以在分支提 PR (Pull Request)， 請求將改動合併 (merge) 到主分支 (master)。
- 版本控制：記錄檔案在某一段時間的變更，以便之後能取回特定版本的系統。

- - -

## git 常用指令

開發流程：
- 將遠端倉庫 (Remote) 下載到本地建立倉庫 (Repository) 
```bash
    git clone < Remote url>
```
- 切換到既有分支或新的分支
    - 切換到既有分支 
    ```bash
        git checkout <branch>
    ```
    - 切換到新分支 
    ```bash
        git checkout -b <branch>
    ```

- 努力寫 ~~bug~~ 程式 ....

- YA！寫完了！檢查一下改動
```bash
    git diff
```
- 將改動存到暫存區 (staging area)
```bash
    git add
```
- 提交改動到本地倉庫的當前分支
```bash
    git commit -m <提交改動的名稱>
```
- 將本地的改動推到遠端分支
```bash
    git push
```
- 到 github 上提 PR (Pull Request)
- 請別人 review ，沒問題就可以 merge 到主分支拉 ^O^ 

與遠程分支同步：

寫一寫發現同事寫了新的功能，需要更新一下怎麼辦？

- 將遠端倉庫分支的更新拉到本地並合併
    - 拉取：將遠端倉庫的分支的更新拉到本地倉庫
    ```bash
    git fetch <遠端主機名> <遠端分支名>
    ```
    - 合併：將非本地分支的程式與工作區的程式合併
        - 將程式合併到當前工作區並保留 commit ，會產生合併紀錄，適用於改動大、處理衝突不容易的情況：
        ```bash
        git merge
        ```
        - 將程式合併到當前工作區，並以被合併的分支的 commit 作為新的基準，將現有分支的 commit 接上去：
        ```bash
        git rebase
        ```

    - 拉取 + 合併：拉取指定遠端分支的更新到指定的本地倉庫並合併到工作區 
        - 方法一
        ```bash
        git pull <遠端主機名> <遠端分支名>:<本地分支名>
        ```
        - 分法二 
        ```
        git fetch && git merge
        ```

- 暫存操作
    - 暫存工作區與暫存區的改動
    ```bash
    git stash
    ```
    - 取回暫存的改動
    ```bash
    git stash apply
    ```
- 檔案重命名
    git 為兼容不同作業系統，所以默認不區分檔案大小寫，如需修改：
    ```bash
    git mv lower.md Lower.md
    ```
    不然會追蹤不到檔案改動
