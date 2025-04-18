# 机器学习笔记
## 1. 模型评估和选择

### 1.1 经验误差与过拟合

#### 1.1.1 基本概念

- **错误率**：分类错误的样本数占样本总数的比例，即 $E = \frac{a}{m}$。
- **精度**：$1 - \frac{a}{m}$，即“精度 = 1 - 错误率”，常写为百分比形式 $(1 - \frac{a}{m}) \times 100\%$。
- **误差**：学习器的实际预测输出与样本的真实输出之间的差异。训练集上的误差为训练误差或经验误差，新样本上的误差为泛化误差。

#### 1.1.2 过拟合与欠拟合

- **过拟合**：学习器把训练样本学得“太好”，将训练样本自身特点当作所有潜在样本都有的一般性质，导致泛化性能下降。例如，误把有锯齿当作树叶的必要条件。
- **导致原因**：过拟合常因学习能力过强，欠拟合常因学习能力过低。欠拟合较易克服，过拟合是机器学习关键障碍且无法彻底避免，只能缓解。

#### 1.1.3 模型选择问题

现实中有多种学习算法和参数配置可选，理想方案是评估候选模型的泛化误差并选择最小的，但无法直接获得泛化误差，训练误差又因过拟合不适合作为标准，因此需要探讨实际中的模型评估与选择方法。

### 1.2 评估方法

通常，将数据集划分为训练集和测试集，训练集用于训练模型，测试集用于评估模型泛化性能。测试样本要尽可能的不出现在训练集中。可是, 我们只有一个包含 $m$ 个样例的数据集 $D = \{(x_1,y_1),(x_2,y_2), ...,(x_m,y_m)\}$, 既要训练, 又要测试, 怎样才能做到呢? 答案是: 通过对 $D$ 进行适当的处理, 从中产生出训练集 $S$ 和测试集 $T$ . 下面介绍几种常见的做法.

#### 1.2.1 留出法

直接将数据集$D$ 划分为两个互斥的集合, 其中一个集合作为训练集$S$, 另一个作为测试集 $T$, 即 $D = S \cup T, S \cap T = \emptyset$. 在 $S$ 上训练出模型后, 用$T$ 来评估其测试误差, 作为对泛化误差的估计。需要注意的是，训练集和测试集的划分要尽可能抱持数据分布的一致性，避免因为数据划分过程引入额外的偏差而对最终结果产生影响。

例如，对于二分类问题，若数据集 $D$ 中正例和反例的比例为 1:1，那么训练集$S$ 和测试集 $T$ 中的正例和反例的比例也应该是 1:1。

另外一个需要注意的是，即便给定了比例，也不能保证 $S$ 和 $T$ 中的正例和反例的分布是一致的。因此，通常会进行多次随机划分，取多次划分的平均值作为最终结果。因此，留出法返回的是这些划分结果的平均。

留出法的缺点是显而易见的，即它对数据的划分方式非常敏感。为了解决这个问题，我们可以使用交叉验证法。

#### 1.2.2 交叉验证法

交叉验证法是将数据集 $D$划分为$k$ 个大小相似的互斥子集，即 $D = D_1 \cup D_2 \cup ... \cup D_k, D_i \cap D_j = \emptyset (i \neq j)$. 每个子集 $D_i$ 都尽可能保持数据分布的一致性，即 $D_i$ 中正例和反例的比例与$D$ 中相同。

然后，每次用 $k-1$ 个子集的并集作为训练集，余下的那个子集作为测试集，这样就可以获得 $k$ 组训练/测试集，从而进行 $k$ 次训练和测试，最终返回 $k$ 次测试结果的均值。

显然，交叉验证法评估结果的稳定性和保真性很大程度上取决于 $k$ 的取值。 $k$ 值的选择既要保证训练集和测试集的规模尽可能大，又要保证评估结果的稳定可靠。因此，通常把交叉验证法由称为“$k$折交叉验证”($k$-fold cross validation)。

