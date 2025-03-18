# 数据结构与算法

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
#### 6.2.3 Shell排序
**思想：** 先将序列转换为**若干个小序列**，在这些小序列内部进行插入排序。然后逐渐扩大小序列的规模，从而减少小序列的个数，使得待排序序列处于更加有序的状态。从而对整个序列进行排序。  
**算法分析：**   
- 不稳定
- 空间代价：$O(1)$
- 时间代价：$O(nlogn)到O(n^2)之间$ 
::: code-group

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