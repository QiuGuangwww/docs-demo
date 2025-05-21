# 数据结构作业

---

## 01 顺序表操作练习
```Cpp
/*课后习题

	a.	完善存储整型数据的顺序表的类定义，完善基本的成员函数，并给出以下功能函数的具体实现。
		i.	从顺序表中删除具有最小值的元素并由函数返回被删元素的值，空出的位置由最后一个元素填补
			int deletemin();

		ii.	从顺序表中删除与给定x相等的所有元素
			void deleteSame(int x);

		iii.从顺序表中删除其值在给定 s与t之间（s < t）的所有元素,不包括s和t
			void deleteSome(int s, int t);
*/
#include <iostream>
using namespace std;
class  SeqArray  //顺序表
{
private:
    int* arr; //数组的起始地址
    int N;//数组规模
    int n;//数组当前元素个数
public:
    SeqArray(int NN=10);
    ~SeqArray();
    bool insertElement(int value);//向顺序表中插入value,如果成功返回true，否则返回false
    int deletemin();
    void deleteSame(int x);
    void deleteSome(int s, int t);
    void print(); //输出顺序表的数据
};
//请给出各个成员函数的具体实现
SeqArray::SeqArray(int NN)
{
    //todo-请给出具体实现代码
    N=NN;
    n=0;
    arr=new int[N];
}
SeqArray::~SeqArray()
{
   //todo-请给出具体实现代码
    delete []arr;
}
bool SeqArray::insertElement(int value)
{
    //todo-请给出具体实现代码
    if(n>=N) return false;
    else{
        arr[n++]=value;
        return true;
    }
}
int SeqArray::deletemin()
{
  //todo-请给出具体实现代码
    if(n==0) return -1;
    int minIndex=0;
    for(int i=1;i<n;i++){
        if(arr[i]<arr[minIndex]) minIndex=i;
    }
    int min=arr[minIndex];
    arr[minIndex]=arr[n-1];
    n--;
    return min;
}
void  SeqArray::deleteSame(int x)
{
    //todo-请给出具体实现代码
    int j=0;
    for(int i=0;i<n;i++){
        if(arr[i]!=x){
            arr[j++]=arr[i];
        }
    }
    n=j;
}
void  SeqArray::deleteSome(int s,int t)
{
    //todo-请给出具体实现代码
    int j=0;
    for(int i=0;i<n;i++){
        if(arr[i]<=s||arr[i]>=t){
            arr[j++]=arr[i];
        }
    }
    n=j;
}
void SeqArray::print()
{
//todo-请给出具体实现代码
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}

//请不要修改下面main函数的函数体
int main()
{
    int n,value,samevalue, s, t;

    SeqArray a(20);
    cin>>n; // n 表示要输入的数据元素个数
    for (int i = 0; i < n; i++) {
        cin >> value;
        a.insertElement(value);
    }
    cout << "顺序表数据为:";
    a.print();
    int minval = a.deletemin();
    cout << "删除最小值后为:";
    a.print();
    cout << "最小值:" << minval << endl;
    cin >> samevalue;
    a.deleteSame(samevalue);
    cout << "删除相同值后为:";
    a.print();
    cin >> s >> t;
    a.deleteSome(s, t);
    cout << "删除指定范围数值后为:";
    a.print();
    return 0;
}
```

## 02 链表操作练习
```Cpp
/*课后习题
	单链表操作：
	完善下面的带头结点的单向链表类的相关成员函数，
	(1)向链表尾部插入的成员函数
	    void insertToTail(int val);
	(2)写出将链表倒置的成员函数
		void Reverse();
*/
#include <iostream>
using namespace std;
class Node //链表的结点定义
{
public:
    Node(int x)
    {
        data = x;
        next = NULL;
    }
    int data;
    Node* next;
};
class MList //带有头结点的单向链表类定义
{
private:
    Node* head;//指向头结点，不是实际的数据结点

public:
    MList();
    ~MList();
    void insertToTail(int val);//TODO1:在类外给出该函数实现——向尾部插入数据val
    void Reverse();//TODO2:在类外给出该函数实现——翻转链表
    void print();
};
//不需要改变下面的构造函数
MList::MList()
{
    head = new Node(0);//head 指向的是头结点
}
//不需要改变下面的析构函数
MList::~MList()
{
    Node* temp = head;
    while(temp) //逐个释放结点空间
    {
        head = head ->next;
        delete temp;
        temp = head;
    }
    head = NULL;
}
/*
TODO:向链表尾部插入
*/
void MList::insertToTail(int val)
{
    Node*newnode=new Node(val);
    Node*p=head;
    while(p->next!=NULL){
        p=p->next;
    }
    p->next=newnode;
}
/*
TODO:链表倒置的算法
 */
void MList::Reverse()
{
    Node*prev=NULL;
    Node*curr=head->next;
    Node*next=NULL;
    while(curr!=NULL){
        next=curr->next;
        curr->next=prev;
        prev=curr;
        curr=next;
    }
    head->next=prev;
}

//不要改变下面的print函数
void MList::print()
{
    Node* p = head->next;
    while (p) {
        cout << p->data<< " ";
        p = p ->next;
    }
}
//不要改变下面的main函数
int main()
{
    MList lt;//创建链表对象 lt
    int Num;//Num 表示要输入的元素的个数
    cin >> Num;
    for (int i = 0; i < Num; i++) {
        int val;
        cin >> val;
        lt.insertToTail(val);
    }
    cout << "倒置前为：";
    lt.print();
    cout << endl;
    lt.Reverse();
    cout << "倒置后为：";
    lt.print();
    cout << endl;
    return 0;
}
```

