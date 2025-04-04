# Python进阶
**注：复习蓝桥杯所写**

## 1.基础知识复习
### 1.1 基本数据类型与变量
#### 1.1.1 整数（int）
Python可以处理任意大小的整数，当然包括负整数，在程序中的表示方法和数学上的写法一模一样，例如：`1`，`100`，`-8080`，`0`，等等。计算机由于使用二进制，所以，有时候用十六进制表示整数比较方便，十六进制用`0x`前缀和0-9，a-f表示，例如：`0xff00`，`0xa5b4c3d2`，等等。 
对于很大的数，例如`10000000000`，很难数清楚0的个数。Python允许在数字中间以`_`分隔，因此，写成`10_000_000_000`和`10000000000`是完全一样的。十六进制数也可以写成`0xa1b2_c3d4`。 
#### 1.1.2 浮点数（float）
浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，比如，1.23x109和12.3x108是完全相等的。浮点数可以用数学写法，如`1.23`，`3.14`，`-9.01`，等等。但是对于很大或很小的浮点数，就必须用科学计数法表示，把10用e替代，1.23x109就是`1.23e9`，或者`12.3e8`，0.000012可以写成`1.2e-5`，等等。  
整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的（除法难道也是精确的？是的！），而浮点数运算则可能会有四舍五入的误差。
#### 1.1.3 复数（complex）
复数由实部和虚部构成，虚部以 `j` 或者 `J` 结尾。在 Python 中，你可以直接用以下方式定义复数：
```python
# 直接定义复数
z1 = 3 + 4j
z2 = -2 - 5J
print(z1)
print(z2)
```
复数对象有两个属性，分别是 `real` 和 `imag`，可以用它们来获取复数的实部和虚部。
```python
z = 3 + 4j
real_part = z.real
imag_part = z.imag
print(f"实部: {real_part}")
print(f"虚部: {imag_part}")
```
使用 `conjugate()` 方法能得到一个复数的共轭复数，共轭复数的实部和原复数相同，虚部则是原复数虚部的相反数。
```python
z = 3 + 4j
conjugate_z = z.conjugate()
print(f"原复数: {z}")
print(f"共轭复数: {conjugate_z}")
```
Python 支持对复数进行多种算术运算，像加法、减法、乘法、除法等。
```python
z1 = 3 + 4j
z2 = 1 + 2j
# 加法
sum_result = z1 + z2
# 减法
diff_result = z1 - z2
# 乘法
prod_result = z1 * z2
# 除法
div_result = z1 / z2
print(f"加法结果: {sum_result}")
print(f"减法结果: {diff_result}")
print(f"乘法结果: {prod_result}")
print(f"除法结果: {div_result}")
```
可以使用 `abs()` 函数来计算复数的模（绝对值），复数的模是实部和虚部的平方和的平方根。
```python
z = 3 + 4j
modulus = abs(z)
print(f"复数的模: {modulus}")
```
#### 1.1.4 字符串

