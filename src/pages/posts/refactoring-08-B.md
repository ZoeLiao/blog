---
title: "重構（八）下 "
description: ""
date: "2019-07-15"
tags: ["computer"]
---

書本的代碼為 java ，以下示例是自己用 python 改寫，僅供參考。

### 8.9 Replace Magic Number with Symbolic Constant

- magic number (魔法數)：是指擁有特殊意義但又不能明確表示這個意義的數字(旁人不透過註解無法了解其中的涵義)。
- 用常量來表示魔法數，如下：

- 修改前
    ```python
        def get_gender(gender):
            # magic number: 0, -1
            if gender == 1:
                return 'male'

            elif gender == 2:
                return 'female'

            # You will forget what is the meaning of the magic numbers !
    ```
- 修改後
    ```python
        MALE = 1
        FEMALE = 2
        
        def get_gender(gender):
            if gender == MALE:
                return 'male'

            elif gender == FEMALE:
                return 'female'
    ```
- 作法：
    - 了解此魔法數的意義
    - 查看腳本裡有此魔法術的代碼確認是否可替換
    - 用常量替換
- 好處：
    - 如果修改此數值，只需要修改常量即可
    - 便於識別該數值的意義，提高可讀性
- 如果更複雜的情況可用 class 處理

- - -

### 8.10 Encapsulate Field (封裝值域)  
- 適用場景：如過 class 存在一個 public 的值域，則應該封裝成 private 並提供相應 accessors (訪問函數) (python 預設皆為 public 屬性，以 _ (single underscore) 表示 protected 屬性，約定只能本類、子類訪問，但沒有強制外部不能訪問，而 __ (double underscore) 表示 private 屬性，只能本類訪問，若從外部訪問會 AttributeError)
- 面向對象的首要原則就是封裝 (encapsulation)，也可說是數據隱藏 (data hidding)，透過值域封裝以減少 public 數據，增加模塊化程度。
```python
    class Demo(object):
        def __init__(self):
            self._protected_variable = 'changeable'
            self.__privated_variable = 'unchangeable'
  
  
    demo = Demo()
    demo._protected_variable = 'it works!'
    demo.__privated_variable = 'Error!' # raise AttributeError
```

- - -

### 8.11 Encapsulate Collection (封裝群集)
- 群集 (collections)：list、set 等。
- 透過函數 (method) 封裝群集 (collections)，當調用此函數時，即返回一個只讀映件 (read-only view)，並在這個 class 中提供 添加(add) / 移除 (remove)  群集元素的函數。
- 群集的取值：不應該返回群集本身，以避免用戶修改群集的值，而群集使用者不知。也會暴露過多「對象內部的數據資訊」，所以影該避免用戶直接操作對象內所保存的群集，並隱藏無關的資料結構。
- 不應該提供 setter 方法，而是透過 add 和 remove 來管理。
- 作法：
    - 新建 add / remove 函數
    - 用 add / remove 取代 setter
    - 新建 getter ，並確保指返回只讀映件 (read-only view)，確保用戶無法自行修改
- 備註：Java 若要為一個類定義只讀的屬性只需要用 private 裝飾，並指提供 getter() 方法不提供 setter()，python 可以用 @property 裝飾，python 中賦值操作會調用 setter()，可以透過自定義 setter() 避免賦值。
```python
import arrow

    class Person(object):
        ...

        @property
        def created_at():
            return arrow.get(self.created_at).format('YYYY-mm-dd')
```
&nbsp;    
- - -

### 8.12 Replcae Record with Data Class (以數據類取代記錄)
- Record structure (記錄結構)：為一集合，將一組相關的數據存在一個存儲單元裡面。
- Dumb data object (啞數據對象)：不含有行為只有數據的對象。
- 為記錄 (record) 創建一個啞數據對象 (dumb data object)

- - -

### 8.13 Replace Type Code with Class
- 適用場景：class 中如有一個「不影響」 class 行為的 numeric type code (數值型別碼)，應用一個新的 class 替換該 numeric type code。
- 使用帶有意義的符號名雖然有比較高的可讀性，但無法檢驗或強制使用符號名，改以 class 封裝可以對該類型別檢驗，只要提供 factory methods 就可以保證只有合法的實體被創建。
- 補充：factory methods (工廠模式)：是設計模式一書提出的一種寫程式的模式，意義為在創建對象時不會對客戶端暴露創建的邏輯，是通過使用一個共同的 API 來指向新創建的對象。
    - 優點：
        - 調用者想要創建一個對象時，只需要知道其名稱即可。
        - 擴展性高。
        - 隱藏產品的具體實現，調用者只需要關心 API  即可。
    - 缺點：
        - 每次增加產品皆需要增加一個具體類和對象實現工廠，增加程式的複雜性。
       