## 03 链表操作练习
```Cpp
/*课后习题
    链表操作03：合并两个带有头结点的有序单链表
	在链表操作练习02 的代码基础上，增加如下的成员函数：
	void Merge(MList& another);
	默认当前链表和another链表中存储的数据都是从小到到大的，
	并且将 another链表的中结点合并到当前链表中，不要开辟新的结点空间。

*/
#include <iostream>
using namespace std;
const int MinNumber = -1000000;

class Node {
public:
    Node(int x)
    {
        data = x;
        next = NULL;
    }
    int data;
    Node* next;
};
class MList //带有头结点的单向链表类定义
{
private:
    Node* head;//指向头结点，不是实际的数据结点

public:
    MList();
    ~MList();
    void insertToTail(int val);//向尾部插入数据val
    void Merge(MList& another); //将another中的数据结点合并到当前链表中
    void print();// 逐一输出链表中的数据
};
//不需要改变下面的构造函数
MList::MList()
{
    head = new Node(0);//head 指向的是头结点
}
//不需要改变下面的析构函数
MList::~MList()
{
    Node* temp = head;
    while(temp) //逐个释放结点空间
    {
        head = head ->next;
        delete temp;
        temp = head;
    }
    head = NULL;
}
/*
Todo：向链表尾部插入元素
*/
void MList::insertToTail(int val)
{
    Node* newnode=new Node(val);
    Node* curr=head;
    while(curr->next!=NULL){
        curr=curr->next;
    }
    curr->next=newnode;
}
void MList::print()
{
    Node* p = head->next;
    while (p) {
        cout << p->data<< " ";
        p = p ->next;
    }
}
/*
Todo：合并链表
*/
void MList::Merge(MList& another)
{
    Node*p1=head->next;
    Node*p2=another.head->next;
    Node*prev=head;
    while(p1!=NULL&&p2!=NULL){
        if(p1->data>=p2->data){
            prev->next=p2;
            p2=p2->next;
        }
        else{
            prev->next=p1;
            p1=p1->next;
        }
    }
    if(p1!=NULL){
        prev->next=p1;
    }
    if(p2!=NULL){
        prev->next=p2;
    }
    another.head->next=NULL;

}
int main()
{
    MList lt1;//创建链表对象 lt1
    MList lt2; //创建链表对象lt2
    int val;
    int Num;//Num 表示要输入的元素的个数
   //输入第一个链表的数据个数，并从小到大输入各个数据
    cin >> Num;
    for (int i = 0; i < Num; i++) {
        cin >> val;
        lt1.insertToTail(val);
    }
    //输入第二个链表的数据个数，并从小到大输入各个数据
    cin >> Num;
    for (int i = 0; i < Num; i++) {
        cin >> val;
        lt2.insertToTail(val);
    }
    cout << "合并前链表1为:";
    lt1.print();
    cout << endl;
    cout << "合并前链表2为:";
    lt2.print();
    cout << endl;
    lt1.Merge(lt2);
    cout << "合并后的单链表为:";
    lt1.print();
    cout << endl;
    return 0;
}
```

## 04 栈的定义练习
```Cpp
/* 顺序栈

完善下面的栈的类定义及成员函数实现
	bool Push(const T item)		//a. 入栈操作，并判断栈是否为满
	bool Pop(T& item)			//b 出栈操作，并判断栈是否为空，返回栈顶元素
	bool Top(T& item)			//c 读取栈顶元素，但不删除，判断栈是否为空

*/
#include <iostream>
using namespace std;


template <class T>
class ArrayStack {
private:
    int maxSize; //栈中最多保存的元素个数
    int top; //指向栈顶元素空间编号，初始化为-1，入栈时top+1，出栈时top-1
    T* st; //栈的元素存储的起始地址
public:
    ArrayStack(int sz);
    ~ArrayStack();
    void Clear();//清空栈中元素
    bool isEmpty();//如果栈空，返回true，否则返回false
    bool isFull();//如果栈满返回true，否则返回false
    /*TODO:a. 入栈操作，并判断栈是否为满,若栈已满，则打印cout << "栈满溢出" << endl;返回false。否则将item入栈，返回true
	返回值说明：成功入栈，返回true，否则返回false。*/
    bool Push(const T& item);
    /*TODO:b. 出栈操作，并判断栈是否为空，若为空，则打印cout << "栈为空，不能进行删除操作" << endl;返回false。
	否则，将栈顶元素的值取出来赋值给item，进行出栈操作，返回true
	返回值说明：如果出栈成功，返回true，否则返回false。*/
    bool Pop(T& item);
    /*TODO:c. 读取栈顶元素，但不删除，判断栈是否为空,若为空，则打印cout << "栈为空，不能读取栈顶元素" << endl;返回false
	否则，将栈顶元素取出，并赋值给item，返回true。
	返回值说明：成功读取栈顶元素，返回true，否则返回false。*/
    bool Top(T& item);
};
template <class T>
ArrayStack<T>::ArrayStack(int sz)
{
    maxSize = sz;
    top = -1;
    st = new T[maxSize];
}
template <class T>
ArrayStack<T>::~ArrayStack()
{
    delete[] st;maxSize = 0; top = -1;
}
template <class T>
void ArrayStack<T>:: Clear()
{
    top = -1;
}

template <class T>
bool ArrayStack<T>::isEmpty()
{
    return top == -1;
}
template <class T>
bool ArrayStack<T>::isFull()
{
    return top == maxSize-1;
}
/*TODO:a. 入栈操作，并判断栈是否为满,若栈已满，则打印cout << "栈满溢出" << endl;返回false。否则将item入栈，返回true
返回值说明：成功入栈，返回true，否则返回false。
*/
template <class T>
bool ArrayStack<T>:: Push(const T& item)
{
    //此处需要写代码
    if(isFull()){
        cout << "栈满溢出" << endl;
        return false;
    }
    else{
        st[++top]=item;
        return true;
    }
}
/*
TODO:b. 出栈操作，并判断栈是否为空，若为空，则打印cout << "栈为空，不能进行删除操作" << endl;返回false。
否则，将栈顶元素的值取出来赋值给item，进行出栈操作，返回true
返回值说明：如果出栈成功，返回true，否则返回false。
*/
template <class T>
bool ArrayStack<T>::Pop(T& item)
{
  //此处需要写代码
    if(isEmpty()){
        cout << "栈为空，不能进行删除操作" << endl;
        return false;
    }else{
        item=st[top--];
        return true;
    }
}
/*
TODO:c. 读取栈顶元素，但不删除，判断栈是否为空,若为空，则打印cout << "栈为空，不能读取栈顶元素" << endl;返回false
否则，将栈顶元素取出，并赋值给item，返回true。
返回值说明：成功读取栈顶元素，返回true，否则返回false。
*/
template <class T>
bool ArrayStack<T>::Top(T& item)
{
//此处需要写代码
  //此处需要写代码
    if(isEmpty()){
        cout << "栈为空，不能进行删除操作" << endl;
        return false;
    }else{
        item=st[top];
        return true;
    }
}



int main()
{
    int maxsize, loop_num, temp;
  //  cout<<"输入栈的空间大小、从1开始循环压入的整数以及最后要压入栈中的一个整数"<<endl;
    cin >> maxsize>>loop_num>>temp;

    ArrayStack<int> as(maxsize);
    //先循环压入1，2，...,loop_num
    for (int i = 1; i <= loop_num; i++) {
        as.Push(i);
    }

   if(as.Push(temp))
   {
        cout << "入栈：" << temp << endl;
   }

    if(as.Pop(temp))
    {
        cout << "出栈:" << temp << endl;
    }
    if(as.Top(temp))
    {
       cout << "读取栈顶元素:" << temp << endl;
    }
    return 0;
}
```

