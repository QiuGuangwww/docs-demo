# 线性代数  

-----
此文章只是用于简略复习，不适合用于学习
-----


## 1. 行列式

### 1.1 行列式按行（列）展开定理

(1) 设$A = ( a_{{ij}} )_{n \times n}$，则：$a_{i1}A_{j1} +a_{i2}A_{j2} + \cdots + a_{{in}}A_{{jn}} = \begin{cases}|A|,i=j\\ 0,i \neq j\end{cases}$


或$a_{1i}A_{1j} + a_{2i}A_{2j} + \cdots + a_{{ni}}A_{{nj}} = \begin{cases}|A|,i=j\\ 0,i \neq j\end{cases}$即 $AA^{*} = A^{*}A = \left| A \right|E,$其中：$A^{*} = \begin{pmatrix} A_{11} & A_{12} & \ldots & A_{1n} \\ A_{21} & A_{22} & \ldots & A_{2n} \\ \ldots & \ldots & \ldots & \ldots \\ A_{n1} & A_{n2} & \ldots & A_{{nn}} \\ \end{pmatrix} = (A_{{ji}}) = {(A_{{ij}})}^{T}$

$D_{n} = \begin{vmatrix} 1 & 1 & \ldots & 1 \\ x_{1} & x_{2} & \ldots & x_{n} \\ \ldots & \ldots & \ldots & \ldots \\ x_{1}^{n - 1} & x_{2}^{n - 1} & \ldots & x_{n}^{n - 1} \\ \end{vmatrix} = \prod_{1 \leq j < i \leq n}^{}\,(x_{i} - x_{j})$

(2) 设$A,B$为$n$阶方阵，则$\left| {AB} \right| = \left| A \right|\left| B \right| = \left| B \right|\left| A \right| = \left| {BA} \right|$，但$\left| A \pm B \right| = \left| A \right| \pm \left| B \right|$不一定成立。

(3) $\left| {kA} \right| = k^{n}\left| A \right|$,$A$为$n$阶方阵。

(4) 设$A$为$n$阶方阵，$|A^{T}| = |A|;|A^{- 1}| = |A|^{- 1}$（若$A$可逆），$|A^{*}| = |A|^{n - 1}$

$n \geq 2$

(5) $\left| \begin{matrix}  & {A\quad O} \\  & {O\quad B} \\ \end{matrix} \right| = \left| \begin{matrix}  & {A\quad C} \\  & {O\quad B} \\ \end{matrix} \right| = \left| \begin{matrix}  & {A\quad O} \\  & {C\quad B} \\ \end{matrix} \right| =| A||B|$
，$A,B$为方阵，但$\left| \begin{matrix} {O} & A_{m \times m} \\  B_{n \times n} & { O} \\ \end{matrix} \right| = ({- 1)}^{{mn}}|A||B|$ 。

(6) 范德蒙行列式$D_{n} = \begin{vmatrix} 1 & 1 & \ldots & 1 \\ x_{1} & x_{2} & \ldots & x_{n} \\ \ldots & \ldots & \ldots & \ldots \\ x_{1}^{n - 1} & x_{2}^{n 1} & \ldots & x_{n}^{n - 1} \\ \end{vmatrix} =  \prod_{1 \leq j < i \leq n}^{}\,(x_{i} - x_{j})$

设$A$是$n$阶方阵，$\lambda_{i}(i = 1,2\cdots,n)$是$A$的$n$个特征值，则
$|A| = \prod_{i = 1}^{n}\lambda_{i}$

## 2. 矩阵

矩阵：$m \times n$个数$a_{{ij}}$排成$m$行$n$列的表格$\begin{bmatrix}  a_{11}\quad a_{12}\quad\cdots\quad a_{1n} \\ a_{21}\quad a_{22}\quad\cdots\quad a_{2n} \\ \quad\cdots\cdots\cdots\cdots\cdots \\  a_{m1}\quad a_{m2}\quad\cdots\quad a_{{mn}} \\ \end{bmatrix}$ 称为矩阵，简记为$A$，或者$\left( a_{{ij}} \right)_{m \times n}$ 。若$m = n$，则称$A$是$n$阶矩阵或$n$阶方阵。

