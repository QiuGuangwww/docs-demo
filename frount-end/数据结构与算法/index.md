# 算法与数据结构
## 1.引言
### 1.1 什么是数据结构？
——用计算机解决一个问题，通常需要以下几个步骤：         
```mermaid
graph LR
A[从具体问题抽象出一个适当的数学模型] --> C[设计一个解决此问题的算法]
C --> D[编出程序]
D --> E[进行测试与调整直到得到答案]
```
- 寻求数学模型的实质：分析问题，从中提取操作的对象，并找出这些操作对象之间含有的关系，然后用数学的语言加以描述。  
- 很多问题最后都转化为求解数学方程或数学方程组。
- 但是当计算机进入非数值计算领域，尤其是用在管理上的时候，计算机的操作对象之间的关系就无法用数学方程加以描述。

$$非数值计算问题的数学模型正是数据结构$$
数据结构的讨论一般涉及以下三个方面内容：  
1.数据成员以及它们相互之间的逻辑关系，也成为数据的逻辑结构，简称为**数据结构**。  
2.数据成员及其关系在计算机存储器内的存储表示，也称为数据的物理结构，简称为**存储结构**。  
3.施加于该数据结构上的操作。     

### 1.2 数据结构
#### 1.逻辑结构
- 相互之间存在一种或多种特定关系的数据元素的集合。  
- 四类基本结构：
   - 1.集合
   - 2.线性结构
   - 3.树形结构
   - 4.图结构
 
**数据结构的形式定义**     
数据结构是一个二元组`Data Structure = (K,R)`，其中，$K$是数据元素的有限集，$R$是$K$上关系的有限集。   
例如：`list=(K,R)`     
其中，$K=\{1,2,3,4,5,6,7\},R=\{<1,2>,<2,3>,<3,4>,<4,5>,<5,6>,<6,7>\}$（有序数对）       
图形表示：   
```mermaid
graph LR
A((1)) --> C((2)) --> B((3))-->E((4))-->r((5))-->u((6))-->m((7))
```
#### 2.物理结构
- 数据逻辑结构在计算机中的表示和实现。
- 包含数据元素的表示和关系的表示。