## 05 栈的应用练习
```Cpp
/**栈的应用：计算器：中缀表达式转换为后缀，并计算

    完善顺序栈的类定义（这部分和 栈的定义练习04 中代码相同）
    完善Caculator类中如下两个成员函数实现：
	void infix_to_suffix();   //将中缀表达式转换为后缀表达
	void cal_suffix();        //计算中缀表达式的值

**/
#include <cstdlib>
#include <iostream>
#include <string>

using namespace std;

template <class T>
class ArrayStack {
private:
    int maxSize; //栈中最多保存的元素个数
    int top; //指向栈顶元素空间编号，初始化为-1，入栈时top+1，出栈时top-1
    T* st; //栈的元素存储的起始地址
public:
    ArrayStack(int sz=100);
    ~ArrayStack();
    void Clear();
    bool isEmpty();
    bool isFull();

    /*TODO:a. 入栈操作，并判断栈是否为满,若栈已满，则打印cout << "栈满溢出" << endl;返回false。否则将item入栈，返回true
	返回值说明：成功入栈，返回true，否则返回false。*/
    bool Push(const T& item);
    /*TODO:b. 出栈操作，并判断栈是否为空，若为空，则打印cout << "栈为空，不能进行删除操作" << endl;返回false。
	否则，将栈顶元素的值取出来赋值给item，进行出栈操作，返回true
	返回值说明：如果出栈成功，返回true，否则返回false。*/
    bool Pop(T& item);
    /*TODO:c. 读取栈顶元素，但不删除，判断栈是否为空,若为空，则打印cout << "栈为空，不能读取栈顶元素" << endl;返回false
	否则，将栈顶元素取出，并赋值给item，返回true。
	返回值说明：成功读取栈顶元素，返回true，否则返回false。*/
    bool Top(T& item);
};
template <class T>
ArrayStack<T>::ArrayStack(int sz)
{
    maxSize = sz;
    top = -1;
    st = new T[maxSize];
}
template <class T>
ArrayStack<T>::~ArrayStack()
{
    delete[] st;maxSize = 0; top = -1;
}
template <class T>
void ArrayStack<T>:: Clear()
{
    top = -1;
}
template <class T>
bool ArrayStack<T>::isEmpty()
{
    return top == -1;
}
template <class T>
bool ArrayStack<T>::isFull()
{
    return top == maxSize-1;
}
/*TODO:a. 入栈操作，并判断栈是否为满,若栈已满，则打印cout << "栈满溢出" << endl;返回false。否则将item入栈，返回true
返回值说明：成功入栈，返回true，否则返回false。
*/
template <class T>
bool ArrayStack<T>:: Push(const T& item)
{
    if (top == maxSize - 1)
        {
            cout << "栈满溢出" << endl;
            return false;
        }
    else
        {
            st[++top] = item;
            return true;
        }
}
/*
TODO:b. 出栈操作，并判断栈是否为空，若为空，则打印cout << "栈为空，不能进行删除操作" << endl;返回false。
否则，将栈顶元素的值取出来赋值给item，进行出栈操作，返回true
返回值说明：如果出栈成功，返回true，否则返回false。
*/
template <class T>
bool ArrayStack<T>::Pop(T& item)
{
    if (top == -1) {
        cout << "栈为空，不能进行删除操作" << endl;
        return false;
    }
    else
    {
        item = st[top--];
        return true;
    }
}
/*
TODO:c. 读取栈顶元素，但不删除，判断栈是否为空,若为空，则打印cout << "栈为空，不能读取栈顶元素" << endl;返回false
否则，将栈顶元素取出，并赋值给item，返回true。
返回值说明：成功读取栈顶元素，返回true，否则返回false。
*/
template <class T>
bool ArrayStack<T>::Top(T& item)
{
    if (top == -1) {
        cout << "栈为空，不能读取栈顶元素" << endl;
        return false;
    }
    else
    {
        item = st[top];
        return true;
    }
}




class Calculator {
public:
    string infix; //中缀表达式
    string postfix; //后缀表达式
    ArrayStack<double> poststack; //后缀栈
    Calculator(string str);
    ~Calculator()
    {
        poststack.Clear();
    }
    void infix_to_suffix(); //TODO:e. 将中缀表达式转换为后缀表达
    int inStack(char ch); //返回ch代表的运算符号栈内优先级
    int outStack(char ch); //返回ch代表的运算符号栈外优先级数
    void cal_suffix(); //TODO:d.计算中缀表达式的值
    void print();
    bool Get_operands(double& left, double& right);
    bool isNumber(char ch);//判断ch代表的符号是否是数字
    double returnnum(char* c, int n); //返回字符对应的数
    float toNum(char num_ch); //换成数字
    void cal(char ch); //根据操作符 去栈中去取两个元素计算
};
Calculator::Calculator(string str)
{
    infix = str;
}

/*
TODO:e.将中缀表达式转换为后缀表达,假如中缀表达式为1+(2-3)*4+4/2，
则转换后为：1&2&3&-4&*+4&2&/+
为了区分数字与数字，用&符号将数字进行隔开，当然也可自行选择其他方式来表达]
 */
void Calculator::infix_to_suffix()
{
    ArrayStack<char> opStack(100);
        opStack.Push('#'); 
        postfix.clear(); 
        size_t i = 0;
    
        while (i < infix.length()) {
            if (isNumber(infix[i])) {
                while (i < infix.length() && isNumber(infix[i])) {
                    postfix += infix[i];
                    i++;
                }
                postfix += '&';
            }
            else {
                char topOp;
                if (!opStack.Top(topOp)) {
                    cout << "Operator stack error" << endl;
                    exit(1);
                }
                if (infix[i] == ')') {
                    while (topOp != '(' && topOp != '#') {
                        opStack.Pop(topOp);
                        postfix += topOp;
                        opStack.Top(topOp);
                    }
                    if (topOp == '(') {
                        opStack.Pop(topOp); 
                    }
                    i++;
                }
                else if (infix[i] == '(' || outStack(infix[i]) > inStack(topOp)) {
                    opStack.Push(infix[i]);
                    i++;
                }
                else {
                    while (outStack(infix[i]) <= inStack(topOp) && topOp != '(' && topOp != '#') {
                        opStack.Pop(topOp);
                        postfix += topOp;
                        opStack.Top(topOp);
                    }
                    if (infix[i] != ')') {
                        opStack.Push(infix[i]);
                    }
                    i++;
                }
            }
        }

        char temp;
        while (opStack.Pop(temp) && temp != '#') {
            postfix += temp;
        }
}

/*
TODO: 1.4-d.计算中缀表达式的值，比如：假如中缀表达式为1+(2-3)*4+4/2，则根据四则混合运算优先级计算，它的结果为-1.
如果输入的中缀表达式非法，则打印cout << "重新输入 并检查表达式的合法性" << endl;，然后exit(1)结束执行。
*/
void Calculator::cal_suffix()
{
    poststack.Clear();
        infix_to_suffix(); 
        size_t i = 0;
    
        while (i < postfix.length()) {
            if (isNumber(postfix[i])) {
                double num = 0;
                while (i < postfix.length() && isNumber(postfix[i])) {
                    num = num * 10 + toNum(postfix[i]);
                    i++;
                }
                poststack.Push(num); 
                if (i < postfix.length() && postfix[i] == '&') {
                    i++; 
                }
            }
            else if (postfix[i] != '&') {
                cal(postfix[i]);
                i++;
            }
            else {
                i++; 
            }
        }
    
        double result;
        if (poststack.Pop(result) && poststack.isEmpty()) {
            poststack.Push(result); // Push back result for print()
        }
        else {
            cout << "重新输入 并检查表达式的合法性" << endl;
            exit(1);
        }
}

bool Calculator::Get_operands(double& left, double& right)
{
    if (poststack.isEmpty()) {
        cout << "缺少右操作数" << endl;
        return false;
    }
    poststack.Pop(right);//取右操作数
    if (poststack.isEmpty()) {
        cout << "缺少左操作数" << endl;
        return false;
    }
    poststack.Pop(left);//取出左操作数
    return true; //返回true
}
double Calculator::returnnum(char* c, int n) //返回字符对应的数,n表示个十百千位
{
    int l = n;
    double num = 0;
    double m = 1;
    for (int i = l - 1; i >= 0; i--) {
        num += toNum(c[i]) * m;
        m *= 10;
    }
    return num;
}

int Calculator::inStack(char c)
{
    switch (c) {
    case '#':
        return 0;
        break;
    case '(':
        return 1;
        break;
    case '*':
    case '/':
    case '%':
        return 5;
        break;
    case '+':
    case '-':
        return 3;
        break;
    case ')':
        return 6;
        break;
    }
}
//返回操作符的栈外优先级
int Calculator::outStack(char c)
{
    switch (c) {
    case '#':
        return 0;
        break;
    case '(':
        return 6;
        break;
    case '*':
    case '/':
    case '%':
        return 4;
        break;
    case '+':
    case '-':
        return 2;
        break;
    case ')':
        return 1;
        break;
    }
}
//判断是否为操作数
bool Calculator::isNumber(char ch)
{
    if (48 <= ch && ch <= 57)
        return true;
    else
        return false;
}

//数值型字符转换为数字
float Calculator::toNum(char num_ch)
{
    switch (num_ch) {
    case '0':
        return 0;
        break;
    case '1':
        return 1;
        break;
    case '2':
        return 2;
        break;
    case '3':
        return 3;
        break;
    case '4':
        return 4;
        break;
    case '5':
        return 5;
        break;
    case '6':
        return 6;
        break;
    case '7':
        return 7;
        break;
    case '8':
        return 8;
        break;
    case '9':
        return 9;
        break;
    }
}
//根据操作符 去栈中去取两个元素计算
void Calculator::cal(char cp)
{
    double left, right, value;
    if (Get_operands(left, right)) {
        switch (cp) {
        case '+': {
            value = left + right;
            poststack.Push(value);//相加后结果压栈
            break;
        }
        case '-': {
            value = left - right;
             poststack.Push(value);//相减 压栈
            break;
        }
        case '*': {
            value = left * right;
            poststack.Push(value);//相乘 压栈
            break;
        }
        case '/':
            if (right == 0) {
                cout << "/ 操作符 右操作数为0" << endl;
                exit(1);
            } else {
                value = left / right;
               poststack.Push(value);//相除 压栈
            }
            break;
        }
    }
}
//保留并输出最后结果
void Calculator::print()
{
   double result;
   poststack.Pop(result);
   cout<<"the postfix express is:"<<endl;
   cout <<postfix<<endl;
   cout<<"the result is: "<<endl;
   cout <<result<<endl;
}
int main()
{
    string str;
   // cout << "input an infix expression:" << endl;
    cin >> str;
   Calculator calculator(str);
    calculator.cal_suffix();
    calculator.print(); //显示转成的后缀表达式及计算结果

    return 0;
}
```