字符串是以单引号`'`或双引号`"`括起来的任意文本，比如`'abc'`，`"xyz"`等等。请注意，`''`或`""`本身只是一种表示方式，不是字符串的一部分，因此，字符串`'abc'`只有`a`，`b`，`c`这3个字符。如果`'`本身也是一个字符，那就可以用`""`括起来，比如`"I'm OK"`包含的字符是`I`，`'`，`m`，空格，`O`，`K`这6个字符。
:::warning 注意区分
需要注意的是，C和C++中单引号和双引号的含义是不同的！在C和C++中，单引号意味着单个字符(char类型)；而双引号是字符串！(char[])
:::
如果字符串内部既包含`'`又包含`"`怎么办？可以用转义字符`\`来标识，比如：
```python
'I\'m \"OK\"!'
```
表示的字符串内容是：
```plain
I'm "OK"!
```
转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`，可以在Python的交互式命令行用`print()`打印字符串看看：
```plain
>>> print('I\'m ok.')
I'm ok.
>>> print('I\'m learning\nPython.')
I'm learning
Python.
>>> print('\\\n\\')
\
\
```
如果字符串里面有很多字符都需要转义，就需要加很多`\`，为了简化，Python还允许用`r''`表示`''`内部的字符串默认不转义：
```plain
>>> print('\\\t\\')
\       \
>>> print(r'\\\t\\')
\\\t\\
```
如果字符串内部有很多换行，用`\n`写在一行里不好阅读，为了简化，Python允许用`'''...'''`的格式表示多行内容：
```plain
>>> print('''line1
... line2
... line3''')
line1
line2
line3
```
#### 1.1.5 布尔值
布尔值和布尔代数的表示完全一致，一个布尔值只有`True`、`False`两种值，要么是`True`，要么是`False`，在Python中，可以直接用`True`、`False`表示布尔值（请注意大小写），也可以通过布尔运算计算出来：
```plain
>>> True
True
>>> False
False
>>> 3 > 2
True
>>> 3 > 5
False
```
布尔值可以用`and`、`or`和`not`运算。
`and`运算是**与运算**，只有所有都为`True`，`and`运算结果才是`True`：
```plain
>>> True and True
True
>>> True and False
False
>>> False and False
False
>>> 5 > 3 and 3 > 1
True
```
`or`运算是**或运算**，只要其中有一个为`True`，`or`运算结果就是`True`：
```plain
>>> True or True
True
>>> True or False
True
>>> False or False
False
>>> 5 > 3 or 1 > 3
True
```
`not`运算是**非运算**，它是一个单目运算符，把`True`变成`False`，`False`变成`True`：
```plain
>>> not True
False
>>> not False
True
>>> not 1 > 2
True
```
布尔值经常用在条件判断中，比如：
```python
if age >= 18:
    print('adult')
else:
    print('teenager')
