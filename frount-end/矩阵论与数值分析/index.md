# 矩阵论与数值分析
## 1.绪论与前置知识
### 1.1 误差分析与数值方法的稳定性
#### 1.1.1 误差的来源与分类
![误差图](https://s21.ax1x.com/2025/03/18/pEd4o6I.png)

由上图我们可知在科学计算中，误差的来源主要为以下几种：  
**1.模型误差**  
由实际问题抽象到数学模型会简化很多条件，不可避免的会产生误差，这种误差即为模型误差。  
**2.观测误差**  
观测手段限制，得到的数据带来的误差，即为观测误差。  
**3.截断误差**    
从数学问题转化为数值问题时带来的误差，即为截断误差。  
**4.舍入误差**    
用计算机进行数值计算的时候，由于计算机的字长有限，原始数据在计算机上的表现出现误差，这种误差称为舍入误差。  
#### 1.1.2 误差的基本概念与有效数字
**1.误差的基本概念**
- 设实数$x$为某个精确值，$a$ 为它的一个近似值，则称$x - a$为近似值 $a$ 的**绝对误差**，简称为**误差**。当 $x \neq 0$ 时，$\frac{x - a}{x}$称为$ a$ 的**相对误差**。
例如，当$x = 3.000$，$a = 3.100$ 时，绝对误差 $x - a = -0.100$，相对误差为
$$
\frac{x - a}{x} = \frac{-0.100}{3.00} \approx -0.0333 = -0.333 \times 10^{-1}.
$$
又当 $x = 3000.0$，$a = 0.3100 \times 10^4$时，绝对误差变化为$x - a = -0.1 \times 10^3$ ，而相对误差仍为
$$
\frac{x - a}{x} = \frac{-0.1 \times 10^3}{0.3000 \times 10^4} \approx -0.333 \times 10^{-1}.
$$

- 设实数$x$为某个精确值，$a$为它的一个近似值。若有常数$e_a$使得$|x-a|\leq e_a$，则称$e_a$为$a$的**绝对误差界**，或简称**误差界**，称$\frac{e_a}{|a|}$为$a$的**相对误差界**。   

 **2.有效数字**   
 - 设实数$x$为某个精确值，$a$为它的一个近似值，写成$a=\pm 10^k \times 0.a_1a_2a_3...a_n...$，它可以使有限或者无限小数的形式。其中$a_i (i=1,2,...)$是$0,1,...,9$中的一个数字，$a_1 \neq 0$，$k$为整数。若$|x-a| \leq \frac{1}{2} \times 10^{n-k}$，则称$a$为$x$的有$n$位**有效数字的近似值。**
 - 设实数$x$为某个精确值，$a$为它的一个近似值，写成$a=\pm 10^k \times 0.a_1a_2a_3...a_n...$。则：  
 （1）若$a$有$n$位有效数字，则$\frac{|x-a|}{|a|} \leq \frac{1}{2a_1} \times 10^{1-n}$。    
 （2）若$\frac{|x-a|}{|a|} \leq \frac{1}{2(a_1+1)} \times 10^{1-n}$，则$a$**至少**具有$n$位有效数字。  
#### 1.1.3 函数的误差估计 
用$Taylor$展开估计误差。
**1.一元函数的情形**
设一元函数 $f(x)$ 具有二阶连续导数，自变量$x$ 的一个近似值为 $a$。我们用 $f(a)$ 近似$f(x)$，可以用 $Taylor$ 展开的方法来估计其误差

$$
|f(x) - f(a)| \leq |f'(a)| |x - a| + \frac{|f''(\xi)|}{2} |x - a|^2,
$$

其中 $\xi$ 在 $x$ 与 $a$ 之间。如果 $f'(a) \neq 0$，$|f''(\xi)|$ 与 $|f'(a)|$ 相比不太大，则可忽略$|x - a|$ 的二次项，就得到近似函数值 $f(a)$ 的误差界和相对误差界估计式为

$$
|f(x) - f(a)| \leq |f'(a)| e_a,
$$
和
$$
\frac{|f(x) - f(a)|}{|f(a)|} \leq \frac{|f'(a)|}{|f(a)|} e_a,
$$

其中$e_a$ 为$a$ 的误差界。  

**多元函数的情形**
**多变量函数的误差估计**  
如果$f(x_1, x_2, \cdots, x_n)$为 $n$ 元函数，自变量$x_1, x_2, \cdots, x_n$ 的近似值分别为 $a_1, a_2, \cdots, a_n$，则

$$
f(x_1, x_2, \cdots, x_n) - f(a_1, a_2, \cdots, a_n) \approx \sum_{k=1}^{n} \left( \frac{\partial f}{\partial x_k} \right)_a (x_k - a_k),
$$

其中 $\left( \frac{\partial f}{\partial x_k} \right)_a = \frac{\partial}{\partial x_k} f(a_1, a_2, \cdots, a_n)$，所以可以估计到函数值的误差界，近似地有

$$
|f(x_1, x_2, \cdots, x_n) - f(a_1, a_2, \cdots, a_n)| \leq \sum_{k=1}^{n} \left| \left( \frac{\partial f}{\partial x_k} \right)_a \right| |x_k - a_k|.
$$

#### 1.1.4数值方法的稳定性和避免误差危害的基本原则
**1. 数值方法的稳定性**   
用某一种数值方法计算一个问题的数值解，如果在方法的计算过程中舍入误差在一定条件下能够得到控制（或者说舍入误差的增长不影响产生可靠的结果），则称该算法是数值**稳定**的；否则，即出现与数值稳定相反的情况，则称之为数值**不稳定**的。  

**例：计算积分** $I_n = \int_0^1 \frac{x}{x+5} \, dx, \quad n = 0, 1, 2, \ldots, 7.$    

**解** 由于
$$
I_n + 5I_{n-1} = \int_0^1 \frac{x^n}{x+5} \, dx + 5 \int_0^1 \frac{x^{n-1}}{x+5} \, dx = \int_0^1 \frac{x^n + 5x^{n-1}}{x+5} \, dx = \int_0^1 x^{n-1} \, dx = \frac{1}{n}, 
$$   
所以
$$
 I_n = \frac{1}{n} - 5I_{n-1}, \quad (*) 
$$
利用$(*)$可以分别得到两种方法计算 $I_0, I_1, \ldots, I_7$ 的近似值。  

(1) 直接使用$(*)$，先计算$I_0 = \ln \frac{6}{5}$，然后依次计算$I_1, \ldots, I_7$。  

(2) 使用递推公式$I_{n-1} = \frac{1}{5} \left( \frac{1}{n} - I_n \right)$，先计算$I_7 \approx 0.0210$，然后计算$I_6, I_5, \ldots, I_0$。   

对这两种方法做数值稳定性分析：

设 $I_0$ 的近似值为 $I'_0$，然后按(1-15)计算$I_1, \ldots, I_7$ 的近似值$I'_1, \ldots, I'_7$，如果最初计算时误差为 $E_0 = I_0 - I'_0$，递推过程的舍入误差不计，并记$E_n = I_n - I'_n$，则有
$$
E_7 = I_7 - I'_7 = (-5)E_6 = (-5)(-5)E_5 = \cdots = (-5)^7 I E_0,
$$
由此可见，用方法(1)计算 $I_1, \ldots, I_7$ 时，当计算$I_0$ 时产生的舍入误差为$E_0$，那么计算$I_7$ 时产生的舍入误差放大了$5^7 = 78125$倍，因此，方法(1)是数值不稳定的。类似地，对方法(2)，如果在首先计算$I_7$ 时产生的舍入误差为 $E_7$，那么使用该公式计算 $I_0$ 时的误差却为
$$
E_0 = \left(-\frac{1}{5}\right)E_1 = \left(-\frac{1}{5}\right)\left(-\frac{1}{5}\right)E_2 = \cdots = \left(-\frac{1}{5}\right)^7 E_7. 
$$
由此可知，使用公式(2)计算时不会放大舍入误差。因此，方法(2)是数值稳定的。   
**2. 避免误差危害的基本原则**     
- 避免有效数字的损失  
  - 做加减运算时，应该防止大数吃小数
  - 避免两个相近的数相减
  - 避免小数字作除数或是大数作乘数
 
**例：(大数吃小数) 在五位十进制的计算机上计算**
$$
 x = 63015 + \sum_{i=1}^{1000} \delta_i,
$$
其中$\delta_i = 0.4$。

**解** 计算机做加减法时，先将所相加数阶码对齐，根据字长舍入，再加减。如果用63015依次加各个$\delta_i$，那么上式用规范化和阶码对齐后的数表示为
$$
x = 0.63015 \times 10^5 + 0.000004 \times 10^5 + \cdots + 0.000004 \times 10^5,
$$
因其中 $0.000004 \times 10^5$ 的舍入结果为$0$，所以上式的计算结果是$0.63015 \times 10^5$。这种现象被称为“大数吃小数”。如果改变运算次序，先把 1000 个$\delta_i$相加，再和 63015 相加，
$$
x = \underbrace{0.4 + 0.4 + \cdots + 0.4}_{1000} + 0.63015 \times 10^5 = 0.4 \times 10^3 + 0.63015 \times 10^5 $$
$$
= 0.004 \times 10^5 + 0.63015 \times 10^5 = 0.63415 \times 10^5. 
$$
显然，后一种方法的结果是正确的，前一种方法的舍入误差影响太大。 

- 减少运算次数也可以减少舍入误差的积累，于是引入多项式乘除法的**秦九韶算法**：   
**例：计算多项式** $p_n(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$ 的值。

**解：** 如果采用直接逐项求和计算，则计算 $x, x^2, x^3, \ldots, x^n$时最少要用$n-1$次乘法，计算 $a_nx^n, a_{n-1}x^{n-1}, \ldots, a_1x$ 时要用 $n$ 次乘法，共计 $2n-1$ 次乘法。
其算法为：令$t_k = x \times t_{k-1},$ $u_k = u_{k-1} + a_k \times t_k,$$k = 1, 2, \ldots, n$和$\begin{cases} 
t_0 = 1, \\
u_0 = a_0. 
\end{cases}$
反复执行上述公式，最终得出的$u_n$ 就是所求的$p_n(x)$ 的值。总的计算量需进行$2n$次乘法。

若要更有效地求出多项式 $p_n(x)$ 的值，可采用嵌套乘法，即将$p_n(x)$写成等价形式：
$$p_n(x) = ((((((a_nx + a_{n-1})x + a_{n-2})x + \cdots + a_2)x + a_1)x + a_0.$$
上述对应于如下递推公式，即取$s_k = ((((((a_nx + a_{n-1})x + a_{n-2})x + \cdots + a_{k+1})x + a_k),$
则
$\begin{cases} s_{n} = a_{n}, \\ s_{k} = x s_{k + 1} + a_{k}, & k = n - 1, n - 2, \cdots, 2, 1, 0. \\ p_{n}(x) = s_{0}, \end{cases}$

反复执行上述公式，最终得出的$s_0$就是所求的$p_n(x)$的值。总的计算量需进行$n$次乘法。此方法被称为秦九韶算法，它比欧洲人$Horner$提出同类算法早 500 年。

### 1.2 向量与矩阵的范数

#### 1.2.1 向量范数

**定义及性质**
向量的范数是一个函数，它将向量映射到非负实数，满足以下性质：

1. **非负性**：
   $$\| \mathbf{x} \| \geq 0 \quad \text{且当且仅当} \quad \mathbf{x} = \mathbf{0} \quad \text{时，} \quad \| \mathbf{x} \| = 0$$

2. **齐次性（绝对齐次性）**：
   $$\| \alpha \mathbf{x} \| = |\alpha| \| \mathbf{x} \|$$
   对于任意标量$\alpha$。

3. **三角不等式（次可加性）**：
   $$\| \mathbf{x} + \mathbf{y} \| \leq \| \mathbf{x} \| + \| \mathbf{y} \|$$
   对于所有向量$\mathbf{x}$和$\mathbf{y}$。

**p-范数定义**
对于$\mathbb{C}^n$中的向量$\mathbf{x}$，其$p$-范数定义为：
$$\| \mathbf{x} \|_p = \left( \sum_{i=1}^n |x_i|^p \right)^{\frac{1}{p}}$$

**特殊情况**
- 当$p = 1$时，为1-范数（曼哈顿范数）：
  $$\| \mathbf{x} \|_1 = \sum_{i=1}^n |x_i|$$
- 当$p = 2$时，为2-范数（欧几里得范数）：
  $$\| \mathbf{x} \|_2 = \sqrt{\sum_{i=1}^n x_i^2}$$
- 当$p \to \infty$时，为无穷范数：
  $$\| \mathbf{x} \|_\infty = \max_{1 \leq i \leq n} |x_i|$$

**加权$p$-范数**
对于权重向量$\mathbf{w}$，加权$p$-范数定义为：
$$\| \mathbf{x} \|_{p,\mathbf{w}} = \left( \sum_{i=1}^n w_i |x_i|^p \right)^{\frac{1}{p}}$$

**范数连续性定理**  
定义在$\mathbb{C}^n$上的任何两个向量范数$\| \mathbf{x} \|$均为$\mathbf{x}$的连续函数。

**范数等价性定理**  
在有限维空间中，所有$p$-范数都是等价的，即存在常数$c_1, c_2 > 0$使得：
$$c_1 \| \mathbf{x} \|_q \leq \| \mathbf{x} \|_p \leq c_2 \| \mathbf{x} \|_q$$
对任意$1 \leq p, q \leq \infty$成立。

#### 1.2.2 矩阵范数

**定义及性质**
矩阵的范数是一个函数，它将矩阵映射到非负实数，满足以下性质：

1. **非负性**：
   $$\| A \| \geq 0 \quad \text{且当且仅当} \quad A = 0 \quad \text{时，} \quad \| A \| = 0$$

2. **齐次性（绝对齐次性）**：
   $$\| \alpha A \| = |\alpha| \| A \|$$
   对于任意标量$\alpha$。

3. **三角不等式（次可加性）**：
   $$\| A + B \| \leq \| A \| + \| B \|$$
   对于所有矩阵$A$和$B$。

4. **相容性**：
   $$\| AB \| \leq \| A \| \| B \|$$
   对于所有可乘矩阵$A$和$B$。



- **$M_1$范数**：
 $$
  \| A \|_{M_1} = \sum_{i=1}^m \sum_{j=1}^n |a_{ij}|
$$
  表示矩阵 \(A\) 的所有元素绝对值之和。

- **Frobenius范数**：
$$
  \| A \|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2}
$$
  是矩阵所有元素的平方和的平方根，类似于向量的2-范数。

- **$M_\infty$ 范数**：
$$
  \| A \|_{M_\infty} = \max_{1 \leq i \leq m} \sum_{j=1}^n |a_{ij}|
$$
  表示矩阵 \(A\) 的每一行元素绝对值之和的最大值。


#### 1.2.3 算子范数

**定义**
算子范数是矩阵范数的一种推广，用于线性算子。对于线性算子$T$，其$p$-范数定义为：
$$\| T \|_p = \sup_{\| \mathbf{x} \|_p = 1} \| T \mathbf{x} \|_p$$

**特殊情况**
- 当$p = 1$时，为1-范数。
 - **1-范数（列和范数）**：
  $$\| A \|_1 = \max_{1 \leq j \leq n} \sum_{i=1}^m |a_{ij}|$$
- 当$p = \infty$时，为无穷范数。
- **无穷范数（行和范数）**：
  $$\| A \|_\infty = \max_{1 \leq i \leq m} \sum_{j=1}^n |a_{ij}|$$

**重点讨论$p = 2$**
当$p = 2$时，算子范数为矩阵的2-范数（**谱范数**）：
$$\| T \|_2 = \sqrt{\rho(T^* T)}$$
其中$\rho$表示矩阵的特征值的最大绝对值，$T^*$表示$T$的共轭转置。

#### 1.2.4相容矩阵的性质

相容矩阵的性质涉及到矩阵范数之间的相互关系，以及它们与矩阵运算的兼容性。这些性质对于理解和应用矩阵范数至关重要。

1. **相容性（Submultiplicative Property）**：
   对于任意两个矩阵$A$和$B$，它们的乘积的范数小于或等于各自范数的乘积：
   $$\| AB \| \leq \| A \| \| B \|$$
   这意味着矩阵乘法在范数意义下是连续的。

2. **逆矩阵的范数**：
   如果矩阵$A$可逆，则其逆矩阵的范数可以通过$A$的范数来界定：
   $$\| A^{-1} \| \leq \frac{1}{\| A \|_{\min}}$$
   其中，$\| A \|_{\min}$是$A$的最小奇异值。

3. **谱半径与矩阵范数的关系**：
   矩阵的谱半径$\rho(A)$与其任意诱导范数$\| \cdot \|$有如下关系：
   $$\rho(A) \leq \| A \|$$
   特别地，对于对称矩阵，谱范数等于2-范数。

**定理1**
对于任意给定的$\varepsilon > 0$，则存在$\mathbb{C}^{n \times n}$上的一种算子范数$\| \cdot \|$（依赖于矩阵$A$和常数$\varepsilon$），使得：
$$\| A \| \leq \rho(A) + \varepsilon.$$

**定理2**
设$A \in \mathbb{C}^{n \times n}$，如果有$\mathbb{C}^{n \times n}$上的一种矩阵范数$\| \cdot \|$使得$\| A \| < 1$，则：
1. 矩阵$I \pm A$可逆；
2. $\| (I \pm A)^{-1} \| \leq \frac{\| I \|}{1 - \| A \|}$；
3. $\| A(I \pm A)^{-1} \| \leq \frac{\| A \|}{1 - \| A \|}$。

## 2.矩阵的变换和计算
### 2.1 矩阵的三角分解及其应用
#### 2.1.1 Guass消去法与矩阵的LU分解
在线性代数中，我们已经了解过Gauss消去法，事实上，不论用手算还是计算机，Gauss消去法无疑是求解线性方程组$\mathbf {Ax=b}$的最简单和标准的方法。  
##### 1.Gauss消去法
Gauss 消去法是一种用于求解线性方程组的直接方法。它通过将系数矩阵化为上三角矩阵（行阶梯形），然后通过回代求解未知数。以下是 Gauss 消去法的步骤和相关内容。

**步骤**
1. **前向消元**：
   将线性方程组的系数矩阵通过初等行变换化为上三角矩阵。具体步骤如下：
   - 对于第$k$步（$k = 1, 2, \dots, n-1$），选择第$k$列中绝对值最大的元素作为主元（称为部分主元法）。
   - 通过初等行变换，将第$k$列中第$k$行以下的元素消为$0$。
   
   最终得到的上三角矩阵形式为：
   $$
   \begin{bmatrix}
   a_{11} & a_{12} & \cdots & a_{1n} \\
   0 & a_{22} & \cdots & a_{2n} \\
   \vdots & \vdots & \ddots & \vdots \\
   0 & 0 & \cdots & a_{nn}
   \end{bmatrix}
   $$
2. **回代求解**：
   从最后一个方程开始，依次求解未知数。具体步骤如下：
   - 对于第$i$个方程（$i = n, n-1, \dots, 1$），计算：
     $$
     x_i = \frac{b_i - \sum_{j=i+1}^n a_{ij} x_j}{a_{ii}}
     $$
     其中，$b_i$是方程组的常数项。

**示例**

考虑以下线性方程组：
$$
\begin{cases}
2x_1 + 3x_2 - x_3 = 5 \\
4x_1 + 4x_2 - 3x_3 = 3 \\
-2x_1 + 3x_2 - x_3 = 1
\end{cases}
$$

1. **前向消元**：
   - 第一步：将第一列的主元设为$4$（部分主元法），交换第一行和第二行。
   - 第二步：通过初等行变换，将第二行和第三行的第一列元素消为$0$。
   - 第三步：将第二列的主元设为$3$，通过初等行变换将第三行的第二列元素消为$0$。

   最终得到上三角矩阵：
   $$
   \begin{bmatrix}
   4 & 4 & -3 & 3 \\
   0 & 5 & -2.5 & 6.5 \\
   0 & 0 & 1.5 & 4.5
   \end{bmatrix}
   $$

2. **回代求解**：
   - 从第三个方程求解$x_3$：
     $$
     x_3 = \frac{4.5}{1.5} = 3
     $$
   - 代入第二个方程求解$x_2$：
     $$
     x_2 = \frac{6.5 - (-2.5) \cdot 3}{5} = 2
     $$
   - 代入第一个方程求解$x_1$：
     $$
     x_1 = \frac{3 - 4 \cdot 2 - (-3) \cdot 3}{4} = 1
     $$

   最终解为：
   $$
   x_1 = 1, \quad x_2 = 2, \quad x_3 = 3
   $$


:::tip
1. **主元选择**：
   在消元过程中，选择绝对值最大的元素作为主元（部分主元法），可以提高数值稳定性。
2. **奇异矩阵**：
   如果在消元过程中发现主元为$0$，则矩阵是奇异的，方程组无解或有无穷多解。
3. **计算复杂度**：
   Gauss 消去法的计算复杂度为$O(n^3)$，其中$n$是方程组的阶数。
:::
通过以上回顾，可以知道Guass消去法的基本思想即为通过初等行变换将增广矩阵$\mathbf{(A | b)}$化为上三角矩阵$\mathbf{(U | c)}$。然后通过回代求解。

##### 2.LU分解

LU 分解是将一个矩阵分解为一个下三角矩阵（Lower Triangular Matrix）和一个上三角矩阵（Upper Triangular Matrix）的乘积。即对于矩阵$A$，存在下三角矩阵$L$和上三角矩阵$U$，使得：
$$
A = LU
$$
LU 分解是求解线性方程组、计算矩阵行列式和逆矩阵的重要工具。当L为单位下三角矩阵时，我们称其为**Doolittle分解**，而当U为单位上三角矩阵时，我们称其为**Crout分解**。   
**定理：矩阵LU分解的存在和唯一性**   
如果$n$阶矩阵$A$的各阶顺序主子式都不为零，则$A$存在唯一的LU分解。

---

**LU 分解的步骤**

1. **初始化**：
   给定一个$n \times n$的矩阵$A$，目标是找到下三角矩阵$L$和上三角矩阵$U$，使得$A = LU$。

2. **高斯消元法**：
   通过高斯消元法将矩阵$A$化为上三角矩阵$U$，同时记录消元过程中使用的乘数，构造下三角矩阵$L$。

3. **构造$L$和$U$**：
   - $U$是高斯消元后得到的上三角矩阵。
   - $L$是一个单位下三角矩阵（对角线元素为$1$），其非对角线元素是消元过程中使用的乘数。

---

**LU 分解的计算公式**

LU 分解的递推公式如下：

1. **初始化**：
   - 设$A^{(0)} = A$。
   - $L$初始化为单位矩阵，$U$初始化为零矩阵。

2. **递推计算**：
   对于$k = 1, 2, \dots, n$，执行以下步骤：
   - 计算$U$的第$k$行：
     $$
     u_{kj} = a_{kj}^{(k-1)}, \quad j = k, k+1, \dots, n
     $$
   - 计算$L$的第$k$列：
     $$
     l_{ik} = \frac{a_{ik}^{(k-1)}}{u_{kk}}, \quad i = k+1, k+2, \dots, n
     $$
   - 更新矩阵$A^{(k)}$：
     $$
     a_{ij}^{(k)} = a_{ij}^{(k-1)} - l_{ik} \cdot u_{kj}, \quad i = k+1, \dots, n; \quad j = k+1, \dots, n
     $$

3. **最终结果**：
   - $U$是$A^{(n)}$的上三角部分。
   - $L$是单位下三角矩阵，其非对角线元素为$l_{ik}$。

---

**示例**

考虑矩阵$A$：
$$
A = \begin{bmatrix}
2 & 3 & 1 \\
4 & 7 & 5 \\
6 & 7 & 10
\end{bmatrix}
$$

1. **第一步消元**：
   - 计算乘数$l_{21} = \frac{4}{2} = 2$，$l_{31} = \frac{6}{2} = 3$。
   - 对第二行和第三行进行消元：
     $$
     \begin{aligned}
     \text{第二行} &= \text{第二行} - 2 \cdot \text{第一行} \\
     \text{第三行} &= \text{第三行} - 3 \cdot \text{第一行}
     \end{aligned}
     $$
   - 得到矩阵：
     $$
     A^{(1)} = \begin{bmatrix}
     2 & 3 & 1 \\
     0 & 1 & 3 \\
     0 & -2 & 7
     \end{bmatrix}
     $$

2. **第二步消元**：
   - 计算乘数$l_{32} = \frac{-2}{1} = -2$。
   - 对第三行进行消元：
     $$
     \text{第三行} = \text{第三行} - (-2) \cdot \text{第二行}
     $$
   - 得到矩阵：
     $$
     A^{(2)} = \begin{bmatrix}
     2 & 3 & 1 \\
     0 & 1 & 3 \\
     0 & 0 & 13
     \end{bmatrix}
     $$

3. **构造$L$和$U$**：
   - 上三角矩阵$U$：
     $$
     U = \begin{bmatrix}
     2 & 3 & 1 \\
     0 & 1 & 3 \\
     0 & 0 & 13
     \end{bmatrix}
     $$
   - 下三角矩阵$L$：
     $$
     L = \begin{bmatrix}
     1 & 0 & 0 \\
     2 & 1 & 0 \\
     3 & -2 & 1
     \end{bmatrix}
     $$

4. **验证$A = LU$**：
   $$
   LU = \begin{bmatrix}
   1 & 0 & 0 \\
   2 & 1 & 0 \\
   3 & -2 & 1
   \end{bmatrix}
   \begin{bmatrix}
   2 & 3 & 1 \\
   0 & 1 & 3 \\
   0 & 0 & 13
   \end{bmatrix}
   = \begin{bmatrix}
   2 & 3 & 1 \\
   4 & 7 & 5 \\
   6 & 7 & 10
   \end{bmatrix}
   = A
   $$

---

**LDU 分解**

LDU 分解是 LU 分解的进一步细化，将矩阵$A$分解为一个单位下三角矩阵$L$、一个对角矩阵$D$和一个单位上三角矩阵$U$的乘积，即：
$$
A = LDU
$$

1. **分解步骤**：
   - 首先进行 LU 分解，得到$A = LU$。
   - 将$U$分解为$U = DU'$，其中$D$是对角矩阵，$U'$是单位上三角矩阵。
   - 最终得到$A = LDU'$。

2. **示例**：
   对于上述示例中的$U$：
   $$
   U = \begin{bmatrix}
   2 & 3 & 1 \\
   0 & 1 & 3 \\
   0 & 0 & 13
   \end{bmatrix}
   $$
   可以分解为：
   $$
   D = \begin{bmatrix}
   2 & 0 & 0 \\
   0 & 1 & 0 \\
   0 & 0 & 13
   \end{bmatrix}, \quad
   U' = \begin{bmatrix}
   1 & 1.5 & 0.5 \\
   0 & 1 & 3 \\
   0 & 0 & 1
   \end{bmatrix}
   $$
   因此，$A = LDU'$。

---

:::info LU 分解的应用

1. **求解线性方程组**：
   对于线性方程组$A\mathbf{x} = \mathbf{b}$，可以通过 LU 分解将其转化为：
   $$
   L(U\mathbf{x}) = \mathbf{b}
   $$
   先解$L\mathbf{y} = \mathbf{b}$（前向替换），再解$U\mathbf{x} = \mathbf{y}$（回代）。

2. **计算行列式**：
   矩阵$A$的行列式可以通过$L$和$U$的行列式计算：
   $$
   \det(A) = \det(L) \cdot \det(U) = 1 \cdot \prod_{i=1}^n u_{ii}
   $$

3. **计算逆矩阵**：
   通过 LU 分解可以高效计算矩阵的逆。
   :::


::: tip 注意事项

1. **主元选择**：
   如果主元$a_{kk}^{(k)}$为$0$，则需要通过行交换（部分主元法）确保分解的稳定性。

2. **唯一性**：
   LU 分解在$L$为单位下三角矩阵且$A$非奇异时是唯一的。

3. **计算复杂度**：
   LU 分解的计算复杂度为$O(n^3)$，与高斯消元法相同。
:::

#### 2.1.2 Guass列主元消去法与带主元的LU分解
##### 1. Gauss 列主元消去法

Gauss 列主元消去法是高斯消元法的改进版本，通过选择列主元（即当前列中绝对值最大的元素）来避免数值不稳定性问题。以下是 Gauss 列主元消去法的步骤和相关内容。

---

**步骤**

1. **初始化**：
   给定一个$n \times n$的矩阵$A$和向量$\mathbf{b}$，目标是求解线性方程组$A\mathbf{x} = \mathbf{b}$。

2. **列主元选择**：
   对于第$k$步（$k = 1, 2, \dots, n-1$），在当前列$k$中选择绝对值最大的元素作为主元，并交换行以确保主元位于对角线位置。

3. **消元操作**：
   使用选定的主元对当前列$k$进行消元，将第$k$列中第$k$行以下的元素消为$0$。

4. **回代求解**：
   通过回代法求解上三角矩阵对应的线性方程组。

---

**示例**

考虑线性方程组：
$$
\begin{cases}
2x_1 + 3x_2 - x_3 = 5 \\
4x_1 + 4x_2 - 3x_3 = 3 \\
-2x_1 + 3x_2 - x_3 = 1
\end{cases}
$$

1. **第一步**：
   - 选择第一列中绝对值最大的元素$4$作为主元，交换第一行和第二行。
   - 消元后矩阵：
     $$
     \begin{bmatrix}
     4 & 4 & -3 & 3 \\
     2 & 3 & -1 & 5 \\
     -2 & 3 & -1 & 1
     \end{bmatrix}
     $$

2. **第二步**：
   - 选择第二列中绝对值最大的元素$3$作为主元，交换第二行和第三行。
   - 消元后矩阵：
     $$
     \begin{bmatrix}
     4 & 4 & -3 & 3 \\
     0 & 5 & -2.5 & 6.5 \\
     0 & 0 & 1.5 & 4.5
     \end{bmatrix}
     $$

3. **回代求解**：
   - 从第三个方程求解$x_3$：
     $$
     x_3 = \frac{4.5}{1.5} = 3
     $$
   - 代入第二个方程求解$x_2$：
     $$
     x_2 = \frac{6.5 - (-2.5) \cdot 3}{5} = 2
     $$
   - 代入第一个方程求解$x_1$：
     $$
     x_1 = \frac{3 - 4 \cdot 2 - (-3) \cdot 3}{4} = 1
     $$

   最终解为：
   $$
   x_1 = 1, \quad x_2 = 2, \quad x_3 = 3
   $$

---

##### 2.带主元的 LU 分解

带主元的 LU 分解是 LU 分解的改进版本，通过引入行交换（部分主元法）来避免数值不稳定性问题。其核心思想是在每一步消元中选择列主元，并记录行交换信息。  
**定理：** 对任意$n$阶矩阵$A$，均存在置换矩阵$P$、单位下三角矩阵$L$和上三角矩阵$U$，使得$PA=LU$

---

**步骤**

1. **初始化**：
   给定一个$n \times n$的矩阵$A$，目标是找到置换矩阵$P$、单位下三角矩阵$L$和上三角矩阵$U$，使得：
   $$
   PA = LU
   $$

2. **列主元选择**：
   对于第$k$步（$k = 1, 2, \dots, n-1$），在当前列$k$中选择绝对值最大的元素作为主元，并记录行交换信息。

3. **消元操作**：
   使用选定的主元对当前列$k$进行消元，将第$k$列中第$k$行以下的元素消为$0$。

4. **构造$L$和$U$**：
   - $U$是消元后得到的上三角矩阵。
   - $L$是单位下三角矩阵，其非对角线元素是消元过程中使用的乘数。
   - $P$是记录行交换信息的置换矩阵。

---

**示例**

考虑矩阵$A$：
$$
A = \begin{bmatrix}
2 & 3 & 1 \\
4 & 7 & 5 \\
6 & 7 & 10
\end{bmatrix}
$$

1. **第一步**：
   - 选择第一列中绝对值最大的元素$6$作为主元，交换第一行和第三行。
   - 消元后矩阵：
     $$
     A^{(1)} = \begin{bmatrix}
     6 & 7 & 10 \\
     4 & 7 & 5 \\
     2 & 3 & 1
     \end{bmatrix}
     $$

2. **第二步**：
   - 选择第二列中绝对值最大的元素$7$作为主元，交换第二行和第三行。
   - 消元后矩阵：
     $$
     A^{(2)} = \begin{bmatrix}
     6 & 7 & 10 \\
     0 & 1 & -3 \\
     0 & 0 & -5
     \end{bmatrix}
     $$

3. **构造$L$、$U$和$P$**：
   - 上三角矩阵$U$：
     $$
     U = \begin{bmatrix}
     6 & 7 & 10 \\
     0 & 1 & -3 \\
     0 & 0 & -5
     \end{bmatrix}
     $$
   - 下三角矩阵$L$：
     $$
     L = \begin{bmatrix}
     1 & 0 & 0 \\
     \frac{2}{3} & 1 & 0 \\
     \frac{1}{3} & 1 & 1
     \end{bmatrix}
     $$
   - 置换矩阵$P$：
     $$
     P = \begin{bmatrix}
     0 & 0 & 1 \\
     0 & 1 & 0 \\
     1 & 0 & 0
     \end{bmatrix}
     $$

4. **验证$PA = LU$**：
   $$
   PA = \begin{bmatrix}
   0 & 0 & 1 \\
   0 & 1 & 0 \\
   1 & 0 & 0
   \end{bmatrix}
   \begin{bmatrix}
   2 & 3 & 1 \\
   4 & 7 & 5 \\
   6 & 7 & 10
   \end{bmatrix}
   = \begin{bmatrix}
   6 & 7 & 10 \\
   4 & 7 & 5 \\
   2 & 3 & 1
   \end{bmatrix}
   $$
   $$
   LU = \begin{bmatrix}
   1 & 0 & 0 \\
   \frac{2}{3} & 1 & 0 \\
   \frac{1}{3} & 1 & 1
   \end{bmatrix}
   \begin{bmatrix}
   6 & 7 & 10 \\
   0 & 1 & -3 \\
   0 & 0 & -5
   \end{bmatrix}
   = \begin{bmatrix}
   6 & 7 & 10 \\
   4 & 7 & 5 \\
   2 & 3 & 1
   \end{bmatrix}
   $$



:::info 应用

1. **求解线性方程组**：
   带主元的 LU 分解可以高效求解线性方程组，尤其适用于数值不稳定的问题。

2. **计算行列式和逆矩阵**：
   通过带主元的 LU 分解可以计算矩阵的行列式和逆矩阵。
:::
#### 2.1.3 对称正定矩阵的Cholesky分解
##### 1.对称正定阵

**定义**

对称正定阵（Symmetric Positive Definite Matrix）是一类特殊的矩阵，满足以下条件：
1. **对称性**：矩阵$A$是对称矩阵，即$A = A^T$。
2. **正定性**：对于任意非零向量$\mathbf{x} \in \mathbb{R}^n$，有$\mathbf{x}^T A \mathbf{x} > 0$。


::: info 性质
1. 特征值：对称正定阵的所有特征值均为正数。
2. 行列式：对称正定阵的行列式为正数。
3. 主子矩阵：对称正定阵的所有主子矩阵也是正定矩阵。
4. 可逆性：对称正定阵是非奇异矩阵（可逆矩阵）。
:::


**示例**

考虑矩阵$A$：
$$
A = \begin{bmatrix}
4 & 2 \\
2 & 3
\end{bmatrix}
$$

1. **对称性**：
   $A$是对称矩阵，因为$A = A^T$。

2. **正定性**：
   对于任意非零向量$\mathbf{x} = [x_1, x_2]^T$，有：
   $$
   \mathbf{x}^T A \mathbf{x} = 4x_1^2 + 4x_1 x_2 + 3x_2^2 > 0
   $$
   因此，$A$是正定矩阵。

---

##### 2.Cholesky 分解

Cholesky 分解是将对称正定阵$A$分解为一个下三角矩阵$L$和其转置$L^T$的乘积，即：
$$
A = LL^T
$$

Cholesky 分解是 LU 分解的特例，适用于对称正定阵。

---

**步骤**

1. **初始化**：
   给定一个$n \times n$的对称正定阵$A$，目标是找到下三角矩阵$L$，使得$A = LL^T$。

2. **递推计算**：
   对于$i = 1, 2, \dots, n$，执行以下步骤：
   - 计算$L$的第$i$行对角线元素：
     $$
     l_{ii} = \sqrt{a_{ii} - \sum_{k=1}^{i-1} l_{ik}^2}
     $$
   - 计算$L$的第$i$行非对角线元素：
     $$
     l_{ji} = \frac{a_{ji} - \sum_{k=1}^{i-1} l_{jk} l_{ik}}{l_{ii}}, \quad j = i+1, \dots, n
     $$

---

**示例**

考虑对称正定阵$A$：
$$
A = \begin{bmatrix}
4 & 2 \\
2 & 3
\end{bmatrix}
$$

1. **第一步**：
   - 计算$l_{11}$：
     $$
     l_{11} = \sqrt{a_{11}} = \sqrt{4} = 2
     $$
   - 计算$l_{21}$：
     $$
     l_{21} = \frac{a_{21}}{l_{11}} = \frac{2}{2} = 1
     $$

2. **第二步**：
   - 计算$l_{22}$：
     $$
     l_{22} = \sqrt{a_{22} - l_{21}^2} = \sqrt{3 - 1} = \sqrt{2}
     $$

3. **构造$L$**：
   $$
   L = \begin{bmatrix}
   2 & 0 \\
   1 & \sqrt{2}
   \end{bmatrix}
   $$

4. **验证$A = LL^T$**：
   $$
   LL^T = \begin{bmatrix}
   2 & 0 \\
   1 & \sqrt{2}
   \end{bmatrix}
   \begin{bmatrix}
   2 & 1 \\
   0 & \sqrt{2}
   \end{bmatrix}
   = \begin{bmatrix}
   4 & 2 \\
   2 & 3
   \end{bmatrix}
   = A
   $$

---

:::tip Cholesky 分解的应用
1. **求解线性方程组**：
   对于线性方程组$A\mathbf{x} = \mathbf{b}$，可以通过 Cholesky 分解将其转化为：
   $$
   LL^T \mathbf{x} = \mathbf{b}
   $$
   先解$L\mathbf{y} = \mathbf{b}$（前向替换），再解$L^T \mathbf{x} = \mathbf{y}$（回代）。
2. **计算行列式**：
   矩阵$A$的行列式可以通过$L$的行列式计算：
   $$
   \det(A) = \det(L) \cdot \det(L^T) = \left( \prod_{i=1}^n l_{ii} \right)^2
   $$
3. **计算逆矩阵**：
   通过 Cholesky 分解可以高效计算矩阵的逆。
:::


:::warning 注意事项

1. **对称正定性**：
   Cholesky 分解仅适用于对称正定阵。如果矩阵不是对称正定的，Cholesky 分解将失败。

2. **数值稳定性**：
   Cholesky 分解具有较好的数值稳定性，适用于大规模科学计算。

3. **计算复杂度**：
   Cholesky 分解的计算复杂度为$O(n^3)$，但比 LU 分解更快。
:::
#### 2.1.3.5 LU分解手算法
事实上，上文给出的各种递推公式足以计算，但是那些公式对应试考生来说不仅难以记忆而且还容易混淆记错。上文给出的各种公式更多是为了方便计算机计算，而应试计算有更加适用于手算的算法。  
##### 1.LU与LDU
为节省存储空间，可将每次得到的$L$的元素$c_{jk} (j>k)$存放在矩阵$A^{(k+1)}$的$(j,k)$位置上，从而得到紧凑格式的$LU$分解求解方法

$$
\begin{array}{cccc}
A \sim & \left[ \begin{array}{ccc}
a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} & a_{1n}^{(1)} \\
c_{21} & a_{22}^{(2)} & a_{23}^{(2)} & a_{24}^{(2)} \\
c_{31} & a_{32}^{(2)} & a_{33}^{(2)} & a_{34}^{(2)} \\
c_{41} & a_{42}^{(2)} & a_{43}^{(2)} & a_{44}^{(2)}
\end{array} \right] \sim & \left[ \begin{array}{ccc}
a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} & a_{1n}^{(1)} \\
c_{21} & a_{22}^{(2)} & a_{23}^{(2)} & a_{24}^{(2)} \\
c_{31} & c_{32}^{(3)} & a_{33}^{(3)} & a_{34}^{(3)} \\
c_{41} & c_{42}^{(3)} & a_{43}^{(3)} & a_{44}^{(3)}
\end{array} \right] \sim & \left[ \begin{array}{ccc}
a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} & a_{1n}^{(1)} \\
c_{21} & a_{22}^{(2)} & a_{23}^{(2)} & a_{24}^{(2)} \\
c_{31} & c_{32}^{(3)} & a_{33}^{(3)} & a_{34}^{(3)} \\
c_{41} & c_{42}^{(4)} & c_{43}^{(4)} & a_{44}^{(4)}
\end{array} \right]
\end{array}
$$

则
$$
L = \left[ \begin{array}{cccc}
1 & 0 & 0 & 0 \\
c_{21} & 1 & 0 & 0 \\
c_{31} & c_{32} & 1 & 0 \\
c_{41} & c_{42} & c_{43} & 1 
\end{array} \right], \quad U = \left[ \begin{array}{cccc}
a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} & a_{1n}^{(1)} \\
0 & a_{22}^{(2)} & a_{23}^{(2)} & a_{24}^{(2)} \\
0 & 0 & a_{33}^{(3)} & a_{34}^{(3)} \\
0 & 0 & 0 & a_{44}^{(4)}
\end{array} \right]
$$

它的$LDU$分解为
$$
LDU = \left[ \begin{array}{cccc}
1 & 0 & 0 & 0 \\
c_{21} & 1 & 0 & 0 \\
c_{31} & c_{32} & 1 & 0 \\
c_{41} & c_{42} & c_{43} & 1 
\end{array} \right] \sim \left[ \begin{array}{cccc}
a_{11}^{(1)} & 0 & 0 & 0 \\
0 & a_{22}^{(2)} & 0 & 0 \\
0 & 0 & a_{33}^{(3)} & 0 \\
0 & 0 & 0 & a_{44}^{(4)}
\end{array} \right] \sim \left[ \begin{array}{cccc}
a_{11}^{(1)} & a_{12}^{(1)} / a_{11}^{(1)} & a_{13}^{(1)} / a_{11}^{(1)} & a_{1n}^{(1)} / a_{11}^{(1)} \\
0 & a_{22}^{(2)} & a_{23}^{(2)} / a_{22}^{(2)} & a_{24}^{(2)} / a_{22}^{(2)} \\
0 & 0 & a_{33}^{(3)} & a_{34}^{(3)} / a_{33}^{(3)} \\
0 & 0 & 0 & a_{44}^{(4)}
\end{array} \right]
$$

**例** 用紧凑格式求矩阵$A = \left[ \begin{array}{ccc}
2 & -1 & 3 \\
1 & 2 & 1 \\
2 & 4 & 3 
\end{array} \right]$的$LU$分解和$LDU$分解。

因此
$$
A = \left[ \begin{array}{ccc}
2 & -1 & 3 \\
1 & 2 & 1 \\
2 & 4 & 3 
\end{array} \right] \sim \left[ \begin{array}{ccc}
2 & -1 & 3 \\
1 & 5 & -\frac{1}{2} \\
1 & 5 & 0 
\end{array} \right] \sim \left[ \begin{array}{ccc}
2 & -1 & 3 \\
\frac{1}{2} & \frac{5}{2} & -\frac{1}{2} \\
1 & 2 & 1 
\end{array} \right]
$$

因此
$$
A = \left[ \begin{array}{cccc}
1 & 0 & 0 & 0 \\
\frac{1}{2} & 1 & 0 & 0 \\
1 & 2 & 1 & 0 
\end{array} \right] \sim \left[ \begin{array}{cccc}
2 & -1 & 3 \\
0 & \frac{5}{2} & -\frac{1}{2} \\
0 & 0 & 1 
\end{array} \right]
$$

$A$的$LDU$分解为
$$
A = \left[ \begin{array}{cccc}
1 & 0 & 0 & 0 \\
\frac{1}{2} & 1 & 0 & 0 \\
1 & 2 & 1 & 0 
\end{array} \right] \sim \left[ \begin{array}{cccc}
2 & 0 & 0 & 0 \\
0 & \frac{5}{2} & 0 & 0 \\
0 & 0 & 1 & 0 
\end{array} \right] \sim \left[ \begin{array}{cccc}
1 & -\frac{1}{2} & \frac{3}{2} \\
0 & 1 & -\frac{1}{5} & 0 \\
0 & 0 & 1 & 0 
\end{array} \right]
$$


##### 2.Cholesky分解  
(1) 对 $A$ 进行 Doolittle 分解 $A=LU$;  
(2) 选取 $U$ 的对角线元素 $d_1, d_2, \cdots, d_n$;  
(3) 令 $G=L \cdot \text{diag}(\sqrt{d_1}, \sqrt{d_2}, \cdots, \sqrt{d_n})$;  
(4) 写出 Cholesky 分解：$A=GG^T$.  

**例** 求矩阵 $A=\begin{bmatrix} 5 & -2 & 0 \\ -2 & 3 & -1 \\ 0 & -1 & 1 \end{bmatrix}$ 的 Cholesky 分解和推广 Cholesky 分解。

解 $A=\begin{bmatrix} 5 & -2 & 0 \\ -2 & 3 & -1 \\ 0 & -1 & 1 \end{bmatrix} \sim \begin{bmatrix} 5 & -2 & 0 \\ -\frac{2}{5} & \frac{11}{5} & -1 \\ 0 & -\frac{5}{11} & \frac{6}{11} \end{bmatrix}$

因此 $A$ 的 Doolittle 分解为

$$
LW = \begin{bmatrix} 1 & 0 & 0 \\ -\frac{2}{5} & 1 & 0 \\ 0 & -\frac{5}{11} & 1 \end{bmatrix} \begin{bmatrix} 5 & -2 & 0 \\ 0 & \frac{11}{5} & -1 \\ 0 & 0 & \frac{6}{11} \end{bmatrix}
$$

$$
G = \begin{bmatrix} 1 & 0 & 0 \\ -\frac{2}{5} & 1 & 0 \\ 0 & -\frac{5}{11} & 1 \end{bmatrix} \begin{bmatrix} \sqrt{5} & 0 & 0 \\ 0 & \sqrt{\frac{11}{5}} & 0 \\ 0 & 0 & \sqrt{\frac{6}{11}} \end{bmatrix} = \begin{bmatrix} \sqrt{5} & 0 & 0 \\ -\frac{2\sqrt{5}}{5} & \sqrt{\frac{11}{5}} & 0 \\ 0 & -\sqrt{\frac{5}{11}} & \sqrt{\frac{6}{11}} \end{bmatrix}
$$

所以 Cholesky 分解为

$$
A = \begin{bmatrix} \sqrt{5} & 0 & 0 \\ -\frac{2}{5} & \sqrt{\frac{11}{5}} & 0 \\ 0 & -\sqrt{\frac{5}{11}} & \sqrt{\frac{6}{11}} \end{bmatrix} \begin{bmatrix} \sqrt{5} & -\frac{2}{5} & 0 \\ 0 & \sqrt{\frac{11}{5}} & -\sqrt{\frac{5}{11}} \\ 0 & 0 & \sqrt{\frac{6}{11}} \end{bmatrix}
$$

推广 Cholesky 分解为

$$
LDL^T = \begin{bmatrix} 1 & 0 & 0 \\ -\frac{2}{5} & 1 & 0 \\ 0 & -\frac{5}{11} & 1 \end{bmatrix} \begin{bmatrix} 5 & 0 & 0 \\ 0 & \frac{11}{5} & 0 \\ 0 & 0 & \frac{6}{11} \end{bmatrix} \begin{bmatrix} 1 & -\frac{2}{5} & 0 \\ 0 & 1 & -\frac{5}{11} \\ 0 & 0 & 1 \end{bmatrix}
$$

#### 2.1.4 三对角矩阵的三角分解
在用差分法求解二阶常微分方程边值问题时，最后常常会归结为求具有三对角线形系数矩阵的线性方程组$Ax=f$的解，其系数矩阵$A$形如：
$$
A = \left[ \begin{array}{cccccc}
b_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_2 & b_2 & c_2 & 0 & \cdots & 0 \\
0 & a_3 & b_3 & c_3 & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\0 & 0 & 0 & a_{n-1} & b_{n-1} & c_{n-1} \\
0 & 0 & 0 & 0 & a_n & b_n 
\end{array} \right]
$$
如果矩阵$A$可以进行$LU$分解，便得到求解三对角方程组最有效的方法——**追赶法**。  
若$A=LU$,其中
$$
\boldsymbol{L}=\begin{pmatrix}
1& & & &\\
l_2&1& & &\\
&l_3&\ddots& &\\
& &\ddots&1&\\
& & &l_n&1
\end{pmatrix}, 
\boldsymbol{U}=\begin{pmatrix}
u_1&d_1& & &\\
&u_2&d_2& &\\
& &\ddots&\ddots&\\
& & &u_{n - 1}&d_{n - 1}\\
& & & &u_n
\end{pmatrix},
$$
则
$$
\boldsymbol{L}\boldsymbol{U}=\begin{pmatrix}
u_1&d_1& & &\\
l_2u_2&u_2d_2&d_2& &\\
&l_3u_3&u_3d_3&\ddots&\\
& &\ddots&\ddots&d_{n - 2}\\
& & &l_nu_n&u_nd_n
\end{pmatrix}=\left[ \begin{array}{cccccc}
b_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_2 & b_2 & c_2 & 0 & \cdots & 0 \\
0 & a_3 & b_3 & c_3 & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\0 & 0 & 0 & a_{n-1} & b_{n-1} & c_{n-1} \\
0 & 0 & 0 & 0 & a_n & b_n 
\end{array} \right]
$$
比较$\boldsymbol{L}\boldsymbol{U}$和$A$的对应元素，得计算公式：  
$$
\begin{cases}
u_1=b_1, & l_2=\frac{a_2}{b_1}, & d_1=c_1 \\
u_i=b_i-l_il_{i-1}, & l_{i+1}=\frac{a_{i+1}}{b_i}, & d_i=c_i-l_{i+1}u_i, & i=2,3,\cdots,n-1 \\
u_n=b_n-l_nu_{n-1}, & d_n=c_n-l_nu_{n-1}
\end{cases}
$$
计算次序是$d_i=c_i,i=1,2,\dots,n-1$,然后是$u_i=b_i-l_il_{i-1},i=2,3,\cdots,n-1$,最后是$d_n=c_n-l_nu_{n-1}$,因此称为**追赶法**。  
下面给出一个使追赶法可行的充分条件：  
:::tip **定理** 
若矩阵$A$满足  
$$
\begin{cases}
|b_1| > |a_2|, \\
|b_i| > |a_{i+1}|+|l_iu_{i-1}|, & i=2,3,\cdots,n-1, \\
|b_n| > |l_nu_{n-1}|
\end{cases}
$$
则$A$可进行$LU$分解。 
::: 

#### 2.1.5 条件数与方程组的性态

考虑线性方程组
$$
\begin{pmatrix}2 & 6 \\2 & 6.00001\end{pmatrix}\begin{pmatrix}x_1 \\x_2\end{pmatrix}=
\begin{pmatrix}
8 \\
8.00001
\end{pmatrix}
$$
它有准确解 $x = (1, 1)^T$，如果方程组右端项发生微小的变化 $\delta b = (0, 0.00001)^T$，

$$
\begin{pmatrix}
2 & 6 \\
2 & 6.00001
\end{pmatrix}
\begin{pmatrix}
\tilde{x}_1 \\
\tilde{x}_2
\end{pmatrix}=
\begin{pmatrix}
8 \\
8.00002
\end{pmatrix}
$$

其解为 $\tilde{x} = (-2, 2)^T$，可以看出，

$$
\frac{\|x - \tilde{x}\|_\infty}{\|x\|_\infty} = \frac{\|(3)\|_\infty}{\|(1)\|_\infty} = 3, \quad \frac{\|\delta b\|_\infty}{\|b\|_\infty} = \frac{\|(0.00001)\|_\infty}{\|(8.00001)\|_\infty} \approx \frac{0.00001}{8.00001} \approx \frac{1}{800000}
$$

即解的相对误差是右端的相对误差的 2400000 倍。

:::info **定义** 
如果线性方程组 $Ax = b$ 中，$A$ 或 $b$ 的元素的微小变化，会引起方程组解的巨大变化，则称方程组为“病态”方程组；称矩阵 $A$ 为“病态”矩阵，否则称方程组为“良态”方程组，称矩阵 $A$ 为“良态”矩阵。
:::
我们需要一种刻画矩阵和方程组“病态”程度的量。设线性方程组 $Ax = b$ 中的 $A$ 为非奇异矩阵，$x$ 为方程组的准确解。考虑 $b$ 有误差 $\delta b$，其解为 $x + \delta x$，因为 $x$ 为方程组的准确解，故为

$$
A(x + \delta x) = b + \delta b
$$

两边取范数，有

$$
\|\delta x\| = \|A^{-1}\delta b\| \leq \|A^{-1}\| \|\delta b\|
$$

又因为 $\|b\| = \|Ax\| \leq \|A\| \|x\|$，所以

$$
\frac{1}{\|x\|} \leq \frac{\|A\|}{\|b\|}
$$

将上面两个不等式的两边分别相乘，得

$$
\frac{\|\delta x\|}{\|x\|} \leq \|A\| \|A^{-1}\| \cdot \frac{\|\delta b\|}{\|b\|}
$$

由此可见，量 $\|A\| \|A^{-1}\|$ 是右端项相对误差 $\frac{\|\delta b\|}{\|b\|}$ 的倍乘因子，该量越大，方程组右端项变化所引起的解向量的相对误差可能越大，它可刻画矩阵 $A$ 的病态程度。

:::info **定义** 
设 $A$ 为非奇异矩阵，$\| \cdot \|$ 为矩阵的算子范数，则称

$$
\text{cond}(A) = \|A\| \|A^{-1}\|
$$

为矩阵 $A$ 的条件数。
:::
常用的条件数为

$$
\text{cond}_\infty(A) = \|A\|_\infty \|A^{-1}\|_\infty,
$$

$$
\text{cond}_1(A) = \|A\|_1 \|A^{-1}\|_1,
$$

$$
\text{cond}_2(A) = \|A\|_2 \|A^{-1}\|_2 = \sqrt{\lambda_{\max}(A^*A)}，
$$

分别称为矩阵 $A$ 的 $\infty$ -条件数、1-条件数和 2-条件数。

矩阵的条件数具有如下性质：

1. $\text{cond}(A) \geq 1$；
2. $\text{cond}(A^T) = \text{cond}(A)$；
3. $\text{cond}(\alpha A) = \text{cond}(A), \alpha \neq 0, \alpha \in \mathbb{R}$；
4. 如果 $U$ 为正交矩阵，则 $\text{cond}_2(U) = 1$，$\text{cond}_2(UA) = \text{cond}_2(AU) = \text{cond}_2(A)$。

有

$$
\frac{\|\delta x\|}{\|x\|} \leq \text{cond}(A) \frac{\|\delta b\|}{\|b\|}
$$

这说明 $\text{cond}(A)$ 越大，解的相对误差 $\frac{\|\delta x\|}{\|x\|}$ 可能越大，$A$ 对求解线性方程组来说就越可能呈现病态。但对于 $\text{cond}(A)$ 多大 $A$ 才算病态，通常没有具体的衡量标准；反之，$\text{cond}(A)$ 越小，解的相对误差 $\frac{\|\delta x\|}{\|x\|}$ 越小，$A$ 呈现良态。

**例** 求三阶对称正定矩阵 $A = \begin{pmatrix} 1 & 1 & 1 \\ 3 & 4 & 5 \\ 4 & 5 & 6 \end{pmatrix}$ 的条件数 $\text{cond}_2(A)$。

不难求出 $A^{-1} = \begin{pmatrix} 72 & -240 & 180 \\ -240 & 900 & -720 \\ 180 & -720 & 600 \end{pmatrix}$，从而，经计算得 $\|A\|_2 = 13$，$\|A^{-1}\|_2 = 1860$，则 $\text{cond}_2(A) = 2.015 \times 10^4$。

一种常常出现在数据拟合和函数逼近的研究中的病态矩阵是 $n$阶 $Hilbert$ 矩阵：

$$
H_n = (h_{ij})_{n \times n} = \left(\frac{1}{i + j - 1}\right)_{n \times n}
$$

$$
= \begin{pmatrix} 1 & \frac{1}{2} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n+1} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \cdots & \frac{1}{2n-1} \end{pmatrix}, \quad i, j = 1, 2, \cdots, n.
$$

其条件数随着阶数 n 的增大而呈现出严重病态，如

$$
\text{cond}(H_4) = 1.5514 \times 10^4; \quad \text{cond}(H_9) = 1.4951 \times 10^{10}.
$$

一般情况下，系数矩阵和右端项的扰动对解的影响为

:::info 定理 
设 $Ax = b$，$A$ 为非奇异矩阵，$b$ 为非零向量且 $A$ 和 $b$ 均有扰动。若 $A$ 的扰动 $\delta A$ 非常小，使得 $\|A^{-1}\| \|\delta A\| < 1$，则

$$
\frac{\|\delta x\|}{\|x\|} \leq \frac{\text{cond}(A)}{1 - \text{cond}(A) \frac{\|\delta A\|}{\|A\|}} \left( \frac{\|\delta A\|}{\|A\|} + \frac{\|\delta b\|}{\|b\|} \right).
$$
:::
**证** 扰动后的方程组为

$$
(A + \delta A)(x + \delta x) = b + \delta b.
$$

将 $Ax = b$ 代入上式，整理后有

$$
\delta x = A^{-1}\delta b - A^{-1}\delta A x - A^{-1}\delta A \delta x.
$$

将上式两端取范数，应用向量范数的三角不等式及矩阵和向量范数的相容条件，则有

$$
\|\delta x\| \leq \|A^{-1}\| \cdot \|\delta b\| + \|A^{-1}\| \cdot \|\delta A\| \cdot \|x\| + \|A^{-1}\| \cdot \|\delta A\| \cdot \|\delta x\|.
$$

整理后，得

$$
(1 - \|A^{-1}\| \|\delta A\|) \cdot \|\delta x\| \leq \|A^{-1}\| \cdot (\|\delta b\| + \|\delta A\| \cdot \|x\|),
$$

由假设，$A$ 的扰动 $\delta A$ 非常小，使得 $\|A^{-1}\| \|\delta A\| < 1$，则

$$
\|\delta x\| \leq \frac{\|A^{-1}\| \cdot \|\delta b\|}{1 - \|A^{-1}\| \cdot \|\delta A\|} + \frac{\|A^{-1}\| \cdot \|\delta A\| \cdot \|x\|}{1 - \|A^{-1}\| \cdot \|\delta A\|}.
$$

再利用 $\frac{1}{\|x\|} \leq \frac{\|A\|}{\|b\|}$ 有

$$
\frac{\|\delta x\|}{\|x\|} \leq \frac{\|A\|}{1 - \|A^{-1}\| \cdot \|\delta A\|} \left( \frac{\|\delta b\|}{\|b\|} + \frac{\|\delta A\| \cdot \|x\|}{\|A\|} \right)
$$

$$
= \frac{\|A\|}{1 - \|A^{-1}\| \cdot \|\delta A\|} \left( \frac{\|\delta b\|}{\|b\|} + \frac{\|\delta A\|}{\|A\|} \right)
$$

$$
= \frac{\text{cond}(A)}{1 - \text{cond}(A) \frac{\|\delta A\|}{\|A\|}} \left( \frac{\|\delta A\|}{\|A\|} + \frac{\|\delta b\|}{\|b\|} \right).
$$

$Q.E.D$

在前面的例子中取 $\delta b = (0, 0.00001)^T, \delta A = 300000.5 - 300000$，来看 $\delta b$ 对 $x$ 的影响，由

$$
\frac{6}{6.00001} \text{易求出} A^{-1} = \begin{pmatrix} -100000 & 5 \\ 100000 & 1 \end{pmatrix},
$$

则

$$
\text{cond}_2(A) = \|A\|_2 \|A^{-1}\|_2 = 600000.5 \times 8.00001 = 48000010 = 4.8 \times 10^6 \times 8 \times 0.00001
$$

$$
= 4.8 \times 10^2 \times 0.125 \times 10^{-3} = 6 = 600\%.
$$

可见，右端向量 $b$ 的分量千分之一的变化，可能引起解向量 $x$ 百分之六百的变化。这说明矩阵 $A$ 严重病态，相应的线性方程组是病态方程组。

关于近似解的余量与它的相对误差间的关系有

:::info 定理 
设 $Ax = b$，$A$ 为非奇异矩阵，$b$ 为非零向量，则方程组近似解 $x$ 的事后估计式为

$$
\frac{\|x - \tilde{x}\|}{\|x\|} \leq \text{cond}_2(A) \frac{\|b - A\tilde{x}\|}{\|b\|}
$$

其中称 $\|b - A\tilde{x}\|$ 为近似解 $\tilde{x}$ 的余量，简称余量。
:::
最后，我们再来看一下条件数的几何意义。

:::info 定理 
设 $A \in \mathbb{R}^{n \times n}$ 非奇异，则
$$
\min \left\{ \frac{\|\delta A\|_2}{\|A\|_2} : A + \delta A \text{ 奇异} \right\} = \frac{1}{\|A^{-1}\|_2 \cdot \|A\|_2} = \frac{1}{\text{cond}_2(A)},
$$
:::
即在谱范数下，一个矩阵的条件数的倒数正好等于该矩阵与全体奇异矩阵所成集合的相对距离（证明见[17]）。

此定理表明，当 $A \in \mathbb{R}^{n \times n}$ 十分病态时，就说明 $A$ 已与一个奇异矩阵十分接近。  

#### 2.1.6 矩阵的QR分解

Gauss消去过程实际上是用一系列具有特定结构的单位下三角矩阵将$A$逐步上三角化的过程。由矩阵的条件数定义可以看出，正交矩阵是形态最好的矩阵，如果我们能用正交矩阵代替Gauss消去过程中的单位下三角矩阵，则可得到一种更为优秀的矩阵分解方法。这就是QR分解。QR分解具有数值稳定性。
在线性代数中，通过 Schmidt 正交化方法，证明了若方程 $Ax = b$ 且 $\text{rank}(A) = n$，则存在正交矩阵 $Q$ 和对角元都大于零的上三角矩阵 $R$，使得 $A = QR$，而且对任意非零向量 $\alpha$，必有正交矩阵 $Q$ 使 $Q\alpha = \|\alpha\|_2 e_1$，如果 $A \in \mathbb{C}^{m \times n}, \text{rank}(A) = n$，使用同样的方法可以证明（即将 $A$ 分解成）

$$
A = Q \begin{pmatrix} R \\ 0 \end{pmatrix} = QR,
$$

其中 $R$ 为对角元大于零的上三角形矩阵。矩阵的分解式 $(2 - 36)$ 称为矩阵 $A$ 的 $QR$ 分解，由于 $\text{cond}(A) = \text{cond}(R)$，因此矩阵 $A$ 的 $QR$ 分解（也称为正交三角分解）的实现在矩阵计算中是非常重要的。为实现 $QR$ 分解，我们引入 Householder 矩阵。

:::info 定义 
设 $\omega \in \mathbb{R}^n, \omega \neq 0$，称这种特殊的初等矩阵

$$
H(\omega) = I - \frac{2}{\omega^T \omega} \omega \omega^T
$$

为 Householder 矩阵（简称 H 阵），或称 Householder 变换矩阵
:::
显然该矩阵具有如下性质：

(1) $H(\omega)^T = H(\omega)$，即 H 阵为对称阵；

(2) $H(\omega)^T H(\omega) = I$，即 H 阵为正交阵；

(3) 如果 $H(\omega)x = y$，则 $H(\omega)y = x$；反之，对于任意两个向量 $x, y \in \mathbb{R}^n$，若 $\|x\|_2 = \|y\|_2, x \neq y$，则必存在 Householder 矩阵 $H$，使得 $y = Hx$；

(4) 设 $x = (x_1, x_2, \cdots, x_n)^T \in \mathbb{R}^n$ 且 $x \neq 0$，取 $\omega = x \pm \|x\|_2 e_1$，则

$$
H(\omega) = H(x \pm \|x\|_2 e_1)x = \pm \|x\|_2 e_1 = \pm \|x\|_2 (1, 0, \cdots, 0)^T.
$$

只证明性质(3)，并给出其几何解释，事实上

$$
\|x\|_2^2 = (H(\omega)x)^T (H(\omega)x) = x^T (H(\omega))^T H(\omega)x = x^T x = \|x\|_2^2.
$$

性质(3) 几何意义：在 $\mathbb{R}^n$ 中说明将 H 阵称为反射矩阵的原因。考虑 $(\mathbb{R}^n)$ 中单位法过原点的平面 $\pi$。任取 $x \in \mathbb{R}^n, x \neq 0$ 其中 $u \perp v, v \in \pi$，即有 $u = \lambda \omega, (v, \omega) = \omega^T v = 0$。故

$$
H(\omega)x = (I - 2\omega \omega^T)x = x - 2\omega \omega^T x
$$

$$
= (x + v) - 2\omega \omega^T (u + v) = (u + v) - 2\omega \omega^T (\lambda \omega + v)
$$

$$
= (\omega + v) - 2\lambda \omega (\omega^T \omega) - 2\omega (\omega^T v)
$$

$$
= u + v - 2u = v - u = -y.
$$

可知，向量 x 由 H 阵作用后得到的向量 y 关于平面 $\pi$ 对称，也即关于平面 $\pi$ 的反射向量。反过来，对于任意两个向量 $x, y \in \mathbb{R}^n$，若 $\|x\|_2 = \|y\|_2$，且 $x \neq y$，则一定存在 Householder 矩阵 $H$，使得 $y = Hx$。从几何上不难看出，只要取 $x = x - y$ 即可。事实上，由于 $\|x\|_2 = \|x\|_2$，故

$$
\|\omega\|_2^2 = \|x - y\|_2^2 = 2x^T x - 2x^T y
$$

$$
= 2(x - y)^T \frac{x + y}{2} = 2(x - y)^T \frac{x - y}{2} = \|x - y\|_2^2.
$$

基于性质(3)，可知性质(4) 是其特例。对于 $x \in \mathbb{R}^n$ 的数值计算中，可取 $\omega = x - \text{sgn}(x_1) \|x\|_1 e_1$，其中 $\text{sgn}(x) = \begin{cases} 1, & x > 0, \\ -1, & x < 0, \end{cases}$ 这种取法在计算中可避免出现分母过小，因而可以减少计算误差。

对于 n 阶复矩阵 $A$，也有相应的性质(4)，特别地

:::info 推论 
设 $x = (x_1, x_2, \cdots, x_n)^T \in \mathbb{C}^n$ 且 $x \neq 0$，则存在 Householder 矩阵 $H(\omega) = I - \frac{2}{\omega^T \omega} \omega \omega^T$ 使得 $H(\omega)x = \alpha e_1$，其中 $|\alpha| = \|x\|_2$ 且 $\alpha x^H e_1$ 为实数。
:::
证明略。

**例** 已知向量
$$
\alpha_1 = (-3, 0, 4)^T, \quad y = (0,0,5)^T, \quad (2) \quad x = (i, -2i, 0.2)^T, \quad y = (3i, 0, 0)^T,
$$

试求 Householder 矩阵 $H$，使得 $y = Hx$。

**解**  (1) 取 $\omega = x - y = (-3, 0, -1)^T, \|\omega\|_2^2 = 10$，于是

$$\begin{align*}  &H(\omega)=I-\frac{2}{\omega^{\mathrm{T}}\omega}\omega\omega^{\mathrm{T}}=\begin{pmatrix} 1& & \\ &1& \\ & &1 \end{pmatrix}-\frac{1}{5}\begin{pmatrix} -3\\ 0\\ -1 \end{pmatrix}(-3,0, -1)\\ &=\begin{pmatrix} -\frac{4}{5}&0&-\frac{3}{5}\\ 0&1&0\\ -\frac{3}{5}&0&\frac{4}{5} \end{pmatrix} \end{align*} $$

即

$$
\begin{pmatrix} -\frac{4}{5}&0&-\frac{3}{5}\\ 0&1&0\\ -\frac{3}{5}&0&\frac{4}{5} \end{pmatrix} \begin{pmatrix} -3\\ 0\\ 4 \end{pmatrix}= \begin{pmatrix} 0\\ 0\\ 5 \end{pmatrix} 
$$

(2) 由推论，可知 $\alpha$ 应满足

$$
|\alpha| = \|x\|_2 = \sqrt{|-2i|^2 + |i|^2 + 2^2} = 3,
$$

且 $\alpha x^H e_1 = -ai$ 为实数，所以取 $\alpha = 3i$。于是 $\omega = x - \alpha e_1 = (-2i, -2i, 0, 2)^T$，$\|\omega\|_2^2 = 12$，于是

$$
H(\omega) = I - \frac{2}{\omega^T \omega} \omega \omega^T = \begin{pmatrix} 1& & & \\ &1& & \\ & &1& \\ & & &1 \end{pmatrix}-\frac{1}{6} \begin{pmatrix} -2\mathrm{i}\\ -2\mathrm{i}\\ 0\\ 2 \end{pmatrix}(2\mathrm{i},2\mathrm{i},0,2)
$$

$$
= \frac{1}{3} \begin{pmatrix} 1 & -2 & 0 & 2i \\ -2 & 1 & 0 & 2i \\ 0 & 0 & 2 & 2 \\ 2i & 2i & 2 & 1 \end{pmatrix}
$$
即
$$
\frac{1}{3}\begin{pmatrix}
1& - 2&0&2\mathrm{i}\\
-2&1&0&2\mathrm{i}\\
0&0&3&0\\
-2\mathrm{i}&-2\mathrm{i}&0&1
\end{pmatrix}
\begin{pmatrix}
\mathrm{i}\\
-2\mathrm{i}\\
0\\
2
\end{pmatrix}=
\begin{pmatrix}
3\mathrm{i}\\
0\\
0\\
0
\end{pmatrix}
$$

下面利用一系列 H 阵，将矩阵 $A$ 分解成 $QR$ 的形式。

**例**  利用 Householder 变换求 $A$ 的 $QR$ 分解，其中

$$
A = \begin{pmatrix} 1 & 1 &1\\ 2 & 3 &1\\ 2 & 1 & -5 \end{pmatrix}.
$$

解 将 $A$ 按列分块为 $A = (a_1, a_2, a_3)$，其中 $a_1 = (1, 2, 2)^T, \|a_1\|_2 = 3$，取 $\omega_1 = a_1 - \|a_1\|_2 e_1 = \begin{pmatrix} -2 \\ 2 \\ 2 \end{pmatrix}$，则令

$$
Q_1 = H(\omega_1) = I - \frac{2}{\omega_1^T \omega_1} \omega_1 \omega_1^T = \begin{pmatrix} 1 & \frac{2}{3} & \frac{2}{3} \\ \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \end{pmatrix},
$$

$$
H(\omega_1)A = (H(\omega_1)a_1, H(\omega_1)a_2, H(\omega_1)a_3) 
$$

$$
= \begin{pmatrix} 3 & 3 & -\frac{7}{3} \\ 0 & 1 & \frac{13}{3} \\ 0 & -1 & -\frac{5}{3} \end{pmatrix}= \begin{pmatrix} 3 & b^T \\ 0 & A_2 \end{pmatrix},
$$

其中
$b^T = (3, -\frac{7}{3})$，$A_2 = \begin{pmatrix} 1 & \frac{13}{3} \\ -1 & -\frac{5}{3} \end{pmatrix} = (\bar{a}_1, \bar{a}_2)$，

$\bar{a}_1 = (1, -1)^T$，$\bar{a}_2 = (\frac{13}{3}, -\frac{5}{3})^T$，$\|\bar{a}_1\|_2 = \sqrt{2}$，

取

$$
\omega_2 = \bar{a}_1 - \|\bar{a}_1\|_2 e_1 = \begin{pmatrix} -1 \\ -1 \end{pmatrix} - \begin{pmatrix} \sqrt{2} \\ 0 \end{pmatrix} = \begin{pmatrix} 1 - \sqrt{2} \\ -1 \end{pmatrix},
$$

$$
H(\omega_2) = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} - \frac{1}{2 - \sqrt{2}} \begin{pmatrix} 3 - 2\sqrt{2} & -1 + \sqrt{2} \\ -1 + \sqrt{2} & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} \sqrt{2} & -\sqrt{2} \\ -\sqrt{2} & -\sqrt{2} \end{pmatrix},
$$

