# 高等数学
## 一、数列极限

### （一）数列极限的定义

设$\{a_n\}$为一数列，如果存在常数$a$，对于任意给定的正数$\epsilon$（不论它多么小），总存在正整数$N$，使得当$n > N$时，不等式$|a_n - a| < \epsilon$都成立，那么就称常数$a$是数列$\{a_n\}$的极限，或者称数列$\{a_n\}$收敛于$a$，记作

$$
\lim_{n \to \infty} a_n = a
$$

**理解要点**：
- $\epsilon$的任意性：它刻画了$a_n$与$a$的接近程度，$\epsilon$越小，表示接近得越好。
- $N$的存在性：$N$是依赖于$\epsilon$的，一般来说，$\epsilon$越小，$N$越大。但$N$不是唯一的，只要存在一个满足条件的$N$即可。

### （二）数列极限的性质

1. **唯一性**：若数列$\{a_n\}$收敛，则它的极限是唯一的。
2. **有界性**：如果数列$\{a_n\}$收敛，那么数列$\{a_n\}$一定有界。即存在正数$M$，使得对于一切$n$，都有$|a_n| \leq M$。
3. **保号性**：若$\lim_{n \to \infty} a_n = a > 0$（或$a < 0$），则存在正整数$N$，当$n > N$时，有$a_n > 0$（或$a_n < 0$）。
4. **保不等式性**：设数列$\{a_n\}$与$\{b_n\}$均收敛，若存在正整数$N_0$，当$n > N_0$时，有$a_n \leq b_n$，则

$$
\lim_{n \to \infty} a_n \leq \lim_{n \to \infty} b_n
$$

### （三）数列极限的运算法则

若$\lim_{n \to \infty} a_n = a$，$\lim_{n \to \infty} b_n = b$，则：

1. $\lim_{n \to \infty} (a_n \pm b_n) = a \pm b$
2. $\lim_{n \to \infty} (a_n \cdot b_n) = a \cdot b$
3. 当$b \neq 0$时，$\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{a}{b}$
4. 若$\{a_n\}$收敛于$a$，$c$为常数，则$\lim_{n \to \infty} (c \cdot a_n) = c \cdot a$
5. 若$\{a_n\}$收敛于$a$，$k$为正整数，则$\lim_{n \to \infty} a_n^k = a^k$

### （四）数列极限存在的判别法

1. **单调有界定理**：在实数系中，单调有界数列必有极限。
   - 若数列$\{a_n\}$单调递增且有上界，则$\{a_n\}$收敛。
   - 若数列$\{a_n\}$单调递减且有下界，则$\{a_n\}$收敛。
2. **柯西收敛准则**：数列$\{a_n\}$收敛的充要条件是：对于任意给定的正数$\epsilon$，存在正整数$N$，使得当$m,n > N$时，有$|a_m - a_n| < \epsilon$。

**典型例题**：

1. 用定义证明$\lim_{n \to \infty} \frac{n + 1}{n} = 1$。

**证明**：对于任意给定的$\epsilon > 0$，要使$|\frac{n + 1}{n} - 1| < \epsilon$，即$|\frac{n + 1 - n}{n}| = \frac{1}{n} < \epsilon$，解不等式$\frac{1}{n} < \epsilon$得$n > \frac{1}{\epsilon}$。取$N = \left\lfloor \frac{1}{\epsilon} \right\rfloor$（$\lfloor x \rfloor$表示不超过$x$的最大整数），当$n > N$时，有$|\frac{n + 1}{n} - 1| < \epsilon$。所以

$$
\lim_{n \to \infty} \frac{n + 1}{n} = 1
$$

2. 设$a_1 > 0$，$a_{n + 1} = \frac{1}{2}(a_n + \frac{1}{a_n})$，$n = 1,2,\cdots$，证明数列$\{a_n\}$收敛，并求其极限。

**证明**：
- 首先证明$\{a_n\}$有下界：由均值不等式，对于$a_n > 0$，有

$$
a_{n + 1} = \frac{1}{2}\left(a_n + \frac{1}{a_n}\right) \geq \sqrt{a_n \cdot \frac{1}{a_n}} = 1
$$