## 06 队列定义练习
```Cpp
/* 顺序队列

	bool EnQueue(const T item)	//a.	入队操作，判断队列是否为满
	bool DeQueue(T& item)		//b.	返回队头元素，并删除该元素，判断队列是否为空
	bool GetFront(T& item)		//c.	返回队头元素，但不删除，判断队列是否为空】

*/
#include <iostream>
using namespace std;

template <class T>
class ArrayQueue {
private:
    int maxSize; //队列最大容量
    int front;//队首元素位置
    int rear; //队尾元素的下一个位置
    int* queue;//队列起始位置

public:
    ArrayQueue(int size){
        maxSize = size + 1;
        queue = new T[maxSize];
        front = rear = 0;
    }
    ~ArrayQueue(){
        delete[] queue;
    }

    void Clear(){
        front = rear = 0;
    }

    bool IsEmpty(){
        if (front == rear) {
            cout << "队列为空" << endl;
            return true;
        } else {
            return false;
        }
    }
    bool IsFull(){
        if ((rear + 1) % maxSize == front) {
            cout << "队列已满，溢出" << endl;
            return true;
        } else {
            return false;
        }
    }
    /*
	TODO：a.入队操作，判断队列是否为满，如果队列已满，则输出打印cout << "队列已满，溢出" << endl;，返回false。
	否则，将值item进行入队操作。并返回true
	返回值说明：入队成功，返回true，否则返回false
	 */
    bool EnQueue(const T item);
    /*
	TODO：b.返回队头元素，并删除该元素，判断队列是否为空
	如果队列为空，则输出打印cout << "队列为空" << endl;并返回false。
	否则将队列头元素取出并赋值给item变量并删除该元素，返回true
	返回值说明：成功获取队头元素返回true，否则返回false
	 */
    bool DeQueue(T& item);
    /*
	TODO：c.	返回队头元素，但不删除，判断队列是否为空
	如果队列为空，则打印cout << "队列为空" << endl;并返回false。
	否则取出队头元素赋值给item，返回true。
	返回值说明：成功获取队头元素，返回true，否则返回false
	 */
    bool GetFront(T& item);


};

/*
TODO：a.入队操作，判断队列是否为满，如果队列已满，则输出打印cout << "队列已满，溢出" << endl;，返回false。
否则，将值item进行入队操作。并返回true
返回值说明：入队成功，返回true，否则返回false
*/
template <class T>
bool ArrayQueue<T>::EnQueue(const T item)
{
    //TODO：补充代码
    if(IsFull()){
        cout << "队列已满，溢出" << endl;
        return false;
    }
    else{
        queue[rear]=item;
        rear=(rear+1)%maxSize;
        return true;
    }
}
/*
TODO：b.返回队头元素，并删除该元素，判断队列是否为空
如果队列为空，则输出打印cout << "队列为空" << endl;并返回false。
否则将队列头元素取出并赋值给item变量并删除该元素，返回true
返回值说明：成功获取队头元素返回true，否则返回false
*/
template<class T>
bool ArrayQueue<T>::DeQueue(T& item)
{
    //TODO：补充代码
    if(IsEmpty()){
        cout << "队列为空" << endl;
        return false;
    }
    else{
        item=queue[front];
        front=(front-1)%maxSize;
        return true;
    }
}
/*
TODO：c.	返回队头元素，但不删除，判断队列是否为空
如果队列为空，则打印cout << "队列为空" << endl;并返回false。
否则取出队头元素赋值给item，返回true。
返回值说明：成功获取队头元素，返回true，否则返回false
*/
template<class T>
bool ArrayQueue<T>::GetFront(T& item)
{
  //TODO：补充代码
    if(IsEmpty()){
        cout << "队列为空" << endl;
        return false;
    }
    else{
        item=queue[front];
        return true;
    }

}


int main()
{
    int maxsize = 0, iNum = 0, temp1 = 0, temp2 = 0, temp3 = 0;
    cin >> maxsize >> iNum >> temp1;
    ArrayQueue<int> aq(maxsize);
    for (int i = 0; i < iNum; i++) {
        aq.EnQueue(i * 3);
    }
    aq.EnQueue(temp1);
    aq.DeQueue(temp2);
    cout << "出队：" << temp2 << endl;
    aq.GetFront(temp3);
    cout << "读取队头元素：" << temp3 << endl;
    return 0;
}
```