### 2.1 矩阵的线性运算

#### 1.矩阵的加法

设$A = (a_{{ij}}),B = (b_{{ij}})$是两个$m \times n$矩阵，则$m \times n$ 矩阵$C = c_{{ij}}) = a_{{ij}} + b_{{ij}}$称为矩阵$A$与$B$的和，记为$A + B = C$ 。

#### 2.矩阵的数乘

设$A = (a_{{ij}})$是$m \times n$矩阵，$k$是一个常数，则$m \times n$矩阵$(ka_{{ij}})$称为数$k$与矩阵$A$的数乘，记为${kA}$。

#### 3.矩阵的乘法

设$A = (a_{{ij}})$是$m \times n$矩阵，$B = (b_{{ij}})$是$n \times s$矩阵，那么$m \times s$矩阵$C = (c_{{ij}})$，其中$c_{{ij}} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{{in}}b_{{nj}} = \sum_{k =1}^{n}{a_{{ik}}b_{{kj}}}$称为${AB}$的乘积，记为$C = AB$ 。

### 2.2 转置、逆、伴随矩阵三者之间的关系

(1) ${(A^{T})}^{T} = A,{(AB)}^{T} = B^{T}A^{T},{(kA)}^{T} = kA^{T},{(A \pm B)}^{T} = A^{T} \pm B^{T}$

(2) $\left( A^{- 1} \right)^{- 1} = A,\left( {AB} \right)^{- 1} = B^{- 1}A^{- 1},\left( {kA} \right)^{- 1} = \frac{1}{k}A^{- 1},$

但 ${(A \pm B)}^{- 1} = A^{- 1} \pm B^{- 1}$不一定成立。

(3) $\left( A^{*} \right)^{*} = |A|^{n - 2}\ A\ \ (n \geq 3)$，$\left({AB} \right)^{*} = B^{*}A^{*},$ $\left( {kA} \right)^{*} = k^{n -1}A^{*}{\ \ }\left( n \geq 2 \right)$

但$\left( A \pm B \right)^{*} = A^{*} \pm B^{*}$不一定成立。

(4) ${(A^{- 1})}^{T} = {(A^{T})}^{- 1},\ \left( A^{- 1} \right)^{*} ={(AA^{*})}^{- 1},{(A^{*})}^{T} = \left( A^{T} \right)^{*}$

### 2.3 有关伴随矩阵的结论

(1) $AA^{*} = A^{*}A = |A|E$

(2) $|A^{*}| = |A|^{n - 1}\ (n \geq 2),\ \ \ \ {(kA)}^{*} = k^{n -1}A^{*},{{\ \ }\left( A^{*} \right)}^{*} = |A|^{n - 2}A(n \geq 3)$

(3) 若$A$可逆，则$A^{*} = |A|A^{- 1},{(A^{*})}^{*} = \frac{1}{|A|}A$

(4) 若$A$为$n$阶方阵，则：

$r(A^*)=\begin{cases}n,\quad r(A)=n\\ 1,\quad r(A)=n-1\\ 0,\quad r(A)<n-1\end{cases}$

### 2.4 有关A的逆的结论

$A$可逆$\Leftrightarrow AB = E; \Leftrightarrow |A| \neq 0; \Leftrightarrow r(A) = n;$

$\Leftrightarrow A$可以表示为初等矩阵的乘积；$\Leftrightarrow A;\Leftrightarrow Ax = 0$。

### 2.5 有关矩阵秩的结论

(1) 秩$r(A)$=行秩=列秩；

(2) $r(A_{m \times n}) \leq \min(m,n);$

(3) $A \neq 0 \Rightarrow r(A) \geq 1$；