所以$\{a_n\}$有下界$1$。

- 然后证明$\{a_n\}$单调递减：

$$
a_{n + 1} - a_n = \frac{1}{2}\left(a_n + \frac{1}{a_n}\right) - a_n = \frac{1}{2}\left(\frac{1}{a_n} - a_n\right) = \frac{1 - a_n^2}{2a_n}
$$

因为$a_n \geq 1$，所以$1 - a_n^2 \leq 0$，$a_{n + 1} - a_n \leq 0$，即$\{a_n\}$单调递减。

由单调有界定理，$\{a_n\}$收敛。设$\lim_{n \to \infty} a_n = A$。

对$a_{n + 1} = \frac{1}{2}(a_n + \frac{1}{a_n})$两边同时取极限得

$$
A = \frac{1}{2}\left(A + \frac{1}{A}\right)
$$

即$2A^2 = A^2 + 1$，$A^2 = 1$。又因为$a_n \geq 1$，所以$A = 1$，即

$$
\lim_{n \to \infty} a_n = 1
$$

## 二、实数定理

### （一）确界原理

**上确界**：设$S$为非空数集。若数$\beta$满足：
1. 对一切$x \in S$，有$x \leq \beta$，即$\beta$是$S$的上界；
2. 对任何$\alpha < \beta$，存在$x_0 \in S$，使得$x_0 > \alpha$，即$\beta$又是$S$的最小上界，则称数$\beta$为数集$S$的上确界，记作$\beta = \sup S$。

**下确界**：设$S$为非空数集。若数$\alpha$满足：
1. 对一切$x \in S$，有$x \geq \alpha$，即$\alpha$是$S$的下界；
2. 对任何$\beta > \alpha$，存在$x_0 \in S$，使得$x_0 < \beta$，即$\alpha$又是$S$的最大下界，则称数$\alpha$为数集$S$的下确界，记作$\alpha = \inf S$。

**确界原理**：非空有上界的数集必有上确界；非空有下界的数集必有下确界。

### （二）单调有界定理

见数列极限部分。

### （三）区间套定理

设$\{[a_n,b_n]\}$是一个区间套，即满足：
1. $[a_1,b_1] \supset [a_2,b_2] \supset \cdots \supset [a_n,b_n] \supset \cdots$
2. $\lim_{n \to \infty} (b_n - a_n) = 0$

则存在唯一的实数$\xi$，使得$\xi \in [a_n,b_n]$，$n = 1,2,\cdots$，且

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} b_n = \xi
$$

### （四）有限覆盖定理

设$H$为闭区间$[a,b]$的一个（无限）开覆盖，即$H$中的每一个开区间都包含在$[a,b]$内，且$[a,b] \subset \bigcup_{I \in H} I$，则从$H$中可选出有限个开区间来覆盖$[a,b]$。

### （五）聚点定理

**聚点**：设$S$为数轴上的点集，$\xi$为定点（它可以属于$S$，也可以不属于$S$）。若$\xi$的任何邻域内都含有$S$中无穷多个点，则称$\xi$为点集$S$的一个聚点。

**聚点定理**：实轴上的任一有界无限点集$S$至少有一个聚点。

### （六）柯西收敛准则

见数列极限部分。

**各定理之间的关系**：
- 确界原理是整个实数理论的基础，从确界原理出发，可以证明单调有界定理、区间套定理等。
- 区间套定理常用来证明其他定理，如聚点定理、有限覆盖定理等。
- 有限覆盖定理体现了“无限”与“有限”的转化，它在证明一些关于闭区间上连续函数的性质时非常有用。
- 聚点定理和柯西收敛准则从不同角度刻画了实数系的完备性。

**典型例题**：

1. 设$S = \{x \mid x = 1 - \frac{1}{n}, n = 1,2,\cdots\}$，求$\sup S$和$\inf S$。

**解**：对于$x = 1 - \frac{1}{n}$，$n = 1,2,\cdots$，当$n = 1$时，$x = 0$；随着$n$增大，$x$逐渐增大且$x < 1$。