$$
H(\omega_2)A_2 = (H(\omega_2)\bar{a}_1, H(\omega_2)\bar{a}_2) = \begin{pmatrix} \sqrt{2} & 3\sqrt{2} \\ 0 & -\frac{4}{3}\sqrt{2} \end{pmatrix}.
$$

令 $Q_2 = \begin{pmatrix} 1 & 0^T \\ 0 & H(\omega_2) \end{pmatrix}$，则

$$
Q_2Q_1A = \begin{pmatrix} 1 & 0^T \\ 0 & H(\omega_2) \end{pmatrix} \begin{pmatrix} 3 & b^T \\ 0 & A_2 \end{pmatrix} = \begin{pmatrix} 3 & 3 & -\frac{7}{3} \\ 0 & \sqrt{2} & \frac{3\sqrt{2}}{2} \\ 0 & 0 & -\frac{4}{3}\sqrt{2} \end{pmatrix} = R,
$$

$$
Q^T = Q_2Q_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} \\ 0 & -\frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} \end{pmatrix} \begin{pmatrix} 1 & \frac{2}{3} & \frac{2}{3} \\ \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \end{pmatrix} = \begin{pmatrix} 1 & \frac{2}{3} & \frac{2}{3} \\ 0 & \frac{2}{3} & \frac{2}{3} \\ 0 & -\frac{2\sqrt{2}}{3} & \frac{2\sqrt{2}}{3} \end{pmatrix},
$$