(4) $r(A \pm B) \leq r(A) + r(B);$

(5) 初等变换不改变矩阵的秩

(6) $r(A) + r(B) - n \leq r(AB) \leq \min(r(A),r(B)),$特别若$AB = O$
则：$r(A) + r(B) \leq n$

(7) 若$A^{- 1}$存在$\Rightarrow r(AB) = r(B);$ 若$B^{- 1}$存在
$\Rightarrow r(AB) = r(A);$

若$r(A_{m \times n}) = n \Rightarrow r(AB) = r(B);$ 若$r(A_{m \times s}) = n\Rightarrow r(AB) = r\left( A \right)$。

(8) $r(A_{m \times s}) = n \Leftrightarrow Ax = 0$只有零解

### 2.6 分块求逆公式

$\begin{pmatrix} A & O \\ O & B \\ \end{pmatrix}^{- 1} = \begin{pmatrix} A^{-1} & O \\ O & B^{- 1} \\ \end{pmatrix}$； $\begin{pmatrix} A & C \\ O & B \\\end{pmatrix}^{- 1} = \begin{pmatrix} A^{- 1}& - A^{- 1}CB^{- 1} \\ O & B^{- 1} \\ \end{pmatrix}$；

$\begin{pmatrix} A & O \\ C & B \\ \end{pmatrix}^{- 1} = \begin{pmatrix}  A^{- 1}&{O} \\   - B^{- 1}CA^{- 1} & B^{- 1} \\\end{pmatrix}$； $\begin{pmatrix} O & A \\ B & O \\ \end{pmatrix}^{- 1} =\begin{pmatrix} O & B^{- 1} \\ A^{- 1} & O \\ \end{pmatrix}$

这里$A$，$B$均为可逆方阵。

## 3.向量

### 3.1 有关向量组的线性表示

(1)$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性相关$\Leftrightarrow$至少有一个向量可以用其余向量线性表示。

(2)$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性无关，$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$，$\beta$线性相关$\Leftrightarrow \beta$可以由$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$唯一线性表示。

(3) $\beta$可以由$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性表示
$\Leftrightarrow r(\alpha_{1},\alpha_{2},\cdots,\alpha_{s}) =r(\alpha_{1},\alpha_{2},\cdots,\alpha_{s},\beta)$ 。

### 3.2 有关向量组的线性相关性

(1)部分相关，整体相关；整体无关，部分无关.

(2) ① $n$个$n$维向量
$\alpha_{1},\alpha_{2}\cdots\alpha_{n}$线性无关$\Leftrightarrow \left|\left\lbrack \alpha_{1}\alpha_{2}\cdots\alpha_{n} \right\rbrack \right| \neq0$， $n$个$n$维向量$\alpha_{1},\alpha_{2}\cdots\alpha_{n}$线性相关
$\Leftrightarrow |\lbrack\alpha_{1},\alpha_{2},\cdots,\alpha_{n}\rbrack| = 0$
。

② $n + 1$个$n$维向量线性相关。

③ 若$\alpha_{1},\alpha_{2}\cdots\alpha_{S}$线性无关，则添加分量后仍线性无关；或一组向量线性相关，去掉某些分量后仍线性相关。

### 3.3 有关向量组的线性表示

(1) $\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性相关$\Leftrightarrow$至少有一个向量可以用其余向量线性表示。

(2) $\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性无关，$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$，$\beta$线性相关$\Leftrightarrow\beta$ 可以由$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$唯一线性表示。

(3) $\beta$可以由$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性表示
$\Leftrightarrow r(\alpha_{1},\alpha_{2},\cdots,\alpha_{s}) =r(\alpha_{1},\alpha_{2},\cdots,\alpha_{s},\beta)$

### 3.4 向量组的秩与矩阵的秩之间的关系

设$r(A_{m \times n}) =r$，则$A$的秩$r(A)$与$A$的行列向量组的线性相关性关系为：