## 07 字符串匹配练习
```Cpp
/*朴素的模式匹配算法

	//朴素的模式匹配算法，返回子串第一次出现的位置，若不存在，返回-1
	int NaiveStrMatch(const string& T, const string& P)

*/
#include <iostream>
#include <string.h>
using namespace std;

/*
TODO：朴素的模式匹配算法，返回子串第一次出现的位置，若不存在，返回-1
*/
int NaiveStrMatch(const string& T, const string& P)//T是目标串，P为模式串
{
    int n=T.length();
    int m=P.length();
    for(int i=0;i<=n-m;i++){
        int j;
        for(j=0;j<m;j++){
            if(T[i+j]!=P[j]){
                break;
            }
        }
        if(j==m) return i+1;
    }
    return -1;
}
int main()
{
    int result;
    string t = "I Lo Love Programing";
    string p = "Love";
    getline(cin, t);
    getline(cin, p);
    result = NaiveStrMatch(t, p);
    if (result != -1) {
        cout << "目标字符串中存在于第" << result << "位上" << endl;
    } else {
        cout << "没有找到" << endl;
    }
    return 0;
}
```

## 08 二叉树的基本操作练习
```Cpp
/*
    设一棵二叉搜索树以二叉链表表示，试编写有关二叉树的递归算法
	int degree1(binarytreenode* p)							//i 统计度为1的结点
	int degree2(binarytreenode* p)							//ii 统计二叉树中度为2的结点个数
	int degree3(binarytreenode* p)							//iii 统计二叉树中度为0的结点个数
	int get_height(binarytreenode* p)						//iv 统计二叉树的高度
	int get_max(binarytreenode* p)							//v 计算二叉树中各结点中的最大元素的值

*/
#include <iostream>
#include <queue>
using namespace std;
class binarytreenode //二叉树结点
{
    int data;
public:
    binarytreenode* leftchild;
    binarytreenode* rightchild;
    binarytreenode(int& d)
    {
        data = d;
        leftchild = NULL;
        rightchild = NULL;
    }
    int& get_data() { return data; }
    void change_data(int& n) { data = n; }
    ~binarytreenode(){};
};

//二叉树
class binarytree {
    binarytreenode* root;
public:
    binarytree()
    {
        root = NULL;
    }
    binarytreenode* get_root() { return root; }
    void creat(); //创建二叉树,代码已经实现
    void levelorder(); //广度优先遍历，代码已经实现，便于理解操作结果

    /*TODO:i-统计并返回以结点p为根的二叉树子树中度为1的结点个数*/
    int degree1(binarytreenode* p);

    /*TODO:ii-统计并返回结点p为根的二叉树子树中度为2的结点个数*/
    int degree2(binarytreenode* p);

    /*TODO:iii-统计并返回结点p为根的二叉树子树中度为0的结点个数*/
    int degree0(binarytreenode* p);

    /*TODO:iv-统计并返回结点p为根的二叉树子树高度*/
    int get_height(binarytreenode* p);

    /*TODO: v-计算并返回结点p为根的二叉树子树中的最大值*/
    int get_max(binarytreenode* p);


};
//该函数不需要修改
void binarytree::creat() //创建二叉树
{
        binarytreenode* prev;
        binarytreenode* newnode;
        queue<binarytreenode*> que;
        int flag=0;//表示正在处理的时左孩子（0）还是右孩子（1），
        cout << "输入正整数数据:(-1表示空格，以0结束)"<<endl;
        int temp;
        cin >> temp;
        while (temp != 0) {
            if (root == NULL) {
                root = new binarytreenode(temp);
                que.push(root);
            } else {
                if(temp!=-1)
                {    newnode = new binarytreenode(temp);
                     prev = que.front();
                     if(flag ==0) prev->leftchild =newnode;
                     else prev->rightchild = newnode;
                     que.push(newnode);
                }
                else {  newnode = NULL; que.push(newnode);}
                if(flag==1) que.pop();
                flag =(flag+1)%2;//左右孩子切换
            }
            cin >> temp;
        }
}
//该函数不需要修改
void binarytree::levelorder() //广度优先遍历
    {
        binarytreenode* p = get_root();
        queue<binarytreenode*> que;
        cout << "广度遍历结果: "<<endl;
        if (p != NULL)
            que.push(p);
        else
            cout << "二叉树为空!";
        while (!que.empty()) {
            if (p != NULL) {
                cout << p->get_data() << " ";
                if (p->leftchild != NULL)
                    que.push(p->leftchild);
                if (p->rightchild != NULL)
                    que.push(p->rightchild);
                que.pop();
                if (!que.empty())
                    p = que.front();
            }
        }
        cout << endl;
    }
/*TODO:i-统计并返回度为1的结点个数*/
int binarytree::degree1(binarytreenode* p)
{
       //补充语句
    if(p==NULL) return 0;
    int count=0;
    if((p->leftchild&&!p->rightchild)||(!p->leftchild&&p->rightchild)){
        count=1;
    }
    return count+degree1(p->leftchild)+degree2(p->rightchild);
}
/*TODO:ii-统计并返回度为2的结点个数*/
int binarytree::degree2(binarytreenode* p)
{
         //补充语句
    if(p==NULL) return 0;
    int count=0;
    if(p->leftchild&&p->rightchild){
        count=1;
    }
    return count+degree2(p->leftchild)+degree2(p->rightchild);
}
/*TODO:iii-统计并返回度为0的结点个数*/
int binarytree::degree0(binarytreenode* p)
{
         //补充语句
    if(p==NULL) return 0;
    int count=0;
    if(!p->leftchild&&!p->rightchild){
        return 1;
    }
    return degree0(p->leftchild)+degree0(p->rightchild);
}
/*TODO:iv-统计并返回高度*/
int binarytree::get_height(binarytreenode* p)
{
  //补充语句
  if(p==NULL) return 0;
  return 1+max(get_height(p->leftchild),get_height(p->rightchild));
}

/*TODO:v-计算并返回二叉树的最大值*/
int binarytree::get_max(binarytreenode* p)
{
    //补充语句
    if(p==NULL)  return 0;
    int maxVal=p->get_data();
    int leftmax=get_max(p->leftchild);
    int rightmax=get_max(p->rightchild);
    return max(maxVal,max(leftmax,rightmax));

}

int main()
{
    system("chcp 65001");
    binarytree tree;
    tree.creat();
    tree.levelorder();
    cout << "度为1的结点个数: "<<tree.degree1(tree.get_root()) << endl;
    cout << "度为2的结点个数: " << tree.degree2(tree.get_root()) << endl;
    cout << "度为0的结点个数: " << tree.degree0(tree.get_root()) << endl;
    cout << "二叉树高度: "<< tree.get_height(tree.get_root()) << endl;
    cout << "最大值:"<<tree.get_max(tree.get_root()) << endl;

}
```