则 $A = QR$。

### 2.2 特殊矩阵的特征系统



本节将介绍理论上和特征系统计算上非常重要的矩阵分解，即 Schur 分解。

定理 2.8 (Schur 定理) 设 $A \in \mathbb{C}^{n \times n}$，则存在酉阵 $U \in \mathbb{C}^{n \times n}$ 使得

$$
A = U R U^H,
$$

其中 $R \in \mathbb{C}^{n \times n}$ 为上三角形矩阵。

证 对矩阵的阶数 n 用数学归纳法证明。

$n = 1$ 时，定理显然成立。

设 $n = k$ 时，定理成立，现在证明 $n = k + 1$ 定理也成立。

设 $A$ 为 $k + 1$ 阶方阵 $A$ 的一个特征值，于是存在 $u_1 \in \mathbb{C}^{k + 1}$ 且 $\|u_1\| = 1$，使得 $Au_1 = \lambda_1 u_1$，将 $u_1$ 扩充成 $\mathbb{C}^{k + 1}$ 的一组标准正交基 $u_1, u_2, \cdots, u_{k + 1}$，记 $U_1 = (u_1, u_2, \cdots, u_{k + 1})$，显然 $U_1 \in \mathbb{C}^{(k + 1) \times (k + 1)}$ 为酉阵，由于 $Au_1 = \lambda_1 u_1$，则