(1) 若$r(A_{m \times n}) = r = m$，则$A$的行向量组线性无关。

(2) 若$r(A_{m \times n}) = r < m$，则$A$的行向量组线性相关。

(3) 若$r(A_{m \times n}) = r = n$，则$A$的列向量组线性无关。

(4) 若$r(A_{m \times n}) = r < n$，则$A$的列向量组线性相关。

### 3.5 $\mathbf{n}$维向量空间的基变换公式及过渡矩阵

若$\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$与$\beta_{1},\beta_{2},\cdots,\beta_{n}$是向量空间$V$的两组基，则基变换公式为：

$(\beta_{1},\beta_{2},\cdots,\beta_{n}) = (\alpha_{1},\alpha_{2},\cdots,\alpha_{n})\begin{bmatrix}  c_{11}& c_{12}& \cdots & c_{1n} \\  c_{21}& c_{22}&\cdots & c_{2n} \\ \cdots & \cdots & \cdots & \cdots \\  c_{n1}& c_{n2} & \cdots & c_{{nn}} \\\end{bmatrix} = (\alpha_{1},\alpha_{2},\cdots,\alpha_{n})C$

其中$C$是可逆矩阵，称为由基$\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$到基$\beta_{1},\beta_{2},\cdots,\beta_{n}$的过渡矩阵。

### 3.6 坐标变换公式 

若向量$\gamma$在基$\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$与基$\beta_{1},\beta_{2},\cdots,\beta_{n}$的坐标分别是
$X = {(x_{1},x_{2},\cdots,x_{n})}^{T}$，

$Y = \left( y_{1},y_{2},\cdots,y_{n} \right)^{T}$ 即： $\gamma =x_{1}\alpha_{1} + x_{2}\alpha_{2} + \cdots + x_{n}\alpha_{n} = y_{1}\beta_{1} +y_{2}\beta_{2} + \cdots + y_{n}\beta_{n}$，则向量坐标变换公式为$X = CY$ 或$Y = C^{- 1}X$，其中$C$是从基$\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$到基$\beta_{1},\beta_{2},\cdots,\beta_{n}$的过渡矩阵。

### 3.7 向量的内积

$(\alpha,\beta) = a_{1}b_{1} + a_{2}b_{2} + \cdots + a_{n}b_{n} = \alpha^{T}\beta = \beta^{T}\alpha$

### 3.8 Schmidt正交化

若$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$线性无关，则可构造$\beta_{1},\beta_{2},\cdots,\beta_{s}$使其两两正交，且$\beta_{i}$仅是$\alpha_{1},\alpha_{2},\cdots,\alpha_{i}$的线性组合$(i= 1,2,\cdots,n)$，再把$\beta_{i}$单位化，记$\gamma_{i} =\frac{\beta_{i}}{\left| \beta_{i}\right|}$，则$\gamma_{1},\gamma_{2},\cdots,\gamma_{i}$是规范正交向量组。其中
$\beta_{1} = \alpha_{1}$， $\beta_{2} = \alpha_{2} -\frac{(\alpha_{2},\beta_{1})}{(\beta_{1},\beta_{1})}\beta_{1}$ ， $\beta_{3} =\alpha_{3} - \frac{(\alpha_{3},\beta_{1})}{(\beta_{1},\beta_{1})}\beta_{1} -\frac{(\alpha_{3},\beta_{2})}{(\beta_{2},\beta_{2})}\beta_{2}$ ，

............

$\beta_{s} = \alpha_{s} - \frac{(\alpha_{s},\beta_{1})}{(\beta_{1},\beta_{1})}\beta_{1} - \frac{(\alpha_{s},\beta_{2})}{(\beta_{2},\beta_{2})}\beta_{2} - \cdots - \frac{(\alpha_{s},\beta_{s - 1})}{(\beta_{s - 1},\beta_{s - 1})}\beta_{s - 1}$