**数据元素之间关系的表示**    
- 顺序存储结构（地址连续）
   - 结点间的逻辑关系由存储单元的邻接关系来体现。通常顺序存储结构是借助于语言的数组来描述的。
 ![!imag](https://s21.ax1x.com/2025/04/12/pERWfEQ.png)
- 链式存储结构:位置可以不连续
   - 存储信息更多，占用空间也多了
 
 数据的逻辑结构与存储结构密切相关：
 - 算法设计取决于选定的逻辑结构。  
 - 算法的实现依赖于采用的存储结构。
 
**应用：染色问题**     
可以转化为图论问题。此处略。

### 1.3 算法分析与设计
#### 1.3.1 算法 
是对特定问题求解步骤的一种描述，它是指令的有限序列，其中每一条指令表示一个或多个操作。   
一个算法通常具有以下重要特征：
- 有穷性：有限步步骤
- 确定性：每个步骤有确切定义
- 输入：有0个或多个输入
- 输出：有1个或多个输出
- 可行性：任何步骤都是可行的，在有限时间内完成
$$
程序=数据结构+算法
$$
#### 1.3.2 算法设计的要求  
- 正确性：正确反映需求（通过测试）
- 可读性：有助于理解、调试和维护
- 健壮性：完备的异常和出错处理
- 高效率与低存储：对空间和时间的要求

#### 1.3.3 算法性能度量方法
1.事后统计
- 利用计算机内计时功能。
- 缺点：
   - 必须先运行依据算法编制的程序；
   - 所得时间统计量依赖于硬件、软件等环境因素，从而会掩盖算法本身的优劣。
2.事前分析  
- 一个高级语言程序在计算机上运行所消耗的时间取决于：
   - ①依据的算法选用何种策略
   - ②问题的规模
   - ③程序语言
   - ④编译程序产生机器代码质量
   - ⑤机器执行指令速度
- 时间复杂度和空间复杂度

#### 1.3.4 算法的时间度量
从算法中选取一种对于研究的问题来说是基本操作的原操作，以该基本操作重复执行的次数作为算法执行的时间度量。   
**算法复杂度**   
- 问题的规模($n$)或大小。如：矩阵的阶数、图的结点个数、被分类序列的正整数个数··· ···
- 时间复杂度：算法的所需的时间和问题规模的函数。记为$T(n)$。当$n \to \infty$时的时间复杂性，被称为**渐进时间复杂度**  
- 空间复杂度：算法的所需的空间和问题规模的函数。记为$S(n)$。当$n \to \infty$时的空间复杂性，被称为**渐进空间复杂度**

#### 1.3.5 大O符号
**Define：** 给定两个正值函数$f$和$g$，考虑以下定义：
  - 定义1：如果存在正数$c$和$N$，对于所有$n \geq N$，有$f(n) \leq cg(n)$，则$f(n)=O(g(n))$
  **例如：** $f(n)=2(n^2) +3n+1=O(n^2)$，在这里$g(n)=n^2$。

算法中常见复杂度：
$$
[O(1)]<[O(lgn)]<[O(n)<O(nlgn)<O(n^2)<O(n^3)]<[O(2^n)<O(n!)<O(n^n)]
$$
> 四个大括号，分别从常数到对数到多项式到指数。当然，时间复杂度越小越好。

**举例**
```C++
for(i=0;i<n;i++){
	for(j=1,sum = a[0];j<=i;j++)
		sum+=a[j];
	cout<<"sum"<<i<<"is"<<sum<<endl;
	}
```
时间复杂度：
$$
1+3n+\sum_{i=1}^{n-1} 2i=1+3n+n(n-1)=O(n)+O(n^2)
$$

#### 1.3.6 Θ符号
**Define：** 如果存在正数$c_1,c_2$以及$N$，对于所有的$n \geq N$，有$c_1 g(n) \leq f(n) \leq c_2 g(n)$，则$f(n)=\Theta(g(n))$。   
**举例：** 若$2n \leq 2+2n \leq 3n$，则$2+2n = \Theta(n)$    
#### 1.3.7 最好、平均和最坏情况
有时，算法中基本操作重复执行的次数随问题的输入不同而不同。   
- 最好情况：算法需要的最少步骤。
- 最坏情况：算法需要的最多步骤。
- 平均复杂度：将处理每个输入所执行的步骤数与该输入出现的概率相乘，然后将所有相乘的结果相加。
$$
C_{avg} = \sum\nolimits_{i} p(input_i)steps(input_i)
$$
**例：顺序查找算法**   
```C++
Status serch(int a[],int n,int e){
	for(i=0;i<=n-1;++i)
		if(e == a[i]) return TRUE;
	return FALSE;
}
```
最好1次，最坏$n$次，平均$n(n+1)$次。

## 2.线性表
### 2.1 线性表的概念
#### 2.1.1 线性表的语言定义
有唯一头元素和唯一尾元素。除首结点外，每个结点都有自己的直接前驱；除尾结点外，每个结点都有自己的直接后继。线性表是$n$个数据元素的有限序列。例：英文字母表$(A,B,C,\dots,Z)$，数据表中的数据元素可以由若干个数据项组成，比如包含大量记录的登记表等。线性表可以表示为$n$个数据元素的有限序列：
$$(a_1,\dots,a_{i-1},a_i,\dots,a_n)$$
其中$a_1$是头元素，$a_n$是尾元素，$a_i$是第$i$个元素。$a_{i-1}$是$a_i$的直接前驱，$a_i$是$a_{i-1}$的直接后继。当$2\leq i \leq n$时，$a_i$有且只有一个直接前驱，当$1\leq i \leq n-1$时，$a_i$有且只有一个直接后继。
#### 2.1.2 线性表的存储
- 顺序存储——顺序表
- 链式存储——链表
#### 2.1.3 线性表的抽象数据类型
抽象数据类型是指用以表示应用问题的数据模型以及定义在该模型上的一组操作。从抽象数据类型观点来看，一种数据结构即为一个抽象数据类型。一个抽象数据类型由数据部分和操作部分两方面来描述，数据部分描述数据元素和数据元素之间的关系。操作部分根据定义的抽象数据类型应用的需要来确定。  
下面是线性表类的一个抽象数据类型说明：  
```C++
template <class T>
class List{
	void Clear();  //置空线性表
	bool IsEmpty(); //线性表为空时，返回True
	bool Append(const T value);  //在表尾添加元素value，表的长度增加1
	bool Insert(const int p,const T value);  //在位置p插入元素value,表的长度增加1
	bool Delete(const int p);  //删除位置p上的元素，表的长度减去1
	bool GetValue(const int p,T& value); //把位置p的元素值修改为value
	bool GetPos(int &p,const T value);  //把值为value的元素的位置返回到变量p中
};
```
线性表的抽象数据类型并不是唯一的，要根据实际的应用来进行抽象。
### 2.2 顺序表
#### 2.2.1 线性表的顺序存储及具体实现
用一组地址连续的存储单元依次存储线性表的数据元素。设每个元素需要占用$l$个存储单元，$LOC(a_i)$表示元素$a_i$的存储地址，则$LOC(a_1)$是第一个数据元素$a_1$的存储地址，也是整个线性表的起始地址。
$$
LOC(a_{i+1})=LOC(a_i)+l
$$
$$
LOC(a_i)=LOC(a_1)+(i-1)l
$$

**顺序表有以下特点：**
- 元素的数据类型是相同的
- 元素顺序地存储在一片地址连续的存储空间中，一个元素按照存储顺序由唯一的索引值，又称为下标，可以随机存取表中的元素
- 逻辑关系相邻的两个元素在物理位置上也相邻
- 在程序中，数组变量说明语句一般使用常数作为向量长度，长度是静态常数。在程序执行时不变。

以下是线性表的一种顺序实现：
```C++
template <class T> //线性表的元素类型为T
class ArrayList : public List<T>{   //定义顺序表ArrayList
public: //顺序表的运算集
	ArrayList(const int size){ //创建顺序表，表长为最大长度
		maxSize=size;
		arrayList=new T[maxSize];
		curLen=0;
		position=0;
	}
	~ArrayList(){  //析构函数，消除ArrayList的实例
		delete [] arrayList;
	}
	void clear(){  //清空顺序表
		delete [] arrayList;
		curLen=0;
		position=0;
		arrayList=new T[maxSize];
	}
	int Length();
	bool Append(const T value); //在表尾添加元素value,表的长度增加1
	bool Insert(const int p,const T value); //在位置p插入元素value，表的长度增加1
	bool Delete(const int p); //删除位置p上的元素，表的长度减1
	bool GetValue(const int p,const T value); //把位置p的元素值返回到变量value中
	bool SetValue(const int p,const T value); //把位置p的元素值修改为value
	bool GetPos(int &p,const T value); //把值为value的元素返回到变量p中
private:
	T *arrayList; //存储顺序表的实例
	int maxSize; //顺序表实例的最大长度
	int curLen; //顺序表实例的当前长度
	int position; //当前处理位置
};  
```
#### 2.2.2 算法：插入或插入新元素
##### 1.插入新元素
**在第$i$个数据元素之前插入一个新的元素**  
- 思想：将第$n$到$i$个元素均向后移动一个位置。将新元素放在第$i$个位置。
- 算法时间复杂度：移动元素个数取决于插入元素位置。
   - 若$i=1$，需移动$n$个元素
   - 若$i=n+1$，需移动0个元素
   - 若$1 \leq i \leq n+1$，需要移动$n-i+1$个元素
- 假设$p_i$是在第$i$个元素之前插入一个新元素的概率，则长度为$n$的线性表中插入一个元素所需移动元素次数的期望值为：
$$ E_{is}=\sum_{i=1}^{n+1}p_i(n-i+1)$$
设在任何位置插入元素等概率，即$p_i=\frac{1}{n+1}$    
$$ E_{is}=\frac{1}{n+1}\sum_{i=1}^{n+1}(n-i+1)=\frac{n}{2}$$
从而得到这个算法的时间复杂度为$O(n)$。  
**具体实现**  
```C++
template <class T>  //顺序表元素类型为T
bool ArrayList<T> :: Insert(const int p,const T value){
	if(curLen>=maxSize){
		cout<<"The List is overflow"<<endl;  //检查顺序表是否溢出
		return false;
	}
	if(p<0 || p>curLen){
		cout<<"Insertion point is illegal"<<endl;  //检查插入位置是否合法
	}
	for(int i=curLenli>p;i--){
		arrayList[i]=arrayList[i-1]; //从表尾curLen-1处向后移动一个位置直到插入位置p
	}
	arrayList[p]=value; //位置p处插入新元素
	curLen++； //表的实际长度增加1
	return true;
}
```
##### 2.删除元素
**删除第$i$个数据元素**    
- 思想：删除第$i$个数据元素。将第$i+1$到$n$个元素均向前移动一个位置。
- 算法时间复杂度：移动元素的个数取决于删除元素位置。
   - $i=1$，需移动$n-1$个元素。
   - $i=n$，需移动$0$个元素。
   - $1 \leq i \leq n$，需移动$n-i$个元素。
- 假设$q_i$是删除第$i$个元素的概率，则长度为$n$的线性表中删除一个元素所需移动元素次数的期望值为：
$$ E_{dl}=\sum_{i=1}^{n}q_i(n-i)$$
设删除任何位置的元素等概率，即$q_i=\frac{1}{n}$
$$E_{dl}=\frac{1}{n}\sum_{i=1}^{n}(n-i)=\frac{n-1}{2}$$
从而得到这个算法的时间复杂度为$O(n)$。  
**具体实现**  
```C++
template <class T>
bool ArrayList<T>::Delete(const int p){
	if(curLen<=0){  //检查顺序表是否为空
		cout<<"No element to delete"<<endl;
		return false;
	}
	if(p<0 || p>curLen-1){  //检查删除位置的合法性
		cout<<"Deletion is illegal"<<endl;
		return false;
	}
	for(int i=p;i<curLen-1;i++){
		arrayList[i]=arrayList[i+1];//从删除位置p开始每个元素向前移动一个位置直到表尾
	}
	curLen--;//表的实际长度减1
	return true;
}
```
##### 3.多维数组
从逻辑结构上来看，多维数组可以认为是一维数组的扩充。事实上，我们也可以把==二维数组==看成一个**定长**的线性表，其每个元素也是一个定长的线性表。  
>[!Abstract] 二维数组不同的看法
>可以看成列向量形式的线性表，也可以看成行向量形式的线性表。

以此类推，$n$维数组可以视为以$n-1$维数组为元素的向量。
>[!info] 多维数组的逻辑特征
>一个元素**可能**有多个直接前驱和多个直接后继。
---
###### 数组顺序表的定义
把数组中的元素按照逻辑次序存放在一组地址连续的存储单元的方式称为数组的顺序存储结构，采用这种存储结构的数组称为数组顺序表。由于内存单元是一维结构，而数组是多维结构，因此用一组连续存储单元存放数组的元素存在一个**次序**问题，所以对二维数组有两种顺序存储方式：==列优先顺序表==和==行优先顺序表==。

---
###### 列优先顺序表
以列为**主序**的数组顺序表，是将数组元素按照列向量排序，第$i+1$个列向量紧接在第$i$个列向量的后面，即按列优先，逐列顺序存储。

---
###### 行优先顺序表
以行为主序的数组顺序表，是将数组元素按照行向量排序，第$i+1$个行向量紧接在第$i$个行向量的后面，即按行优先，逐行顺序存储。

---
###### 数组顺序表的定位公式
对于数组，一旦规定了其维数和各维的长度，便可以为它分配存储空间。下面给出优先顺序表的定位公式：  
假设每个元素占$l$个存储单元，则二维数组A中的任一元素$a_{ij}$的存储地址可以定义如下：
$$
LOC(a_{ij})=LOC(a_{00})+(b_2\times i+j)\times l
$$
- $LOC(a_{ij})$是$a_{ij}$的存储地址
- $LOC(a_{00})$是$a_{00}$的存储地址，即二维数组$A$的起始存储地址，也称为基地址。
- $b_2$是数组第二维的长度。

同理，我们可以推出$n$维行优先顺序表的元素存储地址的计算公式如下：
$$
LOC(a_{j_1,j_2,\dots ,j_n})=LOC(a_{0,0,\dots ,0})+(b_2\times \dots \times b_n\times j_1+b_3\times \dots \times b_n\times j_2+\dots b_n\times j_{n-1}+j_n) 
$$
$$
\Leftrightarrow LOC(a_{0,0,\dots ,0})+(\sum_{i=1}^{n-1}j_i\prod_{k=i+1}^{n}b_k+j_n)\times l
$$
$$
\Leftrightarrow LOC(a_{0,0,\dots ,0})+\sum_{i=1}^{n} c_ij_i,其中c_n=l,c_{i-1}=b_i\times c_i,1<i\leq n
$$
##### 4.一些结论
- 插入一个数据元素的时间复杂度为$O(n)$
- 删除一个数据元素的时间复杂度为$O(n)$
- 读取一个数据元素的时间复杂度为$O(1)$
- 修改一个数据元素的时间复杂度为$O(1)$
#### 2.2.3 顺序表的优缺点
- 优点
   - 可随机存取表中任意数据元素，算法简单，空间利用率高；例，`L.elem[i-1]`表示第$i$个数据元素
   - 直接可获取线性表的长度：`L.length`表示线性表长度
- 缺点
   - 需要预先确定数据元素的最大个数
   - 数据元素的插入，删除相对麻烦，插入和删除时需要移动较多的数据元素。
### 2.3 链表
#### 2.3.1 线性表的链式存储结构
用一组任意的存储单元存储线性表的数据元素。存储单元可以是连续的，也可以是不连续的。元素之间有两种关系：**前驱和后继**，如果只有后继，则为**单链表结构**，若两者都有，则为**双链表结构**。
#### 2.3.2 单链表
##### 1.定义
>[!question] 结点
> 两部分信息组成，存储数据元素信息的数据域（存放数据信息），存储直接后继存储位置信息的指针域（指向下一个数据单元）。
- **head:** 头指针，指向链表中第一个结点。
- **tail：** 尾指针，标记单项链表的最后一个结点的位置。
- **0：** 空指针，有时也表示为“NULL”或“Λ”。
- 头结点：记录线性表的某些性质信息（如长度）。
```C++
class LinkNode{
	public:
	ELEM  data;
	LinkNode*  Link;
};
```
##### 2.查找操作
**例** 取第3个元素
![imag](https://s21.ax1x.com/2025/04/13/pEWAhdK.png)
从Zhao开始，$j=1,\mathbf p=L \to link$，依次向后，有$j=2,\mathbf p=\mathbf p \to link$与$j=3,\mathbf p=\mathbf p \to link$，循环三次，则所指的为要求的对象，即$e=\mathbf p \to data = Sun$
- 时间复杂度：$O(n)$
- 单链表查找数据没有顺序表方便，但是在数据删除与插入上会更加简单。
##### 3.插入操作
**例** 在$a$,$b$之间插入元素$x$：
![imag](https://s21.ax1x.com/2025/04/13/pEWALLt.png)
我们只需让$s \to link = p \to link$，这样$s$的后继指针就和$p$一样指向了$b$，接着，我们让$p \to link = s$，这样$a$就指向了$c$，从而实现了插入。
##### 4.删除操作
**例** 删除元素$b$：
![imag](https://s21.ax1x.com/2025/04/13/pEWAzFS.png)
- 我们需要定义$b$结点的前驱
   - 方法①：$p \to link = p \to link \to link$（使$p$直接指向了$c$结点）
>[!warning] 注意
> 这种方法之下，$b$所占用的内存空间并没有被释放，这是一种**不安全**的删除方法。
    - 方法②：$q = p \to link,p \to link = q \to link,delete \ q$
##### 5.单链表优缺点
- 优点：
   - 插入、删除方便
- 缺点：
   - 不可随机存取表中任意数据元素
   - 不可直接获取线性表的长度

#### 2.3.3 双链表
##### 1.定义
不仅仅存储了一个元素的后继信息，还存储了前驱信息。
![imag](https://s21.ax1x.com/2025/04/13/pEWE8w6.png)
- 性质：设$d$是指向某个结点的指针，则有：
$$ d \to link \to prev = d \to prev \to link = d$$
即 **$d$结点后继的前驱和$d$结点前驱的后继都是其本身**。
- 操作
   - 只涉及单向的操作和单链表几乎相同，但插入与删除的操作变化很大。
##### 2.插入
![imag](https://s21.ax1x.com/2025/04/13/pEWEo7V.png)
- 1.找到要在之前插入的结点，$p$记录
- 2.$s \to prev = p \to prev$
- 3.$p \to prev \to link =s$
- 4.$s \to link = p$
- 5.$p \to prev =s$
这样，我们就在双向链表中插入了一个新的结点。
##### 3.删除
![](https://s21.ax1x.com/2025/04/13/pEWVW4O.png)
- 1.找到要删除的结点，$p$记录
- 2.$p \to prev \to link = p \to link$
- 3.$p \to link \to prev = p \to prev$
- 4.$delete \ p$
#### 2.3.4 循环列表
##### 1.定义
表中最后一个结点的指针域指向头结点，形成一个环。
##### 2.优点
从表的任意结点出发均可以找到表中的其他结点。
### 2.4 栈
#### 2.4.1 栈的基本概念
栈和队列是在程序设计中被广泛使用的两种线性数据结构。与线性表相比，它们的插入和删除操作受更多的约束和限定，故又被称为限定性的线性表结构。
- **栈**: 限定仅只能在末端进行插入和删除的线性表。
   - **栈顶**：允许插入和删除的一端。
   - **栈底**：不允许插入和删除的一端。
   - 时间有序表：先进后出（FILO）/后进先出（LIFO）
- **栈的基本操作**
    - `Clear()`——清空栈。
    - `IsEmpty()`——判断栈是否为空。
    - `Push(T item)`——将元素item放到栈的顶部。
    - `Pop(T& item)`——取出栈顶部的元素。
    - `Top(T& item)`——获取栈顶部的元素，但不删除该元素。
    - `IsFull()`——判断栈是否已满。

#### 2.4.2 栈的表示和实现
##### 1.栈的顺序存储
用连续的存储空间作为栈的元素的存储位置。为了表示栈顶的信息，引入了$top$这一变量。   
- 初始的时候，$top$的值为$-1$。

::: info 解释
栈顶指针$top$，指向实际栈顶位置，初值为$-1$。
:::
**向栈中插入一个元素（进栈）**     
不断的插入，不断的修改栈顶指针，$top=top+1$。最终达到栈满的状态。
:::warning 注意
显然，栈满后再添加元素是不合法的，于是我们在进栈过程中，需要考察栈是否是满的。若数组大小为$M$,当$top=M-1$，栈满时入栈，则上溢($overflow$)。
:::
**从栈中删除一个元素（出栈）**    
从栈顶开始删除，$top = top-1$即可，直到$top=-1$（栈空）。
:::warning 注意
显然，栈空后再删除元素是不合法的，于是我们在出栈过程中，需要考察栈是否是空的，此时出栈，会出现**下溢**($underflow$)的情形。
:::
##### 2.栈的链式存储
```C++
template<class T>class Node{
friend class LinkedStack<T>;
private:
	T data;
	Node<T>* link;
}
```
通常使用一个单向链表的表头这一端作为栈顶。    
**链式栈的进栈操作**  
```C++
template<class T>
LinkedStack<T>&LinkedStack<T>::Add(const T& x){
	Node<T>*p=new Node<T>;
	p->data=x;
	p->link=top;
	top = p;
	return *this;
}
```
**链式栈的退栈操作**    
```C++
template<class T>
LinkedStack<T>&LinkedStack<T>::Del(T& x){
	//栈不空时，返回栈顶值之后，栈顶指针退1
	if(IsEmpty()){cout<<"no element";return *this;}
	Node<T>*p=top;
	x=p->data;
	top=top->link;
	delete p;
	return *this;
	}
```
### 2.5 队列

### 2.6 字符串

## 6.排序
### 6.1 排序的基本概念
#### 6.1.1 内部排序与外部排序
**内部排序：** 指的是待排序记录存放在计算机随机存储器中进行的排序过程。    
**外部排序：** 指的是待排序记录的数量很大，以致内存一次不能容纳全部记录，在排序过程中尚需对外存进行访问的排序过程。  
这门课程中主要介绍内部排序。  
**内部排序——小规模的排序问题**    
- 若只有一个元素，则这个数据已经有序。  
- 若有两个元素，我们需要对其进一次比较，如果比较出来时逆序，则需要一次交换，一次交换需要三次数据的移动（赋值）。
- 若有$n$个元素：给定一个序列 $R = \{r_1,r_2,\ldots,r_n\}$，其排序码分别为$k = \{k_1,k_2,\ldots,k_n\}$。排序的目的是将记录按排序码重排从而形成新的有序序列$R^{\prime}=\{r_1^{\prime},r_2^{\prime},\ldots,r_n^{\prime}\}$，相应新的排序码为 $k^{\prime}=\{k_1^{\prime},k_2^{\prime},\ldots,k_n^{\prime}\}$。当排序码的顺序为 $k_1^{\prime} \leq k_2^{\prime} \leq \cdots \leq k_n^{\prime}$时，称为**不减序**；当 $k_1^{\prime} \geq k_2^{\prime} \geq \cdots \geq k_n^{\prime}$​时，称为**不增序**。  
**正序序列：** 正好符合我们的排序要求。  
**逆序序列：** 把待排序序列逆转，正好符合排序要求。     
#### 6.1.2 排序算法的衡量标准
**1.排序的稳定性：**   
-   存在多个具有相同排序码的记录
-   排序后这些记录的相对次序保持不变
-   **例**  
    -   34 12 34’ 08 96
    -   08 12 34 34’ 96  
    上面这个例子是稳定的，34'仍然在34的后面。若34’在34的前面，则这个排序是不稳定的。 

**2.时间代价与空间代价**
- 时间代价：排序码的比较和移动次数  
   - 最小时间代价
   - 最大时间代价
   - 平均时间代价
- 空间代价：算法本身的繁杂程度

### 6.2 插入排序
分为三种排序：
- 直接插入排序
- 折半插入排序
- 希尔排序
#### 6.2.1 直接插入排序
**思想：** 利用有序表的插入操作进行排序。  
**有序表的插入：** 将一个记录插入到已排号序的有序表中，从而得到一个新的有序表。    
**具体操作：** 逐一比较、排序。遍历前$i$个元素$(i=1,2,...,n)$，进行比较，后面比前面小则将后面的元素插入前面的元素。  
**算法分析：**  
- 稳定
- 空间代价：$O(1)$
- 时间代价：
    - 最佳情况：$n-1$次比较，$2(n-1)$次移动，为$O(n)$
    - 最差情况：$O(n^2)$
    - 平均情况：$O(n^2)$
::: code-group
```C
void insertSort(int arr[], int n) {
    int i, j, temp;
    for (i = 1; i < n; i++) {
        temp = arr[i];
        for (j = i; j > 0 && arr[j - 1] > temp; j--)
            arr[j] = arr[j - 1]; // 把已排序元素逐步向后挪位
        arr[j] = temp; // 插入
    }
}
```
```C++
void insertSort(int arr[], int n) {
    int i, j, temp;
    for (i = 1; i < n; i++) {
        temp = arr[i];
        for (j = i; j > 0 && arr[j - 1] > temp; j--)
            arr[j] = arr[j - 1]; // 把已排序元素逐步向后挪位
        arr[j] = temp; // 插入
    }
}
```
```Python
def insertSort(arr):
    n = len(arr)
    for i in range(1, n):
        temp = arr[i]
        for j in range(i, 0, -1):
            if arr[j - 1] > temp:
                arr[j] = arr[j - 1]
            else:
                break
        arr[j - 1 if j > 0 else 0] = temp
    return arr
```
:::
#### 6.2.2 折半插入排序
**思想：** 在插入第$i$个记录时，前面的记录已经有序，但是与直接插入排序不同的是，这种方法使用**二分法**查找第$i$个记录的正确位置。  
- 时间复杂度仍然为$O(n^2)$，且是一种稳定的排序。
::: code-group
```C
void binaryInsertionSort(int arr[], int n) {
    int i, j, key, low, high, mid;
    for (i = 1; i < n; i++) {
        key = arr[i];
        low = 0;
        high = i - 1;
        while (low <= high) {
            mid = (low + high) / 2;
            if (arr[mid] > key) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        j = i - 1;
        while (j >= low) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[low] = key;
    }
}
```
```C++
void binaryInsertionSort(int arr[], int n) {
    int i, j, key, low, high, mid;
    for (i = 1; i < n; i++) {
        key = arr[i];
        low = 0;
        high = i - 1;
        while (low <= high) {
            mid = (low + high) / 2;
            if (arr[mid] > key) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        j = i - 1;
        while (j >= low) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[low] = key;
    }
}
```
```Python
def binary_insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        low, high = 0, i - 1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] > key:
                high = mid - 1
            else:
                low = mid + 1
        
        j = i - 1
        while j >= low:
            arr[j + 1] = arr[j]
            j -= 1
        arr[low] = key
    return arr
```
:::
#### 6.2.3 $Shell$排序
**思想：** 先将序列转换为**若干个小序列**，在这些小序列内部进行插入排序。然后逐渐扩大小序列的规模，从而减少小序列的个数，使得待排序序列处于更加有序的状态。从而对整个序列进行排序。  
**算法分析：**   
- 不稳定
- 空间代价：$O(1)$
- 时间代价：$O(nlogn)到O(n^2)之间$ 
::: code-group
```c
```C
void shellSort(int arr[], int size) {
    int i, j, tmp, increment;
    for (increment = size / 2; increment > 0; increment /= 2) {
        for (i = increment; i < size; i++) {
            tmp = arr[i];
            for (j = i - increment; j >= 0 && tmp < arr[j]; j -= increment) {
                arr[j + increment] = arr[j];
            }
            arr[j + increment] = tmp;
        }
    }
}
```
```
```C++
void shellSort(int *arr, int size)  
{  
    int i, j, tmp, increment;  
    for (increment = size/ 2; increment > 0; increment /= 2) {    
        for (i = increment; i < size; i++) {  
            tmp = arr[i];  
            for (j = i - increment; j >= 0 && tmp < arr[j]; j -= increment) {  
                arr[j + increment] = arr[j];  
            }  
            arr[j + increment] = tmp;
        }  
    }  
}  

```
```Python

def shellSort(arr):
    size = len(arr)
    increment = size // 2
    while increment > 0:
        for i in range(increment, size):
            tmp = arr[i]
            j = i - increment
            while j >= 0 and tmp < arr[j]:
                arr[j + increment] = arr[j]
                j -= increment
            arr[j + increment] = tmp
        increment //= 2
    return arr
```
:::