$$
U_1^H A U_1 = \begin{pmatrix} \lambda_1 & * \\ 0 & A_1 \end{pmatrix},
$$

其中 $A_1 \in \mathbb{C}^{k \times k}, 0$ 为 k 阶零向量。

由归纳法假设知，存在酉阵 $U_2 \in \mathbb{C}^{k \times k}$，使得

$$
A_1 = U_2 R_1 U_2^H,
$$

其中 $R_1 \in \mathbb{C}^{k \times k}$ 为上三角形矩阵。综合关系式 $(2 - 40)$ 和 $(2 - 41)$ 有

$$
A = U_1 \begin{pmatrix} \lambda & c^T \\ 0 & A_1 \end{pmatrix} U_1^H = U_1 \begin{pmatrix} \lambda & c^T \\ 0 & U_2 R_1 U_2^H \end{pmatrix} U_1^H,
$$

$$
= U_1 \begin{pmatrix} \lambda & 0^T \\ 0 & U_2 \end{pmatrix} \begin{pmatrix} I & 0 \\ 0 & R_1 \end{pmatrix} \begin{pmatrix} 1 & 0^T \\ 0 & U_2^H \end{pmatrix} U_1^H,
$$

其中 $c = U_2^H c \in \mathbb{C}^k$。再记