### 3.9 正交基及规范正交基

向量空间一组基中的向量如果两两正交，就称为正交基；若正交基中每个向量都是单位向量，就称其为规范正交基。

## 4. 线性方程组

### 4.1 克莱姆法则

线性方程组$\begin{cases}  a_{11}x_{1} + a_{12}x_{2} + \cdots +a_{1n}x_{n} = b_{1} \\   a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_{n} =b_{2} \\   \quad\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots \\ a_{n1}x_{1} + a_{n2}x_{2} + \cdots + a_{{nn}}x_{n} = b_{n} \\ \end{cases}$，如果系数行列式$D = \left| A \right| \neq 0$，则方程组有唯一解，$x_{1} = \frac{D_{1}}{D},x_{2} = \frac{D_{2}}{D},\cdots,x_{n} =\frac{D_{n}}{D}$，其中$D_{j}$是把$D$中第$j$列元素换成方程组右端的常数列所得的行列式。

### 4.2 秩、齐次线性方程组、可逆的关系  
$n$阶矩阵$A$可逆$\Leftrightarrow Ax = 0$只有零解。$\Leftrightarrow\forall b,Ax = b$总有唯一解，一般地，$r(A_{m \times n}) = n \Leftrightarrow Ax= 0$只有零解。

### 4.3 非奇次线性方程组有解的充分必要条件，线性方程组解的性质和解的结构

(1) 设$A$为$m \times n$矩阵，若$r(A_{m \times n}) = m$，则对$Ax =b$而言必有$r(A) = r(A \vdots b) = m$，从而$Ax = b$有解。

(2) 设$x_{1},x_{2},\cdots x_{s}$为$Ax = b$的解，则$k_{1}x_{1} + k_{2}x_{2}\cdots + k_{s}x_{s}$当$k_{1} + k_{2} + \cdots + k_{s} = 1$时仍为$Ax =b$的解；但当$k_{1} + k_{2} + \cdots + k_{s} = 0$时，则为$Ax =0$的解。特别$\frac{x_{1} + x_{2}}{2}$为$Ax = b$的解；$2x_{3} - (x_{1} +x_{2})$为$Ax = 0$的解。

(3) 非齐次线性方程组${Ax} = b$无解$\Leftrightarrow r(A) + 1 =r(\overline{A}) \Leftrightarrow b$不能由$A$的列向量$\alpha_{1},\alpha_{2},\cdots,\alpha_{n}$线性表示。

### 4.4 奇次线性方程组的基础解系和通解，解空间，非奇次线性方程组的通解

(1) 齐次方程组${Ax} = 0$恒有解(必有零解)。当有非零解时，由于解向量的任意线性组合仍是该齐次方程组的解向量，因此${Ax}= 0$的全体解向量构成一个向量空间，称为该方程组的解空间，解空间的维数是$n - r(A)$，解空间的一组基称为齐次方程组的基础解系。

(2) $\eta_{1},\eta_{2},\cdots,\eta_{t}$是${Ax} = 0$的基础解系，即：

1) $\eta_{1},\eta_{2},\cdots,\eta_{t}$是${Ax} = 0$的解；

2) $\eta_{1},\eta_{2},\cdots,\eta_{t}$线性无关；

3) ${Ax} = 0$的任一解都可以由$\eta_{1},\eta_{2},\cdots,\eta_{t}$线性表出.
$k_{1}\eta_{1} + k_{2}\eta_{2} + \cdots + k_{t}\eta_{t}$是${Ax} = 0$的通解，其中$k_{1},k_{2},\cdots,k_{t}$是任意常数。

## 5.矩阵的特征值和特征向量

### 5.1 矩阵的特征值和特征向量的概念及性质

(1) 设$\lambda$是$A$的一个特征值，则 ${kA},{aA} + {bE},A^{2},A^{m},f(A),A^{T},A^{- 1},A^{*}$有一个特征值分别为
${kλ},{aλ} + b,\lambda^{2},\lambda^{m},f(\lambda),\lambda,\lambda^{- 1},\frac{|A|}{\lambda},$且对应特征向量相同（$A^{T}$ 例外）。