- 对一切$x \in S$，有$x \leq 1$，且对任何$\alpha < 1$，取$n > \frac{1}{1 - \alpha}$，则$x = 1 - \frac{1}{n} > \alpha$，所以$\sup S = 1$。
- 对一切$x \in S$，有$x \geq 0$，且对任何$\beta > 0$，存在$n = 1$时，$x = 0 < \beta$，所以$\inf S = 0$。

2. 用区间套定理证明聚点定理。

**证明**：
设$S$为有界无限点集，因为$S$有界，所以存在闭区间$[a_1,b_1]$，使得$S \subset [a_1,b_1]$。

将$[a_1,b_1]$等分为两个子区间$[a_1,\frac{a_1 + b_1}{2}]$和$[\frac{a_1 + b_1}{2},b_1]$，至少有一个子区间含有$S$中无穷多个点，记这个子区间为$[a_2,b_2]$。

重复上述步骤，得到区间套$\{[a_n,b_n]\}$，每个$[a_n,b_n]$都含有$S$中无穷多个点，且

$$
\lim_{n \to \infty} (b_n - a_n) = \lim_{n \to \infty} \frac{b_1 - a_1}{2^{n-1}} = 0
$$

由区间套定理，存在唯一的实数$\xi$，使得$\xi \in [a_n,b_n]$，$n = 1,2,\cdots$。

对$\xi$的任何邻域$U(\xi,\epsilon)$，由于$\lim_{n \to \infty} (b_n - a_n) = 0$，当$n$充分大时，$[a_n,b_n] \subset U(\xi,\epsilon)$，又因为$[a_n,b_n]$含有$S$中无穷多个点，所以$\xi$是$S$的聚点。

### （五）迫敛性（夹逼准则）

#### 1. $x \to x_0$的情形

设$\lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = A$，且在$x_0$的某去心邻域$\mathring{U}(x_0,\delta)$内有$f(x) \leq h(x) \leq g(x)$，则$\lim_{x \to x_0} h(x) = A$。

**证明**：
因为$\lim_{x \to x_0} f(x) = A$，$\lim_{x \to x_0} g(x) = A$，对于任意给定的正数$\epsilon$：
1. 存在$\delta_1 > 0$，当$0 < |x - x_0| < \delta_1$时，有$|f(x) - A| < \epsilon$，即$A - \epsilon < f(x)$；
2. 存在$\delta_2 > 0$，当$0 < |x - x_0| < \delta_2$时，有$|g(x) - A| < \epsilon$，即$g(x) < A + \epsilon$。

取$\delta = \min\{\delta_1, \delta_2\}$，当$0 < |x - x_0| < \delta$时，由于$f(x) \leq h(x) \leq g(x)$，所以

$$
A - \epsilon < f(x) \leq h(x) \leq g(x) < A + \epsilon
$$

即$|h(x) - A| < \epsilon$，所以$\lim_{x \to x_0} h(x) = A$。

**例6**：求$\lim_{x \to 0} x \sin\frac{1}{x}$。

**分析**：由于$\sin\frac{1}{x}$的值在-1到1之间波动，考虑使用夹逼准则。

**解答**：
已知$|\sin\frac{1}{x}| \leq 1$，则对于任意$x \neq 0$，有

$$
-|x| \leq x \sin\frac{1}{x} \leq |x|
$$

又因为

$$
\lim_{x \to 0} (-|x|) = 0, \quad \lim_{x \to 0} |x| = 0
$$

根据夹逼准则，$\lim_{x \to 0} x \sin\frac{1}{x} = 0$。

**思路总结**：通过构造不等式关系，利用已知极限的函数进行夹逼。

#### 2. $x \to \infty$的情形

设$\lim_{x \to \infty} f(x) = \lim_{x \to \infty} g(x) = A$，且存在正数$X$，当$|x| > X$时，有$f(x) \leq h(x) \leq g(x)$，则$\lim_{x \to \infty} h(x) = A$。