$$
U = U_1 \begin{pmatrix} 1 & 0^T \\ 0 & U_2 \end{pmatrix}, \quad R = \begin{pmatrix} \lambda & c^T \\ 0 & R_1 \end{pmatrix},
$$

容易验证 $U \in \mathbb{C}^{(k + 1) \times (k + 1)}$ 为酉阵，且 $U^H A U = R$，即证明了 $n = k + 1$ 时定理成立。

称 $(2 - 39)$ 为矩阵的 Schur 分解，在矩阵的 Schur 分解中，由于 $A$ 和 $R$ 是酉相似的，因此具有相同的特征值，而上三角形矩阵的特征值即为其对角元。

三角形矩阵 $R$，通常称 $R$ 为 $A$ 的 Schur 标准型。一旦得到矩阵的 Schur 分解，实际上我们已经得到了矩阵的特征值，而特征值的计算一般必须采用迭代法，因此与上一节介绍的矩阵的 Doolittle 分解和 QR 分解不同，通常我们无法在有限步内，准确地得到矩阵 $A$ 的 Schur 分解。由于实矩阵 $A$ 的特征值可能是一个复数，因此即使矩阵 $A$ 是实矩阵，Schur 分解中的矩阵 $U$ 和 $R$ 也可能是复的。

由 Schur 定理自然会想到，什么样的矩阵可以酉相似于对角阵？