## 09 二叉树操作—先序练习
```Cpp
/*
    设一棵二叉树以二叉链表表示，试编写有关二叉树的下列算法
	void levelorder(); //TODO：1- 层次遍历
    void PreOrderwithRecursion(binarytreenode* p);//TODO:2-递归版本的先序遍历
    void PreOrderwithNoRecursion();//TODO:3-非递归版本的先序遍历

*/
#include <iostream>
#include <queue>
#include <stack>
using namespace std;
class binarytreenode //二叉树结点
{
    int data;
public:
    binarytreenode* leftchild;
    binarytreenode* rightchild;
    binarytreenode(int& d)
    {
        data = d;
        leftchild = NULL;
        rightchild = NULL;
    }
    int& get_data() { return data; }
    void change_data(int& n) { data = n; }
    ~binarytreenode(){};
};

//二叉树
class binarytree {
    binarytreenode* root;
public:
    binarytree()
    {
        root = NULL;
    }
    binarytreenode* get_root() { return root; }
    void creat(); //创建二叉树,代码已经实现
    void levelorder(); //TODO：1- 层次遍历
    void PreOrderwithRecursion(binarytreenode* p);//TODO:2-递归版本的先序遍历
    void PreOrderwithNoRecursion();//TODO:3-非递归版本的先序遍历

};

void binarytree::creat() //创建二叉树
{
        binarytreenode* prev;
        binarytreenode* newnode;
        queue<binarytreenode*> que;
        int flag=0;//表示正在处理的时左孩子（0）还是右孩子（1），
        cout << "输入正整数数据:(-1表示空格，以0结束)"<<endl;
        int temp;
        cin >> temp;
        while (temp != 0) {
            if (root == NULL) {
                root = new binarytreenode(temp);
                que.push(root);
            } else {
                if(temp!=-1)
                {    newnode = new binarytreenode(temp);
                     prev = que.front();
                     if(flag ==0) prev->leftchild =newnode;
                     else prev->rightchild = newnode;
                     que.push(newnode);
                }
                else {  newnode = NULL; que.push(newnode);}
                if(flag==1) que.pop();
                flag =(flag+1)%2;//左右孩子切换
            }
            cin >> temp;
        }
}
//TODO：1-层次遍历
void binarytree::levelorder()
{
    if(root==NULL) return;
    queue<binarytreenode*> q;
    q.push(root);
    while(!q.empty()){
        binarytreenode* current=q.front();
        q.pop();
        cout<<current->get_data()<<" ";
        if(current->leftchild!=NULL){
            q.push(current->leftchild);
        }
        if(current->rightchild!=NULL){
            q.push(current->rightchild);
        }
    }
        
    
}
//TODO:2-递归版本的先序遍历
void binarytree::PreOrderwithRecursion(binarytreenode* p)
{
    if(p==NULL) return;
    cout<<p->get_data()<<" ";
    PreOrderwithRecursion(p->leftchild);
    PreOrderwithRecursion(p->rightchild);
}
//TODO:3-非递归版本的先序遍历
void binarytree::PreOrderwithNoRecursion()
{
    if(root==NULL) return;
    stack<binarytreenode*> s;
    s.push(root);
    while(!s.empty()){
        binarytreenode* current=s.top();
        s.pop();
        cout<<current->get_data()<<" ";
        if(current->leftchild!=NULL){
            s.push(current->leftchild);
        }
        if(current->rightchild!=NULL){
            s.push(current->rightchild);
        }
    }
}

int main()
{
    binarytree tree;
    tree.creat();
    cout << "层次遍历结果为:"<<endl;
    tree.levelorder();
    cout<< endl;
    cout << "递归的先序遍历结果为:" <<endl;
    tree.PreOrderwithRecursion(tree.get_root());
    cout << endl;
    cout << "非递归的先序遍历结果为:" <<endl;
    tree.PreOrderwithNoRecursion();


}
```