- 舉個例子：假定 Person 這個 class 有四個 interger 屬性代表四種血型：
    ```python
    class Person(Object):  
  
        def __init__(self, *args, **kwargs):
            self.blood_O = 0
            self.blood_A = 1
            self.blood_B = 2
            self.blood_AB = 3
    ```
可以改成：
    - 新增 BloodGourp class
        ```python
        class BloodGroup(object):

            def _blood_group(self):
                return {
                    'O': 0,
                    'A': 1,
                    'B': 2,
                    'AB': 3,
                }

            def set_code(type, code):
                try:
                    self._blood_group[type] = int(code)
                except:
                    raise TypeError
            
            def get_code(type):
                return self._blood_group.get(type)
        ```
    - 用 BloodGroup 獲取血型的值
        ```python
        class Person(Object):

            def __init__(self, *args, **kwargs):
                self.blood_O = Blood().get_code('O')
                self.blood_A = Blood().get_code('A')
                self.blood_B = Blood().get_code('B')
                self.blood_AB = Blood().get_code('AB')
        ```
&nbsp;    
- - -

### 8.14 Replace Type Code with Subclass
- 適用場景：class 中如有一個「影響」 class 行為的 immutable (不可變) type code (數值型別碼)，應用一個 subclass 替換該 type code
- 如果一個 type code 不會影響宿主的行為，則可以用 8.13 Replcae Type Code with Class 的方法處理，但會影響的話，則建議用 polymorphism (多態) 處理。
- 因為宿主有「只與具備特定 type code 的對象相關」的特性，透過以宿主為基類， type code 為子類的方式，可以讓「對不同行為的瞭解」從 class 用戶轉移到 class 自身。
- 作法：
    - 以宿主的 class 為 base class，針對每種 type code 建立相應的 subclass，但在以下兩種情況不能如此：
        - type code 值在對象創建後發生變化。
        - type code 的宿主已經有 subclass 了。  
    - 此時應該用 Replcae Type Code with State / Strategy 來處理
- - -

### 8.15 Replace Type Code with State/Strategy
- 適用場景：有一個會影響用戶行為的 type code，且無法使用 subclass
- 做法：以 state object (專門用來描述狀態的對象)取代 type code
    - 選 State 或是 Strategy ?
        - State：打算搬移與狀態相關的數據，並把新建對象是為一種變遷狀態(changing state)
        - Startagey：重構完後再用 Replace Conditional with Polymorphism 簡化算法
    - 使用 self Encapsulate Field 將 type code 自我封裝。
    - 新建一個 class 並添加 subclass ，每個 subclass 對應一個 type code (可一次性注入所有必要的 subclass)
    - 在 superclass 中建立一個抽象的查詢函數 (abstract query)，用於返回 type code，在每個 subclass 中覆寫該函數，返回確切的 type code。

- - -

### 8.16 Replace Subclass with Fields (以值域取代子類) 
- 適用場景：各個 subclass 的唯一差別只在於「返回常量數據」的函數上 
- 作法：修改這些函數，使他們返回 superclass 中某個 (新增) 的值域，然後銷毀 subclass

修改前
```python
class Person(object):
    
    def get_code(self):
        ...

class Male(Person):
    def __init__(self, *args, **kwargs):
        super(Male, self).__init__(*args, **kwargs):

    def get_code(self):
        return "Male"

class Female(Person):
    def __init__(self, *args, **kwargs):
        super(Female, self).__init__(*args, **kwargs):

    def get_code(self):
        return "Female"
```
修改後
```python
class Person(object):
    def __init__(code):
        self.code = code
    
    def create_male(self):
        return Person('male')

    def create_female(self):
        return Person('female')

    def get_code(self):
        ...

```

### 參考資料：
- Martin Fowler (2003)。[重構- 改善既有代碼的設計](https://book.douban.com/subject/1229923/)。北京：中国电力出版社
- [CSDN Python 定义只读属性](https://blog.csdn.net/weixin_35653315/article/details/78077253)
- [工厂模式 | 菜鸟教程](https://www.runoob.com/design-pattern/factory-pattern.html)