定义 2.5 设 $A \in \mathbb{C}^{n \times n}$，若

$$
A^H A = AA^H,
$$

则称矩阵 $A$ 为正规矩阵。

常见的 Hermite 阵 $(A^H = A)$，实对称阵 $(A^T = A)$，斜 Hermite 阵 $(A^T = -A)$，实反对称阵 $(A^T = -A)$，酉阵 $(A^H A = AA^H = I)$ 和正交矩阵 $(A^T A = AA^T = I)$ 等均为正规矩阵。

定理 2.2 设 $A$ 为 n 阶方阵，则 $A$ 为正规矩阵的充分必要条件是存在 n 阶酉阵 $U$，使得

$$
A = U D U^H,
$$

其中 $D$ 为 n 阶对角阵。

证 充分性。由于 $A = U D U^H$，则

$$
A^H A = (U D U^H)^H (U D U^H) = U D^H U^H U D U^H = U (D^H D) U^H,
$$

$$
AA^H = (U D U^H)(U D U^H)^H = U D U^H U D^H U^H = U (D D^H) U^H.
$$

设 $D$ 的对角元素为 $d_i \in \mathbb{C}, i = 1, 2, \cdots, n$，从而

$$
D^H D = \begin{pmatrix} |d_1|^2 & & \\ & \ddots & \\ & & |d_n|^2 \end{pmatrix} = D D^H,
$$