(2)若$\lambda_{1},\lambda_{2},\cdots,\lambda_{n}$为$A$的$n$个特征值，则$\sum_{i= 1}^{n}\lambda_{i} = \sum_{i = 1}^{n}a_{{ii}},\prod_{i = 1}^{n}\lambda_{i}= |A|$ ,从而$|A| \neq 0 \Leftrightarrow A$没有特征值。

(3)设$\lambda_{1},\lambda_{2},\cdots,\lambda_{s}$为$A$的$s$个特征值，对应特征向量为$\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$，

若: $\alpha = k_{1}\alpha_{1} + k_{2}\alpha_{2} + \cdots + k_{s}\alpha_{s}$ ,

则: $A^{n}\alpha = k_{1}A^{n}\alpha_{1} + k_{2}A^{n}\alpha_{2} + \cdots +k_{s}A^{n}\alpha_{s} = k_{1}\lambda_{1}^{n}\alpha_{1} +k_{2}\lambda_{2}^{n}\alpha_{2} + \cdots k_{s}\lambda_{s}^{n}\alpha_{s}$ 。

### 5.2 相似变换、相似矩阵的概念及性质

(1) 若$A \sim B$，则

1) $A^{T} \sim B^{T},A^{- 1} \sim B^{- 1},,A^{*} \sim B^{*}$

2) $|A| = |B|,\sum_{i = 1}^{n}A_{{ii}} = \sum_{i =1}^{n}b_{{ii}},r(A) = r(B)$

3) $|\lambda E - A| = |\lambda E - B|$，对$\forall\lambda$成立

### 5.3 矩阵可相似对角化的充分必要条件

(1)设$A$为$n$阶方阵，则$A$可对角化$\Leftrightarrow$对每个$k_{i}$重根特征值$\lambda_{i}$，有$n-r(\lambda_{i}E - A) = k_{i}$

(2) 设$A$可对角化，则由$P^{- 1}{AP} = \Lambda,$有$A = {PΛ}P^{-1}$，从而$A^{n} = P\Lambda^{n}P^{- 1}$

(3) 重要结论

1) 若$A \sim B,C \sim D$，则$\begin{bmatrix}  A & O \\ O & C \\\end{bmatrix} \sim \begin{bmatrix} B & O \\  O & D \\\end{bmatrix}$.

2) 若$A \sim B$，则$f(A) \sim f(B),\left| f(A) \right| \sim \left| f(B)\right|$，其中$f(A)$为关于$n$阶方阵$A$的多项式。

3) 若$A$为可对角化矩阵，则其非零特征值的个数(重根重复计算)＝秩($A$)

### 5.4 实对称矩阵的特征值、特征向量及相似对角阵**

(1)相似矩阵：设$A,B$为两个$n$阶方阵，如果存在一个可逆矩阵$P$，使得$B =P^{- 1}{AP}$成立，则称矩阵$A$与$B$相似，记为$A \sim B$。

(2)相似矩阵的性质：如果$A \sim B$则有：

1) $A^{T} \sim B^{T}$

2) $A^{- 1} \sim B^{- 1}$ （若$A$，$B$均可逆）

3) $A^{k} \sim B^{k}$ （$k$为正整数）

4) $\left| {λE} - A \right| = \left| {λE} - B \right|$，从而$A,B$
有相同的特征值

5) $\left| A \right| = \left| B \right|$，从而$A,B$同时可逆或者不可逆

6) 秩$\left( A \right) =$秩$\left( B \right),\left| {λE} - A \right| =\left| {λE} - B \right|$，$A,B$不一定相似

## 6.二次型