## 10 二叉树操作-中序练习
```Cpp
/*
    设一棵二叉树以二叉链表表示，试编写有关二叉树的下列算法

    void InOrderwithRecursion(binarytreenode* p);//TODO:1-递归版本的中序遍历
    void InOrderwithNoRecursion();//TODO:2-非递归版本的中序遍历

*/
#include <iostream>
#include <queue>
#include <stack>
using namespace std;
class binarytreenode //二叉树结点
{
    int data;
public:
    binarytreenode* leftchild;
    binarytreenode* rightchild;
    binarytreenode(int& d)
    {
        data = d;
        leftchild = NULL;
        rightchild = NULL;
    }
    int& get_data() { return data; }
    void change_data(int& n) { data = n; }
    ~binarytreenode(){};
};

//二叉树
class binarytree {
    binarytreenode* root;
public:
    binarytree()
    {
        root = NULL;
    }
    binarytreenode* get_root() { return root; }
    void creat(); //创建二叉树,代码已经实现
    void InOrderwithRecursion(binarytreenode* p);//TODO:1-递归版本的中序遍历
    void InOrderwithNoRecursion();//TODO:2-非递归版本的中序遍历

};

void binarytree::creat() //创建二叉树
{
        binarytreenode* prev;
        binarytreenode* newnode;
        queue<binarytreenode*> que;
        int flag=0;//表示正在处理的时左孩子（0）还是右孩子（1），
        cout << "输入正整数数据:(-1表示空格，以0结束)"<<endl;
        int temp;
        cin >> temp;
        while (temp != 0) {
            if (root == NULL) {
                root = new binarytreenode(temp);
                que.push(root);
            } else {
                if(temp!=-1)
                {    newnode = new binarytreenode(temp);
                     prev = que.front();
                     if(flag ==0) prev->leftchild =newnode;
                     else prev->rightchild = newnode;
                     que.push(newnode);
                }
                else {  newnode = NULL; que.push(newnode);}
                if(flag==1) que.pop();
                flag =(flag+1)%2;//左右孩子切换
            }
            cin >> temp;
        }
}

//TODO:1-递归版本的中序遍历
void binarytree::InOrderwithRecursion(binarytreenode* p)
{
    if(p==NULL) return;
    InOrderwithRecursion(p->leftchild);
    cout<<p->get_data()<<" ";
    InOrderwithRecursion(p->rightchild);

}
//TODO:2-递归版本的中序遍历
void binarytree::InOrderwithNoRecursion()
{
    if(root==NULL) return;
    stack<binarytreenode*> s;
    binarytreenode* current=root;
    while(current!=NULL||!s.empty()){
        while(current!=NULL){
            s.push(current);
            current=current->leftchild;
        }
        current=s.top();
        s.pop();
        cout<<current->get_data()<<" ";
        current=current->rightchild;
    }
}

int main()
{
    system("chcp 65001");
    binarytree tree;
    tree.creat();
    cout << "递归的中序遍历结果为:" <<endl;
    tree.InOrderwithRecursion(tree.get_root());
    cout << endl;
    cout << "非递归的中序遍历结果为:" <<endl;
    tree.InOrderwithNoRecursion();


}
```