故 $A^H A = AA^H$，即 $A$ 为正规矩阵。

必要性。由 Schur 分解定理知，$A = U D U^H, U \in \mathbb{C}^{n \times n}$ 为酉阵，$R$ 为上三角形矩阵。那么，由假设知 $A$ 为正规矩阵，即 $A^H A = AA^H$，仿照充分性，可推得 $R^H R = R R^H$，即 $R$ 为正规矩阵。现设

$$
R = \begin{pmatrix} r_{11} & r_{12} & \cdots & r_{1n} \\ & r_{22} & \cdots & r_{2n} \\ && \ddots & \vdots \\ &&& r_{nn} \end{pmatrix},
$$

$$
R^H = \begin{pmatrix} \overline{r_{11}} & \overline{r_{12}} & \cdots & \overline{r_{1n}} \\ \overline{r_{12}} & \overline{r_{22}} & \cdots & \overline{r_{2n}} \\ \vdots & \vdots & \ddots & \vdots \\ \overline{r_{1n}} & \overline{r_{2n}} & \cdots & \overline{r_{nn}} \end{pmatrix}.
$$

注意到

$$
\begin{pmatrix} |r_{11}|^2 & * & \cdots & * \\ |r_{22}|^2 + |r_{12}|^2 & \cdots & * \\ \vdots & \vdots & \ddots & \vdots \\ * & * & \cdots & \sum_{i=1}^n |r_{in}|^2 \end{pmatrix} = R R^H = R^H R = \begin{pmatrix} |r_{11}|^2 & * & \cdots & * \\ * & \sum_{j=1}^n |r_{ij}|^2 & \cdots & * \\ \vdots & \vdots & \ddots & \vdots \\ * & * & \cdots & \sum_{i=1}^n |r_{in}|^2 \end{pmatrix}.
$$

比较两边矩阵的对角元素，可得

$$
|r_{12}|^2 + |r_{22}|^2 = \sum_{i=1}^n |r_{2i}|^2, \quad \cdots, \quad \sum_{i=1}^n |r_{in}|^2 = |r_{nn}|^2,
$$

总之有：$r_{ij} = \overline{r_{ji}} = 0, 1 \leq i < j \leq n$，即 $R$ 为对角矩阵。从而结论成立。