### 6.1 $\mathbf{n}$**个变量**$\mathbf{x}_{\mathbf{1}}\mathbf{,}\mathbf{x}_{\mathbf{2}}\mathbf{,\cdots,}\mathbf{x}_{\mathbf{n}}$的二次齐次函数

$f(x_{1},x_{2},\cdots,x_{n}) = \sum_{i = 1}^{n}{\sum_{j =1}^{n}{a_{{ij}}x_{i}y_{j}}}$，其中$a_{{ij}} = a_{{ji}}(i,j =1,2,\cdots,n)$，称为$n$元二次型，简称二次型. 若令$x = \ \begin{bmatrix}x_{1} \\ x_{1} \\  \vdots \\ x_{n} \\ \end{bmatrix},A = \begin{bmatrix}  a_{11}& a_{12}& \cdots & a_{1n} \\  a_{21}& a_{22}& \cdots & a_{2n} \\ \cdots &\cdots &\cdots &\cdots \\  a_{n1}& a_{n2} & \cdots & a_{{nn}} \\\end{bmatrix}$,这二次型$f$可改写成矩阵向量形式$f =x^{T}{Ax}$。其中$A$称为二次型矩阵，因为$a_{{ij}} =a_{{ji}}(i,j =1,2,\cdots,n)$，所以二次型矩阵均为对称矩阵，且二次型与对称矩阵一一对应，并把矩阵$A$的秩称为二次型的秩。

### 6.2 惯性定理，二次型的标准形和规范形

(1) 惯性定理

对于任一二次型，不论选取怎样的合同变换使它化为仅含平方项的标准型，其正负惯性指数与所选变换无关，这就是所谓的惯性定理。

(2) 标准形

二次型$f = \left( x_{1},x_{2},\cdots,x_{n} \right) =x^{T}{Ax}$经过合同变换$x = {Cy}$化为$f = x^{T}{Ax} =y^{T}C^{T}{AC}$

$y = \sum_{i = 1}^{r}{d_{i}y_{i}^{2}}$称为 $f(r \leq n)$的标准形。在一般的数域内，二次型的标准形不是唯一的，与所作的合同变换有关，但系数不为零的平方项的个数由$r(A)$唯一确定。

(3) 规范形

任一实二次型$f$都可经过合同变换化为规范形$f = z_{1}^{2} + z_{2}^{2} + \cdots z_{p}^{2} - z_{p + 1}^{2} - \cdots -z_{r}^{2}$，其中$r$为$A$的秩，$p$为正惯性指数，$r -p$为负惯性指数，且规范型唯一。

### 6.3 用正交变换和配方法化二次型为标准形，二次型及其矩阵的正定性

设$A$正定$\Rightarrow {kA}(k > 0),A^{T},A^{- 1},A^{*}$正定；$|A| >0$,$A$可逆；$a_{{ii}} > 0$，且$|A_{{ii}}| > 0$

$A$，$B$正定$\Rightarrow A +B$正定，但${AB}$，${BA}$不一定正定

$A$正定$\Leftrightarrow f(x) = x^{T}{Ax} > 0,\forall x \neq 0$

$\Leftrightarrow A$的各阶顺序主子式全大于零

$\Leftrightarrow A$的所有特征值大于零

$\Leftrightarrow A$的正惯性指数为$n$

$\Leftrightarrow$存在可逆阵$P$使$A = P^{T}P$

$\Leftrightarrow$存在正交矩阵$Q$，使$Q^{T}{AQ} = Q^{- 1}{AQ} =\begin{pmatrix} \lambda_{1} & & \\ \begin{matrix}  & \\  & \\ \end{matrix} &\ddots & \\  & & \lambda_{n} \\ \end{pmatrix},$

其中$\lambda_{i} > 0,i = 1,2,\cdots,n.$正定$\Rightarrow {kA}(k >0),A^{T},A^{- 1},A^{*}$正定； $|A| > 0,A$可逆；$a_{{ii}} >0$，且$|A_{{ii}}| > 0$ 。