**例7**：求$\lim_{x \to \infty} \frac{\sin x}{x}$。

**解答**：
对于任意$x \neq 0$，有

$$
\left|\frac{\sin x}{x}\right| \leq \frac{1}{|x|}
$$

即

$$
-\frac{1}{|x|} \leq \frac{\sin x}{x} \leq \frac{1}{|x|}
$$

已知

$$
\lim_{x \to \infty} -\frac{1}{|x|} = 0, \quad \lim_{x \to \infty} \frac{1}{|x|} = 0
$$

所以$\lim_{x \to \infty} \frac{\sin x}{x} = 0$。

## 三、函数极限

### （一）单调有界定理

**$x \to x_0^+$（或$x \to x_0^-$）的情形**    

设函数$f(x)$在$x_0$的某右（左）邻域$\mathring{U}_+(x_0,\delta)$（$\mathring{U}_-(x_0,\delta)$）内单调有界，则$\lim_{x \to x_0^+} f(x)$（$\lim_{x \to x_0^-} f(x)$）存在。

**证明**（以$x \to x_0^+$为例）：
设$f(x)$在$\mathring{U}_+(x_0,\delta)$内单调递增且有上界。由确界原理，数集$\{f(x) | x \in \mathring{U}_+(x_0,\delta)\}$有上确界$A$。

对于任意$\epsilon > 0$，存在$x_1 \in \mathring{U}_+(x_0,\delta)$，使得$f(x_1) > A - \epsilon$。取$\delta_1 = x_1 - x_0$，当$x_0 < x < x_0 + \delta_1$时，

$$
A - \epsilon < f(x_1) \leq f(x) \leq A < A + \epsilon
$$

所以$\lim_{x \to x_0^+} f(x) = A$。

**例8**：设函数
$$
f(x)=\begin{cases}
x + 1, & x \in (0, 1) \\
2, & x = 1
\end{cases}
$$
判断$\lim_{x \to 1^-} f(x)$是否存在。

**解答**：
- 当$x \in (0,1)$时，$f(x) = x + 1$单调递增；
- 且$1 < f(x) < 2$，即有界。

根据单调有界定理，$\lim_{x \to 1^-} f(x)$存在，且

$$
\lim_{x \to 1^-} f(x) = \sup\{f(x) | x \in (0,1)\} = 2
$$

### （二）柯西收敛准则

#### 1. $x \to x_0$的情形

函数$f(x)$当$x \to x_0$时极限存在的充要条件是：对于任意$\epsilon > 0$，存在$\delta > 0$，使得对任意$x', x'' \in \mathring{U}(x_0,\delta)$，都有$|f(x') - f(x'')| < \epsilon$。

**例9**：证明$\lim_{x \to 2} \frac{1}{x} = \frac{1}{2}$。

**证明**：
对任意$\epsilon > 0$，取$\delta = \min\{1, \epsilon\}$，当$|x'-2| < \delta$且$|x''-2| < \delta$时，

$$
\left|\frac{1}{x'} - \frac{1}{x''}\right| = \left|\frac{x'' - x'}{x'x''}\right| < |x'' - x'| < \delta \leq \epsilon
$$

由柯西准则，极限存在。再计算得$\lim_{x \to 2} \frac{1}{x} = \frac{1}{2}$。

### （三）海涅定理（归结原则）

**定理内容**：
设$f(x)$在$\mathring{U}(x_0)$内有定义，$\lim_{x \to x_0} f(x) = A$的充要条件是：对任何以$x_0$为极限的数列$\{x_n\} \subset \mathring{U}(x_0)$，有$\lim_{n \to \infty} f(x_n) = A$。

**例10**：证明$\lim_{x \to 0} \sin\frac{1}{x}$不存在。

**证明**：
取$x_n = \frac{1}{2n\pi + \pi/2} \to 0$，则$\sin\frac{1}{x_n} = 1$；
取$y_n = \frac{1}{2n\pi} \to 0$，则$\sin\frac{1}{y_n} = 0$。

由于两数列极限不同，故$\lim_{x \to 0} \sin\frac{1}{x}$不存在。