## 11 二叉树操作—后序练习
```Cpp
/*
    设一棵二叉树以二叉链表表示，试编写有关二叉树的下列算法

    void PostOrderwithRecursion(binarytreenode* p);//TODO:1-递归版本的后序遍历
    void PostOrderwithNoRecursion();//TODO:2-非递归版本的后序遍历

*/
#include <iostream>
#include <queue>
#include <stack>
using namespace std;
class binarytreenode //二叉树结点
{
    int data;
public:
    binarytreenode* leftchild;
    binarytreenode* rightchild;
    binarytreenode(int& d)
    {
        data = d;
        leftchild = NULL;
        rightchild = NULL;
    }
    int& get_data() { return data; }
    void change_data(int& n) { data = n; }
    ~binarytreenode(){};
};

//二叉树
class binarytree {
    binarytreenode* root;
public:
    binarytree()
    {
        root = NULL;
    }
    binarytreenode* get_root() { return root; }
    void creat(); //创建二叉树,代码已经实现
    void PostOrderwithRecursion(binarytreenode* p);//TODO:1-递归版本的后序遍历
    void PostOrderwithNoRecursion();//TODO:2-非递归版本的后序遍历

};

void binarytree::creat() //创建二叉树
{
        binarytreenode* prev;
        binarytreenode* newnode;
        queue<binarytreenode*> que;
        int flag=0;//表示正在处理的时左孩子（0）还是右孩子（1），
        cout << "输入正整数数据:(-1表示空格，以0结束)"<<endl;
        int temp;
        cin >> temp;
        while (temp != 0) {
            if (root == NULL) {
                root = new binarytreenode(temp);
                que.push(root);
            } else {
                if(temp!=-1)
                {    newnode = new binarytreenode(temp);
                     prev = que.front();
                     if(flag ==0) prev->leftchild =newnode;
                     else prev->rightchild = newnode;
                     que.push(newnode);
                }
                else {  newnode = NULL; que.push(newnode);}
                if(flag==1) que.pop();
                flag =(flag+1)%2;//左右孩子切换
            }
            cin >> temp;
        }
}

//TODO:1-递归版本的后序遍历
void binarytree::PostOrderwithRecursion(binarytreenode* p)
{
    if(p==NULL) return;
    PostOrderwithRecursion(p->leftchild);
    PostOrderwithRecursion(p->rightchild);
    cout<<p->get_data()<<" ";

}
//TODO:2-非递归版本的后序遍历
void binarytree::PostOrderwithNoRecursion()
{
    if(root==NULL) return;
    stack<binarytreenode*> s1,s2;
    s1.push(root);
    while(!s1.empty()){
        binarytreenode* current=s1.top();
        s1.pop();
        s2.push(current);
        if(current->leftchild!=NULL)
            s1.push(current->leftchild);
        if(current->rightchild!=NULL)
            s1.push(current->rightchild);
    }
    while(!s2.empty()){
        cout<<s2.top()->get_data()<<" ";
        s2.pop();
    }
}

int main()
{
    binarytree tree;
    tree.creat();
    cout << "递归的后序遍历结果为:" <<endl;
    tree.PostOrderwithRecursion(tree.get_root());
    cout << endl;
    cout << "非递归的后序遍历结果为:" <<endl;
    tree.PostOrderwithNoRecursion();


}
```