$k$值的选择一般是$k = 10$，但在实际应用中， $k$ 值的选择没有一个固定的标准，通常会根据具体问题进行调整。下面给出的是10折交叉验证的示意图。

![10折交叉验证](https://s21.ax1x.com/2025/03/15/pEaYWNQ.png)

与留出法类似，交叉验证法也需要多次划分数据集，$k$折交叉验证通常要使用不同的划分重复$p$次，最终结果是这$p$的均值。

特殊的，若数据集$S$中有 $m$个样本，那么 $k = m$时，称为“留一法”($leave-one-out$, LOO)。，每次只留下一个样本作为测试集，其余的 $m-1$ 个样本作为训练集。留一法的评估结果非常稳定，但计算开销非常大。

#### 1.2.3 自助法

以自动采样法为基础。给定包含$m$ 个样本的数据集 $D$, 对其进行有放回的抽样，每次抽出一个样本，一共进行 $m$ 次抽样，得到包含 $m$ 个样本的采样集。显然，采样集$D'$与原数据集 $D$ 有相同的样本分布，但会有重复的样本。重复的样本称为“采样重复”。

可以做估计，样本在$m$ 次采样中始终不被采到的概率为$\left(1 - \frac{1}{m}\right)^m$，趋近于$\frac{1}{e}$。我们可以用采样集$D'$作训练集， $D\setminus D'$作为测试集；这样实际评估的模型和期望评估模型都用了$m$个训练样本，我们仍有约1/3且未在训练集中出现的样本用于测试。这样的测试结果也成为“包外估计”。

自助法在数据集较小，难以有效划分训练/测试集时很有用。但自助法产生的数据集$D'$中，约有36.8%的样本是重复的，这会浪费一部分计算资源。因此，在实际应用中，一般会采用“自助采样+包外估计”的方式，即用自助法产生训练集和测试集，然后用包外估计法进行评估。在初始数据量足够时，留出法和交叉验证法更为常用。

#### 1.2.4 调参与最终模型

调参是指通过调整模型参数，以获得最优模型的过程。调参的目的是找到一组参数，使得模型在验证集上的表现最优。学习算法的很多参数是在实数范围内取值，常用的做法是对每个参数选定一个范围和变化步长，实际评估时选用有限范围和步长内的准确值，这是计算开销和性能估计之间折中的结果。调参的方法有很多种，如网格搜索、随机搜索、贝叶斯优化等。

### 1.3 性能度量

性能度量用于衡量模型泛化能力，不同的性能度量会导致不同的评判结果，模型的好坏取决于算法、数据和任务需求。具体内容如下：

#### 1.3.1 回归任务的性能度量

常用“均方误差”，公式为
$$
E(f ; D)=\frac{1}{m} \sum_{i=1}^{m}\left(f\left(x_{i}\right)-y_{i}\right)^{2}
$$

更一般的，对于数据分布$D$和概率密度函数$p(\cdot)$ ，均方误差可描述为
$$
E(f ; \mathcal{D})=\int_{x \sim \mathcal{D}}(f(x)-y)^{2} p(x) d x
$$ 

#### 1.3.2 分类任务的性能度量

##### 1.3.2.1 错误率与精度

错误率是分类错误的样本数占样本总数的比例，精度是分类正确的样本数占样本总数的比例。对样例集$D$ ，分类错误率定义为
$$
E(f ; D)=\frac{1}{m} \sum_{i=1}^{m} \mathbb{I}\left(f\left(x_{i}\right) \neq y_{i}\right)
$$
精度定义为
$$
acc(f ; D)=\frac{1}{m} \sum_{i=1}^{m} \mathbb{I}\left(f\left(x_{i}\right)=y_{i}\right)=1 - E(f ; D)
$$
更一般的，对于数据分布\(D\)和概率密度函数\(p(\cdot)\) ，错误率与精度可分别描述为
$$
E(f ; \mathcal{D})=\int_{x \sim \mathcal{D}} \mathbb{I}(f(x) \neq y) p(x) d x
acc(f ; \mathcal{D})=\int_{x \sim \mathcal{D}} \mathbb{I}(f(x)=y) p(x) d x=1 - E(f ; \mathcal{D})
$$
##### 1.3.2.2 查准率、查全率与\(F1\)

查准率和查全率适用于关注“检索出的信息中有多少比例是用户感兴趣的”等需求的场景。对于二分类问题，根据真实类别与学习器预测类别的组合可划分为真正例\(TP\)、假正例\(FP\)、真反例\(TN\)、假反例\(FN\)四种情形。

| 真实情况 | 预测结果 | 预测结果 |
| -------- | -------- | -------- |
| 正例     | TP (真正例) | FN (假反例) |
| 反例     | FP (假正例) | TN (真反例) |

查准率和查全率分别定义为
$$
P=\frac{TP}{TP + FP}  
$$
$$
R=\frac{TP}{TP + FN}
$$
在很多情况下，我们可以根据学习器的预测结果对样例进行排序，排在最前面的是学习器认为“最可能为正例”的样本，按此顺序逐个把样本为正例进行预测，则每次可以计算出当前的查全率和查准率，以查全率为纵轴，查准率为横轴，得到“$P-R$曲线”

![P-R曲线](https://s21.ax1x.com/2025/03/15/pEaNnJJ.png)

“$P-R$曲线”下的面积称为“平均精度”（Average Precision，AP），是$P-R$曲线下的面积，即
$$
AP=\sum_{i=1}^{n} \frac{R_{i}-R_{i-1}}{1-P_{i}}
$$
$P-R$曲线下的面积大小在一定程度上表征了学习器在查准率和查全率上去的相对双高的比例。

查准率和查全率是一对矛盾的度量，通常只有在简单任务中才可能都很高。“平衡点”（BEP）是查准率等于查全率时的取值，可用于比较学习器性能。

更常用的是$F1$度量，公式为
$$
F1=\frac{2 × P × R}{P + R}=\frac{2 × TP}{样例总数 +TP - TN}
$$
$F1$度量的一般形式
$$
F_{\beta}=\frac{(1+\beta^{2}) × P × R}{(\beta^{2} × P)+R}
$$
能表达出对查准率/查全率的不同偏好，$\beta = 1$时退化为标准的$F1$；$\beta>1$时查全率有更大影响；$\beta < 1$时查准率有更大影响。

##### 1.3.2.3 ROC与AUC

在分类任务中，很多学习器并不是直接输出分类结果，而是产生实值或概率预测。我们可以通过设定一个分类阈值，将预测值与该阈值进行比较，从而实现分类。例如，当预测值大于阈值时，判定为正类；小于阈值时，判定为反类。不同的阈值会导致不同的分类结果，进而影响分类性能的评估。

ROC曲线（Receiver Operating Characteristic Curve）就是一种用于全面衡量分类器性能的工具，它以图形化的方式展示了分类器在不同阈值下的性能表现。ROC曲线的两个关键指标定义如下：

- **真正例率（True Positive Rate, TPR）**：它反映了分类器正确识别正例的能力，计算公式为$TPR=\frac{TP}{TP + FN}$。其中，$TP$表示真正例的数量，即实际为正类且被分类器正确识别为正类的样本数；$FN$表示假反例的数量，即实际为正类但被分类器错误识别为反类的样本数。
- **假正例率（False Positive Rate, FPR）**：它体现了分类器将反例错误识别为正例的情况，计算公式为$FPR=\frac{FP}{TN + FP}$。这里，$FP$表示假正例的数量，即实际为反类但被分类器错误识别为正类的样本数；$TN$表示真反例的数量，即实际为反类且被分类器正确识别为反类的样本数。

在绘制ROC曲线时，我们会遍历所有可能的阈值，计算每个阈值下的真正例率和假正例率，并将这些点绘制在平面直角坐标系中，横轴为假正例率，纵轴为真正例率。随着阈值的变化，这些点连接起来就形成了ROC曲线。

在比较不同学习器的性能时，ROC曲线具有重要的参考价值：

- 如果一个学习器的ROC曲线完全被另一个学习器的ROC曲线“包住”，那么可以认为后者的性能优于前者。这意味着在所有可能的阈值下，后者的真正例率都不低于前者，同时假正例率都不高于前者。
- 然而，在实际情况中，不同学习器的ROC曲线往往会发生交叉。此时，单纯依靠ROC曲线的形状难以直接判断哪个学习器更优。一个较为合理的评判标准是比较ROC曲线下的面积，即AUC（Area Under the Curve）。AUC值的范围在$0$到$1$之间，AUC值越大，说明学习器的性能越好。

AUC的计算可以通过对ROC曲线下各部分的面积进行求和得到。从本质上来说，AUC考虑的是样本预测的排序质量。它与排序误差有着紧密的联系，一个好的分类器应该能够将正例尽可能排在反例之前，而AUC值在一定程度上反映了这种排序的优劣程度。

从定义可知，AUC 可通过对 ROC 曲线下各部分的面积求和而得。假定 ROC 曲线是由坐标为 $\{(x_1, y_1), (x_2, y_2), \ldots, (x_m, y_m)\}$ 的点按序连接而形成 $(x_1 = 0, x_m = 1)$，则 AUC 可估算为
$$
\text{AUC} = \frac{1}{2} \sum_{i=1}^{m-1} (x_{i+1} - x_i) \cdot (y_i + y_{i+1}). 
$$
形式化地看，AUC 考虑的是样本预测的排序质量，因此它与排序误差有紧密联系。给定 $m^+$ 个正例和 $m^-$ 个反例，令 $D^+$和 $D^-$ 分别表示正、反例集合，则排序“损失”（loss）定义为
$$
 \ell_{\text{rank}} = \frac{1}{m^+ m^-} \sum_{x^+ \in D^+} \sum_{x^- \in D^-} \left( \mathbb{I}(f(x^+) < f(x^-)) + \frac{1}{2} \mathbb{I}(f(x^+)=f(x^-)) \right) 
$$
即考虑每一对正、反例，若正例的预测值小于反例，则记一个“罚分”，若相等，则记 0.5 个“罚分”。容易看出，$\ell_{\text{rank}}$ 对应的是 ROC 曲线之上的面积：若一个正例在 ROC 曲线上对应标记点的坐标为 $(x, y)$，则 $x$ 恰是排序在其之前的反例所占的比例，即假正例率。因此有
$$
\text{AUC} = 1 - \ell_{\text{rank}}. 
$$
#### 1.3.2.4 代价敏感错误率与代价曲线

在现实任务中，不同类型的错误所造成的后果存在差异，即存在 “非均等代价”。例如医疗诊断和门禁系统中，不同错误类型带来的影响截然不同。

##### 1.代价矩阵

以二分类任务为例，可设定 “代价矩阵”。设 $cost_{ij}$ 表示将第$i$类样本预测为第 $j$ 类样本的代价，通常 $cost_{ii} = 0$ 。若将第 0 类判为第 1 类造成的损失更大，则 $cost_{01} > cost_{10}$ ，损失程度差异越大，二者差值越大。

##### 2.代价敏感错误率

传统性能度量多假设均等代价，而在非均等代价下，希望最小化 “总体代价”。以二分类为例，将第 0 类作为正类、第 1 类作为反类，“代价敏感” 错误率计算公式为：
$$
\begin{align*}
E(f;D;cost)=&\frac{1}{m}\left(\sum_{x_{i}\in D^{+}} \mathbb{I}(f(x_{i}) \neq y_{i}) \times cost_{01} \right.\\
&+\left.\sum_{x_{i}\in D^{-}} \mathbb{I}(f(x_{i}) \neq y_{i}) \times cost_{10} \right)
\end{align*}
$$
类似地，可定义基于分布的代价敏感错误率以及多分类任务的代价敏感性能度量。

##### 3.代价曲线

在非均等代价下，ROC 曲线不能直接反映学习器的期望总体代价，而代价曲线可以。代价曲线图的横轴是取值为 $[0,1]$的正例概率代价，计算公式为：
$$
P(+)cost = \frac{p \times cost_{01}}{p \times cost_{01} + (1 - p) \times cost_{10}}
$$
纵轴是取值为 $[0,1]$ 的归一化代价，计算公式为：
$$
cost_{norm} = \frac{FNR \times p \times cost_{01} + FPR \times (1 - p) \times cost_{10}}{p \times cost_{01} + (1 - p) \times cost_{10}}
$$
绘制代价曲线时，将 ROC 曲线上的每个点转化为代价平面上的一条线段，取所有线段的下界围成的面积即为学习器的期望总体代价。

#### 1.3.3 Python代码实现

```python
import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_curve, auc

# 1. 均方误差 (Mean Squared Error, MSE)
def mean_squared_error(y_true, y_pred):
    """
    计算均方误差 (MSE)
    :param y_true: 真实值
    :param y_pred: 预测值
    :return: 均方误差
    """
    return np.mean((y_true - y_pred) ** 2)

# 2. 错误率与精度
def error_rate(y_true, y_pred):
    """
    计算错误率
    :param y_true: 真实标签
    :param y_pred: 预测标签
    :return: 错误率
    """
    return 1 - accuracy_score(y_true, y_pred)

def accuracy(y_true, y_pred):
    """
    计算精度
    :param y_true: 真实标签
    :param y_pred: 预测标签
    :return: 精度
    """
    return accuracy_score(y_true, y_pred)

# 3. 查准率、查全率与 F1 分数
def precision(y_true, y_pred):
    """
    计算查准率
    :param y_true: 真实标签
    :param y_pred: 预测标签
    :return: 查准率
    """
    return precision_score(y_true, y_pred)

def recall(y_true, y_pred):
    """
    计算查全率
    :param y_true: 真实标签
    :param y_pred: 预测标签
    :return: 查全率
    """
    return recall_score(y_true, y_pred)

def f1(y_true, y_pred):
    """
    计算 F1 分数
    :param y_true: 真实标签
    :param y_pred: 预测标签
    :return: F1 分数
    """
    return f1_score(y_true, y_pred)

# 4. ROC 曲线与 AUC
def roc_auc(y_true, y_scores):
    """
    计算 ROC 曲线和 AUC
    :param y_true: 真实标签
    :param y_scores: 预测概率值
    :return: FPR, TPR, AUC
    """
    fpr, tpr, _ = roc_curve(y_true, y_scores)
    roc_auc = auc(fpr, tpr)
    return fpr, tpr, roc_auc

# 5. 代价敏感错误率
def cost_sensitive_error(y_true, y_pred, cost_matrix):
    """
    计算代价敏感错误率
    :param y_true: 真实标签
    :param y_pred: 预测标签
    :param cost_matrix: 代价矩阵，格式为 [[cost_00, cost_01], [cost_10, cost_11]]
    :return: 代价敏感错误率
    """
    # 计算混淆矩阵
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    fn = np.sum((y_true == 1) & (y_pred == 0))
    tn = np.sum((y_true == 0) & (y_pred == 0))
    # 计算总代价
    total_cost = fp * cost_matrix[0][1] + fn * cost_matrix[1][0]
    # 计算代价敏感错误率
    cost_sensitive_error_rate = total_cost / len(y_true)
    return cost_sensitive_error_rate