```
#### 1.1.6 空值
空值是Python里一个特殊的值，用`None`表示。`None`不能理解为`0`，因为`0`是有意义的，而`None`是一个特殊的空值。
#### 1.1.7 变量
变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。
变量在程序中就是用一个变量名表示了，变量名必须是大小写英文、数字和`_`的组合，且不能用数字开头，比如：
```python
a = 1
```
变量`a`是一个整数。
```python
t_007 = 'T007'
```
变量`t_007`是一个字符串。
```python
Answer = True
```
变量`Answer`是一个布尔值`True`。

在Python中，等号`=`是赋值语句，可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，例如：
```python
a = 123 # a是整数
print(a)
a = 'ABC' # a变为字符串
print(a)
```
这种变量本身类型不固定的语言称之为_动态语言_，与之对应的是_静态语言_。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，赋值语句如下（// 表示注释）：
```python
int a = 123; // a是整数类型变量
a = "ABC"; // 错误：不能把字符串赋给整型变量
```
和静态语言相比，动态语言更灵活，就是这个原因。
请不要把赋值语句的等号等同于数学的等号。比如下面的代码：
```python
x = 10
x = x + 2
```
如果从数学上理解`x = x + 2`那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式`x + 2`，得到结果`12`，再赋给变量`x`。由于`x`之前的值是`10`，重新赋值后，`x`的值变成`12`。这些和C语言大同小异，不再介绍。
### 1.2 字符串
#### 1.2.1 字符串str
在最新的Python 3版本中，字符串是以Unicode编码的，也就是说，Python的字符串支持多语言，例如：
```plain
>>> print('包含中文的str')
包含中文的str
```
对于单个字符的编码，Python提供了`ord()`函数获取字符的整数表示，`chr()`函数把编码转换为对应的字符：
```plain
>>> ord('A')
65
>>> ord('中')
20013
>>> chr(66)
'B'
>>> chr(25991)
'文'
```
如果知道字符的整数编码，还可以用十六进制这么写`str`：
```plain
>>> '\u4e2d\u6587'
'中文'
```
两种写法完全是等价的。
要计算`str`包含多少个字符，可以用`len()`函数：

```plain
>>> len('ABC')
3
>>> len('中文')
2
```
`len()`函数计算的是`str`的字符数，如果换成`bytes`，`len()`函数就计算字节数：

```plain
>>> len(b'ABC')
3
>>> len(b'\xe4\xb8\xad\xe6\x96\x87')#转换为bytes
6
>>> len('中文'.encode('utf-8'))
6
```
可见，1个中文字符经过UTF-8编码后通常会占用3个字节，而1个英文字符只占用1个字节。
#### 1.2.2 字符串的格式化
我们经常会输出类似`'亲爱的xxx你好！你xx月的话费是xx，余额是xx'`之类的字符串，而xxx的内容都是根据变量变化的，所以，需要一种简便的格式化字符串的方式。  
##### 1.%方法
在Python中，采用的格式化方式和C语言是一致的，用`%`实现，举例如下：
```plain
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'
```
`%`运算符就是用来格式化字符串的。在字符串内部，`%s`表示用字符串替换，`%d`表示用整数替换，有几个`%?`占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个`%?`，括号可以省略。
常见的占位符有：
| 占位符 | 替换内容 |
|  ------ | ---- | 
| %d | 整数 | 
| %f | 浮点数 | 
| %s | 字符串 | 
| %x | 十六进制整数 |

其中，格式化整数和浮点数还可以指定是否补0和整数与小数的位数：
```python
print('%2d-%02d' % (3, 1))
print('%.2f' % 3.1415926)
```
如果你不太确定应该用什么，`%s`永远起作用，它会把任何数据类型转换为字符串：
```plain
>>> 'Age: %s. Gender: %s' % (25, True)
'Age: 25. Gender: True'
```
有些时候，字符串里面的`%`是一个普通字符怎么办？这个时候就需要转义，用`%%`来表示一个`%`：
```plain
>>> 'growth rate: %d %%' % 7
'growth rate: 7 %'
```
##### 2. format()
另一种格式化字符串的方法是使用字符串的`format()`方法，它会用传入的参数依次替换字符串内的占位符`{0}`、`{1}`……，不过这种方式写起来比%要麻烦得多：
```plain
>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
```
##### 3.f-string
最后一种格式化字符串的方法是使用以`f`开头的字符串，称之为`f-string`，它和普通字符串不同之处在于，字符串如果包含`{xxx}`，就会以对应的变量替换：
```plain
>>> r = 2.5
>>> s = 3.14 * r ** 2
>>> print(f'The area of a circle with radius {r} is {s:.2f}')
The area of a circle with radius 2.5 is 19.62
```
上述代码中，`{r}`被变量`r`的值替换，`{s:.2f}`被变量`s`的值替换，并且`:`后面的`.2f`指定了格式化参数（即保留两位小数），因此，`{s:.2f}`的替换结果是`19.62`。
### 1.3 数组、元组、字典与集合
#### 1.3.1 数组list
Python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素。
比如，列出班里所有同学的名字，就可以用一个list表示：
```plain
>>> classmates = ['Michael', 'Bob', 'Tracy']
>>> classmates
['Michael', 'Bob', 'Tracy']
```
变量`classmates`就是一个list。用`len()`函数可以获得list元素的个数：
```plain
>>> len(classmates)
3
```
用索引来访问list中每一个位置的元素，记得索引是从`0`开始的：
```plain
>>> classmates[0]
'Michael'
>>> classmates[1]
'Bob'
>>> classmates[2]
'Tracy'
>>> classmates[3]
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
IndexError: list index out of range
```
当索引超出了范围时，Python会报一个`IndexError`错误，所以，要确保索引不要越界，记得最后一个元素的索引是`len(classmates) - 1`。
如果要取最后一个元素，除了计算索引位置外，还可以用`-1`做索引，直接获取最后一个元素：
```plain
>>> classmates[-1]
'Tracy'
```
以此类推，可以获取倒数第2个、倒数第3个：
```plain
>>> classmates[-2]
'Bob'
>>> classmates[-3]
'Michael'
>>> classmates[-4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```
当然，倒数第4个就越界了。
list是一个可变的有序表，所以，可以往list中追加元素到末尾：
```plain
>>> classmates.append('Adam')
>>> classmates
['Michael', 'Bob', 'Tracy', 'Adam']
```
也可以把元素插入到指定的位置，比如索引号为`1`的位置：
```plain
>>> classmates.insert(1, 'Jack')
>>> classmates
['Michael', 'Jack', 'Bob', 'Tracy', 'Adam']
```
要删除list末尾的元素，用`pop()`方法：
```plain
>>> classmates.pop()
'Adam'
>>> classmates
['Michael', 'Jack', 'Bob', 'Tracy']
```
要删除指定位置的元素，用`pop(i)`方法，其中`i`是索引位置：
```plain
>>> classmates.pop(1)
'Jack'
>>> classmates
['Michael', 'Bob', 'Tracy']
```
要把某个元素替换成别的元素，可以直接赋值给对应的索引位置：
```plain
>>> classmates[1] = 'Sarah'
>>> classmates
['Michael', 'Sarah', 'Tracy']
```
list里面的元素的数据类型也可以不同，比如：
```plain
>>> L = ['Apple', 123, True]
```
list元素也可以是另一个list，比如：
```plain
>>> s = ['python', 'java', ['asp', 'php'], 'scheme']
>>> len(s)
4
```
要注意`s`只有4个元素，其中`s[2]`又是一个list，如果拆开写就更容易理解了：
```plain
>>> p = ['asp', 'php']
>>> s = ['python', 'java', p, 'scheme']
```
要拿到`'php'`可以写`p[1]`或者`s[2][1]`，因此`s`可以看成是一个二维数组，类似的还有三维、四维……数组，不过很少用到。
如果一个list中一个元素也没有，就是一个空的list，它的长度为0：
```plain
>>> L = []
>>> len(L)
0
```
#### 1.3.2 元组tuple
另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple一旦初始化就不能修改，比如同样是列出同学的名字：
```plain
>>> classmates = ('Michael', 'Bob', 'Tracy')
```
现在，classmates这个tuple不能变了，它也没有append()，insert()这样的方法。其他获取元素的方法和list是一样的，你可以正常地使用`classmates[0]`，`classmates[-1]`，但不能赋值成另外的元素。
不可变的tuple有什么意义？因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。
tuple的陷阱：当你定义一个tuple时，在定义的时候，tuple的元素就必须被确定下来，比如：
```plain
>>> t = (1, 2)
>>> t
(1, 2)
```
如果要定义一个空的tuple，可以写成`()`：
```plain
>>> t = ()
>>> t
()
```
但是，要定义一个只有1个元素的tuple，如果你这么定义：
```plain
>>> t = (1)
>>> t
1
```
定义的不是tuple，是`1`这个数！这是因为括号`()`既可以表示tuple，又可以表示数学公式中的小括号，这就产生了歧义，因此，Python规定，这种情况下，按小括号进行计算，计算结果自然是`1`。
所以，只有1个元素的tuple定义时必须加一个逗号`,`，来消除歧义：
```plain
>>> t = (1,)
>>> t
(1,)
```
Python在显示只有1个元素的tuple时，也会加一个逗号`,`，以免你误解成数学计算意义上的括号。
最后来看一个“可变的”tuple：
```plain
>>> t = ('a', 'b', ['A', 'B'])
>>> t[2][0] = 'X'
>>> t[2][1] = 'Y'
>>> t
('a', 'b', ['X', 'Y'])
```
这个tuple定义的时候有3个元素，分别是`'a'`，`'b'`和一个list。不是说tuple一旦定义后就不可变了吗？怎么后来又变了？——————变的是list啊，又不是tuple，tuple里面还是list，它又不知道list里面变了（   
#### 1.3.3 字典dict
Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，使用键-值（key-value）存储，具有极快的查找速度。
举个例子，假设要根据同学的名字查找对应的成绩，如果用list实现，需要两个list：
```python
names = ['Michael', 'Bob', 'Tracy']
scores = [95, 75, 85]
```
给定一个名字，要查找对应的成绩，就先要在names中找到对应的位置，再从scores取出对应的成绩，list越长，耗时越长。
如果用dict实现，只需要一个“名字”-“成绩”的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。用Python写一个dict如下：
```plain
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95
```
为什么dict查找速度这么快？因为dict的实现原理和查字典是一样的。假设字典包含了1万个汉字，我们要查某一个字，一个办法是把字典从第一页往后翻，直到找到我们想要的字为止，这种方法就是在list中查找元素的方法，list越大，查找越慢。
第二种方法是先在字典的索引表里（比如部首表）查这个字对应的页码，然后直接翻到该页，找到这个字。无论找哪个字，这种查找速度都非常快，不会随着字典大小的增加而变慢。
dict就是第二种实现方式，给定一个名字，比如`'Michael'`，dict在内部就可以直接计算出`Michael`对应的存放成绩的“页码”，也就是`95`这个数字存放的内存地址，直接取出来，所以速度非常快。
可以猜到，这种key-value存储方式，在放进去的时候，必须根据key算出value的存放位置，这样，取的时候才能根据key直接拿到value。
把数据放入dict的方法，除了初始化时指定外，还可以通过key放入：
```plain
>>> d['Adam'] = 67
>>> d['Adam']
67
```
由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：
```plain
>>> d['Jack'] = 90
>>> d['Jack']
90
>>> d['Jack'] = 88
>>> d['Jack']
88
```
如果key不存在，dict就会报错：
```plain
>>> d['Thomas']
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Thomas'
```
要避免key不存在的错误，有两种办法，一是通过`in`判断key是否存在：
```plain
>>> 'Thomas' in d
False
```
二是通过dict提供的`get()`方法，如果key不存在，可以返回`None`，或者自己指定的value：
```plain
>>> d.get('Thomas')
>>> d.get('Thomas', -1)
-1
```
注意：返回`None`的时候Python的交互环境不显示结果。
要删除一个key，用`pop(key)`方法，对应的value也会从dict中删除：
```plain
>>> d.pop('Bob')
75
>>> d
{'Michael': 95, 'Tracy': 85}
```
请务必注意，dict内部存放的顺序和key放入的顺序是没有关系的。
和list比较，dict有以下几个特点：
1.  查找和插入的速度极快，不会随着key的增加而变慢；
2.  需要占用大量的内存，内存浪费多。

而list相反： 

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

所以，dict是用空间来换取时间的一种方法。
dict可以用在需要高速查找的很多地方，在Python代码中几乎无处不在，正确使用dict非常重要，需要牢记的第一条就是dict的key必须是**不可变对象**。
这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。这个通过key计算位置的算法称为哈希算法（Hash）。
要保证hash的正确性，作为key的对象就不能变。在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key：

```plain
>>> key = [1, 2, 3]
>>> d[key] = 'a list'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

#### 1.3.4 集合set
set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。
要创建一个set，用`{x,y,z,...}`列出每个元素：
```plain
>>> s = {1, 2, 3}
>>> s
{1, 2, 3}
```
或者提供一个list作为输入集合：
```plain
>>> s = set([1, 2, 3])
>>> s
{1, 2, 3}
```
注意，传入的参数`[1, 2, 3]`是一个list，而显示的`{1, 2, 3}`只是告诉你这个set内部有1，2，3这3个元素，显示的顺序也不表示set是有序的。。
重复元素在set中自动被过滤：
```plain
>>> s = {1, 1, 2, 2, 3, 3}
>>> s
{1, 2, 3}
```
通过`add(key)`方法可以添加元素到set中，可以重复添加，但不会有效果：
```plain
>>> s.add(4)
>>> s
{1, 2, 3, 4}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```
通过`remove(key)`方法可以删除元素：
```plain
>>> s.remove(4)
>>> s
{1, 2, 3}
```
set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：
```plain
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1 & s2
{2, 3}
>>> s1 | s2
{1, 2, 3, 4}
```
set和dict的唯一区别仅在于没有存储对应的value，但是，set的原理和dict一样，所以，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复元素”。
### 1.4 循环与选择
#### 1.4.1 if-else
输入用户年龄，根据年龄打印不同的内容，在Python程序中，用`if`语句实现：
```python
age = 20
if age >= 18:
    print('your age is', age)
    print('adult')
```
根据Python的缩进规则，如果`if`语句判断是`True`，就把缩进的两行print语句执行了，否则，什么也不做。
也可以给`if`添加一个`else`语句，意思是，如果`if`判断是`False`，不要执行`if`的内容，去把`else`执行了：
```python
age = 3
if age >= 18:
    print('your age is', age)
    print('adult')
else:
    print('your age is', age)
    print('teenager')
```
注意不要少写了冒号`:`。
当然上面的判断是很粗略的，完全可以用`elif`做更细致的判断：
```python
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```
`elif`是`else if`的缩写，完全可以有多个`elif`，所以`if`语句的完整形式就是：
```python
if <条件判断1>:
    <执行1>
elif <条件判断2>:
    <执行2>
elif <条件判断3>:
    <执行3>
else:
    <执行4>
```
`if`语句执行有个特点，它是从上往下判断，如果在某个判断上是`True`，把该判断对应的语句执行后，就忽略掉剩下的`elif`和`else`，所以，下面的程序打印的是`teenager`：
```python
age = 20
if age >= 6:
    print('teenager')
elif age >= 18:
    print('adult')
else:
    print('kid')
```
`if`判断条件还可以简写，比如写：
```python
if x:
    print('True')
```
只要`x`是非零数值、非空字符串、非空list等，就判断为`True`，否则为`False`。
#### 1.4.2 match
当我们用`if ... elif ... elif ... else ...`判断时，会写很长一串代码，可读性较差。

如果要针对某个变量匹配若干种情况，可以使用`match`语句。

例如，某个学生的成绩只能是`A`、`B`、`C`，用`if`语句编写如下：
```python
score = 'B'
if score == 'A':
    print('score is A.')
elif score == 'B':
    print('score is B.')
elif score == 'C':
    print('score is C.')
else:
    print('invalid score.')
```
如果用`match`语句改写，则改写如下：
```python
score = 'B'
match score:
    case 'A':
        print('score is A.')
    case 'B':
        print('score is B.')
    case 'C':
        print('score is C.')
    case _: # _表示匹配到其他任何情况
        print('score is ???.')
```
使用`match`语句时，我们依次用`case xxx`匹配，并且可以在最后（且仅能在最后）加一个`case _`表示“任意值”，代码较`if ... elif ... else ...`更易读。
**复杂匹配**  
`match`语句除了可以匹配简单的单个值外，还可以匹配多个值、匹配一定范围，并且把匹配后的值绑定到变量：
```python
age = 15
match age:
    case x if x < 10:
        print(f'< 10 years old: {x}')
    case 10:
        print('10 years old.')
    case 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18:
        print('11~18 years old.')
    case 19:
        print('19 years old.')
    case _:
        print('not sure.')
```
在上面这个示例中，第一个`case x if x < 10`表示当`age < 10`成立时匹配，且赋值给变量`x`，第二个`case 10`仅匹配单个值，第三个`case 11|12|...|18`能匹配多个值，用`|`分隔。
可见，`match`语句的`case`匹配非常灵活。   
**匹配列表**     
`match`语句还可以匹配列表，功能非常强大。
我们假设用户输入了一个命令，用`args = ['gcc', 'hello.c']`存储，下面的代码演示了如何用`match`匹配来解析这个列表：
```python
args = ['gcc', 'hello.c', 'world.c']
# args = ['clean']
# args = ['gcc']
match args:
    # 如果仅出现gcc，报错:
    case ['gcc']:
        print('gcc: missing source file(s).')
    # 出现gcc，且至少指定了一个文件:
    case ['gcc', file1, *files]:
        print('gcc compile: ' + file1 + ', ' + ', '.join(files))
    # 仅出现clean:
    case ['clean']:
        print('clean')
    case _:
        print('invalid command.')
```
第一个`case ['gcc']`表示列表仅有`'gcc'`一个字符串，没有指定文件名，报错；
第二个`case ['gcc', file1, *files]`表示列表第一个字符串是`'gcc'`，第二个字符串绑定到变量`file1`，后面的任意个字符串绑定到`*files`，它实际上表示至少指定一个文件；
第三个`case ['clean']`表示列表仅有`'clean'`一个字符串；
最后一个`case _`表示其他所有情况。
可见，`match`语句的匹配规则非常灵活，可以写出非常简洁的代码。
#### 1.4.3 循环
要计算1+2+3，我们可以直接写表达式：
```plain
>>> 1 + 2 + 3
6
```
要计算1+2+3+...+10，勉强也能写出来。
但是，要计算1+2+3+...+10000，直接写表达式就不可能了。
为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。
Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来，看例子：
```python
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
```
执行这段代码，会依次打印`names`的每一个元素：

```plain
Michael
Bob
Tracy
```
所以`for x in ...`循环就是把每个元素代入变量`x`，然后执行缩进块的语句。

再比如我们想计算1-10的整数之和，可以用一个`sum`变量做累加：

```python
sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    sum = sum + x
print(sum)
```
如果要计算1-100的整数之和，从1写到100有点困难，幸好Python提供一个`range()`函数，可以生成一个整数序列，再通过`list()`函数可以转换为list。比如`range(5)`生成的序列是从0开始小于5的整数：
```plain
>>> list(range(5))
[0, 1, 2, 3, 4]
```
`range(101)`就可以生成0-100的整数序列，计算如下：
```python
sum = 0
for x in range(101):
    sum = sum + x
print(sum)
```

第二种循环是while循环，只要条件满足，就不断循环，条件不满足时退出循环。比如我们要计算100以内所有奇数之和，可以用while循环实现：

```python
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)
```

在循环内部变量`n`不断自减，直到变为`-1`时，不再满足while条件，循环退出。


**break**  

在循环中，`break`语句可以提前退出循环。例如，本来要循环打印1～100的数字：

```python
n = 1
while n <= 100:
    print(n)
    n = n + 1
print('END')
```

上面的代码可以打印出1~100。

如果要提前结束循环，可以用`break`语句：

```python
n = 1
while n <= 100:
    if n > 10: # 当n = 11时，条件满足，执行break语句
        break # break语句会结束当前循环
    print(n)
    n = n + 1
print('END')
```

执行上面的代码可以看到，打印出1~10后，紧接着打印`END`，程序结束。

可见`break`的作用是提前结束循环。

**continue**   

在循环过程中，也可以通过`continue`语句，跳过当前的这次循环，直接开始下一次循环。

```python
n = 0
while n < 10:
    n = n + 1
    print(n)
```

上面的程序可以打印出1～10。但是，如果我们想只打印奇数，可以用`continue`语句跳过某些循环：

```python
n = 0
while n < 10:
    n = n + 1
    if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    print(n)
```

执行上面的代码可以看到，打印的不再是1～10，而是1，3，5，7，9。

可见`continue`的作用是提前结束本轮循环，并直接开始下一轮循环。

### 1.5 函数
在C语言中已经学过函数，Python的函数定义与C语言类似，但Python的函数定义更为简洁。  
Python中没有指针，也没有函数指针，故Python的函数定义与C语言相比，更为简洁。  
**定义**：  
Python定义函数时，需要先定义函数名、参数名和函数体，然后通过`def`关键字将它们封装成一个函数。例如，定义一个求和函数`sum`：
```python
def sum(x, y):
    return x + y
```
后续与C语言类似，不再赘述。


-------
<div align="center">Python基础语言部分至此结束</div>

--------
## 2.基础数据结构
### 2.1 数组（略）
### 2.2 链表
#### 2.2.1 列表（list）
Python中的列表可以当作链表使用，当然也可以当成队列、栈使用，还可以当成数组使用。下面举例说明Python列表的功能。  
```python
# 初始化列表
li = [11, 24, 3, 4, 5, 6]
print(li)  # 输出初始化后的列表：[11, 24, 3, 4, 5, 6]
# 在末尾添加61
li.append(61)
print(li)  # 输出添加元素后的列表：[11, 24, 3, 4, 5, 6, 61]
# 统计4的个数
cnt = li.count(4)
print(cnt)  # 输出4的个数：1
# 在5前面插入49
index = li.index(5)
li.insert(index, 49)
print(li)  # 输出插入元素后的列表：[11, 24, 3, 4, 49, 5, 6, 61]
# 在5后面插入51
index = li.index(5)
li.insert(index + 1, 51)
print(li)  # 输出插入元素后的列表：[11, 24, 3, 4, 49, 5, 51, 6, 61]
# 找到3，将其删除
index = li.index(3)
li.pop(index)
print(li)  # 输出删除元素后的列表：[11, 24, 4, 49, 5, 51, 6, 61]
# 删除5
li.remove(5)
print(li)  # 输出删除元素后的列表：[11, 24, 4, 49, 51, 6, 61]
# 反转列表
li.reverse()
print(li)  # 输出反转后的列表：[61, 6, 51, 49, 4, 24, 11]
# 排序
li.sort()
print(li)  # 输出排序后的列表：[4, 6, 11, 24, 49, 51, 61]
# 计算长度
print(len(li))  # 输出列表长度：7
# 计算最大值
print(max(li))  # 输出列表中的最大值：61
# 计算最小值
print(min(li))  # 输出列表中的最小值：4
```
