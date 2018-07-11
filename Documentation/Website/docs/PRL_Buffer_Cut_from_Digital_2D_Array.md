![](https://lh5.googleusercontent.com/yyCd30SM8-qRUjc5J1q6-yXfZE1G3Z5KVnZo8te7H0NBZ3cLvnQbg6B0L0exSt97rL7v7VjqEZL6iHV2giOQNTabfSxmpkIsHZ8IyOAR6GGKpuywrI4nG-_egFngwcrXl4luUxK-)

  

This component will specify a specific portion of the input array consisting of boolean data and output that data in an array format. The portion specified will correspond to the section of the input array specified by the signal and cut index, if neither index is supplied then the array out will match the array in. The signal index specifies the row while cut index specifies the column of the input array. Indexing starting at zero. This component can be used when the initial values are not needed and can be omitted.

  

![](https://lh4.googleusercontent.com/Ms8yNS3AtHlEhZfh0pZVfjnYzwQVFpLOTsRTWP2mjaFKHFtwakH9c7ggjzpmi3P9RI6vQs0DZHqwCgP4FOwCvCwa_EzMrpRoh3iLVUNZ0XsZiJFbgLEus3dIAQ1XLw6OqC_Sm87p)

Input:
|  |  |
|---|---|
| Array in | A 2D array filled with Boolean controllers |
| Signal Index | A 1D array of numerical indicators |
| Cut index | A 1D array of numerical indicators |

Output:
|  |  |
|---|---|
| Array Out | A 1D array filled with boolean indicators, this array is a portion of the array in |
